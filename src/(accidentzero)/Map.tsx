import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { GoogleMap, Marker, InfoWindow, useJsApiLoader } from '@react-google-maps/api'
import { Modal } from '../components/Map/Modal'

const mapClass = {
    container: 'bg-gray-900 p-4',
    mapBorder: 'border-2 border-gray-600 relative',
    buttonContainer: 'text-start mt-2 flex flex-wrap gap-2 sm:gap-4 lg:gap-6',
    button: 'bg-gray-800 text-gray-300 py-2 px-4 rounded hover:bg-gray-700 transition duration-300 ease-in-out',
}

interface MarkerType {
    position: google.maps.LatLngLiteral
    id: number
}

const googleMapsApiKey = process.env.GOOGLE_MAPS_API_KEY

export const Map = () => {
    const [markers, setMarkers] = useState<MarkerType[]>([])
    const [selectedMarker, setSelectedMarker] = useState<MarkerType | null>(null)
    const [showModal, setShowModal] = useState(false)
    const router = useRouter()

    const clearMarkers = () => {
        setMarkers([])
        setSelectedMarker(null)
    }

    const saveMarkers = () => {
        console.log('Marcadores salvos:', markers)
    }

    const onMapClick = (event: google.maps.MapMouseEvent) => {
        if (event.latLng) {
            const newMarker: MarkerType = {
                position: event.latLng.toJSON(),
                id: Math.random(),
            }
            setMarkers((prevMarkers) => [...prevMarkers, newMarker])
        }
    }

    const { isLoaded, loadError } = useJsApiLoader({
        googleMapsApiKey: googleMapsApiKey || '',
        libraries: ['places'],
    })

    if (loadError) return <div className='text-red-500'>Erro ao carregar o mapa</div>
    if (!isLoaded) return <div className='text-gray-500'>Carregando o mapa...</div>

    const markerIcon = {
        url: '/img/marker.png',
        scaledSize: window.google?.maps.Size ? new window.google.maps.Size(50, 50) : undefined,
        origin: window.google?.maps.Point ? new window.google.maps.Point(0, 0) : undefined,
        anchor: window.google?.maps.Point ? new window.google.maps.Point(25, 50) : undefined,
    }

    const useLocate = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const newMarker: MarkerType = {
                    position: {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    },
                    id: Math.random(),
                }
                setMarkers((prevMarkers) => [...prevMarkers, newMarker])
            })
        } else {
            alert('Geolocalização não suportada neste navegador.')
        }
    }

    const reportProblem = () => {
        setShowModal(true)
    }

    const confirmReport = () => {
        setShowModal(false)
        router.push('/Header/Report/Report')
    }

    return (
        <div className={mapClass.container}>
            <div className={mapClass.mapBorder}>
                <GoogleMap
                    center={{ lat: -23.257046, lng: -46.739705 }}
                    zoom={13}
                    onClick={onMapClick}
                    mapContainerStyle={{ height: '80vh', width: '100%' }}
                >
                    {markers.map((marker) => (
                        <Marker
                            key={marker.id}
                            position={marker.position}
                            icon={markerIcon}
                            onClick={() => {
                                setSelectedMarker(marker)
                                reportProblem()
                            }}
                        >
                            {selectedMarker && selectedMarker.id === marker.id && (
                                <InfoWindow
                                    position={marker.position}
                                    onCloseClick={() => setSelectedMarker(null)}
                                >
                                    <div className='text-gray-800'>Problema relatado.</div>
                                </InfoWindow>
                            )}
                        </Marker>
                    ))}
                </GoogleMap>
            </div>
            <div className={mapClass.buttonContainer}>
                <button
                    className={mapClass.button}
                    onClick={clearMarkers}
                >
                    Limpar
                </button>
                <button
                    className={mapClass.button}
                    onClick={saveMarkers}
                >
                    Salvar
                </button>
                <button
                    className={mapClass.button}
                    onClick={useLocate}
                >
                    Minha Localização
                </button>
            </div>
            {showModal && (
                <Modal
                    title='Confirmar Relato de Problema'
                    onClose={() => setShowModal(false)}
                    onConfirm={confirmReport}
                >
                    <p>Deseja relatar o problema?</p>
                </Modal>
            )}
        </div>
    )
}

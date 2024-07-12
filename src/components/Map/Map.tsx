import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents, useMap } from "react-leaflet";
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

interface MarkerType {
    position: L.LatLng;
    id: number;
}

const markerIcon = new L.Icon({
    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
});

const Map = () => {
    const [markers, setMarkers] = useState<MarkerType[]>([]);

    const clearMarkers = () => {
        setMarkers([]);
    }

    const saveMarkers = () => {
        console.log("Marcadores salvos:", markers);
    }

    const AddMarker = () => {
        useMapEvents({
            click(event) {
                const newMarker: MarkerType = {
                    position: event.latlng,
                    id: Math.random()
                }
                setMarkers(prevMarkers => [...prevMarkers, newMarker]);
            }
        });
        return null;
    }

    const LocateButton = () => {
        const map = useMap();

        const useLocate = () => {
            map.locate({ setView: true, maxZoom: 16 });

            map.on('locationfound', (event) => {
                const newMarker: MarkerType = {
                    position: event.latlng,
                    id: Math.random()
                }
                setMarkers(prevMarkers => [...prevMarkers, newMarker]);
            });
        }

        return (
            <button className="bg-gray-500 text-white py-2 px-4 rounded ml-2 mt-2 hover:bg-gray-600 transform transition-transform duration-300 ease-in-out hover:scale-110" onClick={useLocate}>
                Minha Localização
            </button>
        );
    }

    return (
        <div className="bg-gray-100 p-4">
            <div className="border-2 border-gray-500 relative">
                <MapContainer center={[-23.257046, -46.739705]} zoom={13} className="h-80 sm:h-96 md:h-[500px] w-full">
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>Acidente Zero</a> contributors"
                    />
                    <AddMarker />
                    <LocateButton />
                    {markers.map(marker => (
                        <Marker key={marker.id} position={marker.position} icon={markerIcon}>
                            <Popup>
                                Problema relatado.
                            </Popup>
                        </Marker>
                    ))}
                </MapContainer>
            </div>
            <div className="text-start mt-2 flex flex-wrap gap-2 sm:gap-4 lg:gap-6">
                <button className="bg-gray-700 text-gray-100 py-2 px-4 rounded hover:bg-gray-600 transform transition-transform duration-300 ease-in-out hover:scale-110 lg:px-6 lg:py-3" onClick={clearMarkers}>
                    Limpar
                </button>
                <button className="bg-gray-500 text-gray-100 py-2 px-4 rounded hover:bg-gray-600 transform transition-transform duration-300 ease-in-out hover:scale-110 lg:px-6 lg:py-3" onClick={saveMarkers}>
                    Salvar
                </button>
            </div>
        </div>
    )
}

export default Map;

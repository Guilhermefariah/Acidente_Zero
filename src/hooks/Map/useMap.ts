import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { MarkerType } from '@/models/Map/MarkerType';

const useMap = () => {
    const [markers, setMarkers] = useState<MarkerType[]>([]);
    const [selectedMarker, setSelectedMarker] = useState<MarkerType | null>(null);
    const [showModal, setShowModal] = useState(false);
    const router = useRouter();

    const clearMarkers = () => {
        setMarkers([]);
        setSelectedMarker(null);
    }

    const saveMarkers = () => {
        console.log('Marcadores salvos:', markers);
    }

    const onMapClick = (event: google.maps.MapMouseEvent) => {
        if (event.latLng) {
            const newMarker: MarkerType = {
                position: event.latLng.toJSON(),
                id: Math.random(),
            };
            setMarkers((prevMarkers) => [...prevMarkers, newMarker]);
        }
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
                };
                setMarkers((prevMarkers) => [...prevMarkers, newMarker]);
            });
        } else {
            alert('Geolocalização não suportada neste navegador.');
        }
    }

    const reportProblem = () => {
        setShowModal(true);
    }

    const confirmReport = () => {
        setShowModal(false);
        router.push('#');
    }

    return {
        markers,
        selectedMarker,
        showModal,
        clearMarkers,
        saveMarkers,
        onMapClick,
        useLocate,
        reportProblem,
        confirmReport,
        setSelectedMarker,
        setShowModal,
    }
}

export default useMap;

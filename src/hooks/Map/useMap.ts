import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { MarkerType } from '@/models/Map/MarkerType';

const useMap = () => {
    const [markers, setMarkers] = useState<MarkerType[]>([]);
    const [selectedMarker, setSelectedMarker] = useState<MarkerType | null>(null);
    const [showModal, setShowModal] = useState(false);
    const router = useRouter();

    useEffect(() => {
        fetchMarkers();
    }, []);

    const fetchMarkers = async () => {
        try {
            const response = await fetch('/api/map');
            const data: MarkerType[] = await response.json();
            setMarkers(data);
        } catch (error) {
            console.error('Erro ao buscar marcadores:', error);
        }
    }

    const clearMarkers = async () => {
        try {
            await fetch('/api/map', { method: 'DELETE' });
            setMarkers([]);
            setSelectedMarker(null);
        } catch (error) {
            console.error('Erro ao limpar marcadores:', error);
        }
    }

    const saveMarkers = async () => {
        try {
            markers.forEach(async (marker) => {
                await fetch('/api/map', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(marker),
                });
            });
            console.log('Marcadores salvos:', markers);
        } catch (error) {
            console.error('Erro ao salvar marcadores:', error);
        }
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

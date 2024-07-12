import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

interface MarkerType {
    position: L.LatLng;
    id: number;
}

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
                setMarkers([...markers, newMarker]);
            }
        });
        return null;
    }

    const markerIcon = new L.Icon({
        iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
    });

    return (
        <div className="bg-gray-100 p-4">
            <div className="border-2 border-gray-500">
                <MapContainer center={[-23.257046, -46.739705]} zoom={13} className="h-80 sm:h-96 md:h-[500px] w-full">
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>Acidente Zero</a> contributors"
                    />
                    <AddMarker />
                    {markers.map(marker => (
                        <Marker key={marker.id} position={marker.position} icon={markerIcon}>
                            <Popup>
                                Problema relatado.
                            </Popup>
                        </Marker>
                    ))}
                </MapContainer>
            </div>
            <div className="text-start mt-4">
                <button className="bg-gray-700 text-white py-2 px-4 rounded hover:bg-gray-800 transform transition-transform duration-300 ease-in-out hover:scale-110" onClick={clearMarkers}>
                    Limpar
                </button>
                <button className="bg-gray-500 text-white py-2 px-4 rounded ml-2 hover:bg-gray-600 transform transition-transform duration-300 ease-in-out hover:scale-110" onClick={saveMarkers}>
                    Salvar
                </button>
            </div>
        </div>
    )
}

export default Map;

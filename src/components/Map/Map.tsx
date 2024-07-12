import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";
import L from 'leaflet';

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
        <div>
            <MapContainer center={[-23.257046, -46.739705]} zoom={13} style={{ height: "500px", width: "100%" }}>
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
            <div>
                <button onClick={clearMarkers}>Limpar</button>
                <button onClick={saveMarkers}>Salvar</button>
            </div>
        </div>
    )
}

export default Map;

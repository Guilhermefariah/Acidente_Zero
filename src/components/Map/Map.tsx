import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";
import L from 'leaflet';

interface MarkerType {
    position: L.LatLng;
    id: number;
}


const Map = () => {
    const [markers, setMarkers] = useState<MarkerType[]>([]);

    const AddMarker = () => {
        useMapEvents({
            click(events) {
                const newMarker: MarkerType	= {
                    position: events.latlng,
                    id: Math.random()
                }
                setMarkers([...markers, newMarker]);
            }
        });
        return null;
    }

    return (
        <MapContainer center={[-23.257046, -46.739705]} zoom={13} style={{ height: "500px", width: "100%" }} >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy;<a href='https://www.openstreetmap.org/copyright'>Acidente Zero</a> contributors"
            />
            <AddMarker />
            {markers.map(marker => (
                <Marker key={marker.id} position={marker.position}>
                    <Popup>
                        Problema relatado.
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    )
}

export default Map;
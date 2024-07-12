import { MapContainer, TileLayer } from "react-leaflet";


const Map = () => {
    return (
        <MapContainer center={[-23.257046, -46.739705]} zoom={13} style={{ height: "500px", width: "100%" }} >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy;<a href='https://www.openstreetmap.org/copyright'>Acidente Zero</a> contributors"
            />
        </MapContainer>
    )
}

export default Map;
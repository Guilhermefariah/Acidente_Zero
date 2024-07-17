const markerIcon = {
    url: '/img/marker.png',
    scaledSize: window.google?.maps.Size ? new window.google.maps.Size(50, 50) : undefined,
    origin: window.google?.maps.Point ? new window.google.maps.Point(0, 0) : undefined,
    anchor: window.google?.maps.Point ? new window.google.maps.Point(25, 50) : undefined,
};

export default markerIcon;

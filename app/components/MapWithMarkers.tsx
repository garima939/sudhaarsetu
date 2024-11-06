'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

interface ImpactLocation {
  name: string;
  coordinates: [number, number];
}

const impactLocations: ImpactLocation[] = [
  { name: "Delhi, India", coordinates: [28.6139, 77.2090] },
  { name: "Mumbai, India", coordinates: [19.0760, 72.8777] },
  { name: "Bengaluru, India", coordinates: [12.9716, 77.5946] },
  { name: "Chennai, India", coordinates: [13.0827, 80.2707] },
  { name: "Kolkata, India", coordinates: [22.5726, 88.3639] },
  // Add more locations as needed
];

const customIcon = new L.Icon({
  iconUrl: '/path/to/marker-icon.png', // Adjust the path as necessary
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: '/path/to/marker-shadow.png',
  shadowSize: [41, 41]
});

export default function MapWithMarkers() {
  return (
    <MapContainer center={[20.5937, 78.9629]} zoom={5} style={{ height: '500px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {impactLocations.map(({ name, coordinates }) => (
        <Marker key={name} position={coordinates} icon={customIcon}>
          <Popup>{name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

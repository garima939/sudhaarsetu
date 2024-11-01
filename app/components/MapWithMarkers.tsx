'use client';

import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Define the locations with their names and coordinates
const impactLocations = [
  { name: 'Delhi, India', coordinates: [28.6139, 77.2090] },
  { name: 'New York, USA', coordinates: [40.7128, -74.0060] },
  { name: 'London, UK', coordinates: [51.5074, -0.1278] },
  { name: 'Sydney, Australia', coordinates: [-33.8688, 151.2093] },
  { name: 'Nairobi, Kenya', coordinates: [-1.2921, 36.8219] },
  { name: 'Buenos Aires, Argentina', coordinates: [-34.6037, -58.3816] },
];

// Create a custom marker component using an SVG
const CustomMarker = () => {
  return (
    <div style={{ position: 'relative', width: '24px', height: '24px' }}>
      <svg width="24" height="24" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" fill="#FF6347" />
        <text x="12" y="16" fontSize="10" textAnchor="middle" fill="#FFFFFF">
          ★
        </text>
      </svg>
    </div>
  );
};

// Define the MapWithMarkers component
const MapWithMarkers = () => {
  // Create a custom icon for the markers
  const customIcon = L.divIcon({
    className: 'custom-icon', // Optional: add a custom class for styling
    html: '<div style="display: flex; align-items: center; justify-content: center;">' +
          '<svg width="24" height="24" viewBox="0 0 24 24">' +
          '<circle cx="12" cy="12" r="10" fill="#FF6347" />' +
          '<text x="12" y="16" fontSize="10" textAnchor="middle" fill="#FFFFFF">★</text>' +
          '</svg></div>',
    iconSize: [24, 24], // Size of the icon
    popupAnchor: [0, -10], // Adjust the popup position
  });

  return (
    <MapContainer center={[20, 0]} zoom={2} style={{ height: '100vh', width: '100%' }}>
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
};

export default MapWithMarkers;

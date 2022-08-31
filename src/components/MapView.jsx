import React from 'react'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet';

const locationIcon = L.icon({
  iconUrl: process.env.PUBLIC_URL + '/images/location-icon.png', 
  iconRetinaUrl: process.env.PUBLIC_URL + '/images/location-icon.png',  
  iconAnchor: null,
  shadowUrl: null,
  shadowSize: null,  
  shadowAnchor: null,
  iconSize: [40, 40],
  className: 'leaflet-location-icon'
});

function MapView({lat, lng}) {
  return (
    <MapContainer center={[lat, lng]} zoom={10} zoomControl={false}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
        <Marker icon={locationIcon} position={[lat, lng]}/>
    </MapContainer>
  )
}

export default MapView
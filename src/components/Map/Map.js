import React, { useState } from 'react'
import {
  MapContainer,
  TileLayer,
  CircleMarker
} from 'react-leaflet'
import 'leaflet/dist/leaflet.css';

function LocationMarker(props) {
  const [position, setPosition] = useState(null)
  const [first, setFirst] = useState(true)
  
  React.useEffect(() => {
    if(props.lat && props.lng && first){
      setPosition({
        lat: props.lat,
        lng: props.lng
      });
      
      setFirst(false);
    }
  }, [position]);
  return position === null ? null : (
    <CircleMarker
      center={position}
      pathOptions={{ color: 'red' }}
      radius={10}>
    </CircleMarker>
  )
}

function Map(props) {
  const [position, setPosition] = useState({ lat: props.lat, lng: props.lng });
  const [first, setFirst] = useState(true);
  
  React.useEffect(() => {
    if(props.lat && props.lng && first){
      setPosition({
        lat: props.lat,
        lng: props.lng
      });
      setFirst(false);
    }
  }, [position]);
  
  return (
    <MapContainer center={position} zoom={8} style={{ height: '80vh', width: '100wh' }}>
      <TileLayer
        attribution=''
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationMarker {...props}/>
    </MapContainer>
  )
}

export default Map;

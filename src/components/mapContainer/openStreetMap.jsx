// import React,{useState} from 'react';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'



// export default function OpenStreetMap(props) {
  
//     const mapCenter = [
//       9.9803139,
//       78.0267593
//     ]

//     const zoomLevel = 15;

//     return (
//       <div style={{ height: '100vh', width: '100%' }}>
// <MapContainer center={mapCenter} zoom={zoomLevel}>
//   <TileLayer
//     attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//   />
//   <Marker position={[51.505, -0.09]}>
//     <Popup>
//       A pretty CSS3 popup. <br /> Easily customizable.
//     </Popup>
//   </Marker>
// </MapContainer>
//       </div>
//     );
//   }

import { MapContainer, TileLayer } from "react-leaflet";

export default function Map(){
  const defaultPosition = [48.864716, 2.349]; // Paris position

  return (
    <div className="map__container">
      <MapContainer
        center={defaultPosition}
        zoom={13}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  );
};
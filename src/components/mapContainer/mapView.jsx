import React,{useState} from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function GoogleMap(props) {
  
    const mapCenter = {
      lat: 9.9803139,
      lng: 78.0267593
    }

    const zoomLevel = 15

    return (
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key:"AIzaSyDB_23w3T866qHoKh-h4hOrwURdTpbMTlw" }}
          defaultCenter={mapCenter}
          defaultZoom={zoomLevel}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
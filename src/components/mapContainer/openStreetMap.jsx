import React, { Component } from 'react';
import { Map, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import mapData from './data.json';
import Markers from './VenueMarkers';

class MapView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLocation: { lat: 9.980330,
        lng: 78.096843 },
      zoom: 11,
    }
  }

  render() {
    const { currentLocation, zoom } = this.state;

    return (
      <div className='rounded-lg shadow-md shadow-emerald-400/50 w-full h-full px-2 py-2 bg-green-100'>
      <Map center={currentLocation} zoom={zoom} className="w-full h-full">

        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />

        <Markers venues={mapData.venues}/>
      </Map>
      </div>
    );
  }
}

export default MapView;

import React, { Component } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { VenueLocationIcon } from "./VenueLocationIcon";

// LEOS EDUCATIONAL ACADEMY
// 136A, WHITE AVENUE, 4th St, Sikkandar Savadi, Madurai, Tamil Nadu 625018
// 9.980333, 78.096740

class MapView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mapData: {
        name: "The Leo's Educational Academy",
        description: "",
        geometry: [9.980333, 78.09674],
      },
      zoom: 11,
    };
  }

  getMapPins(arrValue){
    const latValue=arrValue?.[0];
    const lngValue=arrValue?.[1];

    return {lat:latValue,lng:lngValue}
    
  }

  showInMapClicked() {
    window.open(`https://maps.google.com?q=${9.980333},${78.09674}`);
  }

  render() {
    const { mapData, zoom } = this.state;
    console.log(mapData);

    return (
      <div className="rounded-lg shadow-md shadow-emerald-400/50 md:w-full md:h-full sm:w-full sm:h-80 xs:h-80 px-2 py-2 bg-green-100">
        <Map
          center={this.getMapPins(mapData?.geometry)}
          zoom={zoom}
          scrollWheelZoom={false}
          className="w-full h-full"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />

          {/* <Markers venues={mapData.venues}/> */}
          <Marker
            position={mapData?.geometry}
            icon={VenueLocationIcon}
          >
            {/* <MarkerPopup data={mapData.venue}/> */}
            <Popup>
              <div className="poup-text">
                {mapData?.name}
                <br />
                <button
                  className="rounded-lg text-blue-600 px-1 underline underline-offset-1"
                  onClick={this.showInMapClicked}
                >
                  Open in Google Maps
                </button>
              </div>
            </Popup>
          </Marker>
        </Map>
      </div>
    );
  }
}

export default MapView;

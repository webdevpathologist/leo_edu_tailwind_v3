import React, { Fragment } from 'react'
import {Marker} from 'react-leaflet';
import {VenueLocationIcon} from './VenueLocationIcon';
// import {IoLocation} from 'react-icons/io5';
import MarkerPopup from './MarkerPopup';

const VenueMarkers = (props) => {
  const { venues } = props;

  // const markers = venues.map((venue, index) => (
  //   <Marker key={index} position={venue.geometry} icon={VenueLocationIcon} >
  //     <MarkerPopup data={venue}/>
  //   </Marker>
  // ));
  const markers = venues.map((venue, index) => (
    <Marker key={index} position={venue.geometry} icon={VenueLocationIcon} >
      <MarkerPopup data={venue}/>
    </Marker>
  ));

  return <Fragment>{markers}</Fragment>
};

export default VenueMarkers;

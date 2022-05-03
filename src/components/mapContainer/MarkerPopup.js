import React from 'react';
import {Popup} from 'react-leaflet';

const MarkerPopup = (props) => {
  const { name } = props.data;
  console.log(name);
  // LEOS EDUCATIONAL ACADEMY
  // 136A, WHITE AVENUE, 4th St, Sikkandar Savadi, Madurai, Tamil Nadu 625018
  // 9.980340, 78.096751
  const showInMapClicked=()=>{
    window.open(`https://maps.google.com?q=${9.980313},${78.096799}`);
  };

  return  (<Popup>
    <div className='poup-text'>
      {name}
      <br/>
      <button className="rounded-lg text-blue-600 px-1 underline underline-offset-1" onClick={showInMapClicked}>Open in Google Maps</button>
    </div>
  </Popup>);
};

export default MarkerPopup;

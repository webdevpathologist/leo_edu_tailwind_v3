import React from 'react';
import {Popup} from 'react-leaflet';

const MarkerPopup = (props) => {
  const { name } = props.data;
  const showInMapClicked=()=>{
    window.open(`https://maps.google.com?q=${9.980341},${78.096772}`);
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

import Header from "./components/header/header";
import About from "./sections/about";
import Courses from './sections/courses';
import ContactUs from './sections/contact';
// import GoogleMap from "./components/mapContainer/mapView";
// import OpenStreetMap from "./components/mapContainer/openStreetMap";
// import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function App() {
  return (
    <div className="font-mono dark:font-normal dark:bg-slate-600">
      <Header />
      <About/>
      <Courses />
      <ContactUs />
      {/* <GoogleMap/> */}
      {/* <OpenStreetMap/> */}
    </div>
  );
}

export default App;

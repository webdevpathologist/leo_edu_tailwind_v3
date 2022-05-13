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
    <div className="font-mono bg-white dark:bg-slate-900">
      <Header />
      <div className="px-25 py-4">
      <About/>
      <Courses />
      <ContactUs />
      {/* <GoogleMap/> */}
      {/* <OpenStreetMap/> */}

      </div>
    </div>
  );
}

export default App;

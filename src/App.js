import Header from "./components/header/header";
import About from "./sections/about";
import Courses from "./sections/courses";
import ContactUs from "./sections/contact";

import "leaflet/dist/leaflet.css";

function App() {
  return (
    <div className="font-poppins bg-white dark:bg-slate-700">
      <Header />
      <main className="px-25 py-px">
        <About />
        <Courses />
        <ContactUs />
        {/* <GoogleMap/> */}
        {/* <OpenStreetMap/> */}
      </main>
    </div>
  );
}

export default App;

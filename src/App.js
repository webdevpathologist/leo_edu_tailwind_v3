import Header from "./components/header/header";
import About from "./sections/about";
import Courses from "./sections/courses";
import ContactUs from "./sections/contact";

import "leaflet/dist/leaflet.css";

function App() {
  return (
    <div className="bg-slate-200 font-prompt dark:bg-slate-900/95">
      <Header />
      <main className="px-25 mt-px py-px">
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

import Header from "./components/header/header";
import About from "./sections/about";
import Courses from "./sections/courses";
import ContactUs from "./sections/contactOverlay";
import Footer from './components/footer/footer'

import "leaflet/dist/leaflet.css";

function App() {
  if (process.env.NODE_ENV !== "development") console.log = () => {};
  console.log("txtmsg");
  return (
    <div className="bg-indigo-50 font-prompt dark:bg-slate-900/80 scroll-smooth">
      <Header />
      <main className="md:px-25 md:mt-px md:py-px p-auto">
        <About />
        <Courses />
        <ContactUs />
        {/* <GoogleMap/> */}
        {/* <OpenStreetMap/> */}
      </main>
      <Footer/>
    </div>
  );
}

export default App;

import Header from "./components/header/header";
import About from "./sections/about";
import Courses from "./sections/courses";
import ContactUs from "./sections/contactOverlay";

import "leaflet/dist/leaflet.css";

function App() {
  const page_bg = "bg-cyan-100/80"
  const page_bg_dark = "bg-slate-900/95"

  if (process.env.NODE_ENV !== "development") console.log = () => {};
  console.log("txtmsg");
  return (
    <div className= {`${page_bg}  font-prompt dark:${page_bg_dark}`}>
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

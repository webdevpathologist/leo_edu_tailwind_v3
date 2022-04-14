import Header from "./components/header/header";
import CardContainer from "./components/card/card.container";
import ContactUs from './sections/contact';
// import ContactForm from "./components/contactForm/contactForm";
// import GoogleMap from "./components/mapContainer/mapView";

function App() {
  return (
    <div className="font-mono">
      <Header />
      <div className="md:container md:mx-auto px-25 py-4">
        <CardContainer />
        <ContactUs />
        {/* <GoogleMap /> */}
      </div>
    </div>
  );
}

export default App;

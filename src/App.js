import Header from "./components/header/header";
import CardContainer from "./components/card/card.container";
import ContactForm from "./components/contactForm/contactForm";
import GoogleMap from "./components/mapContainer/mapView";

function App() {
  return (
    <div className="font-mono ">
      <div className="md:container md:mx-auto px-25 py-7">
        <Header />
        <CardContainer />
        <div className="md:container md:mx-auto px-25 py-7">
          <div className="grid grid-cols-2">
          <ContactForm />
          <GoogleMap />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

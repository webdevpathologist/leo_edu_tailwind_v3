import ContactForm from "../components/contactForm/contactForm";
import OpenStreetMap from "../components/mapContainer/openStreetMap";
// import GoogleMap from "./components/mapContainer/mapView";

export default function ContactUs() {
  return (
    <section id="contact" className="font-mono px-4">
      <div className="md:container md:mx-auto px-25 py-4">
        <div className="grid grid-cols-4">
          <OpenStreetMap />
        </div>
        <div className="grid grid-cols-2">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
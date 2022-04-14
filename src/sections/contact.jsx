
import ContactForm from "../components/contactForm/contactForm";
// import GoogleMap from "./components/mapContainer/mapView";

export default function ContactUs() {
  return (
    <div id="contact" className="font-mono">
      <div className="md:container md:mx-auto px-25 py-4">
        <div className="md:container md:mx-auto px-25 py-7">
          <div className="grid grid-cols-2">
          <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
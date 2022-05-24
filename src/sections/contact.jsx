import ContactForm from "../components/contactForm/contactForm";
import OpenStreetMap from "../components/mapContainer/openStreetMap";
// import GoogleMap from "./components/mapContainer/mapView";

export default function ContactUs() {
  return (
    <section id="contact" className="bg-slate-50 p-20">
      <div className="md:container md:mx-auto">
        <div className="px-10 py-5 sm:mx-auto sm:my-auto md:mx-8 md:my-8 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-12 ">
          <div className="col-span-2 z-40">
            <OpenStreetMap />
          </div>
          <div className="col-span-1">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

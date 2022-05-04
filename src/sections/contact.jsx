import ContactForm from "../components/contactForm/contactForm";
import OpenStreetMap from "../components/mapContainer/openStreetMap";
// import GoogleMap from "./components/mapContainer/mapView";

export default function ContactUs() {
  return (
    <section id="contact" className="font-mono bg-slate-50">
      <div className="md:container md:mx-auto px-25 py-7">
        <div className="px-10 py-5 sm:mx-auto md:mx-8 md:my-8 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-12 ">
          <div className="col-span-2">
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

import AboutUs from '../components/aboutUs/aboutUs';

export default function About() {
  return (
    <section id="about" className="p-24">
      <div className="px-10 py-5 sm:mx-auto md:mx-8 md:my-8 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-12 ">
          <div className="col-span-1">
            <AboutUs />
          </div>
          <div className="col-span-2">
            {/* <ContactForm /> */}
          </div>
        </div>
    </section>
  );
}

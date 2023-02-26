import ContactForm from "../components/contactForm/contactForm";

export default function ContactUs() {
  return (
    <section id="contact" className="p-0.5 scroll-m-40">
      <div className="body-font relative text-gray-600">
        <div className="absolute inset-0">
          <iframe
            width="100%"
            height="100%"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            title="map"
            scrolling="no"
            loading="lazy"
            style={{ filter: "contrast(1.2) opacity(0.8)" }}
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31435.471649966785!2d78.0961069!3d9.9809662!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c943aeb7e8eb%3A0xe8c0669f173ba0a1!2sLEOS%20EDUCATIONAL%20ACADEMY!5e0!3m2!1sen!2sin!4v1653411733197!5m2!1sen!2sin"
          ></iframe>
        </div>
        <div className="container mx-auto flex px-5 py-24">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

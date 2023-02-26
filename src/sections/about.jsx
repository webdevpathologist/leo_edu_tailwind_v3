import AboutUs from '../components/aboutUs/aboutUs';
import ImageSlider from '../components/imageSlider/imageSlider';

export default function About() {
  return (
    <section id="about" className="p-20 scroll-m-14">
      <div className="px-7 py-3 scroll-py-32 sm:mx-auto md:mx-8 md:my-8 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-12 ">
          <div className="">
            <AboutUs />
          </div>
          <div className="">
          <ImageSlider/>
          
          </div>
        </div>
    </section>
  );
}

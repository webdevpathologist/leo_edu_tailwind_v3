import AboutUs from '../components/aboutUs/aboutUs';
import ImageSlider from '../components/imageSlider/imageSlider';

export default function About() {
  return (
    <section id="about" className="md:px-14 md:py-10 px-4 py-6 scroll-m-24 bg-indigo-100 dark:bg-slate-800">
      <div className="md:px-7 md:py-16 px-3 py-4 scroll-py-32 sm:mx-auto md:mx-4 md:my-7 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-12 bg-indigo-300/30 dark:bg-slate-700/80 hover:rounded-xl rounded-md shadow shadow-indigo-400 dark:shadow-slate-600">
          <div className="md:col-span-1">
            <AboutUs />
          </div>
          <div className="md:col-span-1 hidden md:inline-block">
          <ImageSlider/>
          
          </div>
        </div>
    </section>
  );
}

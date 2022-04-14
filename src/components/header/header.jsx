// import {GiLion} from 'react-icons/gi';


// export default function Header(props) {


//     return(
//     <nav className="sticky top-0 z-50 bg-white backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray-200 flex justify-left px-2 py-5 text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-cyan-600">
//         {/* <h2 className="md:text-5xl sm:text-4xl px-3 dark:text-white" style={{transform:"scaleX(-1)",verticalAlign:"Bottom"}}><GiLion/> </h2>
//         <h1 className="font-mono lg:text-5xl md:text-4xl flex text-opacity-80 uppercase dark:text-white">The Leo's Educational Academy</h1>
//         <h2 className="md:text-5xl sm:text-4xl px-3 dark:text-white" ><GiLion/> </h2> */}
//         <h2 className="md:text-5xl sm:text-4xl px-3" ><GiLion/> </h2>
//         <h1 className="font-mono font-bold lg:text-5xl md:text-4xl flex uppercase">The Leo's Educational Academy</h1>
//         <div className="justify-right text-1xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-cyan-600">
//           <a href="#"> About Us </a>
//           <a href="#"> Courses </a>
//           <a href="#"> Contact Us </a>
//         </div>
//     </nav>
//     )
    
// }

import { useState } from "react";
import {GiLion} from 'react-icons/gi';

export default function Header() {
  
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false

  return (
    <div className="flex items-center justify-between border-b border-gray-400 py-8 sticky top-0 z-50 bg-white backdrop-filter backdrop-blur-lg bg-opacity-30 px-2 text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-cyan-600">
      {/* */}
      <a href="/">
        <h1 className="font-mono font-bold lg:text-5xl sm:text-3xl flex sm:justify-center uppercase"><GiLion/> The Leo's Educational Academy</h1>
      </a>
      <nav className="">
        {/* */}
        <section className="flex lg:hidden sm:justify-between">
          {/* */}
          <div
            className="space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-4 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>
          {/* */}
          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-gray-600 fill-green-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            {/* */}
            <ul className="flex flex-col items-center justify-between min-h-[250px]">
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="#" className="lg:text-1xl text-green-400 hover:text-cyan-600">About Us</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="#" className="lg:text-1xl text-green-400 hover:text-cyan-600">Courses</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="#" className="lg:text-1xl text-green-400 hover:text-cyan-600">Contact Us</a>
              </li>
            </ul>
          </div>
        </section>

        {/* */}
        <ul className="text-lg font-light hidden space-x-8 px-4 lg:flex">
          <li className="border border-transparent hover:rounded-lg hover:border-green-600 hover:bg-green-400 transition-all duration-75">
            <a href="#" className="text-green-400 hover:text-white hover:uppercase hover:font-medium p-4">About Us</a>
          </li>
          <li className="border border-transparent hover:rounded-lg hover:border-green-600 hover:bg-green-400 transition-all duration-75">
            <a href="#courses" className="text-green-400 hover:text-white hover:uppercase hover:font-medium p-4">Courses</a>
          </li>
          <li className="border border-transparent hover:rounded-lg hover:border-green-600 hover:bg-green-400 transition-all duration-75">
            <a href="#contact" className="text-green-400 hover:text-white hover:uppercase hover:font-medium p-4">Contact Us</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
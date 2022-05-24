import { useState } from "react";
import {GiLion} from 'react-icons/gi';
import DarkModeToggle from '../darkMode/darkModeToggle';

export default function Header() {
  
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false

  return (
    <header className="flex items-center justify-between border-b border-gray-300 py-7 sticky top-0 z-50 bg-white backdrop-filter backdrop-blur-xl bg-opacity-30 px-2 text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-cyan-600">
      {/* Company Name */}
      <h1 className="font-bold lg:text-5xl sm:text-4xl flex sm:justify-center uppercase">
        <GiLion className="text-emerald-400 mx-4"/><br/>
        <a href="/"> The Leo's Educational Academy</a>
      </h1>
      <nav className="">
        {/* SideNav starts */}
        <section className="flex lg:hidden sm:justify-between">
          {/* */}
          <div
            className="space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 bg-green-600"></span>
            <span className="block h-0.5 w-6 bg-green-600"></span>
            <span className="block h-0.5 w-8 bg-green-600"></span>
          </div>
          {/* */}
          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-gray-600 fill-green-200"
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
            <ul className="flex flex-col items-center justify-between min-h-[250px] text-4xl">
              <li className="border-b border-gray-400 my-8 uppercase" onClick={() => setIsNavOpen(false)}>
                <a href="#about" className="lg:text-1xl text-green-400 hover:text-cyan-600">About</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase" onClick={() => setIsNavOpen(false)}>
                <a href="#course" className="lg:text-1xl text-green-400 hover:text-cyan-600">Courses</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase" onClick={() => setIsNavOpen(false)}>
                <a href="#contact" className="lg:text-1xl text-green-400 hover:text-cyan-600">Contact</a>
              </li>
            </ul>
          </div>
        </section>
        {/* SideNav ends */}

        {/* Navbar starts */}
        <ul className="text-lg font-light hidden space-x-8 px-4 lg:flex items-center justify-between">
          <li className="border border-transparent hover:rounded-full hover:p-0.5 hover:border-green-600 hover:bg-green-400 transition-all duration-75">
            <a href="#about" className="text-green-400 hover:text-white hover:uppercase hover:font-medium p-4">About</a>
          </li>
          <li className="border border-transparent hover:rounded-full hover:p-0.5 hover:border-green-600 hover:bg-green-400 transition-all duration-75">
            <a href="#course" className="text-green-400 hover:text-white hover:uppercase hover:font-medium p-4">Courses</a>
          </li>
          <li className="border border-transparent hover:rounded-full hover:p-0.5 hover:border-green-600 hover:bg-green-400 transition-all duration-75">
            <a href="#contact" className="text-green-400 hover:text-white hover:uppercase hover:font-medium p-4">Contact</a>
          </li>
          <li className="">
            <DarkModeToggle/>
          </li>
        </ul>
        {/* Navbar starts */}
      </nav>
    </header>
  );
}
import { useState } from "react";
import { GiLion } from "react-icons/gi";
import DarkModeToggle from "../darkMode/darkModeToggle";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false

  return (
    <header className="sticky top-0 z-20 flex items-center justify-between border-b border-gray-300 bg-white bg-opacity-40 bg-gradient-to-br from-green-400 to-cyan-600 bg-clip-text py-7 px-2 text-transparent backdrop-blur-xl backdrop-filter">
      {/* Company Name */}
      <h1 className="flex font-bold uppercase sm:justify-center sm:text-4xl lg:text-5xl">
        <GiLion className="mx-4 text-emerald-400" />
        <br />
        <a href="/"> The Leo's Educational Academy</a>
      </h1>
      <nav className="">
        {/* SideNav starts */}
        <section className="flex sm:justify-between lg:hidden">
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
                className="h-8 w-8 fill-green-200 text-gray-600"
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
            <ul className="flex min-h-[250px] flex-col items-center justify-between text-4xl">
              <li
                className="my-8 border-b border-gray-400 uppercase"
                onClick={() => setIsNavOpen(false)}
              >
                <a
                  href="#about"
                  className="lg:text-1xl text-green-400 hover:text-cyan-600"
                >
                  About
                </a>
              </li>
              <li
                className="my-8 border-b border-gray-400 uppercase"
                onClick={() => setIsNavOpen(false)}
              >
                <a
                  href="#course"
                  className="lg:text-1xl text-green-400 hover:text-cyan-600"
                >
                  Courses
                </a>
              </li>
              <li
                className="my-8 border-b border-gray-400 uppercase"
                onClick={() => setIsNavOpen(false)}
              >
                <a
                  href="#contact"
                  className="lg:text-1xl text-green-400 hover:text-cyan-600"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </section>
        {/* SideNav ends */}

        {/* Navbar starts */}
        <ul className="hidden items-center justify-between space-x-8 px-4 text-lg font-light lg:flex">
          <li className="transition-all duration-75 hover:rounded-full hover:shadow hover:shadow-green-600 hover:bg-green-400  dark:hover:bg-green-400/70 hover:p-0.5">
            <a
              href="#about"
              className="p-4 text-green-400 hover:font-medium hover:uppercase hover:text-white"
            >
              About
            </a>
          </li>
          <li className="transition-all duration-75 hover:rounded-full hover:shadow hover:shadow-green-600 hover:bg-green-400 dark:hover:bg-green-400/70 hover:p-0.5">
            <a
              href="#course"
              className="p-4 text-green-400 hover:font-medium hover:uppercase hover:text-white"
            >
              Courses
            </a>
          </li>
          <li className="transition-all duration-75 hover:rounded-full hover:shadow hover:shadow-green-600 hover:bg-green-400 dark:hover:bg-green-400/70 hover:p-0.5">
            <a
              href="#contact"
              className="p-4 text-green-400 hover:font-medium hover:uppercase hover:text-white"
            >
              Contact
            </a>
          </li>
          <li className="">
            <DarkModeToggle />
          </li>
        </ul>
        {/* Navbar starts */}
      </nav>
    </header>
  );
}

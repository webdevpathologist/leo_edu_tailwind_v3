import { useState } from "react";
import { GiLion } from "react-icons/gi";
import DarkModeToggle from "../darkMode/darkModeToggle";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 flex items-center justify-between border-b border-gray-300 bg-white dark:bg-slate-500 bg-opacity-40 bg-gradient-to-br from-indigo-800 to-purple-800 bg-clip-text py-7 px-2 text-transparent backdrop-blur-xl backdrop-filter dark:bg-gradient-to-br dark:from-green-600 dark:to-cyan-300">
      {/* Company Name */}
      <div className="flex-start md:hidden">
        <DarkModeToggle />
      </div>
      <h1 className="flex font-bold uppercase sm:justify-center sm:text-3xl md:text-4xl lg:text-5xl">
        <GiLion className="hidden mx-4 text-indigo-800 dark:text-emerald-500 md:inline-block" />
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
            <span className="block h-0.5 w-8 bg-indigo-600 dark:bg-green-600"></span>
            <span className="block h-0.5 w-6 bg-indigo-600 dark:bg-green-600"></span>
            <span className="block h-0.5 w-8 bg-indigo-600 dark:bg-green-600"></span>
          </div>
          {/* */}
          <div className={`${isNavOpen ? "showMenuNav" : "hideMenuNav"}`}>
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 fill-indigo-400 text-gray-600 dark:fill-green-200"
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
                  className="lg:text-1xl text-indigo-500 hover:text-cyan-600"
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
                  className="lg:text-1xl text-indigo-500 hover:text-cyan-600"
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
                  className="lg:text-1xl text-indigo-500 hover:text-cyan-600"
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
          <li className="transition-all duration-75 hover:rounded-full hover:bg-indigo-600/80 hover:p-0.5 hover:shadow hover:shadow-indigo-600  dark:hover:bg-green-400/70 dark:hover:shadow-green-600">
            <a
              href="#about"
              className="p-4 text-indigo-500 hover:font-medium hover:uppercase hover:text-white dark:text-green-400 dark:hover:text-white"
            >
              About
            </a>
          </li>
          <li className="transition-all duration-75 hover:rounded-full hover:bg-indigo-600/80 hover:p-0.5 hover:shadow hover:shadow-indigo-600  dark:hover:bg-green-400/70 dark:hover:shadow-green-600">
            <a
              href="#course"
              className="p-4 text-indigo-500 hover:font-medium hover:uppercase hover:text-white dark:text-green-400 dark:hover:text-white"
            >
              Courses
            </a>
          </li>
          <li className="transition-all duration-75 hover:rounded-full hover:bg-indigo-600/80 hover:p-0.5 hover:shadow hover:shadow-indigo-600  dark:hover:bg-green-400/70 dark:hover:shadow-green-600">
            <a
              href="#contact"
              className="p-4 text-indigo-500 hover:font-medium hover:uppercase hover:text-white dark:text-green-400 dark:hover:text-white"
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

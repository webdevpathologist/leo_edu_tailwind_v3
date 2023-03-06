import { useState } from "react";
import { GiLion } from "react-icons/gi";
import DarkModeToggle from "../darkMode/darkModeToggle";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const logo_text = "text-emerald-400";
  
  const burger_menu_stroke = "bg-green-400";
  const burger_menu = "fill-green-200";
  const burger_menu_text = "text-gray-600";
  const burger_menu_link = "text-green-400";

  const nav_list_item_hover = "bg-green-400";
  const nav_list_item_hover_dark = "bg-green-400/70";
  const nav_link_text = "text-green-400";
  const nav_link_hover_text = "text-white";

  return (
    <header className={`sticky top-0 z-40 flex items-center justify-between border-b border-gray-300  bg-opacity-40 ${nav_link_text} bg-clip-text py-7 px-2 text-transparent backdrop-blur-xl backdrop-filter`}>
      {/* Company Name */}
      <h1 className="flex font-bold uppercase sm:justify-center sm:text-4xl lg:text-5xl">
        <GiLion className={`mx-4 ${logo_text}`} />
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
            <span className={`block h-0.5 w-8 ${burger_menu_stroke}`}></span>
            <span className={`block h-0.5 w-6 ${burger_menu_stroke}`}></span>
            <span className={`block h-0.5 w-8 ${burger_menu_stroke}`}></span>
          </div>
          {/* */}
          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className={`h-8 w-8 ${burger_menu} ${burger_menu_text} `}
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
                  className={`lg:text-1xl ${burger_menu_link}`}
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
                  className={`lg:text-1xl ${burger_menu_link}`}
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
                  className={`lg:text-1xl ${burger_menu_link}`}
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
          <li className={`transition-all duration-75 hover:rounded-full hover:${nav_list_item_hover} hover:p-0.5 hover:shadow  hover:shadow-green-600 dark:hover:${nav_list_item_hover_dark}`}>
            <a
              href="#about"
              className={`p-4 ${nav_link_text} hover:font-medium hover:uppercase hover:${nav_link_hover_text}`}
            >
              About
            </a>
          </li>
          <li className={`transition-all duration-75 hover:rounded-full hover:${nav_list_item_hover} hover:p-0.5 hover:shadow  hover:shadow-green-600 dark:hover:${nav_list_item_hover_dark}`}>
            <a
              href="#course"
              className={`p-4 ${nav_link_text} hover:font-medium hover:uppercase hover:${nav_link_hover_text}`}
            >
              Courses
            </a>
          </li>
          <li className={`transition-all duration-75 hover:rounded-full hover:${nav_list_item_hover} hover:p-0.5 hover:shadow  hover:shadow-green-600 dark:hover:${nav_list_item_hover_dark}`}>
            <a
              href="#contact"
              className={`p-4 ${nav_link_text} hover:font-medium hover:uppercase hover:${nav_link_hover_text}`}
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

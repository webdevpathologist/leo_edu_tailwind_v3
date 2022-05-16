import { BsSunFill, BsMoonStarsFill } from "react-icons/bs";
import {FaSun} from "react-icons/fa"
import { useState, useEffect } from "react";
// import GetTheme from './getTheme';

export default function DarkModeToggle() {
  const [theme, setTheme] = useState();

  useEffect(() => {
    const temp = localStorage.theme && localStorage.theme==="dark" ? "dark" : "light";
    const page = window.document.getElementById("root");

    setTheme(temp);
    page.classList.add(temp);


  }, []);


  const changeTheme = () => {
    // console.log(theme);

    const hydratedTheme = localStorage.theme;
    const computedTheme = hydratedTheme === "dark" ? "light" : "dark";
    // console.log(computedTheme);
    // const page = window.document.documentElement;
    const page = window.document.getElementById("root");

    page.classList.remove(hydratedTheme);
    page.classList.add(computedTheme);
    localStorage.setItem("theme", computedTheme);
    setTheme(computedTheme);
  };

  return (
    <div
      className="w-10 h-10 flex items-center justify-center rounded-lg shadow-lg cursor-pointer text-slate-200 bg-gray-600 dark:bg-gray-500 dark:text-yellow-200"
      onClick={changeTheme}
    >
      <h3 className="text-2xl">
        {theme === "light" ? <BsMoonStarsFill /> : <FaSun />}
      </h3>
    </div>
  );
}

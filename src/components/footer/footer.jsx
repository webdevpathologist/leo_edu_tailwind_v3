import React from "react";
import { SiReact,SiTailwindcss,SiNetlify,SiTelegram,SiAmazonaws, SiGithub } from "react-icons/si";

export default function Footer() {

  return (
    <footer className="flex items-center justify-center bg-white text-indigo-700/80 dark:bg-slate-800 dark:text-green-300/95 bg-opacity-40 py-3 md:p-1 transform transition duration-300">
      <div className="flex font-thin justify-center items-center text-xl">
        <p className="hidden lg:inline-flex">Made with </p>
          <a href="https://react.dev/" target={"_blank"} rel='noreferrer'><SiReact className="mx-4 text-sky-400 md:inline-block" /></a>
          <a href="https://tailwindcss.com/" target={"_blank"} rel='noreferrer'><SiTailwindcss className="mx-4 text-sky-500 md:inline-block" /></a>
          <a href="https://www.netlify.com/" target={"_blank"} rel='noreferrer'><SiNetlify className="mx-4 text-zinc-700 dark:text-zinc-300 md:inline-block" /></a>
          <a href="https://core.telegram.org/bots/api" target={"_blank"} rel='noreferrer'><SiTelegram className="mx-4 text-sky-600 md:inline-block" /></a>
          <a href="https://aws.amazon.com/" target={"_blank"} rel='noreferrer'><SiAmazonaws className="mx-4 text-amber-600 md:inline-block" /></a>
          <a href="https://github.com/vigneshmb/leo-educational-academy" target={"_blank"} rel='noreferrer'><SiGithub className="mx-4 text-zinc-800 md:inline-block dark:text-zinc-200" /></a>
      </div>
    </footer>
  );
}

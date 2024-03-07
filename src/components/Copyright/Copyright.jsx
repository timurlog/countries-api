import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../../main";

export default function Copyright() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  const currentYear = new Date().getFullYear();

  return (
    <div className="h-10 md:h-14 flex px-5 md:px-10 justify-center items-center">
      <div>
        <p className="text-gray-400 font-[Typewriter] text-base md:text-lg">
          Copyright © {currentYear} by Timur Logie
        </p>
      </div>
    </div>
  );
}

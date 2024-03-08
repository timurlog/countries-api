import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "./main";
import Navbar from "./components/Navbar/Navbar";
import Copyright from "./components/Copyright/Copyright";

export default function App() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  return (
    <div
      className={`${
        darkMode ? "app" : "witheApp"
      } h-screen w-full flex flex-col justify-between`}
    >
      <Navbar nobg={true} />
      <div
        className={`flex flex-col lg:flex-row gap-10 lg:gap-16 px-5 md:px-10 text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-[Candu] tracking-widest`}
      >
        <div>
          <p className={`${darkMode ? "text-white" : "text-[#2F2F2C]"}`}>
            WANT
          </p>
          <p className={`${darkMode ? "text-white" : "text-[#2F2F2C]"}`}>TO</p>
          <p className={`${darkMode ? "text-white" : "text-[#2F2F2C]"}`}>
            FIND
          </p>
          <p className={`${darkMode ? "text-white" : "text-[#2F2F2C]"}`}>
            COUNTRIES?
          </p>
        </div>
        <div className="flex justify-center items-center">
          <Link to={"/countries-api/countries/"}>
            <div
              className={`${
                darkMode
                  ? "bg-white text-[#2F2F2C] hover:text-white"
                  : "bg-[#2F2F2C] text-white hover:text-[#2F2F2C]"
              } p-5 text-4xl text-center flex justify-center items-center rounded-full h-48 w-48 backdrop-blur-sm transition-colors hover:bg-transparent`}
            >
              GO FIND
            </div>
          </Link>
        </div>
      </div>
      <Copyright />
    </div>
  );
}

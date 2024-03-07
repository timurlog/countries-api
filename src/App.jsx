import React from "react";
import "./App.css";
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
      <div className={`px-5 md:px-10 text-9xl font-[Candu] tracking-widest`}>
        <p className={`${darkMode ? "text-white" : "text-[#2F2F2C]"}`}>WANT</p>
        <p className={`${darkMode ? "text-white" : "text-[#2F2F2C]"}`}>TO</p>
        <p className={`${darkMode ? "text-white" : "text-[#2F2F2C]"}`}>FIND</p>
        <p className={`${darkMode ? "text-white" : "text-[#2F2F2C]"}`}>
          COUNTRIES?
        </p>
      </div>
      <Copyright />
    </div>
  );
}

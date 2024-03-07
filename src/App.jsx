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
      <div className="h-full"></div>
      <Copyright />
    </div>
  );
}

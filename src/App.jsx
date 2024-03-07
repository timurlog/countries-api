import React from "react";
import "./App.css";
import { useContext } from "react";
import { ThemeContext } from "./main";
import Navbar from "./components/Navbar/Navbar";

export default function App() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  return (
    <div className={`${darkMode ? "app" : "witheApp"} h-screen w-full`}>
      <Navbar />
    </div>
  );
}

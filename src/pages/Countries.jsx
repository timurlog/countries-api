import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Copyright from "../components/Copyright/Copyright";
import { useContext } from "react";
import { ThemeContext } from "../main";

export default function Countries() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <div className={`${darkMode ? "bg-[#2F2F2C]" : "bg-white"}`}>
      <Navbar />
      <Copyright />
    </div>
  );
}

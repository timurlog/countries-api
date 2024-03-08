import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../../main";

export default function CountiresTab(props) {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <div
      className={`${
        darkMode ? "bg-[#1D1D1B]" : "bg-[#CECECE]"
      } w-[335px] h-80 rounded-lg overflow-hidden`}
    >
      <div
        className={`h-1/2 flex justify-center items-center relative overflow-hidden`}
      >
        <div
          className={`w-full flex justify-center items-center absolute z-0 blur-3xl opacity-75`}
        >
          <img className="w-full" src={props.flag} alt="" />
        </div>
        <img className="h-full z-10" src={props.flag} alt="" />
      </div>
      <div className={`${darkMode ? "text-white" : "text-[#2F2F2C]"} h-1/2 flex flex-col justify-between p-5`}>
        <div>{props.name}</div>
        <div>Population: {props.population}</div>
        <div>Region: {props.region}</div>
        <div>Capital: {props.capital}</div>
      </div>
    </div>
  );
}

import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../../main";
import { Link } from "react-router-dom";

export default function CountiresTab(props) {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  function numberWithSpaces(x) {
    const parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    return parts.join(".");
  }

  return (
    <Link to={`/countries-api/countries/${props.name}`}>
      <div
        className={`${
          darkMode
            ? "bg-[#1D1D1B] hover:bg-[#0f0f0f]"
            : "bg-[#CECECE] hover:bg-[#b8b1b1]"
        } w-[335px] h-80 rounded-lg overflow-hidden cursor-pointer transition-colors`}
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
        <div
          className={`${
            darkMode ? "text-white" : "text-[#2F2F2C]"
          } h-1/2 flex flex-col justify-between p-5 font-medium`}
        >
          <div className="text-xl font-[Candu] tracking-wider">
            {props.name}
          </div>
          <div>
            Population:{" "}
            <span className={`${darkMode ? "text-gray-300" : "text-gray-600"}`}>
              {numberWithSpaces(props.population)}
            </span>
          </div>
          <div>
            Region:{" "}
            <span className={`${darkMode ? "text-gray-300" : "text-gray-600"}`}>
              {props.region}
            </span>
          </div>
          <div>
            Capital:{" "}
            <span className={`${darkMode ? "text-gray-300" : "text-gray-600"}`}>
              {props.capital}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

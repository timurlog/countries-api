import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../../main";

export default function Filters(props) {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  return (
    <div className={`px-5 md:px-10`}>
      <div>
        <label
          className={`w-[335px] input input-bordered flex items-center gap-2 ${
            darkMode ? "bg-[#1D1D1B] text-white" : "bg-[#cecece] text-[#2F2F2C]"
          }`}
        >
          <input
            onChange={(e) => props.setSearchVal(e.target.value)}
            type="text"
            className="grow font-[TypewriterBold]"
            placeholder="Search"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
      </div>
    </div>
  );
}

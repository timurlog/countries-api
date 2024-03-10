import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../main";
import { ThemeContext } from "../main";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Copyright from "../components/Copyright/Copyright";

export default function Countrie() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  const { data, setData } = useContext(DataContext);

  const { countrieId } = useParams();
  const [countrie, setCountrie] = useState([]);

  useEffect(() => {
    setCountrie(
      data.filter((item) =>
        item.name.common.toLowerCase().includes(countrieId.toLowerCase())
      )
    );
  }, [countrieId, data]);

  return (
    <div
      className={`${
        darkMode ? "bg-[#2F2F2C]" : "bg-white"
      } h-screen flex flex-col justify-between`}
    >
      <Navbar />
      <div className="px-5 md:px-10">
        <Link to={"/countries-api/countries/"}>
          <div
            className={`${
              darkMode
                ? "bg-[#1D1D1B] text-white hover:bg-[#181817]"
                : "bg-[#cecece] text-[#2F2F2C] hover:bg-[#acacaa]"
            } rounded-lg flex gap-3 justify-center items-center py-3 w-24 transition-colors`}
          >
            <i className="fa-solid fa-arrow-left"></i>Back
          </div>
        </Link>
      </div>
      <div>
        <div></div>
        <div></div>
      </div>
      <Copyright />
    </div>
  );
}

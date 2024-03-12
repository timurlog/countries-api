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

  function numberWithSpaces(x) {
    const parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    return parts.join(".");
  }

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
      <div className="h-1/3">
        {countrie.map((item, index) => (
          <div key={index} className="flex h-full px-5 md:px-10 items-center">
            <div className="w-1/2 h-full flex justify-center items-center">
              <img className="h-full" src={item.flags.svg} alt="" />
            </div>
            <div className="w-1/2 h-full">
              <div>{item.name.common}</div>
              <div className="grid grid-cols-2">
                <div>
                  {
                    item.name.nativeName[Object.keys(item.name.nativeName)[0]]
                      .common
                  }
                </div>
                <div>{item.tld}</div>
                <div>{numberWithSpaces(item.population)}</div>
                <div>
                  {item.currencies[Object.keys(item.currencies)[0]].name}
                </div>
                <div>{item.region}</div>
                <div>{Object.values(item.languages).join(", ")}</div>
                <div>{item.subregion}</div>
                <div></div>
                <div>{item.capital}</div>
              </div>
              <div></div>
            </div>
          </div>
        ))}
      </div>
      <Copyright />
    </div>
  );
}

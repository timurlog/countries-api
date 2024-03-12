import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { ThemeContext } from "../main";
import { DataContext } from "../main";
import Navbar from "../components/Navbar/Navbar";
import Copyright from "../components/Copyright/Copyright";
import Filters from "../components/Filters/Filters";
import CountiresTab from "../components/CountiresTab/CountiresTab";

export default function Countries() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const { data, setData } = useContext(DataContext);

  const [searchVal, setSearchVal] = useState("");
  const [newData, setNewData] = useState(data);

  useEffect(() => {
    setNewData(
      data.filter((item) =>
        item.name.common.toLowerCase().includes(searchVal.toLowerCase())
      )
    );
  }, [searchVal, data]);

  return (
    <div className={`${darkMode ? "bg-[#2F2F2C]" : "bg-white"} min-h-screen`}>
      <Navbar />
      <div className="px-5 md:px-10 pt-10 grid gap-5 md:gap-10 grid-cols-1 md:grid-cols-2 xl:grid-cols-4 justify-items-center">
        <Filters setSearchVal={setSearchVal} />
        <div></div>
        <div></div>
        <div></div>
        {newData.map((item, index) => {
          return (
            <CountiresTab
              key={index}
              flag={item.flags.png}
              name={item.name.common}
              population={item.population}
              region={item.region}
              capital={item.capital}
            />
          );
        })}
      </div>
      <Copyright />
    </div>
  );
}

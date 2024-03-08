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
    <div className={`${darkMode ? "bg-[#2F2F2C]" : "bg-white"}`}>
      <Navbar />
      <div className={`py-10`}>
        <Filters setSearchVal={setSearchVal} />
      </div>
      <div>
        <CountiresTab />
      </div>
      <Copyright />
    </div>
  );
}

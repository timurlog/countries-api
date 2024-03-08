import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../main";

export default function Countrie() {
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
    <div>
      <div></div>
    </div>
  );
}

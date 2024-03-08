import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import App from "./App.jsx";
import Countries from "./pages/Countries.jsx";
import Countrie from "./pages/Countrie.jsx";

export const ThemeContext = createContext(null);

export default function Main() {
  // THEME CONTROLER
  const [darkMode, setDarkMode] = useState(true);

  // API CALL
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  // ROUTER
  const router = createBrowserRouter([
    {
      path: "/countries-api/",
      element: (
        <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
          <App />
        </ThemeContext.Provider>
      ),
    },
    {
      path: "/countries-api/countries/",
      element: (
        <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
          <Countries />
        </ThemeContext.Provider>
      ),
    },
    {
      path: "/countries-api/countries/:countrieId",
      element: <div></div>,
    },
  ]);

  return <RouterProvider router={router} />;
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);

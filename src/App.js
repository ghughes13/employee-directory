import React, { useState, useEffect } from "react";
import axios from "axios";
import "./normalize.css";
import "./App.css";
import GalleryCard from "./GalleryCard";
import SearchBar from "./SearchBar";

function App() {
  const [employees, setEmployees] = useState();

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = () => {
    axios.get("https://randomuser.me/api/?results=12").then((data) => {
      setEmployees(data.data.results);
    });
  };

  return (
    <>
      {employees ? (
        <div className="App">
          <header>
            <div className="header-inner-container">
              <div className="header-text-container">
                <h1>AWESOME STARTUP EMPLOYEE DIRECTORY</h1>
              </div>
              <SearchBar employees={employees} />
            </div>
          </header>
          <GalleryCard employees={employees} />
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
}

export default App;

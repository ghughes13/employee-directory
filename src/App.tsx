import React, { useState, useEffect } from "react";
import "./normalize.css";
import "./App.css";
import GalleryCard from "./GalleryCard";
import SearchBar from "./SearchBar";
import { json } from "stream/consumers";

interface apiResult {
  first: string;
  last: string;
}

function App() {
  const [employees, setEmployees] = useState();

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = () =>  {
    fetch("https://randomuser.me/api/?results=12").then(data => data.json()).then(data => {
      console.log(data)
      setEmployees(data.results);
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

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './normalize.css';
import './App.css';
import GalleryCard from './GalleryCard';
import SearchBar from './SearchBar';

function App() {


    useEffect(() => {
            axios
            .get("https://randomuser.me/api/?results=12")
            .then(data => {
                setPerson(data);    
            })
    }, []);

    const [person, setPerson] = useState();

    if(!person) {
        return (<h1>Loading...</h1>)
    }

    return (
    <div className="App">
        <header>
            <div className="header-inner-container">
                <div className="header-text-container">
                    <h1>AWESOME STARTUP EMPLOYEE DIRECTORY</h1>
                </div>
                <SearchBar props={person} />
            </div>
        </header>
        <GalleryCard props={person}/>
    </div>
  );
}

export default App;

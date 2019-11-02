import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './normalize.css';
import './App.css';
import GalleryCard from './GalleryCard';

function App() {

    let requested = false;

    useEffect(() => {
        if(!requested) {
            axios
            .get("https://randomuser.me/api/?results=50")
            .then(data => data.data.results.forEach(person => {
                console.log('requested');
                setPerson(person);
            }))
            requested = true;
        }
    });

    const [person, setPerson] = useState('test');

  return (
    <div className="App">
      {/* <!-- =======================
            Gallery container
        ======================== --> */}
        <header>
            <div class="header-inner-container">
                <div class="header-text-container">
                    <h1>AWESOME STARTUP EMPLOYEE DIRECTORY</h1>
                </div>

                <div class="search-container" id = 'formplace'>
                    {/* <!-- ======================
                        JavaSCript adds a search bar to let you search users on page

                        <form action="#" method="get">
                            <input type="search" id="search-input" class="search-input" placeholder="Search..." />
                            <input type="submit" value="&#x1F50D;" id="serach-submit" class="search-submit" />
                        </form>
                     ======================= --> */}
                </div>
            </div>
        </header>

        <div id="gallery" class="gallery">
            <GalleryCard props={person}/>
            {/* <!-- ======================
                JavaScript Dynamically adds 12 users with the following format: 

                 <div class="card">
                    <div class="card-img-container">
                        <img class="card-img" src="https://placehold.it/90x90" alt="profile picture" />
                    </div>
                    <div class="card-info-container">
                        <h3 id="name" class="card-name cap">first last</h3>
                        <p class="card-text">email</p>
                        <p class="card-text cap">city, state</p>
                    </div>
                </div> 
             ======================= --> */}
        </div>

        {/* <!-- =======================
            JavaScript dynamically adds the following when a user is clicked: 

             <div class="modal-container">
                <div class="modal">
                    <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
                    <div class="modal-info-container">
                        <img class="modal-img" src="https://placehold.it/125x125" alt="profile picture" />
                        <h3 id="name" class="modal-name cap">name</h3>
                        <p class="modal-text">email</p>
                        <p class="modal-text cap">city</p>
                        <hr />
                        <p class="modal-text">(555) 555-5555</p>
                        <p class="modal-text">123 Portland Ave., Portland, OR 97204</p>
                        <p class="modal-text">Birthday: 10/21/2015</p>
                    </div>
                </div>

                <div class="modal-btn-container">
                    <button type="button" id="modal-prev" class="modal-prev btn">Prev</button>
                    <button type="button" id="modal-next" class="modal-next btn">Next</button>
                </div>
            </div> 
        ======================== --> */}

    </div>
  );
}

export default App;

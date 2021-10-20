import React, { useState } from "react";

function GalleryCard({ employees }) {
  const [searchValue, setSearchValue] = useState();

  let usersOnPage = employees.map(
    (person, i) => person.name.first + "-" + person.name.last
  );

  const handleKeyUp = (e) => {
    let searchBar = document.getElementById("search-input");
    let cards = document.getElementsByClassName("card");
    for (let i = 0; i < 12; i++) {
      cards[i].style.display = "none";
      if (usersOnPage[i].includes(searchBar.value)) {
        let userToShow = document.querySelector(
          "[data-search='" + usersOnPage[i] + "']"
        );
        userToShow.style.display = "flex";
      }
    }
    if (searchValue.length === 0) {
      for (let i = 0; i < 12; i++) {
        cards[i].style.display = "flex";
      }
    }
  };

  return (
    <div className="search-container" id="formplace">
      <form action="#" method="get">
        <input
          type="search"
          id="search-input"
          className="search-input"
          placeholder="Search..."
          onKeyUp={(e) => handleKeyUp(e)}
        />
        <input
          type="submit"
          value="&#x1F50D;"
          id="serach-submit"
          className="search-submit"
        />
      </form>
    </div>
  );
}

export default GalleryCard;

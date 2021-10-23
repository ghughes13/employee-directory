import React, { useState, useEffect } from "react";

interface person {
  name: {
    [key: string]: name,
  }
}

interface name {
  first: string;
  last: string;
}

function SearchBar({ employees }: {employees: person[]}) {
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    let cards = document.querySelectorAll<HTMLElement>(".card");
    for (let i = 0; i < 12; i++) {
      cards[i].style.display = "none";
      if (usersOnPage[i].includes(searchValue)) {
        let userToShow = document.querySelector<HTMLElement>(
          "[data-search='" + usersOnPage[i] + "']"
        );
        userToShow!.style.display = "flex";
      }
    }
    if (searchValue!.length === 0) {
      for (let i = 0; i < 12; i++) {
        cards[i].style.display = "flex";
      }
    }
  })

  let usersOnPage = employees.map(
    (person: person) => person.name.first + "-" + person.name.last
  );

  return (
    <div className="search-container" id="formplace">
      <form action="#" method="get">
        <input
          type="search"
          id="search-input"
          className="search-input"
          placeholder="Search..."
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <input
          type="submit"
          value="&#x1F50D;"
          id="search-submit"
          className="search-submit"
        />
      </form>
    </div>
  );
}

export default SearchBar;

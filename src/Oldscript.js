

let gallery = document.getElementById('gallery');
console.log(gallery);
let usersOnPage = [];



//This section adds the ajax data to the page in the proper format.
let addToGallery = (person) => {
  let userPic = person.picture.large;
  let userName = person.name.first + " " + person.name.last;
  let userEmail = person.email;
  let userCityState = person.location.city + ", " + person.location.state;
  let galleryTemplate =
      `<div class="card-img-container">
          <img class="card-img" src="${userPic}" alt="profile picture">
      </div>
      <div class="card-info-container"><h3 id="name" class="card-name cap">${userName}</h3>
          <p class="card-text">${userEmail}</p>
          <p class="card-text cap">${userCityState}</p>
      </div>`;
  let cardDiv = document.createElement("div");
  cardDiv.setAttribute('class', 'card');
  cardDiv.setAttribute('id', userName + " card");
  cardDiv.innerHTML = galleryTemplate;
  gallery.appendChild(cardDiv);
  makeModal(userPic, userName, userEmail, person);

  //If a card is clicked, displays that cards modal (Pop up with more info on employee)
  cardDiv.addEventListener('click', (e) => {
    for(let i = 0; i < e.path.length; i++) {
      if(e.path[i].classList.contains('card')) {
        let selectedCard = e.path[i].lastChild.firstChild.innerHTML;
        let findCard = document.getElementById(selectedCard);
        findCard.style.display = 'static';
        findCard.setAttribute('class','modal-container active');
        break;
      };
    }
  });
}; //end of addToGallery


//This section makes the modal element and adds functionality to the buttons on it
let makeModal = (userPic, userName, userEmail, person) => {
  usersOnPage.push(userName);
  let userCity = person.location.city;
  let userNumber = person.cell;
  let fullAddress = person.location.street + ", " + person.location.city + ", " + person.location.state + " " + person.location.postcode;
  let userBirthday1 = person.dob.date;
  let userBirthday = userBirthday1.substring(0,10);
  let modalContent =
      `<div class="modal"><button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
          <div class="modal-info-container">
              <img class="modal-img" src="${userPic}" alt="profile picture">
              <h3 id="name" class="modal-name cap">${userName}</h3>
              <p class="modal-text">${userEmail}</p>
              <p class="modal-text cap">${userCity}</p>
              <hr>
              <p class="modal-text">${userNumber}</p>
              <p class="modal-text">${fullAddress}</p>
              <p class="modal-text">Birthday: ${userBirthday}</p>
          </div>
      </div>

      <div class="modal-btn-container">
          <button type="button" id="modal-prev" class="modal-prev btn">Prev</button>
          <button type="button" id="modal-next" class="modal-next btn">Next</button>
      </div>`;
  let modalCard = document.createElement('div');
  modalCard.setAttribute('class','modal-container');
  modalCard.setAttribute('id', userName);
  modalCard.style.display = 'none';
  modalCard.innerHTML = modalContent;
  document.body.appendChild(modalCard);

  //Hides the modal if the X button is clicked
  let xButton = modalCard.firstChild.firstChild;
  xButton.addEventListener('click', () =>{
    modalCard.style.display = 'none';
  });

  //Moved to next modal/employee if next button is clicked
  let prevButton = modalCard.lastChild.children[0];
  prevButton.addEventListener('click', () =>{
    let currentCard = prevButton.parentNode.parentNode.id;
    prevButton.parentNode.parentNode.style.display = 'none';
    for(let i = 0; i < 12; i++) {
      if(usersOnPage.indexOf(currentCard) === 0){
        let prevName = usersOnPage[11];
        let prevCard = document.getElementById(prevName);
        prevCard.style.display = 'static';
      } else if(usersOnPage[i] === currentCard) {
        let prevName = usersOnPage[i-1];
        let prevCard = document.getElementById(prevName);
        prevCard.style.display = 'static';
      }
    }
  });

  //Moved to next modal/employee if next button is clicked
  let nextButton = modalCard.lastChild.children[1];
  nextButton.addEventListener('click', () =>{
    let currentCard = nextButton.parentNode.parentNode.id;
    nextButton.parentNode.parentNode.style.display = 'none';
    for(let i = 0; i < 12; i++) {
      if(usersOnPage.indexOf(currentCard) === 11){
        let nextName = usersOnPage[0];
        let nextCard = document.getElementById(nextName);
        nextCard.style.display = 'static';
      } else if(usersOnPage[i] === currentCard) {
        let nextName = usersOnPage[i+1];
        let nextCard = document.getElementById(nextName);
        nextCard.style.display = 'static';
      }
    }
  });
}; //end of makeModal


//Adds a search bar
let searchBar = () => {
  let divToAddFormTo = document.getElementById('formplace');
  let searchHTML =
      `<form action="#" method="get" preventDefault>
          <input type="search" id="search-input" class="search-input" placeholder="Search...">
          <input type="submit" value="&#x1F50D;" id="serach-submit" class="search-submit">
      </form> `;
  divToAddFormTo.innerHTML = searchHTML;

  //Adds search functionality
  let searchBar = divToAddFormTo.firstElementChild.firstElementChild;
  searchBar.addEventListener('keyup', (e) => {
    let cards = document.getElementsByClassName('card');
    for(let i = 0; i < 12; i++) {
      cards[i].style.display = 'none';
    };
    for(let i = 0; i < 12; i++) {
      console.log(searchBar.value);
      if(usersOnPage[i].includes(searchBar.value)) {
        console.log(usersOnPage[i]);
        let userToShow = document.getElementById(usersOnPage[i] + " card")
        userToShow.style.display = 'static';
      }
    };
    if(searchBar.value.length === 0) {
      for(let i = 0; i < 12; i++) {
        cards[i].style.display = 'static';
      };
    }
  });
}; //end of searchBar

searchBar();

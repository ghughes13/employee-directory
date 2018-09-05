let gallery = document.getElementById('gallery');
let usersOnPage = [];

$.ajax({
  url: 'https://randomuser.me/api/?results=12&nat=US',
  dataType: 'json',
  success: function(data) {
    data.results.forEach(person => {
      // console.log(person);
      addToGallery(person);
    });
  }
});

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
  cardDiv.innerHTML = galleryTemplate;
  gallery.appendChild(cardDiv);
  makeModal(userPic, userName, userEmail, person);
  cardDiv.addEventListener('click', (e) => {
    for(let i = 0; i < e.path.length; i++) {
      if(e.path[i].classList.contains('card')) {
        console.log(i, e.path[i].lastChild.firstChild.innerHTML);
        break;
      };
    }
  });
};

let makeModal = (userPic, userName, userEmail, person) => {
  usersOnPage.push(userName);
  let userCity = person.location.city;
  let userNumber = person.cell;
  let fullAddress = person.location.street + ", " + person.location.city + ", " + person.location.state + person.location.postcode;
  let userBirthday = person.dob.date;
  let modalContent =
      `<div class="modal">
          <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
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
  modalCard.style.display = 'none';
  modalCard.innerHTML = modalContent;
  document.body.appendChild(modalCard);
};

let cards = document.getElementsByClassName('card');
console.log(cards);

for(let i = 0; i < cards.length; i++) {
  console.log('in for loop');
  cards[i].addEventListener('click', (event) => {
    let name = document.getElementById('name').innerHTML;
    console.log(name);
  })
};



// cards.forEach(card => card.addEventListener('click', (event) => {
//   let name = document.getElementById('name').innerHTML;
//   console.log(name);
// }));

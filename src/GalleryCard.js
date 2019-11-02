import React, {useState} from 'react';

function GalleryCard(props) {

  // [userName, setUsename] = useState(this.props.userName);

  console.log(props);

  return (
    <div className="App">
      <div class="card-img-container">
          <img class="card-img" src="${userPic}" alt="profile picture" />
      </div>
      {/* <div class="card-info-container"><h3 id="name" class="card-name cap">{userName}</h3> */}
          {/* <p class="card-text">{userEmail}</p> */}
          {/* <p class="card-text cap">{userCityState}</p> */}
      {/* </div>` */}
    </div>
  );
}

export default GalleryCard;

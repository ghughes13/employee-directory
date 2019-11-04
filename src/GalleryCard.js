import React, {useState} from 'react';
import Modal from './Modal';

function GalleryCard(props) {

  const [user] = useState(props.props.data.results);

  const showModal = (findThis) => {
    document.getElementById(findThis).style.display = 'block';
  }

    const people = user.map((person, index) => 
      <div className="card" id={'modalID-' + index} key={'modalNum-' + index} onClick={(e) => showModal(person.name.first + '-' + person.name.last)} data-search={person.name.first + '-' + person.name.last}>
        <div className="card-img-container">
            <img className="card-img" src={person.picture.large} alt={person.name.first + 'thumbnail picture'} />
        </div>
        <div className="card-info-container">
            <h3 id="name" className="card-name cap">{person.name.first + ' ' + person.name.last}</h3>
            <p className="card-text">{person.email}</p>
            <p className="card-text cap">{person.location.city + ", " + person.location.state}</p>
        </div>
        <Modal props={person} modalNum={index}/>
      </div>
    )

  return ( 
    <div id="gallery" className="gallery">
      {people}
    </div>
  );
}

export default GalleryCard;
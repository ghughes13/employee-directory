import React, {useState} from 'react';

export default function Modal(props) {

  const [modalPerson] = useState(props.props);

  const hidecards = (e) => {
    document.querySelectorAll('.modal-container').forEach((card) => {
      card.style.display = "none";
      e.stopPropagation();
    })
  }

  const showNextModal = (e, num) => {
    document.querySelector("[data-id='modalID-" + num + "']").style.display = "none";
    num++
    if(num === 12) {
      num = 0;
    }
    document.querySelector("[data-id='modalID-" + num + "']").style.display = "block";
    e.stopPropagation();
  }

  const showPrevModal = (e, num) => {
    document.querySelector("[data-id='modalID-" + num + "']").style.display = "none";
    num--
    if(num === -1) {
      num = 11;
    }
    document.querySelector("[data-id='modalID-" + num + "']").style.display = "block";
    e.stopPropagation();
  }

  return ( 
    <div className="modal-container" id={modalPerson.name.first + '-' + modalPerson.name.last} data-id={"modalID-" + props.modalNum}>
      <div className="modal">
        <button type="button" id="modal-close-btn" className="modal-close-btn" onClick={(e) => hidecards(e)}>
          <strong>X</strong>
        </button>
        <div className="modal-info-container">
            <img className="modal-img" src={modalPerson.picture.large} alt={modalPerson.name.first + 'profile picture'} />
            <h3 id="name" className="modal-name cap">{modalPerson.name.first + ' ' + modalPerson.name.last}</h3>
            <p className="modal-text">{modalPerson.email}</p>
            <p className="modal-text cap">{modalPerson.location.city + ", " + modalPerson.location.state}</p>
            <hr />
            <p className="modal-text">{modalPerson.phone}</p>
            <p className="modal-text">{modalPerson.location.street.name + " " + modalPerson.location.street.number + ", " + modalPerson.location.city + ", " + modalPerson.location.state + " " + modalPerson.location.postcode}</p>
            <p className="modal-text">Birthday: {modalPerson.dob.date.substring(0,10)}</p>
        </div>
      </div>

      <div className="modal-btn-container">
          <button type="button" id="modal-prev" className="modal-prev btn" onClick={(e) => showPrevModal(e, props.modalNum)}>Prev</button>
          <button type="button" id="modal-next" className="modal-next btn" onClick={(e) => showNextModal(e, props.modalNum)}>Next</button>
      </div>
    </div>
  );
};
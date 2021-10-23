import React, { useState, useEffect } from "react";

interface SyntheticEvent {
  bubbles: boolean;
  cancelable: boolean;
  currentTarget: EventTarget;
  defaultPrevented: boolean;
  eventPhase: number;
  isTrusted: boolean;
  nativeEvent: Event;
  preventDefault(): void;
  stopPropagation(): void;
  target: EventTarget;
  timeStamp: Date;
  type: string;
}

export default function Modal({
  employee,
  modalNum,
  modalIndex,
  changeModalIndex,
}: { 
  employee: any
  modalNum: any
  modalIndex: any
  changeModalIndex: any
} ) {
  const [modalPerson] = useState(employee);

  useEffect(() => {});

  const closeModal = (e: SyntheticEvent) => {
    changeModalIndex(null);
    e.stopPropagation();
  };

  const showNextModal = (e: SyntheticEvent) => {
    if (modalIndex === 11) {
      changeModalIndex(1);
    } else {
      changeModalIndex(modalIndex + 1);
    }
    e.stopPropagation();
  };

  const showPrevModal = (e: SyntheticEvent) => {
    if (modalIndex === 0) {
      changeModalIndex(11);
    } else {
      changeModalIndex(modalIndex - 1);
    }
    e.stopPropagation();
  };

  return (
    <>
      {modalIndex === modalNum ? (
        <div
          className="modal-container"
          id={modalPerson.name.first + "-" + modalPerson.name.last}
          data-id={"modalID-" + modalNum}
        >
          <div className="modal">
            <button
              type="button"
              id="modal-close-btn"
              className="modal-close-btn"
              onClick={(e: any) => closeModal(e)}
            >
              <strong>X</strong>
            </button>
            <div className="modal-info-container">
              <img
                className="modal-img"
                src={modalPerson.picture.large}
                alt={modalPerson.name.first + "profile picture"}
              />
              <h3 id="name" className="modal-name cap">
                {modalPerson.name.first + " " + modalPerson.name.last}
              </h3>
              <p className="modal-text">{modalPerson.email}</p>
              <p className="modal-text cap">
                {modalPerson.location.city + ", " + modalPerson.location.state}
              </p>
              <hr />
              <p className="modal-text">{modalPerson.phone}</p>
              <p className="modal-text">
                {modalPerson.location.street.number +
                  " " +
                  modalPerson.location.street.name +
                  ", " +
                  modalPerson.location.city +
                  ", " +
                  modalPerson.location.state +
                  " " +
                  modalPerson.location.postcode}
              </p>
              <p className="modal-text">
                Birthday: {modalPerson.dob.date.substring(0, 10)}
              </p>
            </div>
          </div>

          <div className="modal-btn-container">
            <button
              type="button"
              id="modal-prev"
              className="modal-prev btn"
              onClick={(e: any) => showPrevModal(e)}
            >
              Prev
            </button>
            <button
              type="button"
              id="modal-next"
              className="modal-next btn"
              onClick={(e: any) => showNextModal(e)}
            >
              Next
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

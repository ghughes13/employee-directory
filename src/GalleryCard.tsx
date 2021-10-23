import React, { useState } from "react";
import Modal from "./Modal";

interface person {
  name: {
    [key: string]: name,
  },
  picture: {
    large: string
  },
  email: string,
  location: {
    city: string,
    state: string,
  }
}

interface name {
  first: string;
  last: string;
}

function GalleryCard({ employees }: {employees: person[]}) {
  const [user] = useState(employees);
  const [modalIndex, setModalIndex] = useState();

  const changeModalIndex = (index: any) => {
    setModalIndex(index);
  };

  const cards = user.map((employee, index) => (
    <div
      className="card"
      id={"modalID-" + index}
      key={"modalNum-" + index}
      onClick={(e) => {
        changeModalIndex(index);
      }}
      data-search={employee.name.first + "-" + employee.name.last}
    >
      <div className="card-img-container">
        <img
          className="card-img"
          src={employee.picture.large}
          alt={employee.name.first + "thumbnail picture"}
        />
      </div>
      <div className="card-info-container">
        <h3 id="name" className="card-name cap">
          {employee.name.first + " " + employee.name.last}
        </h3>
        <p className="card-text">{employee.email}</p>
        <p className="card-text cap">
          {employee.location.city + ", " + employee.location.state}
        </p>
      </div>
      <Modal
        employee={employee}
        modalNum={index}
        modalIndex={modalIndex}
        changeModalIndex={changeModalIndex}
      />
    </div>
  ));

  return (
    <div id="gallery" className="gallery">
      {cards}
    </div>
  );
}

export default GalleryCard;

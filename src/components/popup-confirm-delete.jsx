import React, {useEffect, useState} from "react";
import {API_URL} from "./constants/links.jsx";

const PopupConfirmDelete  = (prop) => {


  useEffect(() => {

  }, []);

  const handleDelete = async () => {
    try {
      const response = await fetch(`${API_URL}Product/delete/${prop.id}`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          'Authorization': '123456789',
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log("deleted product:", data);
      } else {
        console.error("Failed to delete product");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="Popup-Confirm-Outer">
      <div className="Popup-Confirm-Inner">
        <div className="Popup-Confirm-Above">
          <div className="Popup-Confirm-Icon-Outer">
            <svg
              className="Popup-Confirm-Icon"
              xmlns="http://www.w3.org/2000/svg"
              width="107"
              height="107"
              viewBox="0 0 107 107"
              fill="none"
            >
              <path
                d="M53.5 13.375L93.625 89.1667H13.375L53.5 13.375Z"
                fill="#F24E1E"
                fillOpacity={0.3}
                stroke="#F24E1E"
              />
              <path
                d="M53.5 44.5835V62.4168"
                stroke="#F24E1E"
              />
              <path
                d="M53.4998 80.2502C55.9621 80.2502 57.9582 78.2541 57.9582 75.7918C57.9582 73.3296 55.9621 71.3335 53.4998 71.3335C51.0376 71.3335 49.0415 73.3296 49.0415 75.7918C49.0415 78.2541 51.0376 80.2502 53.4998 80.2502Z"
                fill="#F24E1E"
              />
            </svg>
          </div>
          <div className="Popup-Text-Above-Outer">
            <p className="Popup-Text-Above">Weet je het zeker?</p>
          </div>
          <div className="Popup-Text-Above-Outer2">
            <p className="Popup-Text-Above2">
              Hierbij wordt de item
              <span className="Popup-Text-Above-Highlight"> {prop.itemname}</span> permanent
              verwijderd van de database
            </p>
          </div>
        </div>
        <div className="Popup-Confirm-Below">
          <button className="Popup-Confirm-Below-Button-Annuleer" onClick={()=> prop.cancel(false)}>Annuleer</button>
          <button className="Popup-Confirm-Below-Button-Verwijderen" onClick={handleDelete}>Verwijderen</button>
        </div>
      </div>
    </div>
  );
};

export default PopupConfirmDelete;

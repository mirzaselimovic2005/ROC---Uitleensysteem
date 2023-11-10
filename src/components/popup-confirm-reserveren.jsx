import React, { useEffect } from "react";

const PopupConfirmReserveren = (prop) => {
  useEffect(() => {}, []);

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
              fill="none">
              <path
                d="M53.5 13.375L93.625 89.1667H13.375L53.5 13.375Z"
                fill="white"
                fill-opacity="0.3"
                stroke="#FFA500"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"/>
              <path
                d="M53.5 44.5835V62.4168"
                stroke="#FFA500"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"/>
              <path
                d="M53.4998 80.2502C55.9621 80.2502 57.9582 78.2541 57.9582 75.7918C57.9582 73.3296 55.9621 71.3335 53.4998 71.3335C51.0376 71.3335 49.0415 73.3296 49.0415 75.7918C49.0415 78.2541 51.0376 80.2502 53.4998 80.2502Z"
                fill="#FFA500"/>
            </svg>
          </div>
          <div className="Popup-Text-Above-Outer">
            <p className="Popup-Text-Above">Wil je dit item reserveren?</p>
          </div>
          <div className="Popup-Text-Above-Outer2">
            <p className="Popup-Text-Above2">
              Hierbij wordt de item
              <span class="Popup-Text-Above-Highlight">
                {prop.itemname}
              </span>
              aangevraagd om te lenen
            </p>
          </div>
        </div>
        <div className="Popup-Confirm-Below">
          <button className="Popup-Confirm-Below-Button-Annuleer">
            Annuleer
          </button>
          <button className="Popup-Confirm-Below-Button-Verwijderen" style={{ backgroundColor: "#FFA500" }}>
            Aanvragen
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopupConfirmReserveren;

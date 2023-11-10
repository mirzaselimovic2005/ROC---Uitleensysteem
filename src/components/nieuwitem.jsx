import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API_URL } from "./constants/links";

const Nieuwitem = (props) => {
  const [selectedStatus, setSelectedStatus] = useState(1);
  const [selectedUserType, setSelectedUserType] = useState(1);
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");

  const handleClose = () => {
    props.onClose();
  };

  const handleAddProduct = async () => {
    try {
      const productData = {
        StatusId: selectedStatus,
        Level: selectedUserType,
        Name: productName,
        Description: description,
      };

      const response = await fetch(`${API_URL}Product`, {
        method: "POST",
        body: JSON.stringify(productData),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: "123456789",
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Product aangemaakt:", data);
      } else {
        console.error("Gefaald om product aan te maken");
        console.log(JSON.stringify(productData));
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {}, []);

  return (
    <div className="PopAanmaken">
      <div className="top">
        <h1>Nieuw item toevoegen</h1>
        <p>Wat is de status van het item</p>

        <div className="control-group">
          <label className="control control-radio">
            <input type="radio" name="radio" defaultChecked="checked" value={1} />
            Onbeschadigd
            <div className="control_indicator"></div>
          </label>
          <label className="control control-radio">
            <input type="radio" name="radio" defaultChecked="checked" value={2}/>
            Beschadigd
            <div className="control_indicator"></div>
          </label>
          <label className="control control-radio">
            <input type="radio" name="radio" defaultChecked="checked" value={3} />
            Licht gebruikt
            <div className="control_indicator"></div>
          </label>
        </div>

        <div className="white-space"></div>
        <p>Wie mag lenen</p>

        <div className="control-group">
          <label className="control control-radio">
            <input type="radio" name="radio2" defaultChecked="checked" value={1} />
            Medewerker
            <div className="control_indicator"></div>
          </label>
          <label className="control control-radio">
            <input type="radio" name="radio2" defaultChecked="checked" value={2} />
            Leerling
            <div className="control_indicator"></div>
          </label>
        </div>
      </div>
      <div className="mid">
        <div className="container-inputs">
          <div className="input-label">
            <label className="first" htmlFor="">
              Product
            </label>
            <label htmlFor="">Beschrijving</label>
          </div>
          <div className="container-top-input">
            <input
              placeholder="Product"
              className="mid-input"
              type="text"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
            <input
              placeholder="Beschrijving"
              className="mid-input"
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="bottom">
        <button className="button-annuleer" onClick={handleClose}>
          Annuleer
        </button>
        <button className="button-toevoegen" onClick={handleAddProduct}>
        Toevoegen
      </button>
        <img
          className="roccirkle-bot"
          src="./src/assets/roc-cirkle.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Nieuwitem;

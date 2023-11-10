import React from "react";
import PopupConfirmDelete from "./popup-confirm-delete.jsx";
import { useState } from "react";
import { API_URL } from "./constants/links.jsx";

const Itembewerken = (props) => {

    const handleClose = () => {
        props.onClose();
      };

    const handleFetch = async () => {
      try {
        const response = await fetch(`${API_URL}Product/update/1`, {
          method: "PUT",
          body: JSON.stringify({
            Product
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            'Authorization': '123456789',
          },
        });
    
        if (response.ok) {
          const data = await response.json();
          console.log("Product updated:", data);
        } else {
          console.error("Failed to update product");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };
    
    const [Product, setProduct] = useState({
      Name: 'Thijmen',
      StatusId: 1,
      Level: 1,
      Description: 'this is a product'
    });


    const [showDelete, setShowDelete] = React.useState(false);


    if (showDelete) {
        return <PopupConfirmDelete id={props.id} itemname={"awf"} cancel={setShowDelete} />
    } else {
        return (
            <div className="PopAanmaken">
                <div className="top">
                    <h1>Item bewerken</h1>
                    <p>Wat is de status van het item</p>

                    <div className="control-group">
                        <label className="control control-radio">
                            <input type="radio" name="radio" defaultChecked="checked" />
                            Onbeschadigd
                            <div className="control_indicator"></div>
                        </label>
                        <label className="control control-radio">
                            <input type="radio" name="radio" defaultChecked="checked" />
                            Beschadigd
                            <div className="control_indicator"></div>
                        </label>
                        <label className="control control-radio">
                            <input type="radio" name="radio" defaultChecked="checked" />
                            Licht gebruikt
                            <div className="control_indicator"></div>
                        </label>
                    </div>

                    <div className="white-space"></div>
                    <p>Wie mag lenen</p>

                    <div className="control-group">
                        <label className="control control-radio">
                            <input type="radio" name="radio2" defaultChecked="checked" />
                            Medewerker
                            <div className="control_indicator"></div>
                        </label>
                        <label className="control control-radio">
                            <input type="radio" name="radio2" defaultChecked="checked" />
                            Leerling
                            <div className="control_indicator"></div>
                        </label>
                    </div>
                </div>
                <div className="mid">

                    <div className="container-inputs">
                        <div className="input-label">
                            <label className="first" htmlFor="">Item ID</label>
                            <label htmlFor="">Item name</label>
                        </div>
                        <div className="container-top-input">
                            <input
                                placeholder="{itemID}"
                                className="mid-input"
                                type="text"
                                name=""
                                id=""
                                readOnly
                            />
                            <input
                                placeholder="Arduino"
                                className="mid-input"
                                type="text"
                                name=""
                                id=""
                            />
                        </div>
                    </div>
                    <div className="container-inputs">
                        <div className="input-label">
                            <label htmlFor="">Beschrijving</label>
                        </div>
                        <div className="container-top-input">
                            <input
                                placeholder="Beschrijving"
                                className="mid-input"
                                type="text"
                                name=""
                                id=""
                            />
                        </div>
                    </div>
                </div>
                <div className="bottom">
                    <button className="button-annuleer" onClick={handleClose}>Annuleer</button>
                    <button style={{marginRight: '40px'}} className="button-toevoegen">Bewerken</button>
                    <button style={{marginLeft: '40px'}} className="button-verwijderen" onClick={()=> setShowDelete(true)}>Verwijderen</button>
                    <img
                        className="roccirkle-bot2"
                        src="./src/assets/roc-cirkle.png"
                        alt=""
                    />
                </div>
            </div>
        );
    }
}

export default Itembewerken;
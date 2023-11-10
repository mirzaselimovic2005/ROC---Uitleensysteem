import React, { useEffect, useState } from "react";
import Nieuwitem from "./nieuwitem";
import Sidebar from "./Sidebar.jsx";
import Itembewerken from "./itembewerken";
import {API_URL} from "./constants/links.jsx";
import BeherenRow from "./BeherenRow.jsx";

const Beheerder = (prop) => {

 const handleFetch = async () => {
  try {
    const response = await fetch(`${API_URL}Product/Update/1`, {
      method: "POST",
      body: JSON.stringify({
        product
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        'Authorization': '123456789',
      },
    });

    if (response.ok) {
      const data = await response.json();
      console.log("Product created:", data);
    } else {
      console.error("Failed to create product");
    }
  } catch (error) {
    console.error("Error:", error);
  }
};


const [product, setProduct] = useState({
  Name: 'Thijmen',
  StatusId: 1,
  Level: 1,
  Description: 'this is a product'
});
  
  const [isNieuwitemOpen, setIsNieuwitemOpen] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchItems()
  }, []);

  const openNieuwitem = () => {
    setIsNieuwitemOpen(true);
  };

  const fetchItems = async () => {
    try {
      const res = await fetch(`${API_URL}Product/Products`, {
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          'Authorization': '123456789',
        },
      });
      if (res.ok) {
        const dataa = await res.json();
        console.log("got products:", dataa);
        setData(dataa)
      } else {
        console.error("Failed to get product");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }


  return (
    <div>
      <Sidebar />
      <div className="Lenen-Background-Outer">
        <div className="Lenen-Zoekbalk-Outer">
          <div className="Lenen-Zoekbalk" style={{width: "72vw"}}>
            <div className="Lenen-Zoekbalk-Inner">
              <div className="Lenen-Zoekbalk-Icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M16.6 18L10.3 11.7C9.8 12.1 9.225 12.4167 8.575 12.65C7.925 12.8833 7.23333 13 6.5 13C4.68333 13 3.146 12.3707 1.888 11.112C0.63 9.85333 0.000666667 8.316 0 6.5C0 4.68333 0.629333 3.146 1.888 1.888C3.14667 0.63 4.684 0.000666667 6.5 0C8.31667 0 9.854 0.629333 11.112 1.888C12.37 3.14667 12.9993 4.684 13 6.5C13 7.23333 12.8833 7.925 12.65 8.575C12.4167 9.225 12.1 9.8 11.7 10.3L18 16.6L16.6 18ZM6.5 11C7.75 11 8.81267 10.5623 9.688 9.687C10.5633 8.81167 11.0007 7.74933 11 6.5C11 5.25 10.5623 4.18733 9.687 3.312C8.81167 2.43667 7.74933 1.99933 6.5 2C5.25 2 4.18733 2.43767 3.312 3.313C2.43667 4.18833 1.99933 5.25067 2 6.5C2 7.75 2.43767 8.81267 3.313 9.688C4.18833 10.5633 5.25067 11.0007 6.5 11Z"
                    fill="#555555"
                  />
                </svg>
              </div>
              <input
                className="Lenen-Zoekbalk-Text"
                type="text"
                placeholder="Zoeken voor producten.."
              />
            </div>
          </div>
          <div className="Lenen-Filter-Outer">
            <button className="Lenen-Filter">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="12"
                viewBox="0 0 20 12"
                fill="none"
              >
                <path
                  d="M19 2H1C0.734784 2 0.48043 1.89464 0.292893 1.7071C0.105357 1.51957 0 1.26521 0 0.999999C0 0.734783 0.105357 0.480429 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0H19C19.2652 0 19.5196 0.105357 19.7071 0.292893C19.8946 0.480429 20 0.734783 20 0.999999C20 1.26521 19.8946 1.51957 19.7071 1.7071C19.5196 1.89464 19.2652 2 19 2ZM15.6667 6.66666H4.33333C4.06812 6.66666 3.81376 6.5613 3.62623 6.37376C3.43869 6.18623 3.33333 5.93188 3.33333 5.66666C3.33333 5.40144 3.43869 5.14709 3.62623 4.95955C3.81376 4.77202 4.06812 4.66666 4.33333 4.66666H15.6667C15.9319 4.66666 16.1862 4.77202 16.3738 4.95955C16.5613 5.14709 16.6667 5.40144 16.6667 5.66666C16.6667 5.93188 16.5613 6.18623 16.3738 6.37376C16.1862 6.5613 15.9319 6.66666 15.6667 6.66666ZM11.6667 11.3333H8.33333C8.06812 11.3333 7.81376 11.228 7.62623 11.0404C7.43869 10.8529 7.33333 10.5985 7.33333 10.3333C7.33333 10.0681 7.43869 9.81375 7.62623 9.62621C7.81376 9.43868 8.06812 9.33332 8.33333 9.33332H11.6667C11.9319 9.33332 12.1862 9.43868 12.3738 9.62621C12.5613 9.81375 12.6667 10.0681 12.6667 10.3333C12.6667 10.5985 12.5613 10.8529 12.3738 11.0404C12.1862 11.228 11.9319 11.3333 11.6667 11.3333Z"
                  fill="#555555"
                />
              </svg>
              <div className="Lenen-Filter-Text">Filter</div>
            </button>
            <button
              style={{ marginLeft: "0.25rem", background: "#FFB224" }}
              className="Lenen-Filter"
              onClick={openNieuwitem}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
              >
                <path
                  d="M12 6.85714H6.85714V12H5.14286V6.85714H0V5.14286H5.14286V0H6.85714V5.14286H12V6.85714Z"
                  fill="white"
                />
              </svg>
              <div className="Lenen-Filter-Text" style={{ color: "#ffffff" }}>
                Voeg
              </div>
            </button>
          </div>
        </div>
        <div className="Lenen-Spacer"></div>
        <div className="Lenen-Seperate-Line"></div>
        <div className="Lenen-Spacer"></div>
        <div className="Lenen-Table-Outer">
          <div>
            <div
              className="Lenen-Items-Outer-Header"
              style={{ backgroundColor: "#FFF2D9", border: "none" }}
            >
              <div className="Lenen-Items-Text">
                <p>Item ID</p>
              </div>
              <div className="Lenen-Items-Text">
                <p>Item Naam</p>
              </div>
              <div className="Lenen-Items-Text">
                <p>Status</p>
              </div>
              <div className="Lenen-Items-Text">
                <p>Beschikbaar</p>
              </div>
              <div className="Lenen-Items-Text">
                <p>Beschrijving</p>
              </div>
              <div className="Lenen-Items-Text">
                <p>Details</p>
              </div>
            </div>
            {isNieuwitemOpen && (
                <div className="Nieuwitem-Modal-Outer">
                  <div className="Nieuwitem-Modal-Inner">
                    <Nieuwitem onClose={()=>setIsNieuwitemOpen(false)}></Nieuwitem>
                  </div>
                </div>
            )}
            {
              data.map((result) => {
                return <BeherenRow key={result.id} id={result.id} name={result.name} statusId={result.statusId} level={result.level} description={result.description} />
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Beheerder;

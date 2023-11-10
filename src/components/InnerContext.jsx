import React, { useEffect } from "react";
import Zoelkbalk from "./zoekbalk";

const InnerContext = (prop) => {
  useEffect(() => {}, []);

  return (
    <div className="Lenen-Background-Outer">
      <Zoelkbalk></Zoelkbalk>
      <div className="Lenen-Spacer"></div>
      <div className="Lenen-Seperate-Line"></div>
      <div className="Lenen-Spacer"></div>
      <div className="Lenen-Table-Outer">
        <div>
          <div
            className="Lenen-Items-Outer-Header"
            style={{ backgroundColor: "#FFF2D9", border: "none" }}
          >
            <div className="Lenen-Items-Text">Item ID</div>
            <div className="Lenen-Items-Text">Item Naam</div>
            <div className="Lenen-Items-Text">Status</div>
            <div className="Lenen-Items-Text">Beschikbaar</div>
            <div className="Lenen-Items-Text">Barcode</div>
            <div className="Lenen-Items-Text">Details</div>
          </div>
          <div
            style={{ backgroundColor: "#ffffff" }}
            className="Lenen-Items-Outer"
          >
            <div className="Lenen-Items-Inner">
              <div className="Lenen-Items-Text">{prop.itemid}</div>
              <div className="Lenen-Items-Text">{prop.itemnaam}</div>
              <div className="Lenen-Items-Text">{prop.itemstatus}</div>
              <div className="Lenen-Items-Text">{prop.beschikbaar}</div>
              <div className="Lenen-Items-Text">{prop.itembarcode}</div>
            </div>
          </div>
          <div
            style={{ backgroundColor: "#ffffff" }}
            className="Lenen-Items-Outer"
          >
            <div className="Lenen-Items-Inner">
              <div className="Lenen-Items-Text">{prop.itemid}</div>
              <div className="Lenen-Items-Text">{prop.itemnaam}</div>
              <div className="Lenen-Items-Text">{prop.itemstatus}</div>
              <div className="Lenen-Items-Text">{prop.beschikbaar}</div>
              <div className="Lenen-Items-Text">{prop.itembarcode}</div>
            </div>
          </div>
          <div
            style={{ backgroundColor: "#ffffff" }}
            className="Lenen-Items-Outer"
          >
            <div className="Lenen-Items-Inner">
              <div className="Lenen-Items-Text">{prop.itemid}</div>
              <div className="Lenen-Items-Text">{prop.itemnaam}</div>
              <div className="Lenen-Items-Text">{prop.itemstatus}</div>
              <div className="Lenen-Items-Text">{prop.beschikbaar}</div>
              <div className="Lenen-Items-Text">{prop.itembarcode}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InnerContext;

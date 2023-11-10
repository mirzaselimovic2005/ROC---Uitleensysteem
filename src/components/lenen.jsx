import React, { useEffect } from "react";
import Zoekbalk from "./zoekbalk.jsx";
import Sidebar from "./Sidebar.jsx";

const Lenen = (prop) => {
  useEffect(() => {}, []);

  return (
    <div>
      <Sidebar />
      <div className="Lenen-Background-Outer">
        <Zoekbalk></Zoekbalk>
        <div className="Lenen-Spacer"></div>
        <div className="Lenen-Seperate-Line"></div>
        <div className="Lenen-Spacer"></div>
        <div className="Lenen-Table-Outer">
          <div>
            <div>
              <div className="Lenen-Items-Outer-Header">
                <div className="Lenen-Items-Text">Item ID</div>
                <div className="Lenen-Items-Text">Item Naam</div>
                <div className="Lenen-Items-Text">Status</div>
                <div className="Lenen-Items-Text">Beschikbaar</div>
                <div className="Lenen-Items-Text">Barcode</div>
                <div className="Lenen-Items-Text">Leenoptie</div>
              </div>
              <div
                style={{ backgroundColor: "#ffa500" }}
                className="Lenen-Items-Outer"
              >
                <div className="Lenen-Items-Inner">
                  <div className="Lenen-Items-Text">{prop.itemid}</div>
                  <div className="Lenen-Items-Text">{prop.itemnaam}</div>
                  <div className="Lenen-Items-Text">{prop.itemstatus}</div>
                  <div className="Lenen-Items-Text">{prop.beschikbaar}</div>
                  <div className="Lenen-Items-Text">{prop.itembarcode}</div>
                  <div className="Lenen-Items-Text">
                    <button className="Leen-Items-Button">
                      <p className="Lenen-Items-Button-Text">Lenen</p>
                    </button>
                  </div>
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
                  <div className="Lenen-Items-Text">
                    <button className="Leen-Items-Button">
                      <p className="Lenen-Items-Button-Text">Lenen</p>
                    </button>
                  </div>
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
                  <div className="Lenen-Items-Text">
                    <button className="Leen-Items-Button">
                      <p className="Lenen-Items-Button-Text">Lenen</p>
                    </button>
                  </div>
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
                  <div className="Lenen-Items-Text">
                    <button className="Leen-Items-Button">
                      <p className="Lenen-Items-Button-Text">Lenen</p>
                    </button>
                  </div>
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
                  <div className="Lenen-Items-Text">
                    <button className="Leen-Items-Button">
                      <p className="Lenen-Items-Button-Text">Lenen</p>
                    </button>
                  </div>
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
                  <div className="Lenen-Items-Text">
                    <button className="Leen-Items-Button">
                      <p className="Lenen-Items-Button-Text">Lenen</p>
                    </button>
                  </div>
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
                  <div className="Lenen-Items-Text">
                    <button className="Leen-Items-Button">
                      <p className="Lenen-Items-Button-Text">Lenen</p>
                    </button>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lenen;

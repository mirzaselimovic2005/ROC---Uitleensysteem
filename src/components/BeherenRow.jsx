import React, {useState} from "react";
import Nieuwitem from "./nieuwitem.jsx";
import Itembewerken from "./itembewerken.jsx";

const BeherenRow = (prop) => {

    const [isItembewerkenOpen, setIsItembewerkenOpen] = useState(false);


    return (
        <div
            style={{ backgroundColor: "#ffffff" }}
            className="Lenen-Items-Outer"
        >
            <div className="Lenen-Items-Inner">
                <div className="Lenen-Items-Text">{prop.id}</div>
                <div className="Lenen-Items-Text">{prop.name}</div>
                <div className="Lenen-Items-Text">{prop.statusId}</div>
                <div className="Lenen-Items-Text">{prop.level}</div>
                <div className="Lenen-Items-Text">{prop.description}</div>
                <div className="Lenen-Items-Text">
                    <button
                        className="Leen-Items-Button"
                        style={{ background: "none" }}
                        onClick={()=>setIsItembewerkenOpen(true)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="33"
                            height="33"
                            viewBox="0 0 33 33"
                            fill="none"
                        >
                            <path
                                d="M16.0534 22.275C14.5218 22.275 13.0529 21.6666 11.9699 20.5835C10.8868 19.5005 10.2784 18.0316 10.2784 16.5C10.2784 14.9684 10.8868 13.4995 11.9699 12.4165C13.0529 11.3334 14.5218 10.725 16.0534 10.725C17.585 10.725 19.0539 11.3334 20.1369 12.4165C21.22 13.4995 21.8284 14.9684 21.8284 16.5C21.8284 18.0316 21.22 19.5005 20.1369 20.5835C19.0539 21.6666 17.585 22.275 16.0534 22.275ZM28.3129 18.1005C28.3789 17.5725 28.4284 17.0445 28.4284 16.5C28.4284 15.9555 28.3789 15.411 28.3129 14.85L31.7944 12.1605C32.1079 11.913 32.1904 11.4675 31.9924 11.1045L28.6924 5.3955C28.4944 5.0325 28.0489 4.884 27.6859 5.0325L23.5774 6.6825C22.7194 6.039 21.8284 5.478 20.7889 5.0655L20.1784 0.693003C20.1449 0.498661 20.0436 0.322458 19.8926 0.195613C19.7416 0.0687684 19.5506 -0.000527628 19.3534 3.02522e-06H12.7534C12.3409 3.02522e-06 11.9944 0.297003 11.9284 0.693003L11.3179 5.0655C10.2784 5.478 9.3874 6.039 8.5294 6.6825L4.4209 5.0325C4.0579 4.884 3.6124 5.0325 3.4144 5.3955L0.114397 11.1045C-0.100103 11.4675 -0.0011027 11.913 0.312397 12.1605L3.7939 14.85C3.7279 15.411 3.6784 15.9555 3.6784 16.5C3.6784 17.0445 3.7279 17.5725 3.7939 18.1005L0.312397 20.8395C-0.0011027 21.087 -0.100103 21.5325 0.114397 21.8955L3.4144 27.6045C3.6124 27.9675 4.0579 28.0995 4.4209 27.9675L8.5294 26.301C9.3874 26.961 10.2784 27.522 11.3179 27.9345L11.9284 32.307C11.9944 32.703 12.3409 33 12.7534 33H19.3534C19.7659 33 20.1124 32.703 20.1784 32.307L20.7889 27.9345C21.8284 27.5055 22.7194 26.961 23.5774 26.301L27.6859 27.9675C28.0489 28.0995 28.4944 27.9675 28.6924 27.6045L31.9924 21.8955C32.1904 21.5325 32.1079 21.087 31.7944 20.8395L28.3129 18.1005Z"
                                fill="#FFA500"
                            />
                        </svg>
                    </button>
                </div>
                {isItembewerkenOpen && (
                    <div className="Itembewerken-Modal-Outer">
                        <div className="Itembewerken-Modal-Inner">
                            <Itembewerken id={prop.id} onClose={()=>setIsItembewerkenOpen(false)}></Itembewerken>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default BeherenRow
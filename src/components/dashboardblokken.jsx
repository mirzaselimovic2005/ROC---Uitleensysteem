import React from "react";
import {useEffect} from "react";

const DashboardBlokken = (props) => {

    useEffect(() => {

    }, []);

    return (
        <div style={{backgroundColor: `${props.color}`}} type={props.type} className="dashboardblokken">
            <div className="container-aantal">
                <svg xmlns="http://www.w3.org/2000/svg" width="91" height="82" viewBox="0 0 91 82" fill="none">
                <path d="M0 0H91V18.2H0V0ZM77.35 22.75H4.55V72.8001C4.55 75.2135 5.50875 77.5282 7.21533 79.2347C8.92191 80.9413 11.2365 81.9001 13.65 81.9001H77.35C79.7635 81.9001 82.0781 80.9413 83.7847 79.2347C85.4913 77.5282 86.45 75.2135 86.45 72.8001V22.75H77.35ZM63.7 50.05H27.3V40.95H63.7V50.05Z" fill="white"/>
                </svg>
                <p className="nummer">{props.count}</p>
            </div>
            <div className="text-below" type={props}>{props.text}</div>
        </div>
    )
}

export default DashboardBlokken;
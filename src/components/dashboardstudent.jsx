import React from "react";
import Sidebar from "./Sidebar";
import InnerContext from "./InnerContext";
import DashboardBlokken from "./dashboardblokken";

const DashboardStudent  = (props) => {
    return (
        <div>
            <Sidebar />
            <div className="dashboard-blokken-container">
                <div className="dashboardblok">
                    <DashboardBlokken count="7" color="#ffa500" text="geleend afgelopen maand" type=""/>
                </div>
                <div className="dashboardblok">
                    <DashboardBlokken count="30" color="#000000" text="aanwezig aantal" type=""/>
                </div>
                <div className="dashboardblok">
                    <DashboardBlokken count="30" color="#000000" text="afwezig aantal" type=""/>
                </div>
            </div>
            <InnerContext />
        </div>
    )
}

export default DashboardStudent;
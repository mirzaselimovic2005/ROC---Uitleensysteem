import rocLogo from "../assets/roc-klein.png";
import {useLocation, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";

const Sidebar = () => {
    
    let location = useLocation();
    let navigate = useNavigate();
    let [admin, setAdmin] = useState(true);

    useEffect(() => {
        document.addEventListener('keydown', handleEscapeKeyPress);
        return () => {
            document.removeEventListener('keydown', handleEscapeKeyPress);
        };
    }, []);

    const handleEscapeKeyPress = (event) => {
        const sidebarContainer = document.querySelector(".sidebar-container");
        if (event.key === 'Escape' && sidebarContainer.classList.contains("bg-grayed")) {
            sidebarToggle();
        }
    };

    const closeSidebar = () => {
        const sidebarContainer = document.querySelector(".sidebar-container");
        if (sidebarContainer.classList.contains("bg-grayed")) {
            sidebarToggle();
        }
    }
    
    const sidebarToggle = () => {
        const sidebar = document.querySelector(".sidebar");
        const sidebarContainer = document.querySelector(".sidebar-container");
        const checkbox = document.querySelector("#Toggle");
        if(sidebar.classList.contains("sidebar-in")) {
            sidebar.classList.remove("sidebar-in");
            sidebar.classList.add("sidebar-out");
            sidebarContainer.classList.remove("bg-grayed");
            checkbox.checked = false;
        } else {
            sidebar.classList.remove("sidebar-out");
            sidebar.classList.add("sidebar-in");
            sidebarContainer.classList.add("bg-grayed");
            checkbox.checked = true;
        }
    }

    return (
        <div className="sidebar-container" onClick={closeSidebar}>
            <nav className="sidebar" onClick={((e) => e.stopPropagation())}>
                <input type="checkbox" id="Toggle"  onClick={sidebarToggle}/>
                <label htmlFor="Toggle">
                    <div className="Menu-container">
                        <div className="line" id="active"></div>
                    </div>
                </label>
                <div className="img-container">
                    <img src={rocLogo} alt="roc logo"/>
                </div>
                <ul>
                    <li style={{fontWeight: location.pathname === "/" ? "bold" : "none", opacity: location.pathname === "/" ? "1" : "0.6"}} onClick={() => navigate("/")} >
                        {location.pathname === "/" ?
                            <svg xmlns="http://www.w3.org/2000/svg" width="27" height="24" viewBox="0 0 27 24" fill="none">
                                <path d="M10.5647 23.1152V14.9569H15.8471V23.1152H22.45V12.2375H26.4118L13.2059 0L0 12.2375H3.96176V23.1152H10.5647Z" fill="black"/>
                            </svg>
                            :
                            <svg xmlns="http://www.w3.org/2000/svg" width="27" height="24" viewBox="0 0 27 24" fill="currentcolor">
                                <path d="M10.5647 23.3593V15.201H15.8471V23.3593H22.45V12.4816H26.4118L13.2059 0.244141L0 12.4816H3.96176V23.3593H10.5647Z" fill="#D9D9D9"/>
                            </svg>
                        }
                        <p>Dashboard</p>
                    </li>
                    <li style={{fontWeight: location.pathname === "/lenen" ? "bold" : "none", opacity: location.pathname === "/lenen" ? "1" : "0.6"}} onClick={() => navigate("/lenen")}>
                        {
                            location.pathname === "/lenen" ?
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="26" viewBox="0 0 24 26" fill="none">
                                    <mask id="mask0_183_22" style={{maskType: "luminance"}} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="26">
                                        <path d="M17.8373 13.3147H8.8573M8.8573 13.3147L12.2248 9.84741M8.8573 13.3147L12.2248 16.782" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M20.0826 15.6245C21.3225 15.6245 22.3276 14.5896 22.3276 13.313C22.3276 12.0364 21.3225 11.0015 20.0826 11.0015C18.8428 11.0015 17.8376 12.0364 17.8376 13.313C17.8376 14.5896 18.8428 15.6245 20.0826 15.6245Z" fill="white" stroke="white" strokeWidth="2"/>
                                        <path d="M21.6012 6.95678C21.1616 6.27086 20.6525 5.6349 20.0825 5.05961C17.9864 2.93854 15.1639 1.75182 12.225 1.75587C6.02543 1.75587 1 6.9302 1 13.3135C1 19.6967 6.02543 24.871 12.225 24.871C15.2838 24.871 18.0575 23.6113 20.0825 21.5673C20.6525 20.992 21.1616 20.3561 21.6012 19.6701" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                                    </mask>
                                    <g mask="url(#mask0_183_22)">
                                        <path d="M-1.24475 -0.555908H25.6952V27.1823H-1.24475V-0.555908Z" fill="black"/>
                                    </g>
                                </svg>
                                :
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="26" viewBox="0 0 24 26" fill="none">
                                    <g id="Mask group">
                                        <mask id="mask0_52_326" style={{maskType:"luminance"}} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="25">
                                            <g id="Group">
                                                <g id="Group_2">
                                                    <path id="Vector" d="M17.8373 12.2259H8.8573M8.8573 12.2259L12.2248 8.8584M8.8573 12.2259L12.2248 15.5934" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                    <path id="Vector_2" d="M20.0826 14.4695C21.3225 14.4695 22.3276 13.4644 22.3276 12.2245C22.3276 10.9846 21.3225 9.97949 20.0826 9.97949C18.8428 9.97949 17.8376 10.9846 17.8376 12.2245C17.8376 13.4644 18.8428 14.4695 20.0826 14.4695Z" fill="white" stroke="white" strokeWidth="2"/>
                                                    <path id="Vector_3" d="M21.6012 6.05126C21.1616 5.38507 20.6525 4.76742 20.0825 4.20867C17.9864 2.14865 15.1639 0.996074 12.225 1.00001C6.02543 1.00001 1 6.02544 1 12.225C1 18.4246 6.02543 23.45 12.225 23.45C15.2838 23.45 18.0575 22.2265 20.0825 20.2413C20.6525 19.6826 21.1616 19.0649 21.6012 18.3988" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                                                </g>
                                            </g>
                                        </mask>
                                        <g mask="url(#mask0_52_326)">
                                            <path id="Vector_4" d="M-1.24475 -1.24561H25.6952V25.6944H-1.24475V-1.24561Z" fill="#D9D9D9"/>
                                        </g>
                                    </g>
                                </svg>
                        }
                        <p>Lenen</p>
                    </li>
                    <li style={{fontWeight: location.pathname === "/geschiedenis" ? "bold" : "none", opacity: location.pathname === "/geschiedenis" ? "1" : "0.6"}} onClick={() => navigate("/geschiedenis")}>
                        {
                            location.pathname === "/geschiedenis" ?
                                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                                    <path d="M11.225 22.45C8.35639 22.45 5.85654 21.4988 3.72545 19.5964C1.59437 17.6939 0.373335 15.3192 0.0623611 12.4722H2.61917C2.91019 14.6341 3.87179 16.4218 5.50399 17.8353C7.13619 19.2488 9.04319 19.9556 11.225 19.9556C13.6571 19.9556 15.7204 19.1083 17.415 17.4137C19.1095 15.7192 19.9564 13.6563 19.9556 11.225C19.9556 8.79292 19.1083 6.7296 17.4137 5.03504C15.7192 3.34048 13.6563 2.49361 11.225 2.49444C9.79069 2.49444 8.44993 2.82704 7.20271 3.49222C5.95549 4.15741 4.90574 5.07204 4.05347 6.23611H7.48333V8.73056H0V1.24722H2.49444V4.17819C3.55458 2.84782 4.84878 1.81887 6.37705 1.09132C7.90531 0.363773 9.52129 0 11.225 0C12.784 0 14.2445 0.296423 15.6065 0.889269C16.9685 1.48212 18.1533 2.282 19.1611 3.28892C20.1688 4.29751 20.9691 5.48237 21.562 6.84351C22.1548 8.20464 22.4508 9.66514 22.45 11.225C22.45 12.784 22.1536 14.2445 21.5607 15.6065C20.9679 16.9685 20.168 18.1533 19.1611 19.1611C18.1525 20.1688 16.9676 20.9691 15.6065 21.562C14.2454 22.1548 12.7849 22.4508 11.225 22.45ZM14.7172 16.4633L9.97778 11.7239V4.98889H12.4722V10.7261L16.4633 14.7172L14.7172 16.4633Z" fill="black"/>
                                </svg>
                                :
                                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                                    <path d="M11.225 22.45C8.35639 22.45 5.85654 21.4988 3.72545 19.5964C1.59437 17.6939 0.373335 15.3192 0.0623611 12.4722H2.61917C2.91019 14.6341 3.87179 16.4218 5.50399 17.8353C7.13619 19.2488 9.04319 19.9556 11.225 19.9556C13.6571 19.9556 15.7204 19.1083 17.415 17.4137C19.1095 15.7192 19.9564 13.6563 19.9556 11.225C19.9556 8.79292 19.1083 6.7296 17.4137 5.03504C15.7192 3.34048 13.6563 2.49361 11.225 2.49444C9.79069 2.49444 8.44993 2.82704 7.20271 3.49222C5.95549 4.15741 4.90574 5.07204 4.05347 6.23611H7.48333V8.73056H0V1.24722H2.49444V4.17819C3.55458 2.84782 4.84878 1.81887 6.37705 1.09132C7.90531 0.363773 9.52129 0 11.225 0C12.784 0 14.2445 0.296423 15.6065 0.889269C16.9685 1.48212 18.1533 2.282 19.1611 3.28892C20.1688 4.29751 20.9691 5.48237 21.562 6.84351C22.1548 8.20464 22.4508 9.66514 22.45 11.225C22.45 12.784 22.1536 14.2445 21.5607 15.6065C20.9679 16.9685 20.168 18.1533 19.1611 19.1611C18.1525 20.1688 16.9676 20.9691 15.6065 21.562C14.2454 22.1548 12.7849 22.4508 11.225 22.45ZM14.7172 16.4633L9.97778 11.7239V4.98889H12.4722V10.7261L16.4633 14.7172L14.7172 16.4633Z" fill="#D9D9D9"/>
                                </svg>
                        }
                        <p>Geschiedenis</p>
                    </li>
                    {admin ?
                        <li style={{fontWeight: location.pathname === "/beheren" ? "bold" : "none", opacity: location.pathname === "/beheren" ? "1" : "0.6"}} onClick={() => navigate("/beheren")}>
                            {
                                location.pathname === "/beheren" ?
                                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                                        <path d="M11.225 0C5.02543 0 0 5.02543 0 11.225C0 17.4246 5.02543 22.45 11.225 22.45C17.4246 22.45 22.45 17.4246 22.45 11.225C22.45 5.02543 17.4246 0 11.225 0ZM16.8375 12.3475H12.3475V16.8375H10.1025V12.3475H5.6125V10.1025H10.1025V5.6125H12.3475V10.1025H16.8375V12.3475Z" fill="black"/>
                                    </svg>
                                    :
                                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                                        <path d="M11.225 0C5.02543 0 0 5.02543 0 11.225C0 17.4246 5.02543 22.45 11.225 22.45C17.4246 22.45 22.45 17.4246 22.45 11.225C22.45 5.02543 17.4246 0 11.225 0ZM16.8375 12.3475H12.3475V16.8375H10.1025V12.3475H5.6125V10.1025H10.1025V5.6125H12.3475V10.1025H16.8375V12.3475Z" fill="#D9D9D9"/>
                                    </svg>

                            }
                            <p>Beheren</p>
                        </li>
                        : null}
                </ul>
                <div className="logout">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M0 18V0H9V2H2V16H9V18H0ZM13 14L11.625 12.55L14.175 10H6V8H14.175L11.625 5.45L13 4L18 9L13 14Z" fill="#D9D9D9"/>
                    </svg>
                    <p>Log out</p>
                </div>
            </nav>
        </div>
    );
}

export default Sidebar;
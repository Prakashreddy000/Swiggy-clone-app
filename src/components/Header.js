import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header =() => {
    const [btnName, setBtnName] = useState ("login");
    const OnlineStatus = useOnlineStatus();

    return(
        <div className="flex">
            <div className="logo-container">
                <img className="w-56" src={LOGO_URL}/>
               
                </div>
                <div className="header-items">
                    <ul>
                        <li>Online Status: {OnlineStatus ? "@" : "*"}</li>
                        <li>
                            <Link to="/">
                            Home
                            </Link>
                            </li>
                        <li>
                            <Link to="/about">
                            About us
                            </Link></li>
                        <li>
                            <Link to="/contact">
                            Contact us
                            </Link>
                           </li>
                        <li>
                            <Link to ="/readmore">
                                Read more
                                </Link>
                                </li>
                            
                        <button className="login-button" 
                        onClick={() => {
                            btnName === "login" ?
                            setBtnName("logout") :
                            setBtnName("login");
                        }}
                        >{btnName}</button>
                    </ul>
            </div>
        </div>
    );
};

export default Header;
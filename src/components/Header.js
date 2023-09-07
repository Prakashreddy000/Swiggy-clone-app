import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header =() => {
    const [btnName, setBtnName] = useState ("login");

    return(
        <div className="header">
            <div className="logo-container">
                <img className="img" src={LOGO_URL}/>
               
                </div>
                <div className="header-items">
                    <ul>
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
                        <li>Read more</li>
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
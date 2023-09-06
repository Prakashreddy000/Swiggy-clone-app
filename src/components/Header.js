import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header =() => {
    const [btnName, setBtnName] = useState ("login");

    return(
        <div className="header">
            <div className="logo-container">
                <img className="img" src={LOGO_URL}/>
               
                </div>
                <div className="header-items">
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Contact us</li>
                        <li>Read more</li>
                        <button class="login-button" 
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
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header =() => {
    const [btnName, setBtnName] = useState ("login");
    const OnlineStatus = useOnlineStatus();

    return(
        <div className=" flex justify-between shadow-lg ">
            <div className="logo-container">
                <img className="w-36" src={LOGO_URL}/>
               
                </div>
                <div className="flex items-center">
                    <ul className="flex p-4 m-4">
                        <li className="px-4">Online Status: {OnlineStatus ? "✅" : "🔴"}</li>
                        <li className="px-4  hover:text-cyan-500">
                            <Link to="/">
                            Home
                            </Link>
                            </li>
                        <li className="px-4 hover:text-cyan-500">
                            <Link to="/about">
                            About us
                            </Link></li>
                        <li className="px-4  hover:text-cyan-500">
                            <Link to="/contact">
                            Contact us
                            </Link>
                           </li>
                        <li className="px-4  hover:text-cyan-500">
                            <Link to ="/readmore">
                                Read more
                                </Link>
                                </li>
                            
                        <button className= "bg-gray-100  hover:bg-red-400  px-4 rounded-sm 0" 
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
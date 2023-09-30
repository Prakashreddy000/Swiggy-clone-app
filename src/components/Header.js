import { LOGO_URL } from "../utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/UserContext";
//import { useSelector } from "react-redux";

const Header =() => {
    const [btnName, setBtnName] = useState ("login");
    const OnlineStatus = useOnlineStatus();
    const {loggedInUser} = useContext(userContext);

    //const cart = useSelector((store)=> store.cart.items);
   

    return(
        <div className=" flex justify-between shadow-lg ">
            <div className="logo-container">
                <Link to="/">
                <img className="w-36" src={LOGO_URL}/>
                </Link>
                
               
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
                            <li 
                            className="px-4  hover:text-cyan-500">
                                Cart-
                                </li>
                            
                            
                        <button className= "bg-gray-100  hover:bg-red-400  px-4 rounded-sm 0" 
                        onClick={() => {
                            btnName === "login" ?
                            setBtnName("logout") :
                            setBtnName("login");
                        }}
                        >{btnName}</button>
                        <li className="px-4 font-bold text-green-300">user: {loggedInUser}</li>
                    </ul>
            </div>
        </div>
    );
};

export default Header;
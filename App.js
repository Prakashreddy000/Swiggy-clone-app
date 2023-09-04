import React from "react";
import ReactDOM  from "react-dom/client";



const Header =()=>{
    return(
        <div className="header">
            <div className="logo-container">
                <img className="img" src="https://img.freepik.com/premium-vector/good-food-logo-design_79169-10.jpg?w=2000"/>
               
                </div>
                <div className="header-items">
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Contact us</li>
                        <li>Read more</li>
                    </ul>

               

            </div>
        </div>
    );
};


const Body = () =>{
    return(
      <div className="body"> 
        <div className="search">
            search
        </div>
        <div className="res-container">

        </div>
      </div>  
    );
};




const AppLayout = ()=>{
    return(
        <div className="app">
            <Header/>
        </div>
    );
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
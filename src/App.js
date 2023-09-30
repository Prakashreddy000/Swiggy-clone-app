import React,{Suspense, lazy, useEffect, useState, } from "react";
import ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Error from "./components/Error";
import ReadMore from "./components/ReadMore";
import RestaurentMenu from "./components/RestaurentMenu";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import appStore from "./utils/appStore";


const About = lazy(()=>import("./components/About"));

const AppLayout = ()=>{

    const [userName, setUserName] = useState();

    useEffect(()=>{

        const data = {
            name:"sai prakash reddy",
        };

        setUserName(data.name);

    },[]);


    return(
        <Provider store={appStore}>
        <UserContext.Provider value={{loggedInUser: userName}}>
        <div className="app">
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
        </UserContext.Provider>
        </Provider>
    );
}

const appRouter = createBrowserRouter ([
    {
        path: "/",
        element: <AppLayout/>,
        children: [
            {
                path: "/",
                element: <Body/>,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path:"/about",
                element: <Suspense fallback= {<h1>loading....</h1>} >
                     <About/></Suspense>,
            },
            {
                path: "/restaurent/:resId",
                element: <RestaurentMenu/>,
            },
            {
                path : "/readmore",
                element: <ReadMore/>,
            },
            
        ],
        errorElement: <Error />
    },
    
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider  router={appRouter}/>);
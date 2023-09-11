import React,{Suspense, lazy} from "react";
import ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/Contact";

import Error from "./components/Error";
import ReadMore from "./components/ReadMore";
import RestaurentMenu from "./components/RestaurentMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";


const About = lazy(()=>import("./components/About"));

const AppLayout = ()=>{
    return(
        <div className="app">
            <Header/>
            <Outlet/>
        </div>
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
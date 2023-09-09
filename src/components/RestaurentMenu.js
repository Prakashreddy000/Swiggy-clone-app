import { useState , useEffect } from "react";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import Shimmer from "./Shimmer";


const RestaurentMenu = () => {

    const [resInfo, setResInfo] = useState(null);
    const { resId } = useParams();

     useEffect(()=>{
        fetchMenu();
     },[]);

     const fetchMenu = async () => {
        const data = await fetch( MENU_API + resId );

        const json = await data.json();

        console.log(json);
        setResInfo(json.data);
     };
     
     if (resInfo === null )
        return (
            <Shimmer/> 
            
        );
     
        const {name, cuisines} = resInfo?.cards[0]?.card?.card?.info;


    return (
        <div>
            <h1>{name}</h1>
            <h3>{cuisines}</h3>
        </div>
    )

};

export default RestaurentMenu;
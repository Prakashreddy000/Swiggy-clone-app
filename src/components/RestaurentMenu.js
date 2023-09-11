import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useParams } from "react-router-dom";

import Shimmer from "./Shimmer";


const RestaurentMenu = () => {

    
    const { resId } = useParams();

    const resInfo = useRestaurantMenu(resId);
     
     
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
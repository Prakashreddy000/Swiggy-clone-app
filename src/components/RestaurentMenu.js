import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useParams } from "react-router-dom";

import Shimmer from "./Shimmer";
import RestaurantCategory from "./RestaurantCategory";


const RestaurentMenu = () => {

    
    const { resId } = useParams();

    const resInfo = useRestaurantMenu(resId);
     
     
     if (resInfo === null )
        return (
            <Shimmer/> 
            
        );
     
        const {name, cuisines, costForTwo} = resInfo?.cards[0]?.card?.card?.info;

        const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card.card;
            
        const categories = 
            resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>
            c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
          

    return (
        <div className="text-center">
            <h1 className="font-bold">{name}</h1>
           <p className="text-lg">{cuisines.join(" , ")}
           {" Rs/-"}
           {costForTwo/100}
           </p>
            {categories.map((category)=>(<RestaurantCategory
            data = {category?.card?.card}
            />))}
        </div>
    );

};

export default RestaurentMenu;
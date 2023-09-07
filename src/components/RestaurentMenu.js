import { useState , useEffect } from "react";
import Shimmer from "./Shimmer";


const RestaurentMenu = () => {

    const [resInfo, setResInfo] = useState(null);

     useEffect(()=>{
        fetchMenu();
     },[]);

     const fetchMenu = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.3270709&lng=78.6053386&restaurantId=425751&catalog_qa=undefined&submitAction=ENTER");

        const json = await data.json();

        console.log(json);
        setResInfo(json.data);
     };

     const {name} = resInfo?.cards[0]?.card?.card?.info;

    return resInfo === null ? (<Shimmer/> )
    :
    (
        <div>
            <h1>{name}</h1>
            <h2></h2>
        </div>
    );
};

export default RestaurentMenu;
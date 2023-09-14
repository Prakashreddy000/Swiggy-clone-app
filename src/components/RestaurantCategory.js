import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory =  ({data}) =>{

    const [clickedButton, setClickedButton]=useState(false);

    const handleClick = () =>{
        setClickedButton(!clickedButton);
    }

   console.log(data)
    return(
        <div>
        <div className="mx-auto my-4 w-6/12 p-4 bg-slate-50 shadow-md hover:bg-gray-400">
           <div 
           onClick={handleClick}
           className=" flex justify-between ">
            <span className="font-semibold" >{data.title} ({data.itemCards.length})</span>
            <span>⬇️</span>
            </div>
            
            {clickedButton && <ItemList items={data.itemCards}/>}
           </div>
           
        </div>
    );
};

export default RestaurantCategory;
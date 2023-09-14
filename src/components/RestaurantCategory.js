import ItemList from "./ItemList";
import { useState } from "react";


const RestaurantCategory =  ({data, showItems,setShowIndex}) =>{
    

    const handleClick = ()=>{
        setShowIndex()
    };

    return(
        <div>
        <div className="hover:cursor-pointer mx-auto my-4 w-6/12 p-4 bg-slate-50 shadow-md hover:bg-green-300" >
           <div 
           onClick={handleClick}
           className=" flex justify-between ">
            <span className="font-semibold" >{data.title} ({data.itemCards.length})</span>
            <span>⬇️</span>
            </div>
            
             {showItems && <ItemList items={data.itemCards}/>}
           </div>
        </div>
    );
};

export default RestaurantCategory;
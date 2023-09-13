const RestaurantCategory =  ({data}) =>{
   console.log(data)
    return(
        <div>
           <div className="flex mx-auto my-4 bg-slate-50 shadow-md hover:bg-gray-400 justify-between w-6/12 p-4">
            <span className="font-semibold">{data.title} ({data.itemCards.length})</span>
            <span>⬇️</span>
           </div>
        </div>
    );
};

export default RestaurantCategory;
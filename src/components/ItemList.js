

const ItemList = ({items}) =>{
    return(
        <div>
           {items.map((item)=>(
                <div key={item.card.info.id} className="border-gray-500 border-b-2 text-left p-1 m-2">

                    
                    <div className="py-2">
                        <span>{item.card.info.name}</span>
                        <span> - ₹{item.card.info.price /100} </span>
                        </div>
                        <p className="text-xs">{item.card.info.description}</p>
                </div>
           ))}
        </div>
    );
};
export default ItemList;
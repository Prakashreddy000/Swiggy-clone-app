import RestaurentCard, {PromotedVegCard} from "./RestaurentCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () =>{

  const [ListOfRestro, setListOfRestro] = useState([]);

  const [filteredRestro, setFilteredRestro ] = useState([]);

  const [searchText, setSearchText] = useState();

  const VegPromotedCard = PromotedVegCard(RestaurentCard);

  

 

  useEffect(() => 
  {
    fetchData();
  },[]);

const fetchData = async () => {
  const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.3270709&lng=78.6053386&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

  const json = await data.json();
  setListOfRestro(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  setFilteredRestro(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
};



const OnlineStatus = useOnlineStatus();

if (OnlineStatus === false)
  return(
    <h1>oops you are offline..!!!</h1>
    );


 return ListOfRestro.length === 0 ? (
<Shimmer/>
 ) : (
      <div className="body">
        <div className="flex">
          <div className="search p-4 m-4">
              <input
              type="text" 
              className="border border-solid border-black rounded-lg" 
              value={searchText}
              onChange={(event)=> {
                setSearchText(event.target.value);
              }}
            />
            <button className=" px-4 py-2 m-4  rounded-md bg-gray-100 hover:bg-red-400"
            onClick={()=> {
            const filteredRestro = ListOfRestro.filter((res)=>
            res.info.name.toLowerCase().includes(searchText)
             );

            setFilteredRestro(filteredRestro);
            }}
            >search</button>
          </div>

           <div className="p-4 m-4 flex items-center">
           <button className="px-4 py-2 bg-gray-100  hover:bg-red-400 rounded-lg" onClick={()=>{
            const filteredList = ListOfRestro.filter(
                (res)=>res.info.avgRating>4
                );
                setListOfRestro(filteredList);
        }}
        >top rated restro</button>
            </div> 
        
        </div> 


        <div className="flex flex-wrap">
            {
                filteredRestro.map((eachRestro)=>
                (
                <Link 
                key={eachRestro.info.id}
                to={"/restaurent/" + eachRestro.info.id}>
                  {eachRestro.info.veg ? (<VegPromotedCard  resData={eachRestro}/>) : (<RestaurentCard  resData={eachRestro}/>)}
                 
                  
                </Link>
                ))
            }
        </div>
        
      </div>  
    );

};

export default Body;
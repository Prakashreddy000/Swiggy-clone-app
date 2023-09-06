import RestaurentCard from "./RestaurentCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () =>{

  const [ListOfRestro, setListOfRestro] = useState([]);

  const [filteredRestro, setFilteredRestro ] = useState([]);

  const [searchText, setSearchText] = useState();

  useEffect(() => 
  {
    fetchData();
  },[]);

const fetchData = async () => {
  const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.3270709&lng=78.6053386&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

  const json = await data.json();
  setListOfRestro(json?.data?.cards[5]?.card.card?.gridElements?.infoWithStyle?.restaurants);
  setFilteredRestro(json?.data?.cards[5]?.card.card?.gridElements?.infoWithStyle?.restaurants);
  console.log(json);
};


 return ListOfRestro.length === 0 ? (
<Shimmer/>
 ) :
 (
      <div className="body">
        <div className="search">
          <div >
            <input type="text" 
            className="search-box" 
            value={searchText}
            onchange={(event)=> {
              setSearchText(event.target.value);
            }}
           />
            <button className="button"
            onClick={()=> {
            const filteredRestro = ListOfRestro.filter((res)=>
             res.info.name.toLowerCase().includes(searchText.toLowerCase()));

            setFilteredRestro(filteredRestro);
            }}
            >search</button>
          </div>
        <button className="button" onClick={()=>{
            const filteredList = ListOfRestro.filter(
                (res)=>res.info.avgRating>4
                );
                setListOfRestro(filteredList);
        }}
        >top rated restro</button>
        </div> 
        <div className="res-container">
            {
                filteredRestro.map((eachRestro)=>
                (<RestaurentCard key={eachRestro.info.id} resData={eachRestro}/>))
            }
        </div>
        
      </div>  
    );

};

export default Body;
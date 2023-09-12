import { CDN_URL } from "../utils/constants";

const RestaurentCard = (props)=> {
    const {resData} = props;

    const {name, cuisines, locality, areaName, costForTwo, cloudinaryImageId, avgRating} = resData?.info;
    return(
            <div className="shadow-lg  bg-gray-100 m-4 p-4 w-52 hover:bg-transparent">
                <img alt="logo"
                className="rounded-lg"
                src={CDN_URL +cloudinaryImageId} />
                    <h3 className="font-bold py-4">{name}</h3>
                    <h4>{cuisines.join(" , ")}</h4>
                    <h4>{locality}</h4>
                    <h4>{areaName}</h4>
                    <h4>{costForTwo}</h4>
                    <h4>{avgRating}⭐</h4>
            </div>
    );


};

export const withPromotedCard = (RestaurentCard) =>{
    return(props)=>{
        return(
            <div>
                <label className="absolute bg-black text-white m-2 p-2 ">promoted</label>
            <RestaurentCard {...props}/>
            </div>
        );
    };
};


export default RestaurentCard;
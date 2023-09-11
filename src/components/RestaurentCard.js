import { CDN_URL } from "../utils/constants";

const RestaurentCard = (props)=> {
    const {resData} = props;

    const {name, cuisines, locality, areaName, costForTwo, cloudinaryImageId, avgRating} = resData?.info;
    return(
            <div className="res-card">
                <img alt="logo"
                className="image"
                src={CDN_URL +cloudinaryImageId} />
                    <h3>{name}</h3>
                    <h4>{cuisines.join(" , ")}</h4>
                    <h4>{locality}</h4>
                    <h4>{areaName}</h4>
                    <h4>{costForTwo}</h4>
                    <h4>{avgRating}</h4>
            </div>
    );
};

export default RestaurentCard;
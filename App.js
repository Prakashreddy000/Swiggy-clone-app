import React from "react";
import ReactDOM  from "react-dom/client";



const Header =()=>{
    return(
        <div className="header">
            <div className="logo-container">
                <img className="img" src="https://img.freepik.com/premium-vector/good-food-logo-design_79169-10.jpg?w=2000"/>
               
                </div>
                <div className="header-items">
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Contact us</li>
                        <li>Read more</li>
                    </ul>

               

            </div>
        </div>
    );
};


const RestaurentCard = (props)=> {
    const {resData} = props;

    const {name, cuisines, locality, areaName, costForTwo,cloudinaryImageId} = resData?.info;
    return(
            <div className="res-card">
                <img alt="logo"
                className="image"
                src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/" + resData.info.cloudinaryImageId} />
                    <h3>{name}</h3>
                    <h4>{cuisines.join(" , ")}</h4>
                    <h4>{locality}</h4>
                    <h4>{areaName}</h4>
                    <h4>{costForTwo}</h4>
            </div>
    );
};

const resList = [
{
    "info": {
      "id": "262566",
      "name": "Oven Story Pizza",
      "cloudinaryImageId": "f986df6f1a1fcf2ff24d2eaf44d570a7",
      "locality": "Vanasthalipuram",
      "areaName": "Shirdi Nagar",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Pizzas",
        "Pastas",
        "Italian",
        "Desserts",
        "Beverages"
      ],
      "avgRating": 4.3,
      "feeDetails": {
        "restaurantId": "262566",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 2800
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 2800
      },
      "parentId": "3534",
      "avgRatingString": "4.3",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 24,
        "lastMileTravel": 2.1,
        "serviceability": "SERVICEABLE",
        "slaString": "23-26 mins",
        "lastMileTravelString": "2.1 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-09-06 03:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹125 OFF",
        "subHeader": "ABOVE ₹1099",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/oven-story-pizza-vanasthalipuram-shirdi-nagar-hyderabad-262566",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "72848",
      "name": "The Belgian Waffle Co.",
      "cloudinaryImageId": "8cb220fa3997a3b928d2ffb6c098acaf",
      "locality": "hill colony",
      "areaName": "Panama Ganesh temple",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "Waffle",
        "Desserts",
        "Ice Cream",
        "Beverages"
      ],
      "avgRating": 4.5,
      "veg": true,
      "feeDetails": {
        "restaurantId": "72848",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 3900
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 3900
      },
      "parentId": "2233",
      "avgRatingString": "4.5",
      "totalRatingsString": "5K+",
      "sla": {
        "deliveryTime": 42,
        "lastMileTravel": 4.6,
        "serviceability": "SERVICEABLE",
        "slaString": "42 mins",
        "lastMileTravelString": "4.6 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-09-05 23:45:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "20% OFF",
        "subHeader": "UPTO ₹50"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/the-belgian-waffle-co-hill-colony-panama-ganesh-temple-hyderabad-72848",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "32844",
      "name": "McDonald's",
      "cloudinaryImageId": "ee5f8e06b300efc07c9fe3f4df40dfc4",
      "locality": "LB Nagar",
      "areaName": "Dharmapuri",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Burgers",
        "Beverages",
        "Cafe",
        "Desserts"
      ],
      "avgRating": 4.2,
      "feeDetails": {
        "restaurantId": "32844",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 6200
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 6200
      },
      "parentId": "630",
      "avgRatingString": "4.2",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 52,
        "lastMileTravel": 6.1,
        "serviceability": "SERVICEABLE",
        "slaString": "52 mins",
        "lastMileTravelString": "6.1 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-09-06 01:45:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "10% OFF",
        "subHeader": "ABOVE ₹999",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/mcdonalds-lb-nagar-dharmapuri-hyderabad-32844",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "84832",
      "name": "Mithaiwala",
      "cloudinaryImageId": "dm0qaqmiwqv6napryz9q",
      "locality": "LB Nagar",
      "areaName": "Golden Tobaco Colony",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Sweets",
        "Desserts",
        "Snacks",
        "Chaat"
      ],
      "avgRating": 4.1,
      "feeDetails": {
        "restaurantId": "84832",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 3900
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 3900
      },
      "parentId": "2180",
      "avgRatingString": "4.1",
      "totalRatingsString": "5K+",
      "sla": {
        "deliveryTime": 37,
        "lastMileTravel": 4,
        "serviceability": "SERVICEABLE",
        "slaString": "37 mins",
        "lastMileTravelString": "4.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-09-05 14:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "aggregatedDiscountInfoV2": {
        
      },
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/mithaiwala-lb-nagar-golden-tobaco-colony-hyderabad-84832",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "103435",
      "name": "Kritunga Jagavi's Restaurant",
      "cloudinaryImageId": "t0wfpfbfyqmrsapsonoe",
      "locality": "Bariramalaguda",
      "areaName": "LB Nagar- Saraswati Nagar",
      "costForTwo": "₹500 for two",
      "cuisines": [
        "Biryani",
        "Andhra",
        "Rayalaseema",
        "South Indian",
        "North Indian",
        "Chinese"
      ],
      "avgRating": 3.8,
      "feeDetails": {
        "restaurantId": "103435",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 6200
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 6200
      },
      "parentId": "20088",
      "avgRatingString": "3.8",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 47,
        "lastMileTravel": 6.1,
        "serviceability": "SERVICEABLE",
        "slaString": "47 mins",
        "lastMileTravelString": "6.1 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-09-05 23:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "20% OFF",
        "subHeader": "UPTO ₹50"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/kritunga-jagavis-restaurant-bariramalaguda-lb-nagar-saraswati-nagar-hyderabad-103435",
      "type": "WEBLINK"
    }
  },
];





const Body = () =>{
    return(
      <div className="body"> 
        <div className="search">
            search
        </div>
        <div className="res-container">
            {
                resList.map((eachRestro)=>
                (<RestaurentCard key={eachRestro.info.id} resData={eachRestro}/>))
            }
        </div>
        
      </div>  
    );
};




const AppLayout = ()=>{
    return(
        <div className="app">
            <Header/>
            <Body/>
        </div>
    );
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
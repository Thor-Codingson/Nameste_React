import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement is an Object, when we render it to DOM it becomes HTML Element

const Header = () => (
    <div className="header">
        <div className="logo-container">
            <img
                className="logo"
                src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png" alt="logo" />
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
);

const resList = [{
    "info": {
        "id": "495655",
        "name": "The Cake Factory",
        "cloudinaryImageId": "esacke9ht0jetdda6klq",
        "locality": "Gulauwa Chowk",
        "areaName": "Garha",
        "costForTwo": "₹100 for two",
        "cuisines": [
            "Bakery"
        ],
        "avgRating": 3.8,
        "veg": true,
        "feeDetails": {
            "restaurantId": "495655",
            "fees": [
                {
                    "name": "BASE_DISTANCE",
                    "fee": 1400
                },
                {
                    "name": "BASE_TIME"
                },
                {
                    "name": "ANCILLARY_SURGE_FEE"
                }
            ],
            "totalFee": 1400
        },
        "parentId": "3734",
        "avgRatingString": "3.8",
        "totalRatingsString": "50+",
        "sla": {
            "deliveryTime": 32,
            "lastMileTravel": 3,
            "serviceability": "SERVICEABLE",
            "slaString": "32 mins",
            "lastMileTravelString": "3.0 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2023-11-14 23:00:00",
            "opened": true
        },
        "badges": {
            "imageBadges": [
                {
                    "imageId": "v1695133679/badges/Pure_Veg111.png",
                    "description": "pureveg"
                }
            ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "imageBased": {
                    "badgeObject": [
                        {
                            "attributes": {
                                "description": "pureveg",
                                "imageId": "v1695133679/badges/Pure_Veg111.png"
                            }
                        }
                    ]
                },
                "textBased": {},
                "textExtendedBadges": {}
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "₹100 OFF",
            "subHeader": "ABOVE ₹249",
            "discountTag": "FLAT DEAL"
        },
        "loyaltyDiscoverPresentationInfo": {
            "logoCtx": {
                "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
            },
            "freedelMessage": "FREE DELIVERY",
            "badgeType": "BADGE_TYPE_ONE_LITE"
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
        "link": "https://www.swiggy.com/restaurants/the-cake-factory-gulauwa-chowk-garha-jabalpur-495655",
        "type": "WEBLINK"
    }
},
{
    "info": {
        "id": "437445",
        "name": "House Of Blends",
        "cloudinaryImageId": "ca0cc5f989f556022662be8ad843db9b",
        "locality": "Atul Vihar",
        "areaName": "Wright Town",
        "costForTwo": "₹350 for two",
        "cuisines": [
            "Pizzas",
            "Italian",
            "Continental",
            "Beverages",
            "Burgers"
        ],
        "avgRating": 3.9,
        "feeDetails": {
            "restaurantId": "437445",
            "fees": [
                {
                    "name": "BASE_DISTANCE",
                    "fee": 1400
                },
                {
                    "name": "BASE_TIME"
                },
                {
                    "name": "ANCILLARY_SURGE_FEE"
                }
            ],
            "totalFee": 1400
        },
        "parentId": "263993",
        "avgRatingString": "3.9",
        "totalRatingsString": "100+",
        "sla": {
            "deliveryTime": 21,
            "lastMileTravel": 1.3,
            "serviceability": "SERVICEABLE",
            "slaString": "21 mins",
            "lastMileTravelString": "1.3 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2023-11-14 23:30:00",
            "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "imageBased": {},
                "textBased": {},
                "textExtendedBadges": {}
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "₹100 OFF",
            "subHeader": "ABOVE ₹249",
            "discountTag": "FLAT DEAL"
        },
        "loyaltyDiscoverPresentationInfo": {
            "logoCtx": {
                "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
            },
            "freedelMessage": "FREE DELIVERY",
            "badgeType": "BADGE_TYPE_ONE_LITE"
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
        "link": "https://www.swiggy.com/restaurants/house-of-blends-atul-vihar-wright-town-jabalpur-437445",
        "type": "WEBLINK"
    }
},
{
    "info": {
        "id": "287605",
        "name": "Badkul Restaurant",
        "cloudinaryImageId": "xdqgwizfpb2j626gdmp4",
        "locality": "Deendayal Chowk",
        "areaName": "Vijay Nagar",
        "costForTwo": "₹350 for two",
        "cuisines": [
            "North Indian",
            "Thalis",
            "South Indian",
            "Chinese",
            "Biryani",
            "Beverages"
        ],
        "avgRating": 4,
        "veg": true,
        "feeDetails": {
            "restaurantId": "287605",
            "fees": [
                {
                    "name": "BASE_DISTANCE",
                    "fee": 1400
                },
                {
                    "name": "BASE_TIME"
                },
                {
                    "name": "ANCILLARY_SURGE_FEE"
                }
            ],
            "totalFee": 1400
        },
        "parentId": "39484",
        "avgRatingString": "4.0",
        "totalRatingsString": "5K+",
        "sla": {
            "deliveryTime": 43,
            "lastMileTravel": 4.6,
            "serviceability": "SERVICEABLE",
            "slaString": "43 mins",
            "lastMileTravelString": "4.6 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2023-11-14 23:00:00",
            "opened": true
        },
        "badges": {
            "imageBadges": [
                {
                    "imageId": "v1695133679/badges/Pure_Veg111.png",
                    "description": "pureveg"
                }
            ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "imageBased": {
                    "badgeObject": [
                        {
                            "attributes": {
                                "description": "pureveg",
                                "imageId": "v1695133679/badges/Pure_Veg111.png"
                            }
                        }
                    ]
                },
                "textBased": {},
                "textExtendedBadges": {}
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "₹100 OFF",
            "subHeader": "ABOVE ₹249",
            "discountTag": "FLAT DEAL"
        },
        "loyaltyDiscoverPresentationInfo": {
            "logoCtx": {
                "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
            },
            "freedelMessage": "FREE DELIVERY",
            "badgeType": "BADGE_TYPE_ONE_LITE"
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
        "link": "https://www.swiggy.com/restaurants/badkul-restaurant-deendayal-chowk-vijay-nagar-jabalpur-287605",
        "type": "WEBLINK"
    }
},
{
    "info": {
        "id": "224976",
        "name": "Olympus Cafe & Juice Hub",
        "cloudinaryImageId": "onypgkqaquzqd69lenm8",
        "locality": "Jai Nagar",
        "areaName": "Yadav Colony",
        "costForTwo": "₹200 for two",
        "cuisines": [
            "Chinese",
            "Fast Food",
            "Ice Cream",
            "Beverages",
            "North Indian"
        ],
        "avgRating": 4.1,
        "veg": true,
        "feeDetails": {
            "restaurantId": "224976",
            "fees": [
                {
                    "name": "BASE_DISTANCE",
                    "fee": 1400
                },
                {
                    "name": "BASE_TIME"
                },
                {
                    "name": "ANCILLARY_SURGE_FEE"
                }
            ],
            "totalFee": 1400
        },
        "parentId": "151481",
        "avgRatingString": "4.1",
        "totalRatingsString": "1K+",
        "sla": {
            "deliveryTime": 31,
            "lastMileTravel": 2.7,
            "serviceability": "SERVICEABLE",
            "slaString": "31 mins",
            "lastMileTravelString": "2.7 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2023-11-14 22:10:00",
            "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "imageBased": {},
                "textBased": {},
                "textExtendedBadges": {}
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "₹100 OFF",
            "subHeader": "ABOVE ₹249",
            "discountTag": "FLAT DEAL"
        },
        "loyaltyDiscoverPresentationInfo": {
            "logoCtx": {
                "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
            },
            "freedelMessage": "FREE DELIVERY",
            "badgeType": "BADGE_TYPE_ONE_LITE"
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
        "link": "https://www.swiggy.com/restaurants/olympus-cafe-and-juice-hub-jai-nagar-yadav-colony-jabalpur-224976",
        "type": "WEBLINK"
    }
},
{
    "info": {
        "id": "299173",
        "name": "The Juice Box-Vijay Nagar",
        "cloudinaryImageId": "fbfaj4qbiupduahxroyy",
        "locality": "Jai Nagar",
        "areaName": "Yadav Colony",
        "costForTwo": "₹150 for two",
        "cuisines": [
            "Indian",
            "Juices",
            "Beverages"
        ],
        "avgRating": 4.3,
        "veg": true,
        "feeDetails": {
            "restaurantId": "299173",
            "fees": [
                {
                    "name": "BASE_DISTANCE",
                    "fee": 1400
                },
                {
                    "name": "BASE_TIME"
                },
                {
                    "name": "ANCILLARY_SURGE_FEE"
                }
            ],
            "totalFee": 1400
        },
        "parentId": "210220",
        "avgRatingString": "4.3",
        "totalRatingsString": "100+",
        "sla": {
            "deliveryTime": 29,
            "lastMileTravel": 2.7,
            "serviceability": "SERVICEABLE",
            "slaString": "29 mins",
            "lastMileTravelString": "2.7 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2023-11-14 22:10:00",
            "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "imageBased": {},
                "textBased": {},
                "textExtendedBadges": {}
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "₹100 OFF",
            "subHeader": "ABOVE ₹249",
            "discountTag": "FLAT DEAL"
        },
        "loyaltyDiscoverPresentationInfo": {
            "logoCtx": {
                "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
            },
            "freedelMessage": "FREE DELIVERY",
            "badgeType": "BADGE_TYPE_ONE_LITE"
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
        "link": "https://www.swiggy.com/restaurants/the-juice-box-vijay-nagar-jai-nagar-yadav-colony-jabalpur-299173",
        "type": "WEBLINK"
    }
}];

// const RestaurantCard = ({ resData }) => (
//     <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
//         <img
//             className="res-logo"
//             src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resData.info.cloudinaryImageId} alt="res-logo" />
//         <h3>{resData.info.name}</h3>
//         <h4>{resData.info.cuisines}</h4>
//         <h4>{resData.info.avgRating} Stars</h4>
//         <h4>{resData.info.sla.deliveryTime} mins</h4>
//     </div>
// );


//! Destructuring the component

const RestaurantCard = ({ resData: { info: { cloudinaryImageId, name, cuisines, avgRating, sla } } }) => (

    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
        <img
            className="res-logo"
            src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} alt="res-logo" />
        <h3>{name}</h3>
        <h4>{cuisines}</h4>
        <h4>{avgRating} Stars</h4>
        <h4>{sla.deliveryTime} mins</h4>
    </div>
);

const Body = () => (
    <div className="body">
        <div className="Search">
            Search
        </div>
        <div className="res-container">
            {resList.map((resturant) => (
                <RestaurantCard key={resturant.info.id} resData={resturant} />
            ))}
        </div>
    </div>
);

const AppLayout = () => (
    <div className="app">
        <Header />
        <Body />
    </div>
);

const root1 = ReactDOM.createRoot(document.getElementById("root"));

root1.render(<AppLayout />);
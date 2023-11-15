import { CDN_URL } from "../utils/constant";


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
            src={CDN_URL + cloudinaryImageId} alt="res-logo" />
        <h3>{name}</h3>
        <h4>{cuisines}</h4>
        <h4>{avgRating} Stars</h4>
        <h4>{sla.deliveryTime} mins</h4>
    </div>
);

export default RestaurantCard;
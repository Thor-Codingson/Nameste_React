import RestaurantCard from "./ResturantCard";
import resList from "../utils/mockData"
import { useState } from "react";

// const Body = () => (
//     <div className="body">
//         <div className="filter">
//             <button className="filter-btn" onClick={() => {
//                 //Filter logic
//                 resList = resList.filter(
//                     (res) => res.info.avgRating > 4
//                 );
//                 console.log(resList);
//             }}>Top Rated Restaurant</button>
//         </div>
//         <div className="res-container">
//             {resList.map((resturant) => (
//                 <RestaurantCard key={resturant.info.id} resData={resturant} />
//             ))}
//         </div>
//     </div>
// );

//!Whenever the state variable is updated react rerenders the component
//React does efficient DOM manipulation therefore it is fast; it uses virtual DOM
//Virtual DOM is a representation of actual DOM
//Whenever there is a change in any state variable react wll find out the difference b/w virtual dom it will render the component and render the DOM
const Body = () => {

    const [listOfResturants, setListOfResturants] = useState(resList);
    return (
        <>
            <div className="body">
                <div className="filter">
                    <button className="filter-btn" onClick={() => {
                        //                 //Filter logic
                        filterList = listOfResturants.filter(
                            (res) => res.info.avgRating > 4
                        );
                        console.log(listOfResturants);
                        setListOfResturants(filterList);
                    }}>Top Rated Restaurant</button>
                </div>
                <div className="res-container">
                    {listOfResturants.map((resturant) => (
                        <RestaurantCard key={resturant.info.id} resData={resturant} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Body;
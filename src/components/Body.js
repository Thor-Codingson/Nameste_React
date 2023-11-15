import RestaurantCard from "./ResturantCard";
import resList from "../utils/mockData"

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

export default Body;
import Restaurantcard from "./Restaurantcard";
import { useState, useEffect } from "react";
// import resList from "../utils/mockdata;
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [listofrest, setlistofrest] = useState([]);
  const [searchtext, setsearchtext] = useState("");
  const [filtrest,setfiltrest]     =useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setlistofrest(
      json.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfiltrest(
      json.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return listofrest.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchtext}
            onChange={(e) => {
              setsearchtext(e.target.value);
            }}
          />
          <button
            onClick={() => {
              const filrest = listofrest.filter((res) =>
                res.info.name.toLowerCase().includes(searchtext.toLowerCase())
              );
              setfiltrest(filrest);
            }}
          >
            search
          </button>
        </div>
        <button
          className="filterbtn"
          onClick={() => {
            const filteredlist = listofrest.filter(
              (res) => res.info.avgRating > 4.4
            );
            // console.log(listofrest);
            setfiltrest(filteredlist);
          }}
        >
          Top rated restaurants
        </button>
      </div>
      <div className="res-container">
        {filtrest.map((restaurant) => (
         <Link  key={restaurant.info.id} to={"/restaurant/"+restaurant.info.id}><Restaurantcard resdata={restaurant} /></Link> 
        ))}
      </div>
    </div>
  );
};
export default Body;

import { RES_LOGO } from "../utils/constant";
const Restaurantcard = (props) => {
  const { resdata } = props;
  const { cloudinaryImageId, cuisines, avgRating, name } = resdata?.info;
  return (
    <div className="rescard">
      <img className="reslogo" alt="img" src={RES_LOGO + cloudinaryImageId} />
      <h3>{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{resdata.info.sla.deliveryTime} minutes</h4>
    </div>
  );
};
export default Restaurantcard;

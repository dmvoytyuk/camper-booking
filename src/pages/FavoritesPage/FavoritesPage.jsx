import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CamperList from "../../components/CamperList/CamperList.jsx";
import { selectCampers } from "../../redux/campers/selectors.js";
import { selectFavorites } from "../../redux/favorites/selectors.js";

const FavoritesPage = () => {
  const campers = useSelector(selectCampers);
  const favorites = useSelector(selectFavorites);
  const [favoriteCampers, setFavoriteCampers] = useState([]);

  useEffect(() => {
    if (campers && campers.length > 0) {
      const newFavoriteCampers = campers.filter((camper) =>
        favorites.includes(camper._id),
      );
      setFavoriteCampers(newFavoriteCampers);
    }
  }, [campers, favorites]);

  // useEffect(() => {
  //   console.log(favoriteCampers);
  // }, [favoriteCampers]);

  return (
    <div>
      <h1>Favorites</h1>
      {favoriteCampers && favoriteCampers.length > 0 && (
        <CamperList campers={favoriteCampers} />
      )}
    </div>
  );
};

export default FavoritesPage;

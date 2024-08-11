import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CamperList from "../../components/CamperList/CamperList.jsx";
import { selectCampers } from "../../redux/campers/selectors.js";

const FavoritesPage = () => {
  const campers = useSelector(selectCampers);
  const [favorites, setFavorites] = useState([]);
  const [favoriteCampers, setFavoriteCampers] = useState([]);

  useEffect(() => {
    const localStorageFavorites = JSON.parse(localStorage.getItem("favorites"));
    if (localStorageFavorites.length > 0) {
      setFavorites(localStorageFavorites);
    }
  }, []);

  useEffect(() => {
    if (campers && campers.length > 0) {
      const newFavoriteCampers = campers.filter(
        (camper, i) => camper._id === favorites[i],
      );
      setFavoriteCampers(newFavoriteCampers);
    }
  }, [favorites, campers]);

  return (
    <div>
      <h1>Favorites</h1>
      {favoriteCampers.length > 0 && <CamperList campers={favoriteCampers} />}
    </div>
  );
};

export default FavoritesPage;

import { useEffect, useState } from "react";
import CamperItem from "../CamperItem/CamperItem.jsx";
import styles from "./CamperList.module.css";

const CamperList = ({ campers }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const localStorageFavorites = JSON.parse(localStorage.getItem("favorites"));
    if (localStorageFavorites.length > 0) {
      setFavorites(localStorageFavorites);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (favoriteId) => {
    if (favorites.includes(favoriteId)) {
      const newFavorites = favorites.filter((id) => id !== favoriteId);
      setFavorites(newFavorites);
    } else {
      const newFavorites = [...favorites, favoriteId];
      setFavorites(newFavorites);
    }
  };

  return (
    <ul className={styles.camperList}>
      {campers.map((camper) => (
        <CamperItem
          key={camper._id}
          camper={camper}
          toggleFavorite={toggleFavorite}
          favorite={favorites?.includes(camper._id)}
        />
      ))}
    </ul>
  );
};

export default CamperList;

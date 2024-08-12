import { useCallback, useEffect, useState } from "react";
import CamperItem from "../CamperItem/CamperItem.jsx";
import styles from "./CamperList.module.css";
import { selectFavorites } from "../../redux/favorites/selectors.js";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorites } from "../../redux/favorites/slice.js";

const CamperList = ({ campers }) => {
  const favorites = useSelector(selectFavorites);
  const dispatch = useDispatch();

  const toggleFavorite = (id) => {
    dispatch(toggleFavorites({ id }));
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

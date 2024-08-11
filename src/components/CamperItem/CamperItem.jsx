import { useEffect, useState } from "react";
import CamperDetails from "../CamperDetails/CamperDetails.jsx";
import ModalWindow from "../ModalWindow/ModalWindow.jsx";
import styles from "./CamperItem.module.css";
import svg from "../../assets/icons.svg";

const CamperItem = ({ camper, toggleFavorite, favorite }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <li className={styles.camperItem}>
      <img
        className={styles.camperItemImage}
        src={camper.gallery[0]}
        alt={camper.title}
      />
      <div className={styles.camperItemRight}>
        <h2 className={styles.camperItemTitle}>
          <span className={styles.camperItemName}>{camper.name}</span>
          <span className={styles.camperItemTitlePrice}>
            €{camper.price}
            {".00"}
            <button
              onClick={() => toggleFavorite(camper._id)}
              className={styles.camperItemFavButton}
            >
              {favorite && (
                <svg className={styles.camperItemTitleIcon}>
                  <use xlinkHref={svg + "#icon-heart-full"} />
                </svg>
              )}
              {!favorite && (
                <svg className={styles.camperItemTitleIcon}>
                  <use xlinkHref={svg + "#icon-heart"} />
                </svg>
              )}
            </button>
          </span>
        </h2>
        <div className={styles.camperItemInfo}>
          <div className={styles.camperItemRating}>
            <svg className={styles.camperItemRatingIcon}>
              <use xlinkHref={svg + "#icon-star"} />
            </svg>
            <span className={styles.camperItemReviews}>
              {camper.rating}({camper.reviews.length} Reviews)
            </span>
          </div>
          <span className={styles.camperItemLocation}>
            <svg className={styles.camperItemLocationIcon}>
              <use xlinkHref={svg + "#icon-map-pin"} />
            </svg>
            {camper.location}
          </span>
        </div>
        <p className={styles.camperItemDescription}>{camper.description}</p>
        <CamperDetails
          details={camper.details}
          adults={camper.adults}
          children={camper.children}
          transmission={camper.transmission}
          engine={camper.engine}
        />
        <button
          className={styles.camperItemButton}
          type="button"
          onClick={openModal}
        >
          Show more
        </button>
        <ModalWindow
          modalIsOpen={modalIsOpen}
          setModalIsOpen={setModalIsOpen}
          closeModal={closeModal}
          camper={camper}
        />
      </div>
    </li>
  );
};

export default CamperItem;

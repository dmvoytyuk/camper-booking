import styles from "./CamperDetailsItem.module.css";
import svg from "../../assets/icons.svg";

const CamperDetailsItem = ({ detail, value, short }) => {
  if (short) {
    if (
      detail === "transmission" ||
      detail === "adults" ||
      detail === "engine" ||
      detail === "kitchen" ||
      detail === "beds" ||
      detail === "airConditioner"
    ) {
      return (
        ((detail === "transmission" || detail === "engine") && (
          <li className={styles.camperDetailsItem}>
            <svg
              className={styles.camperDetailsItemIcon}
              style={{ fill: "none", stroke: "#101828" }}
            >
              <use xlinkHref={svg + `#icon-${value}`} />
            </svg>
            <p>{value}</p>
          </li>
        )) ||
        ((detail === "beds" || detail === "adults") && (
          <li className={styles.camperDetailsItem}>
            <svg className={styles.camperDetailsItemIcon}>
              <use xlinkHref={svg + `#icon-${detail}`} />
            </svg>
            <p>
              {value} {detail}
            </p>
          </li>
        )) ||
        (detail === "kitchen" && (
          <li className={styles.camperDetailsItem}>
            <svg
              className={styles.camperDetailsItemIcon}
              style={{ fill: "none", stroke: "#101828" }}
            >
              <use xlinkHref={svg + `#icon-${detail}`} />
            </svg>
            <p>{detail}</p>
          </li>
        )) ||
        (detail === "airConditioner" && (
          <li className={styles.camperDetailsItem}>
            <svg className={styles.camperDetailsItemIcon}>
              <use xlinkHref={svg + `#icon-${detail}`} />
            </svg>
            <p>Air Conditioner</p>
          </li>
        ))
      );
    }
  } else {
    return (
      <li className={styles.camperDetailsItem}>
        {detail} {value}
      </li>
    );
  }
};

export default CamperDetailsItem;

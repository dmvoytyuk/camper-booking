import CamperItem from "../CamperItem/CamperItem.jsx";
import styles from "./CamperList.module.css";

const CamperList = ({ campers }) => {
  return (
    <ul className={styles.camperList}>
      {campers.map((camper) => (
        <CamperItem key={camper._id} camper={camper} />
      ))}
    </ul>
  );
};

export default CamperList;

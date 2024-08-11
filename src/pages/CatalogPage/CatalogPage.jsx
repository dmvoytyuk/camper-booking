import { useSelector } from "react-redux";
import CamperList from "../../components/CamperList/CamperList.jsx";
import SearchSection from "../../components/SearchSection/SearchSection.jsx";
import {
  selectCampers,
  selectIsLoading,
} from "../../redux/campers/selectors.js";
import styles from "./CatalogPage.module.css";

const CatalogPage = () => {
  const campers = useSelector(selectCampers);
  const isLoading = useSelector(selectIsLoading);
  return (
    <section className={styles.catalogPage}>
      <SearchSection />
      {isLoading && <p>Loading...</p>}
      {campers && campers.length && !isLoading > 0 && (
        <CamperList campers={campers} />
      )}
    </section>
  );
};

export default CatalogPage;

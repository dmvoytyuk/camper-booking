import { Link } from "react-router-dom";
import styles from "./HomePage.module.css";
const HomePage = () => {
  return (
    <section className={styles.homePageContainer}>
      <h2 className={styles.homePageTitle}>
        Welcome to Camper Booking – Your Adventure Starts Here.
      </h2>
      <p className={styles.homePageDescription}>
        Ready to hit the open road? We make booking the perfect camper easy.
        Whether you’re a seasoned traveler or new to the journey, our wide
        selection of campers and motor homes is tailored to fit your needs.
        Start your adventure today with a reliable vehicle and the freedom to
        explore at your own pace. Let’s make your next road trip unforgettable!
      </p>
      <Link className={styles.homePageLink} to="/catalog">
        Check more in our catalog
      </Link>
    </section>
  );
};

export default HomePage;

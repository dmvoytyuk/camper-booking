import clsx from "clsx";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

const isLinkActive = ({ isActive }) =>
  clsx(styles.navBarListItemLink, {
    [styles.navBarListItemLinkActive]: isActive,
  });

const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <ul className={styles.navBarList}>
        <li>
          <NavLink className={isLinkActive} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={isLinkActive} to="/catalog">
            Camper Catalog
          </NavLink>
        </li>
        <li>
          <NavLink className={isLinkActive} to="/favorites">
            Favorites
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

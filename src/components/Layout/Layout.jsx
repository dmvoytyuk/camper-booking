import NavBar from "../NavBar/NavBar.jsx";
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <main className={styles.container}>{children}</main>
    </>
  );
};

export default Layout;

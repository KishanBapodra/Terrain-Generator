import styles from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={styles["navbar-wrapper"]}>
      <h2 className={styles["title"]}>DCGAN Terrain Generator</h2>
    </nav>
  );
};

export default Nav;

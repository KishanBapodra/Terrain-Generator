import styles from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={styles["navbar-wrapper"]}>
      <h2 className={styles["title"]}>
        Procedural Terrain Generation using Generative AI
      </h2>
    </nav>
  );
};

export default Nav;

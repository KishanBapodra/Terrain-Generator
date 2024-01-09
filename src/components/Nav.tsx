import { MdTerrain } from "react-icons/md";
import styles from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={styles["navbar-wrapper"]}>
      <MdTerrain className={styles["logo"]} />
      <p className={styles["company"]}>ProcedureGen</p>
    </nav>
  );
};

export default Nav;

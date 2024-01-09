import Nav from "./components/Nav";
import Main from "./components/Main";
import Model from "./components/Model";
import styles from "./App.module.css";
import { FaGithub, FaDatabase } from "react-icons/fa";

function App() {
  return (
    <>
      <Nav />
      <section className={styles["sec-1"]}>
        <div className={styles["header"]}>
          <h4 className={styles["title"]}>
            Procedural Terrain Generation using Generative AI
          </h4>
          <h4 className={styles["desc"]}>
            Leveraging power of GAN's and VAE's to generate terrain procedurally
            on the fly
          </h4>
        </div>
        <Model />
      </section>
      <section className={styles["sec-2"]}>
        <Main />
      </section>
      <section className={styles["sec-3"]}>
        <a
          href="https://github.com/KishanBapodra/Procdeural-Terrain-Gen-GAN-and-VAE"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className={styles["github"]} />
        </a>
        <a
          href="https://www.kaggle.com/datasets/tpapp157/earth-terrain-height-and-segmentation-map-images?select=0018_h.png"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaDatabase className={styles["dataset"]} />
        </a>
      </section>
    </>
  );
}

export default App;

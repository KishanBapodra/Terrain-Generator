import styles from "./Main.module.css";

const Main = () => {
  return (
    <div className={styles["content"]}>
      <h2 className={styles["content-heading"]}>Terrain Generator</h2>
      <p className={styles["content-body"]}>
        A.I. models were used to generate grayscale images of terrain. These
        images are used to displace a simple plane geometry resulting in the
        adjacent 3D terrain model.
      </p>
      <p className={styles["content-body"]}>
        Two different types of generative models were used Deep Convlutional
        Generative Adversarial Network (DCGAN) and Variational Autoencoders
        (VAE). The models were trained on a dataset found on Kaggle, that
        contained 5000 grayscale satellite images.
      </p>
    </div>
  );
};

export default Main;

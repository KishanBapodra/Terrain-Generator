import Nav from "./components/Nav";
import Main from "./components/Main";
import Model from "./components/Model";
import styles from "./App.module.css";

function App() {
  return (
    <>
      <Nav></Nav>
      <section className={styles["sec-1"]}>
        <Model />
      </section>
      <section className={styles["sec-2"]}>
        <Main />
      </section>
    </>
  );
}

export default App;

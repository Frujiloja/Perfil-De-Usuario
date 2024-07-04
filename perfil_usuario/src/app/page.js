import styles from "./page.module.css";
import About from "./componentes/About";

export default function Home() {
  return <main className={styles.main}>
    <About></About>
  </main>;
}

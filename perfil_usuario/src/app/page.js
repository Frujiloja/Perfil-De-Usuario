import styles from "./page.module.css";
import Header from "./componentes/Header"

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Header></Header>
      </div>
    </main>
  );
}

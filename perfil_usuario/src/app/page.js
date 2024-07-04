import styles from "./page.module.css";
import Header from "./componentes/Header";
import About from "./componentes/About";
import Interests from "./componentes/Interests";
import ContactForm from "./componentes/ContactForm";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <Header></Header>
        <div className={styles.data}>
          <div className={styles.datacontainer}>
            <div>
              <About></About>
              <Interests></Interests>
            </div>
            <div className={styles.form}>
              <h1>Contactame</h1>
              <ContactForm></ContactForm>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

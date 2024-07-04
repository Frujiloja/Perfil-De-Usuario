import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <div>
        <img
          className={styles.image}
          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
          alt="profile picture"
        />
      </div>
      <div>
        <h1 className={styles.text}>Erik Castello</h1>
      </div>
      <div>
        <img className={styles.signature} src="/erik.png" alt="signature" />
      </div>
    </div>
  );
};

export default Header;

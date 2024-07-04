import styles from "./SideBar.module.css";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <h2>Menu</h2>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="interests">Interests</a></li>
        <li><a href="contactform">Contact</a></li>
      </ul>
    </div>
  );
};

export default Sidebar;

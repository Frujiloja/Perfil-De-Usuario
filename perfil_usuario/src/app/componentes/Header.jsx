import style from "./Header.module.css";
import React from "react";

const Header = () => {
  return (
    <div className={style.header}>
      <div>
        <img
          className={style.image}
          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
          alt="profile picture"
        />
      </div>
      <div>
        <h1 className={style.text}>Martin Fuks</h1>
      </div>
    </div>
  );
};

export default Header;

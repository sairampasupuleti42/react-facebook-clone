import React from "react";
import "./Header.css";
import Avatar from "./Avatar/Avatar";
export default function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <Avatar type="logo" />
        <div className="header__input">
          <i className=" large material-icons ">search</i>
          <input placeholder="Search Facebook" />
        </div>
      </div>
      <div className="header__center">
        <div className="header__option">
          <i className=" large material-icons ">home</i>
        </div>
        <div className="header__option">
          <i className="large material-icons">ondemand_video</i>
        </div>
        <div className="header__option">
          <i className="large material-icons">group</i>
        </div>
        <div className="header__option">
          <i className="large material-icons">store</i>
        </div>
        <div className="header__option">
          <i className="large material-icons">public</i>
        </div>
      </div>
      <div className="header__right">
        <div className="mobile_apps">
          <i className="material-icons">apps</i>
        </div>
        <div className="header__info">
          <div className="header__avatar">
            <Avatar type="currentUser" />
          </div>
          <h4>Sairam Pasupuleti</h4>
        </div>
      </div>
    </div>
  );
}

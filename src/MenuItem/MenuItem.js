import React from "react";
import "./MenuItem.css";
export default function MenuItem({ title, icon }) {
  return (
    <div className="sidebar__row">
      <div className="menu_item_otpion">
        <i className="material-icons"> {icon}</i>
        <h4>{title}</h4>
      </div>
    </div>
  );
}

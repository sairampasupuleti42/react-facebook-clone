import React from "react";
import "./SmallUserCard.css";
import Avatar from "../Avatar/Avatar";
export default function SmallUserCard({ title, avatar }) {
  return (
    <div className="sidebar__row__usercard">
      <div className="menu_item_user">
        {avatar && avatar === "currentUser" ? (
          <Avatar type="currentUser" />
        ) : (
          <Avatar />
        )}
      </div>
      <h4>{title}</h4>
    </div>
  );
}

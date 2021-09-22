import React from "react";
import "./Sidebar.css";
import MenuItem from "../MenuItem/MenuItem";
import SmallUserCard from "../SmallUserCard/SmallUserCard";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <SmallUserCard avatar="currentUser" title="Sairam Pasupuleti" />
      <MenuItem title="COVID-19 Information Center" icon="local_hospital" />
      <MenuItem title="Pages" icon="flag" />
      <MenuItem title="Friends" icon="people" />
      <MenuItem title="Messanger" icon="message" />
      <MenuItem title="Events" icon="date_range" />
      <MenuItem title="Videos" icon="video_library" />
      <MenuItem title="Memories" icon="history" />
    </div>
  );
}

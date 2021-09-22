import React from "react";
import "./Container.css";
import FeedContainer from "./FeedContainer/FeedContainer";
import Sidebar from "./Sidebar/Sidebar";
import WidgetContainer from "./WidgetContainer/WidgetContainer";

export default function Container() {
  return (
    <div className="content__layer">
      <Sidebar />
      <FeedContainer />
      <WidgetContainer />
    </div>
  );
}

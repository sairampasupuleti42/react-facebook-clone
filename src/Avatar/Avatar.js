import React from "react";
import "./Avatar.css";
export default function Avatar({ type, imageSrc, title }) {
  return <div className="avatar">{updateAvatar(type, imageSrc, title)}</div>;
}
function updateAvatar(type, imageSrc, title = "") {
  switch (type) {
    case "logo":
      return (
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/150px-Facebook_f_logo_%282019%29.svg.png" />
      );
    case "currentUser":
      return (
        <img
          src="https://scontent.fhyd6-1.fna.fbcdn.net/v/t1.0-1/p148x148/123938897_510337723258802_121810079642156853_o.jpg?_nc_cat=108&ccb=2&_nc_sid=dbb9e7&_nc_ohc=JsTeLV2cgmQAX9XaNzp&_nc_ht=scontent.fhyd6-1.fna&tp=6&oh=8d12cb3b6ac04b2254da5cb6a22267f3&oe=5FDA0A7A"
          alt="Sairam Pasupuleti"
        />
      );
    case "friend":
      return imageSrc ? (
        <img src={imageSrc} alt={title} />
      ) : (
        <img src="https://via.placeholder.com/45" alt="Image not avalable" />
      );
    default:
      return (
        <img src="https://via.placeholder.com/45" alt="Image not avalable" />
      );
  }
}

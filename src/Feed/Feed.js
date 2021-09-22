import React from 'react';
import './Feed.css';
import Avatar from '../Avatar/Avatar';
function pickImages() {
  var imagePicEle = document.createElement('input');
  imagePicEle.setAttribute('type', 'file');
  imagePicEle.setAttribute('hidden', true);
  imagePicEle.click();
  imagePicEle.addEventListener('change', (e) => {
    console.log(e.target);
  });
}
export default function Feed() {
  return (
    <div className="feed__panel">
      <div className="feed__panel__top">
        <Avatar type="currentUser" />
        <form className="feed__panel__user_form">
          <input
            type="text"
            placeholder={`What's on your mind, Sairam Pasupuleti ?`}
          />
          <button type="button">
            <i className="material-icons">send</i>
          </button>
        </form>
      </div>
      <div className="feed__panel__bottom">
        <div className="feed_panel_botton_option" onClick={pickImages}>
          <i className="material-icons g">photo_library</i>
          <h3>Photo/Videos</h3>
        </div>
        <div className="feed_panel_botton_option">
          <i className="material-icons b">person_add</i>
          <h3>Tag Friends</h3>
        </div>
        <div className="feed_panel_botton_option">
          <i className="material-icons y">mood</i>
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
}

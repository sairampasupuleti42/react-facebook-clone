import React, { useState } from "react";
import "./Post.css";
import Avatar from "../Avatar/Avatar";
export default function Post({ post }) {
  const USER_ACTION = [
    { upload_profile: "Updated profile picture" },
    { upload_photo: "Uploaded a photo" }
  ];
  var {
    type,
    imageSrc,
    postBy,
    action,
    privacy,
    textContent,
    blobContent,
    likes,
    comments,
    shares,
    timestamp
  } = post;
  var [count, setCount] = useState(likes);
  var likeAction = false;
  var [likeAction, setLikeAction] = useState(likeAction);
  function reactOnPost(likesFromPost, act) {
    if (act) {
      likeAction = act;
      likes = likes + 1;
      setLikeAction(likeAction);
      setCount(likes);

      //      likedClassName.color = "#2e81f4";
    } else {
      likeAction = act;
      likes = count - 1;
      setLikeAction(likeAction);
      setCount(likes);
    }
  }
  function time_ago(time) {
    switch (typeof time) {
      case "number":
        break;
      case "string":
        time = +new Date(time);
        break;
      case "object":
        if (time.constructor === Date) time = time.getTime();
        break;
      default:
        time = +new Date();
    }
    var time_formats = [
      [60, "seconds", 1], // 60
      [120, "1 minute ago", "1 minute from now"], // 60*2
      [3600, "minutes", 60], // 60*60, 60
      [7200, "1 hour ago", "1 hour from now"], // 60*60*2
      [86400, "hours", 3600], // 60*60*24, 60*60
      [172800, "Yesterday", "Tomorrow"], // 60*60*24*2
      [604800, "days", 86400], // 60*60*24*7, 60*60*24
      [1209600, "Last week", "Next week"], // 60*60*24*7*4*2
      [2419200, "weeks", 604800], // 60*60*24*7*4, 60*60*24*7
      [4838400, "Last month", "Next month"], // 60*60*24*7*4*2
      [29030400, "months", 2419200], // 60*60*24*7*4*12, 60*60*24*7*4
      [58060800, "Last year", "Next year"], // 60*60*24*7*4*12*2
      [2903040000, "years", 29030400], // 60*60*24*7*4*12*100, 60*60*24*7*4*12
      [5806080000, "Last century", "Next century"], // 60*60*24*7*4*12*100*2
      [58060800000, "centuries", 2903040000] // 60*60*24*7*4*12*100*20, 60*60*24*7*4*12*100
    ];
    var seconds = (+new Date() - time) / 1000,
      token = "ago",
      list_choice = 1;

    if (seconds == 0) {
      return "Just now";
    }
    if (seconds < 0) {
      seconds = Math.abs(seconds);
      token = "from now";
      list_choice = 2;
    }
    var i = 0,
      format;
    while ((format = time_formats[i++]))
      if (seconds < format[0]) {
        if (typeof format[2] == "string") return format[list_choice];
        else
          return (
            Math.floor(seconds / format[2]) + " " + format[1] + " " + token
          );
      }
    return time;
  }

  return (
    <div className="post__topcontainer">
      <div className="post__top">
        <div className="post__top__left">
          <div className="post__top__left_user">
            <Avatar type={type} imageSrc={imageSrc} title={postBy} />
            <div className="post__top__left_user_info">
              <h3>{postBy}</h3>
              <div className="post__top__left_user__tp">
                <div className="post__time">
                  {time_ago(new Date(Date.now() - timestamp))}
                </div>
                <div className="post__privacy">{getPrivacyIcon(privacy)}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="post__top__center__action">
          <span>
            {blobContent
              ? USER_ACTION.map(act =>
                  typeof act["upload_photo"] !== "undefined" ? (
                    <div className="post__top__center__action_status">
                      {act["upload_photo"]}
                    </div>
                  ) : null
                )
              : ""}
          </span>
        </div>
        <div className="post__top__right" />
      </div>
      <div className="post__body">
        {blobContent ? <img src={blobContent} alt={postBy} /> : null}
        {textContent ? textContent : null}
      </div>
      <div className="post__bottom">
        <div className="post__bottom_count">
          <div className="post__option">
            <h3>
              {" "}
              {count} <small> Likes</small>
            </h3>
          </div>
          <div className="post__option">
            <h3>
              {" "}
              {comments}
              <small> Comments</small>
            </h3>
          </div>
          <div className="post__option">
            <h3>
              {" "}
              {shares} <small>Shares</small>
            </h3>
          </div>
        </div>
        <div className="post__bottom_reactions">
          <div
            className="post__option"
            onClick={reactOnPost.bind(this, likes, !!!likeAction)}
          >
            <i className="material-icons">thumb_up</i>
            <h3> Like</h3>
          </div>
          <div className="post__option" onClick={handleCommnet.bind(this)}>
            <i className="material-icons">comment</i>
            <h3> Comment</h3>
          </div>
          <div className="post__option">
            <i className="material-icons">share</i>
            <h3> Share</h3>
          </div>
        </div>
        <div className="comment">
          {addinComment ? <h1>Comment here</h1> : ""}
        </div>
      </div>
    </div>
  );
}

function getPrivacyIcon(privacy) {
  switch (privacy) {
    case "private":
      return <i className="material-icons">lock</i>;
    case "friends":
      return <i className="material-icons">people</i>;
    default:
      return <i className="material-icons">public</i>;
  }
}
var addinComment = false;
function handleCommnet() {
  alert("Write comments");
  addinComment = true;
}

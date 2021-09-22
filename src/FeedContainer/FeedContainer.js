import React from "react";
import Feed from "../Feed/Feed";
import "./FeedContainer.css";
import Post from "../Post/Post";
export default function FeedContainer() {
  var posts = [
    {
      type: "friend",
      imageSrc:
        "https://scontent.fhyd6-1.fna.fbcdn.net/v/t1.0-1/p320x320/118631204_2730567393849018_4815002446374221834_o.jpg?_nc_cat=108&ccb=2&_nc_sid=dbb9e7&_nc_ohc=R8AohopSCtEAX_KqgPo&_nc_ht=scontent.fhyd6-1.fna&tp=6&oh=f7f91a294c40dff2d9da2e8142def483&oe=5FDC55DE",
      postBy: "Pawan Kalyan ",
      privacy: "public",
      blobContent:
        "https://scontent.fhyd6-1.fna.fbcdn.net/v/t1.0-1/p320x320/118631204_2730567393849018_4815002446374221834_o.jpg?_nc_cat=108&ccb=2&_nc_sid=dbb9e7&_nc_ohc=R8AohopSCtEAX_KqgPo&_nc_ht=scontent.fhyd6-1.fna&tp=6&oh=f7f91a294c40dff2d9da2e8142def483&oe=5FDC55DE",
      textContent: "PC: @Pawan Kalyan",
      action: "upload_profile",
      likes: 170,
      comments: 23,
      shares: 0,
      timestamp: 1762232
    },
    {
      type: "currentUser",
      postBy: "Sairam Pasupuleti",
      privacy: "private",
      textContent: "#AUSvsIND",
      blobContent:
        "https://www.cricbuzz.com/a/img/v1/600x600/i1/c198113/the-border-gavaskar-series-beg.jpg",
      likes: 152,
      comments: 14,
      shares: 0,
      timestamp: 1605717940
    },
    {
      type: "friend",
      imageSrc: "",
      postBy: "Venkatesh",
      privacy: "public",

      blobContent: "",
      textContent: "Hello world",
      likes: 0,
      comments: 0,
      shares: 0,
      timestamp: 1762232
    },
    {
      type: "currentUser",
      postBy: "Sairam Pasupuleti",
      privacy: "public",

      blobContent: "",
      textContent: "Hello world",
      likes: 6,
      comments: 0,
      shares: 0,
      timestamp: 18788232
    }
  ];
  return (
    <div className="feed_container">
      <Feed type="currentUser" />
      {posts.map((post, index) => (
        <Post key={index} post={post} />
      ))}
      ;
    </div>
  );
}

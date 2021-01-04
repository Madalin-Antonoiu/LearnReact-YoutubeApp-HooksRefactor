import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  //1. props.videos gets passed from App component
  //2. <div>{props.videos.length}</div>;

  const renderedList = videos.map((video) => {
    return (
      <VideoItem
        video={video}
        onVideoSelect={onVideoSelect}
        key={video.id.videoId}
      />
    );
  });

  //return <div>{videos.length}</div>;
  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;

//https://www.youtube.com/watch?v= + items[0].id

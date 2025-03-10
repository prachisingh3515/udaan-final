import React from "react";
import "./Landing.css"; 
import video from '../assets/video.mp4';

const VideoComponent = () => {
  return (
    <div className="video-container">
      <video
        className="video"
        autoPlay
        muted
        loop
        playsInline 
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoComponent;

import React from "react";
import "./Landing.css"; 

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
        <source src="src\assets\video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoComponent;

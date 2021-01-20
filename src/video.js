
import React, { useEffect, useRef, useState } from "react";
import "./video.css";
import VideoFooter from './Footer';
import VideoSidebar from './Sidebar';

const Video = ({
url,
// likecount,
// message,
// share,

channel,
description,
songname
}) => {
    const [play, setPlay] = useState(false);
    const videoRef = useRef(null);
  
    
    const onVideoPress = () => {
      if (play) {
        videoRef.current.pause();
        setPlay(false);
      } else {
        videoRef.current.play();
        setPlay(true);
      }
    };
 
  
  
    return (
        
       <div className="video">
        <video
          className="video__player"
          loop
          onClick={onVideoPress}
          src={url}
          ref={videoRef}
        />
        <VideoSidebar
                likes={9}
                messages
                shares />
          <VideoFooter
                channel={"jobin"}
                description={"Game "}
                song={"GOT"} />

      </div>
    );
  };
  
export default Video;



import React, { useEffect, useRef, useState } from "react";
import { Item } from "semantic-ui-react";
import Video from "./video"



//import "./video.css";

const Ginto = () => {
var [videourl,setvideos]=useState()


useEffect(()=>{
    fetch("http://localhost:3000/videos", {
      method: 'GET',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',

      },
     
      })    
      .then(response=>response.json())
      .then((response) => {
            setvideos(response)
            console.log(response)
            console.log(videourl)
    
       })
      .catch((error) => {
          console.log(error);
      });
  },[])
    return (
      <div >
          <ul>
              {videourl && videourl.map(item=>(
                    <Video
       url={item.url}
       share={item.sharecount}
       channel={item.channel}
       />
       
              ))}
          </ul>
          
          
      </div>
    );

  };
  
export default Ginto;




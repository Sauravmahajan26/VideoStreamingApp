import axios from "axios";
import React, { useEffect, useState } from "react";
import Video from "./Video";

function AllVideos() {
  const [videos, setvideos] = useState([]);
  useEffect(() => {
    async function getAllVideo() {
      const responce = await axios.get("http://localhost:8080/api/v1/videos");
      setvideos(responce.data);
    }
    getAllVideo();
  }, []);

  const handlebutton = () => {
    console.log("button dub gaya");
  };

  return (
    <>
      <h1>Videos</h1>
      <button onClick={handlebutton}>
        {videos.map((video) => (
          <Video key={video.videoId} video={video} />
        ))}
      </button>
    </>
  );
}

export default AllVideos;

import axios from "axios";
import React, { useEffect, useState } from "react";
import Video from "./Video";

function AllVideos({ onVideoSelect }) {
  const [videos, setvideos] = useState([]);
  const [vId, setvId] = useState("");
  useEffect(() => {
    async function getAllVideo() {
      const responce = await axios.get("http://localhost:8080/api/v1/videos");
      setvideos(responce.data);
    }
    getAllVideo();
  }, []);

  const handleButtonClick = (vIdx) => {
    console.log("Selected video ID: " + vIdx);

    onVideoSelect(vIdx);
  };

  return (
    <>
      <h1>Videos</h1>

      <div>
        {videos.map((video) => (
          <Video
            key={video.videoId}
            video={video}
            onButtonClick={handleButtonClick}
          />
        ))}
      </div>
    </>
  );
}

export default AllVideos;

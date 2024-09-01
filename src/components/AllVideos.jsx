import axios from "axios";
import React, { useEffect, useState } from "react";
import Video from "./Video";
import VideoService from "../services/VideoService";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { VideoAction } from "../store/videoSlice";

function AllVideos() {
  const [videos, setvideos] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    async function getAllVideo() {
      const responce = await VideoService.getAllVideos();
      setvideos(responce.data);
    }
    getAllVideo();
  }, []);

  const handleButtonClick = (vIdx) => {
    console.log("Selected video ID: " + vIdx);
    dispatch(VideoAction.selectedVideoId(vIdx));
    navigate("/");
  };

  return (
    <>
      <div className="col" style={{ marginTop: "115px" }}>
        <h1 className="text-2xl font-bold text-gray-700 dark:text-gray-100 text-center">
          Videos
        </h1>
        <div className="px-3">
          {videos.map((video) => (
            <Video
              key={video.videoId}
              video={video}
              onButtonClick={handleButtonClick}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default AllVideos;

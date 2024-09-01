import React, { useState, useEffect } from "react";
import VideoUpload from "./components/VideoUpload";
import { Toaster } from "react-hot-toast";
import VideoPlayerjs from "./components/VideoPlayerjs";
import { useNavigate } from "react-router-dom";
import Buttons from "./components/Buttons";
import AllVideos from "./components/AllVideos";

function App() {
  const navigate = useNavigate();
  const [videoId, setVideoId] = useState(
    "fc3484e3-47a9-43ed-ad9c-21199c5c12b0"
  );
  const [loading, setLoading] = useState(false);

  const handleVideoSelect = (id) => {
    console.log("Video selected:", id);

    setVideoId(id);
  };

  return (
    <>
      <Toaster />
      <div className="flex flex-col items-center space-y-9 justify-center py-9">
        <h1 className="text-3xl font-bold text-gray-700 dark:text-gray-100">
          Video Streaming App
        </h1>
        <Buttons />
        {/* Video Player */}
        <div className="w-full max-w-3xl">
          <VideoPlayerjs
            src={`http://localhost:8080/api/v1/videos/${videoId}/master.m3u8`}
          />
        </div>
        <AllVideos onVideoSelect={handleVideoSelect} />
      </div>
    </>
  );
}

export default App;

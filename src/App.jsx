import React, { useState, useEffect } from "react";
import VideoUpload from "./components/VideoUpload";
import { Toaster } from "react-hot-toast";
import VideoPlayer from "./components/VideoPlayer";
import { useNavigate } from "react-router-dom";
import Buttons from "./components/Buttons";
import AllVideos from "./components/AllVideos";

function App() {
  const navigate = useNavigate();
  const [videoId, setVideoId] = useState("");

  const handleVideoSelect = (id) => {
    console.log("Video selected:", id); // Confirm the ID being passed
    setVideoId(id);
  };

  // Log videoId changes
  useEffect(() => {
    console.log("videoId updated:", videoId);
  }, [videoId]);

  return (
    <>
      <Toaster />
      <div className="flex flex-col items-center space-y-9 justify-center py-9">
        <h1 className="text-3xl font-bold text-gray-700 dark:text-gray-100">
          Video Streaming App
        </h1>
        <Buttons />
        {videoId ? (
          <VideoPlayer videoId={videoId} />
        ) : (
          <AllVideos onVideoSelect={handleVideoSelect} />
        )}
      </div>
    </>
  );
}

export default App;

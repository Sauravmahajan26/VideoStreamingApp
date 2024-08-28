import React, { useState } from "react";
import VideoUpload from "./components/VideoUpload";
import { Toaster } from "react-hot-toast";
import VideoPlayer from "./components/VideoPlayer";
import { useNavigate } from "react-router-dom";
import Buttons from "./components/Buttons";
import AllVideos from "./components/AllVideos";

function App() {
  const navigate = useNavigate();

  return (
    <>
      <Toaster />
      <div className="flex flex-col items-center space-y-9 justify-center  py-9 ">
        <h1 className="text-3xl font-bold text-gray-700 dark:text-gray-100">
          Video Streaming App
        </h1>
        <Buttons />
        <AllVideos />
      </div>
    </>
  );
}

export default App;

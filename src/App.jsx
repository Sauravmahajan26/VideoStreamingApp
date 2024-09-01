import React, { useState } from "react";
import VideoUpload from "./components/VideoUpload";
import { Toaster } from "react-hot-toast";

import { Outlet, useNavigate } from "react-router-dom";
import Buttons from "./components/Buttons";
import AllVideos from "./components/AllVideos";
import SideBar from "./components/SideBar";
import Home from "./components/Home";

function App() {
  const navigate = useNavigate();

  const handleVideoSelect = (id) => {
    console.log("Video selected:", id);
    setVideoId(id);
  };

  return (
    <>
      <Toaster />
      <div className="container">
        <div className="row no-gutters">
          <SideBar />

          {/* <Home />
          <VideoUpload /> */}
          <Outlet />
          <AllVideos onVideoSelect={handleVideoSelect} />
        </div>
      </div>
    </>
  );
}

export default App;

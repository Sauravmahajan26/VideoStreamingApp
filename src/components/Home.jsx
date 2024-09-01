import React, { useState } from "react";
import VideoPlayerjs from "./VideoPlayerjs";
import { useSelector } from "react-redux";
function Home() {
  return (
    <div className="col-7 d-flex flex-column align-items-center justify-content-center py-4">
      <h1 className="text-3xl font-bold text-gray-700 dark:text-gray-100">
        Video Streaming App
      </h1>
      <div className="w-100 max-w-3xl mt-4">
        <VideoPlayerjs />
      </div>
    </div>
  );
}

export default Home;

import React, { useState } from "react";
import VideoUpload from "./components/VideoUpload";
import { Toaster } from "react-hot-toast";

function App() {
  const [videoid, setvideoid] = useState(
    "c5358bf9-6df4-431f-8799-e7037b390f7f"
  );
  return (
    <>
      <Toaster />
      <div className="flex flex-col items-center space-y-9 justify-center  py-9 ">
        <h1 className="text-3xl font-bold text-gray-700 dark:text-gray-100">
          Video Streaming App
        </h1>
        <div className="flex w-full justify-around mt-14">
          <div className="text-white">
            <h1>Video Player</h1>
            <video
              style={{ width: "500px" }}
              src={`http://localhost:8080/api/v1/videos/stream/range/${videoid}`}
              controls
            ></video>
          </div>
          <VideoUpload />
        </div>
      </div>
    </>
  );
}

export default App;

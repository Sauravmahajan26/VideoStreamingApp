import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import VideoUpload from "./components/VideoUpload.jsx";
import VideoPlayer from "./components/VideoPlayer.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route index element={<App />}></Route>
        <Route path="/addVideo" element={<VideoUpload />}></Route>
        <Route path="/playVideo" element={<VideoPlayer />}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

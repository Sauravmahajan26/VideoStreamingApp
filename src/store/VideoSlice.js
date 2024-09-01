import { createSlice } from "@reduxjs/toolkit";

const VideoSlice = createSlice({
  name: "videoId",
  initialState: "",
  reducers: {
    selectedVideoId: (state, action) => {
      console.log("hehehe" + action.payload);
      return action.payload;
    },
  },
});

export const VideoAction = VideoSlice.actions;

export default VideoSlice;

import React from "react";
import { useNavigate } from "react-router-dom";

function Buttons() {
  const navigate = useNavigate();
  const handleAddPlayer = () => {
    console.log("button click");
    navigate("/addVideo");
  };

  const handlePlayerButton = () => {
    navigate("/App");
  };
  return (
    <div className="flex space-x-7">
      <button
        onClick={handleAddPlayer}
        type="button"
        className="btn btn-outline-success"
      >
        Add Video
      </button>
      <button
        onClick={handlePlayerButton}
        type="button"
        className="btn btn-outline-info"
      >
        All videos
      </button>
    </div>
  );
}

export default Buttons;

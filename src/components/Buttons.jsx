import React from "react";
import { useNavigate } from "react-router-dom";

function Buttons() {
  const navigate = useNavigate();
  const handleAddPlayer = () => {
    console.log("button click");
    navigate("/addVideo");
  };

  const handlePlayerButton = () => {
    navigate("/playVideo");
  };
  return (
    <div className="flex space-x-7">
      <button
        onClick={handleAddPlayer}
        type="button"
        class="btn btn-outline-success"
      >
        Add Video
      </button>
      <button
        onClick={handlePlayerButton}
        type="button"
        class="btn btn-outline-info"
      >
        play video
      </button>
    </div>
  );
}

export default Buttons;

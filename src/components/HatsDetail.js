import React from "react";

function HatsDetail({
  hats,
  handleHatsImgChange,
  selectedHats,
  setSelectedHats,
}) {
  return (
    <div
      className={`square ${selectedHats.id === hats.id ? "selected" : ""}`}
      onClick={() => {
        handleHatsImgChange(hats);
        setSelectedHats(hats);
      }}
    >
      <img
        src={hats.imgLink}
        alt="character-hats-min"
        className="character-hats-min"
      />
    </div>
  );
}

export default HatsDetail;

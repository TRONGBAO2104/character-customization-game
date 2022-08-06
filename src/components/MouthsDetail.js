import React from "react";

function MouthsDetail({
  mouths,
  handleMouthsImgChange,
  selectedMouths,
  setSelectedMouths,
}) {
  return (
    <div
      className={`square ${selectedMouths.id === mouths.id ? "selected" : ""}`}
      onClick={() => {
        handleMouthsImgChange(mouths);
        setSelectedMouths(mouths);
      }}
    >
      <img
        src={mouths.imgLink}
        alt="character-mouths-min"
        className="character-mouths-min"
      />
    </div>
  );
}

export default MouthsDetail;

import React from "react";

function MouthsDetail({
  selected,
  setSelected,
  mouths,
  handleMouthsImgChange,
}) {
  return (
    <div
      className={`square ${selected === mouths ? "selected" : ""}`}
      onClick={() => setSelected(mouths)}
    >
      <img
        src={mouths.imgLink}
        alt="character-mouths-min"
        className="character-mouths-min"
        onClick={() => handleMouthsImgChange(mouths)}
      />
    </div>
  );
}

export default MouthsDetail;

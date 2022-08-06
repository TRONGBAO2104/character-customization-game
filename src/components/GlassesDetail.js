import React from "react";

function GlassesDetail({
  glasses,
  handleGlassesImgChange,
  selectedGlasses,
  setSelectedGlasses,
}) {
  return (
    <div
      className={`square ${
        selectedGlasses.id === glasses.id ? "selected" : ""
      }`}
      onClick={() => {
        handleGlassesImgChange(glasses);
        setSelectedGlasses(glasses);
      }}
    >
      <img
        src={glasses.imgLink}
        alt="character-glasses-min"
        className="character-glasses-min"
      />
    </div>
  );
}

export default GlassesDetail;

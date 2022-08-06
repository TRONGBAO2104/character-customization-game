import React from "react";

function HairDetail({
  hair,
  handleHairImgChange,
  selectedHair,
  setSelectedHair,
}) {
  return (
    <div
      // className={`square ${selected === hair.id ? "selected" : ""}`}
      className={`square ${selectedHair.id === hair.id ? "selected" : ""}`}
      onClick={() => {
        handleHairImgChange(hair);
        setSelectedHair(hair);
      }}
    >
      <img
        src={hair.imgLink}
        alt="character-hair-min"
        className="character-hair-min"
      />
    </div>
  );
}

export default HairDetail;

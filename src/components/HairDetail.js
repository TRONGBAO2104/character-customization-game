import React from "react";

function HairDetail({ selected, setSelected, hair, handleHairImgChange }) {
  return (
    <div
      className={`square ${selected === hair.id ? "selected" : ""}`}
      onClick={() => {
        handleHairImgChange(hair);
        setSelected(hair.id);
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

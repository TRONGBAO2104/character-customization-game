import React from "react";

function EyesDetail({
  eyes,
  handleEyesImgChange,
  selectedEyes,
  setSelectedEyes,
}) {
  console.log(selectedEyes);
  return (
    <div
      // className={`square ${selected === body.id ? "selected" : ""}`}
      className={`square ${selectedEyes.id === eyes.id ? "selected" : ""}`}
      key={eyes.id}
      onClick={() => {
        handleEyesImgChange(eyes);
        setSelectedEyes(eyes);
      }}
    >
      <img
        src={eyes.imgLink}
        alt="character-eyes-min"
        className="character-eyes-min"
      />
    </div>
  );
}

export default EyesDetail;

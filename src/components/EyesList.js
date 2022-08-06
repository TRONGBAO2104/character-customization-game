import React from "react";
import EyesDetail from "./EyesDetail";

function EyesList({
  eyesItems,
  handleEyesImgChange,
  selectedEyes,
  setSelectedEyes,
}) {
  return (
    <div className="list-custom">
      <h3>Eyes</h3>
      <div className="list-custom-detail">
        {eyesItems.map((eyes) => (
          <EyesDetail
            key={eyes.id}
            eyes={eyes}
            handleEyesImgChange={handleEyesImgChange}
            selectedEyes={selectedEyes}
            setSelectedEyes={setSelectedEyes}
          />
        ))}
      </div>
    </div>
  );
}

export default EyesList;

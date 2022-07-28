import React, { useState } from "react";
import EyesDetail from "./EyesDetail";

function EyesList({ eyesItems, handleEyesImgChange }) {
  const [selectedEyes, setSelectedEyes] = useState(eyesItems[0].id);
  return (
    <div className="list-custom">
      <h3>Eyes</h3>
      <div className="list-custom-detail">
        {eyesItems.map((eyes) => (
          <EyesDetail
            key={eyes.id}
            eyes={eyes}
            handleEyesImgChange={handleEyesImgChange}
            selectedEye={selectedEyes}
            setSelectedEyes={setSelectedEyes}
          />
        ))}
      </div>
    </div>
  );
}

export default EyesList;

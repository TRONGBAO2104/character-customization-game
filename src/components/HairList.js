import React from "react";
import HairDetail from "./HairDetail";

function HairList({
  hairItems,
  handleHairImgChange,
  selectedHair,
  setSelectedHair,
}) {
  return (
    <div className="list-custom">
      <h3>Hair</h3>
      <div className="list-custom-detail">
        {hairItems.map((hair, index) => (
          <HairDetail
            key={hair.id}
            hair={hair}
            handleHairImgChange={handleHairImgChange}
            hairItems={hairItems}
            selectedHair={selectedHair}
            setSelectedHair={setSelectedHair}
          />
        ))}
      </div>
    </div>
  );
}

export default HairList;

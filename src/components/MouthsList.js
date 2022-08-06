import React from "react";
import MouthsDetail from "./MouthsDetail";

function MouthsList({
  mouthsItems,
  handleMouthsImgChange,
  selectedMouths,
  setSelectedMouths,
}) {
  return (
    <div className="list-custom">
      <h3>Mouths</h3>
      <div className="list-custom-detail">
        {mouthsItems.map((mouths) => (
          <MouthsDetail
            key={mouths.id}
            mouths={mouths}
            handleMouthsImgChange={handleMouthsImgChange}
            selectedMouths={selectedMouths}
            setSelectedMouths={setSelectedMouths}
          />
        ))}
      </div>
    </div>
  );
}

export default MouthsList;

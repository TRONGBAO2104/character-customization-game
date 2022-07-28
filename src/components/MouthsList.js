import React from "react";
import MouthsDetail from "./MouthsDetail";

function MouthsList({
  selected,
  mouthsItems,
  handleMouthsImgChange,
  setSelected,
  handleSelect,
}) {
  return (
    <div className="list-custom">
      <h3>Mouths</h3>
      <div className="list-custom-detail">
        {mouthsItems.map((mouths) => (
          <MouthsDetail
            setSelected={setSelected}
            selected={selected}
            key={mouths.id}
            mouths={mouths}
            handleMouthsImgChange={handleMouthsImgChange}
            handleSelect={handleSelect}
          />
        ))}
      </div>
    </div>
  );
}

export default MouthsList;

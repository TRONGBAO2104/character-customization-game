import React from "react";
import HairDetail from "./HairDetail";

function HairList({ selected, setSelected, hairItems, handleHairImgChange }) {
  return (
    <div className="list-custom">
      <h3>Hair</h3>
      <div className="list-custom-detail">
        {hairItems.map((hair) => (
          <HairDetail
            setSelected={setSelected}
            selected={selected}
            key={hair.id}
            hair={hair}
            handleHairImgChange={handleHairImgChange}
          />
        ))}
      </div>
    </div>
  );
}

export default HairList;

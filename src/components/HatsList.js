import React from "react";
import HatsDetail from "./HatsDetail";

function HatsList({
  hatsItems,
  handleHatsImgChange,
  selectedHats,
  setSelectedHats,
}) {
  return (
    <div className="list-custom">
      <h3>Hats</h3>
      <div className="list-custom-detail">
        {hatsItems.map((hats) => (
          <HatsDetail
            key={hats.id}
            hats={hats}
            handleHatsImgChange={handleHatsImgChange}
            selectedHats={selectedHats}
            setSelectedHats={setSelectedHats}
          />
        ))}
      </div>
    </div>
  );
}

export default HatsList;

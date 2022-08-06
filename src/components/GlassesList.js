import React from "react";
import GlassesDetail from "./GlassesDetail";

function GlassesList({
  glassesItems,
  handleGlassesImgChange,
  selectedGlasses,
  setSelectedGlasses,
}) {
  return (
    <div className="list-custom">
      <h3>Glasses</h3>
      <div className="list-custom-detail">
        {glassesItems.map((glasses) => (
          <GlassesDetail
            key={glasses.id}
            glasses={glasses}
            handleGlassesImgChange={handleGlassesImgChange}
            selectedGlasses={selectedGlasses}
            setSelectedGlasses={setSelectedGlasses}
          />
        ))}
      </div>
    </div>
  );
}

export default GlassesList;

import React from "react";

function Clothing1Detail({
  selectedClothes1,
  setSelectedClothes1,
  clothes1,
  handleClothing1ImgChange,
}) {
  return (
    <div
      className={`square ${
        selectedClothes1.id === clothes1.id ? "selected" : ""
      }`}
      key={clothes1.id}
      onClick={() => {
        handleClothing1ImgChange(clothes1);
        setSelectedClothes1(clothes1);
      }}
    >
      <img
        src={clothes1.imgLink}
        alt="character-layer1-min"
        className="character-layer1-min"
      />
    </div>
  );
}

export default Clothing1Detail;

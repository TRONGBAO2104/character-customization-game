import React from "react";

function Clothing2Detail({
  selectedClothes2,
  setSelectedClothes2,
  clothes2,
  handleClothing2ImgChange,
}) {
  return (
    <div
      className={`square ${
        selectedClothes2.id === clothes2.id ? "selected" : ""
      }`}
      key={clothes2.id}
      onClick={() => {
        handleClothing2ImgChange(clothes2);
        setSelectedClothes2(clothes2);
      }}
    >
      <img
        src={clothes2.imgLink}
        alt="character-layer2-min"
        className="character-layer2-min"
      />
    </div>
  );
}

export default Clothing2Detail;

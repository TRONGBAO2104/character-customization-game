import React from "react";

function Clothing1Detail({
  selected,
  setSelected,
  clothes1,
  handleClothing1ImgChange,
}) {
  return (
    <div
      className={`square ${selected === clothes1.id ? "selected" : ""}`}
      key={clothes1.id}
      onClick={() => {
        handleClothing1ImgChange(clothes1);
        setSelected(clothes1.id);
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

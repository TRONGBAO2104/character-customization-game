import React from "react";

function Clothing2Detail({
  selected,
  setSelected,
  clothes2,
  handleClothing2ImgChange,
}) {
  return (
    <div
      className={`square ${selected === clothes2.id ? "selected" : ""}`}
      key={clothes2.id}
      onClick={() => {
        handleClothing2ImgChange(clothes2);
        setSelected(clothes2.id);
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

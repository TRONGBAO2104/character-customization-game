import React from "react";
import Clothing1Detail from "./Clothing1Detail";

function Clothing1List({
  selected,
  setSelected,
  clothes1Items,
  handleClothing1ImgChange,
}) {
  return (
    <div className="list-custom">
      <h3>Clothing 1</h3>
      <div className="list-custom-detail">
        {clothes1Items.map((clothes1) => (
          <Clothing1Detail
            setSelected={setSelected}
            selected={selected}
            key={clothes1.id}
            clothes1={clothes1}
            handleClothing1ImgChange={handleClothing1ImgChange}
          />
        ))}
      </div>
    </div>
  );
}

export default Clothing1List;

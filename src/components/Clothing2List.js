import React from "react";
import Clothing2Detail from "./Clothing2Detail";

function Clothing2List({
  selectedClothes2,
  setSelectedClothes2,
  clothes2Items,
  handleClothing2ImgChange,
}) {
  return (
    <div className="list-custom">
      <h3>Clothing 2</h3>
      <div className="list-custom-detail">
        {clothes2Items.map((clothes2) => (
          <Clothing2Detail
            selectedClothes2={selectedClothes2}
            setSelectedClothes2={setSelectedClothes2}
            key={clothes2.id}
            clothes2={clothes2}
            handleClothing2ImgChange={handleClothing2ImgChange}
          />
        ))}
      </div>
    </div>
  );
}

export default Clothing2List;

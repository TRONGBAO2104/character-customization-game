import React from "react";
import BodyDetail from "./BodyDetail";

function BodyList({
  bodyItems,
  handleBodyImgChange,
  selectedBody,
  setSelectedBody,
}) {
  return (
    <div className="list-custom">
      <h3>Body</h3>
      <div className="list-custom-detail">
        {bodyItems.map((body) => (
          <BodyDetail
            key={body.id}
            body={body}
            handleBodyImgChange={handleBodyImgChange}
            selectedBody={selectedBody}
            setSelectedBody={setSelectedBody}
          />
        ))}
      </div>
    </div>
  );
}

export default BodyList;

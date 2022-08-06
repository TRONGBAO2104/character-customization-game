import React from "react";

function BodyDetail({
  body,
  handleBodyImgChange,
  selectedBody,
  setSelectedBody,
}) {
  // console.log(">>> selectedBody", selectedBody);
  return (
    <div
      // className={`square ${selected === body.id ? "selected" : ""}`}
      className={`square ${selectedBody.id === body.id ? "selected" : ""}`}
      key={body.id}
      onClick={() => {
        handleBodyImgChange(body);
        setSelectedBody(body);
      }}
    >
      <img
        src={body.imgLink}
        alt="character-body-min"
        className="character-body-min"
      />
    </div>
  );
}

export default BodyDetail;

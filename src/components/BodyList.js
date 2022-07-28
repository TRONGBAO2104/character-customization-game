import React, { useState } from "react";
import BodyDetail from "./BodyDetail";

function BodyList({ bodyItems, handleBodyImgChange }) {
  const [selectedBody, setSelectedBody] = useState(bodyItems[0].id);
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

import React, { useState, useEffect } from "react";
import "./App.css";
import BodyList from "./components/BodyList";
import Clothing1List from "./components/Clothing1List";
import Clothing2List from "./components/Clothing2List";
import EyesList from "./components/EyesList";
import HairList from "./components/HairList";
import MouthsList from "./components/MouthsList";

const total = {
  body: 17,
  eyes: 24,
  hair: 73,
  mouth: 24,
  eyebrows: 15,
  hat: 28,
  glasses: 17,
  clothing1: 5,
  clothing2: 5,
  clothing3: 9,
};

let bodyItems = [];
for (let i = 1; i <= total.body; i++) {
  bodyItems.push({ id: `body-${i}`, imgLink: `./character/body/${i}.png` });
}

let eyesItems = [];
for (let i = 1; i <= total.eyes; i++) {
  eyesItems.push({ id: `eyes-${i}`, imgLink: `./character/eyes/${i}.png` });
}

let clothes1Items = [];
for (let i = 1; i <= total.clothing1; i++) {
  clothes1Items.push({
    id: `clothes1-${i}`,
    imgLink: `./character/clothes/layer_1/${i}.png`,
  });
}
let clothes2Items = [];
for (let i = 1; i <= total.clothing2; i++) {
  clothes2Items.push({
    id: `clothes1-${i}`,
    imgLink: `./character/clothes/layer_2/${i}.png`,
  });
}

let hairItems = [];
for (let i = 1; i <= total.hair; i++) {
  hairItems.push({ id: `hair-${i}`, imgLink: `./character/hair/${i}.png` });
}

let mouthsItems = [];
for (var i = 1; i <= total.mouth; i++) {
  mouthsItems.push({
    id: `mounths-${i}`,
    imgLink: `./character/mouths/${i}.png`,
  });
}

function App() {
  const [body, setBody] = useState(bodyItems[0]);
  const [eyes, setEyes] = useState(eyesItems[0]);
  const [clothes1, setClothes1] = useState(clothes1Items[0]);
  const [clothes2, setClothes2] = useState(clothes2Items[0]);
  const [hair, setHair] = useState(hairItems[0]);
  const [mouths, setMouths] = useState(mouthsItems[0]);

  const handleBodyImgChange = (bodyItem) => {
    // console.log(bodyItem);
    setBody({ ...bodyItem });
  };

  const handleEyesImgChange = (eyesItem) => {
    setEyes({ ...eyesItem });
  };

  const handleClothing1ImgChange = (clothing1Item) => {
    setClothes1({ ...clothing1Item });
  };

  const handleClothing2ImgChange = (clothing2Item) => {
    setClothes2({ ...clothing2Item });
  };

  const handleHairImgChange = (hairItem) => {
    setHair({ ...hairItem });
  };

  const handleMouthsImgChange = (mouthsItem) => {
    setMouths({ ...mouthsItem });
  };

  useEffect(() => {
    handleRandom();
  }, []);

  const handleRandom = () => {
    const indexBody = Math.floor(Math.random() * total.body);
    // setBody(bodyItems[indexBody]);
    // console.log("=================================");
    // console.log(">>> indexBody: ", indexBody);
    // console.log(">>> bodyItems[indexBody]: ", bodyItems[indexBody]);
    // console.log(">>> setBody(bodyItems[indexBody]): ", setBody(bodyItems[indexBody]));
    // console.log(">>> setBody(bodyItems[2]): ", setBody(bodyItems[2]));
    // console.log(">>> setBody(bodyItems): ", setBody(bodyItems));

    const indexEyes = Math.floor(Math.random() * total.eyes);
    const indexClothing1 = Math.floor(Math.random() * total.clothing1);
    const indexClothing2 = Math.floor(Math.random() * total.clothing2);
    const indexHair = Math.floor(Math.random() * total.hair);
    const indexMouths = Math.floor(Math.random() * total.mouth);

    setBody(bodyItems[indexBody]);
    setEyes(eyesItems[indexEyes]);
    setHair(hairItems[indexHair]);
    setClothes1(clothes1Items[indexClothing1]);
    setClothes2(clothes2Items[indexClothing2]);
    setMouths(mouthsItems[indexMouths]);
  };

  return (
    <div className="container">
      <div className="title">
        <h1>CHARACTER</h1>
        <h2>🛠️ CUSTOMIZATION 🛠️</h2>
        <hr />
      </div>

      <div className="character">
        <div className="left-column">
          <div className="character-avatar">
            <div className="avatar-img">
              <img
                src={body.imgLink}
                alt="character_body"
                className="character-body"
              />
              <img
                src={eyes.imgLink}
                alt="character_eyes"
                className="character-eyes"
              />
              <img
                src={clothes1.imgLink}
                alt="character_eyes"
                className="character-layer1"
              />
              <img
                src={clothes2.imgLink}
                alt="character_eyes"
                className="character-layer2"
              />
              <img
                src={hair.imgLink}
                alt="character_hair"
                className="character-hair"
              />
              <img
                src={mouths.imgLink}
                alt="character_mouths"
                className="character-mouths"
              />
              <img
                src="./character/noses/1.png"
                alt="character_noses"
                className="character-noses"
              />
              {/* <img
                src="./character/clothes/layer_3/1.png"
                alt="character_eyes"
                className="character-layer3"
              />
              <img
                src="./character/eyebrows/1.png"
                alt="character_eyebrows"
                className="character-eyebrows"
              />
              <img
                src="./character/accessories/glasses/1.png"
                alt="character_glasses"
                className="character-glasses"
              /> */}
            </div>
            <button className="button" onClick={handleRandom}>
              RANDOMIZE
            </button>
          </div>
        </div>

        <div className="right-column">
          <div className="character-custom">
            <BodyList
              bodyItems={bodyItems}
              handleBodyImgChange={handleBodyImgChange}
            />
            <EyesList
              eyesItems={eyesItems}
              handleEyesImgChange={handleEyesImgChange}
            />
            <Clothing1List
              clothes1Items={clothes1Items}
              handleClothing1ImgChange={handleClothing1ImgChange}
            />
            <Clothing2List
              clothes2Items={clothes2Items}
              handleClothing2ImgChange={handleClothing2ImgChange}
            />
            <HairList
              hairItems={hairItems}
              handleHairImgChange={handleHairImgChange}
            />
            <MouthsList
              mouthsItems={mouthsItems}
              handleMouthsImgChange={handleMouthsImgChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

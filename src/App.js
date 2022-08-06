import React, { useState, useEffect } from "react";
import "./App.css";
import BodyList from "./components/BodyList";
import Clothing1List from "./components/Clothing1List";
import Clothing2List from "./components/Clothing2List";
import EyesList from "./components/EyesList";
import GlassesList from "./components/GlassesList";
import HairList from "./components/HairList";
import HatsList from "./components/HatsList";
import MouthsList from "./components/MouthsList";

const total = {
  body: 17,
  eyes: 24,
  hair: 73,
  mouth: 24,
  eyebrows: 15,
  hats: 28,
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

let hairItems = [];
for (let i = 1; i <= total.hair; i++) {
  hairItems.push({ id: `hair-${i}`, imgLink: `./character/hair/${i}.png` });
}

let mouthsItems = [];
for (let i = 1; i <= total.mouth; i++) {
  mouthsItems.push({
    id: `mounths-${i}`,
    imgLink: `./character/mouths/${i}.png`,
  });
}

let glassesItems = [];
for (let i = 1; i <= total.glasses; i++) {
  glassesItems.push({
    id: `glasses-${i}`,
    imgLink: `./character/accessories/glasses/${i}.png`,
  });
}

let hatsItems = [];
for (let i = 1; i <= total.hats; i++) {
  hatsItems.push({
    id: `hats-${i}`,
    imgLink: `./character/accessories/hats/${i}.png`,
  });
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

function App() {
  const [body, setBody] = useState(bodyItems[0]);
  const [eyes, setEyes] = useState(eyesItems[0]);
  const [hair, setHair] = useState(hairItems[0]);
  const [mouths, setMouths] = useState(mouthsItems[0]);
  const [glasses, setGlasses] = useState(glassesItems[0]);
  const [hats, setHats] = useState(hatsItems[0]);
  const [clothes1, setClothes1] = useState(clothes1Items[0]);
  const [clothes2, setClothes2] = useState(clothes2Items[0]);

  const [selectedBody, setSelectedBody] = useState(bodyItems[0]);
  const [selectedEyes, setSelectedEyes] = useState(eyesItems[0]);
  const [selectedHair, setSelectedHair] = useState(hairItems[0]);
  const [selectedMouths, setSelectedMouths] = useState(mouthsItems[0]);
  const [selectedGlasses, setSelectedGlasses] = useState(glassesItems[0]);
  const [selectedHats, setSelectedHats] = useState(hatsItems[0]);
  const [selectedClothes1, setSelectedClothes1] = useState(clothes1Items[0]);
  const [selectedClothes2, setSelectedClothes2] = useState(clothes2Items[0]);

  const handleBodyImgChange = (bodyItem) => {
    setBody(bodyItem);
  };

  const handleEyesImgChange = (eyesItem) => {
    setEyes(eyesItem);
  };

  const handleHairImgChange = (hairItem) => {
    setHair(hairItem);
  };

  const handleMouthsImgChange = (mouthsItem) => {
    setMouths(mouthsItem);
  };

  const handleGlassesImgChange = (glassesItem) => {
    setGlasses(glassesItem);
  };

  const handleHatsImgChange = (hatsItem) => {
    setHats(hatsItem);
  };

  const handleClothing1ImgChange = (clothing1Item) => {
    setClothes1(clothing1Item);
  };

  const handleClothing2ImgChange = (clothing2Item) => {
    setClothes2(clothing2Item);
  };

  useEffect(() => {
    handleRandom();
  }, []);

  const handleRandom = () => {
    const indexBody = Math.floor(Math.random() * total.body);
    const indexEyes = Math.floor(Math.random() * total.eyes);
    const indexHair = Math.floor(Math.random() * total.hair);
    const indexMouth = Math.floor(Math.random() * total.mouth);
    const indexGlass = Math.floor(Math.random() * total.glasses);
    const indexHat = Math.floor(Math.random() * total.hats);
    const indexClothing1 = Math.floor(Math.random() * total.clothing1);
    const indexClothing2 = Math.floor(Math.random() * total.clothing2);

    setBody(bodyItems[indexBody]);
    setEyes(eyesItems[indexEyes]);
    setHair(hairItems[indexHair]);
    setMouths(mouthsItems[indexMouth]);
    setGlasses(glassesItems[indexGlass]);
    setHats(hatsItems[indexHat]);
    setClothes1(clothes1Items[indexClothing1]);
    setClothes2(clothes2Items[indexClothing2]);

    setSelectedBody(bodyItems[indexBody]);
    setSelectedEyes(eyesItems[indexEyes]);
    setSelectedHair(hairItems[indexHair]);
    setSelectedMouths(mouthsItems[indexMouth]);
    setSelectedGlasses(glassesItems[indexGlass]);
    setSelectedHats(hatsItems[indexHat]);
    setSelectedClothes1(clothes1Items[indexClothing1]);
    setSelectedClothes2(clothes2Items[indexClothing2]);
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
              <img src={body.imgLink} alt="" className="character-body" />
              <img src={eyes.imgLink} alt="" className="character-eyes" />
              <img src={hair.imgLink} alt="" className="character-hair" />
              <img src={mouths.imgLink} alt="" className="character-mouths" />
              <img src={glasses.imgLink} alt="" className="character-glasses" />
              <img src={hats.imgLink} alt="" className="character-hats" />
              <img src={clothes1.imgLink} alt="" className="character-layer1" />
              <img src={clothes2.imgLink} alt="" className="character-layer2" />

              <img
                src="./character/noses/1.png"
                alt=""
                className="character-noses"
              />
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
              selectedBody={selectedBody}
              setSelectedBody={setSelectedBody}
            />
            <EyesList
              eyesItems={eyesItems}
              handleEyesImgChange={handleEyesImgChange}
              selectedEyes={selectedEyes}
              setSelectedEyes={setSelectedEyes}
            />
            <MouthsList
              mouthsItems={mouthsItems}
              handleMouthsImgChange={handleMouthsImgChange}
              selectedMouths={selectedMouths}
              setSelectedMouths={setSelectedMouths}
            />
            <HairList
              hairItems={hairItems}
              handleHairImgChange={handleHairImgChange}
              selectedHair={selectedHair}
              setSelectedHair={setSelectedHair}
            />
            <GlassesList
              glassesItems={glassesItems}
              handleGlassesImgChange={handleGlassesImgChange}
              selectedGlasses={selectedGlasses}
              setSelectedGlasses={setSelectedGlasses}
            />
            <HatsList
              hatsItems={hatsItems}
              handleHatsImgChange={handleHatsImgChange}
              selectedHats={selectedHats}
              setSelectedHats={setSelectedHats}
            />
            <Clothing1List
              clothes1Items={clothes1Items}
              handleClothing1ImgChange={handleClothing1ImgChange}
              selectedClothes1={selectedClothes1}
              setSelectedClothes1={setSelectedClothes1}
            />
            <Clothing2List
              clothes2Items={clothes2Items}
              handleClothing2ImgChange={handleClothing2ImgChange}
              selectedClothes2={selectedClothes2}
              setSelectedClothes2={setSelectedClothes2}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

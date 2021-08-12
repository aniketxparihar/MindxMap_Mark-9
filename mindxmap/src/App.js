import { React, useState } from "react";
import mind from './mind.png';
import "./App.css";

const ramdasDictionary = {
  1: (
    <iframe
      width={300}
      height={200}
      src="https://www.youtube.com/embed/viNlErR88GE"
      title="YouTube video player"
      frameBorder={0}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  ),
};
const sadhguruDictionary = {
  1: (
    <iframe
      width={300}
      height={200}
      src="https://www.youtube.com/embed/VbYZ8J2dFLg"
      title="YouTube video player"
      frameBorder={0}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  ),
  2: (
    <iframe
      width={300}
      height={200}
      src="https://www.youtube.com/embed/MwgkvBZXum0"
      title="YouTube video player"
      frameBorder={0}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  ),
  3: (
    <iframe
      width={300}
      height={200}
      src="https://www.youtube.com/embed/BYTB9JROgMI"
      title="YouTube video player"
      frameBorder={0}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  ),

  4: (
    <iframe
      width={300}
      height={200}
      src="https://www.youtube.com/embed/Gw1I7fqmxmA"
      title="YouTube video player"
      frameBorder={0}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  ),
  5: (
    <iframe
      width={300}
      height={200}
      src="https://www.youtube.com/embed/RlF-tO2YVPg"
      title="YouTube video player"
      frameBorder="{0}"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  ),
  6: (
    <iframe
      width={300}
      height={200}
      src="https://www.youtube.com/embed/IAoffyn2xpM"
      title="YouTube video player"
      frameBorder={0}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  ),
};
const neitzcheDictionary = {
  1: (
    <iframe
      width={300}
      height={200}
      src="https://www.youtube.com/embed/LCiB9oMnIbI"
      title="YouTube video player"
      frameBorder={0}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  ),
  2: (
    <iframe
      width={300}
      height={200}
      src="https://www.youtube.com/embed/MwgkvBZXum0"
      title="YouTube video player"
      frameBorder={0}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  ),
  3: (
    <iframe
      width={300}
      height={200}
      src="https://www.youtube.com/embed/BYTB9JROgMI"
      title="YouTube video player"
      frameBorder={0}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  ),

  4: (
    <iframe
      width={300}
      height={200}
      src="https://www.youtube.com/embed/Gw1I7fqmxmA"
      title="YouTube video player"
      frameBorder={0}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  ),
};
const awDictionary = {
  1: (
    <iframe
      width={300}
      height={200}
      src="https://www.youtube.com/embed/re5-944zsmk"
      title="YouTube video player"
      frameBorder={0}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  ),
};
const sidwarrierDictionary = {
  1: (
    <iframe
      width={300}
      height={200}
      src="https://www.youtube.com/embed/MioXJQ-zWh8"
      title="YouTube video player"
      frameBorder={0}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  ),
};
const srimDictionary = {
  1: (
    <iframe
      width={300}
      height={200}
      src="https://www.youtube.com/embed/LCiB9oMnIbI"
      title="YouTube video player"
      frameBorder={0}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  ),
  2: (
    <iframe
      width={300}
      height={200}
      src="https://www.youtube.com/embed/MwgkvBZXum0"
      title="YouTube video player"
      frameBorder={0}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  ),
  3: (
    <iframe
      width={300}
      height={200}
      src="https://www.youtube.com/embed/BYTB9JROgMI"
      title="YouTube video player"
      frameBorder={0}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  ),

  4: (
    <iframe
      width={300}
      height={200}
      src="https://www.youtube.com/embed/Gw1I7fqmxmA"
      title="YouTube video player"
      frameBorder={0}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  ),
};
const jkDictionary = {
  1: (
    <iframe
      width={300}
      height={200}
      src="https://www.youtube.com/embed/9fTq7OhbYxo"
      title="YouTube video player"
      frameBorder={0}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  ),
  2: (
    <iframe
      width={300}
      height={200}
      src="https://www.youtube.com/embed/EJm-N4B_odA"
      title="YouTube video player"
      frameBorder={0}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  ),
};
const tbDictionary = {
  1: (
    <iframe
      width={300}
      height={200}
      src="https://www.youtube.com/embed/La9oLLoI5Rc"
      title="YouTube video player"
      frameBorder={0}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  ),
  2: (
    <iframe
      wwidth={300}
      height={200}
      src="https://www.youtube.com/embed/5m81Qsw0gLw"
      title="YouTube video player"
      frameBorder={0}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  ),
};
const pgDictionary = {
  1: (
    <iframe
      width={300}
      height={200}
      src="https://www.youtube.com/embed/VSduGJo0CuU"
      title="YouTube video player"
      frameBorder={0}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  ),
  2: (
    <iframe
      width={300}
      height={200}
      src="https://www.youtube.com/embed/qH3mjovZllM"
      title="YouTube video player"
      frameBorder="{0}"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  ),
};
const camusDictionary = {
  1: (
    <iframe
      width={300}
      height={200}
      src="https://www.youtube.com/embed/_hJZEq61KeM"
      title="YouTube video player"
      frameBorder={0}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  ),
  2: (
    <iframe
      width={300}
      height={200}
      src="https://www.youtube.com/embed/vPtzpjC7TF4"
      title="YouTube video player"
      frameBorder={0}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  ),
};
const whDictionary = {
  1: (
    <iframe
      width={300}
      height={200}
      src="https://www.youtube.com/embed/LCiB9oMnIbI"
      title="YouTube video player"
      frameBorder={0}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  ),
  2: (
    <iframe
      width={300}
      height={200}
      src="https://www.youtube.com/embed/MwgkvBZXum0"
      title="YouTube video player"
      frameBorder={0}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  ),
  3: (
    <iframe
      width={300}
      height={200}
      src="https://www.youtube.com/embed/BYTB9JROgMI"
      title="YouTube video player"
      frameBorder={0}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  ),

  4: (
    <iframe
      width={300}
      height={200}
      src="https://www.youtube.com/embed/Gw1I7fqmxmA"
      title="YouTube video player"
      frameBorder={0}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  ),
};
const jrDictionary = {
  1: (
    <iframe
      width={300}
      height={200}
      src="https://www.youtube.com/embed/LCiB9oMnIbI"
      title="YouTube video player"
      frameBorder={0}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  ),
  2: (
    <iframe
      width={300}
      height={200}
      src="https://www.youtube.com/embed/MwgkvBZXum0"
      title="YouTube video player"
      frameBorder={0}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  ),
  3: (
    <iframe
      width={300}
      height={200}
      src="https://www.youtube.com/embed/BYTB9JROgMI"
      title="YouTube video player"
      frameBorder={0}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  ),

  4: (
    <iframe
      width={300}
      height={200}
      src="https://www.youtube.com/embed/Gw1I7fqmxmA"
      title="YouTube video player"
      frameBorder={0}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  ),
};
const rfDictionary = {
  1: (
    <iframe
      width={300}
      height={200}
      src="https://www.youtube.com/embed/LCiB9oMnIbI"
      title="YouTube video player"
      frameBorder={0}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  ),
  2: (
    <iframe
      width={300}
      height={200}
      src="https://www.youtube.com/embed/MwgkvBZXum0"
      title="YouTube video player"
      frameBorder={0}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  ),
  3: (
    <iframe
      width={300}
      height={200}
      src="https://www.youtube.com/embed/BYTB9JROgMI"
      title="YouTube video player"
      frameBorder={0}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  ),

  4: (
    <iframe
      width={300}
      height={200}
      src="https://www.youtube.com/embed/Gw1I7fqmxmA"
      title="YouTube video player"
      frameBorder={0}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  ),
};
const maDictionary = {
  1: (
    <iframe
      width={300}
      height={200}
      src="https://www.youtube.com/embed/LCiB9oMnIbI"
      title="YouTube video player"
      frameBorder={0}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  ),
  2: (
    <iframe
      width={300}
      height={200}
      src="https://www.youtube.com/embed/MwgkvBZXum0"
      title="YouTube video player"
      frameBorder={0}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  ),
  3: (
    <iframe
      width={300}
      height={200}
      src="https://www.youtube.com/embed/BYTB9JROgMI"
      title="YouTube video player"
      frameBorder={0}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  ),

  4: (
    <iframe
      width={300}
      height={200}
      src="https://www.youtube.com/embed/Gw1I7fqmxmA"
      title="YouTube video player"
      frameBorder={0}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  ),
};
const jbDictionary = {
  1: (
    <iframe
      width={300}
      height={200}
      src="https://www.youtube.com/embed/LCiB9oMnIbI"
      title="YouTube video player"
      frameBorder={0}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  ),
  2: (
    <iframe
      width={300}
      height={200}
      src="https://www.youtube.com/embed/MwgkvBZXum0"
      title="YouTube video player"
      frameBorder={0}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  ),
  3: (
    <iframe
      width={300}
      height={200}
      src="https://www.youtube.com/embed/BYTB9JROgMI"
      title="YouTube video player"
      frameBorder={0}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  ),

  4: (
    <iframe
      width={300}
      height={200}
      src="https://www.youtube.com/embed/Gw1I7fqmxmA"
      title="YouTube video player"
      frameBorder={0}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  ),
};
const khDictionary = {
  1: (
    <iframe
      width={300}
      height={200}
      src="https://www.youtube.com/embed/LCiB9oMnIbI"
      title="YouTube video player"
      frameBorder={0}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  ),
  2: (
    <iframe
      width={300}
      height={200}
      src="https://www.youtube.com/embed/MwgkvBZXum0"
      title="YouTube video player"
      frameBorder={0}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  ),
  3: (
    <iframe
      width={300}
      height={200}
      src="https://www.youtube.com/embed/BYTB9JROgMI"
      title="YouTube video player"
      frameBorder={0}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  ),

  4: (
    <iframe
      width={300}
      height={200}
      src="https://www.youtube.com/embed/Gw1I7fqmxmA"
      title="YouTube video player"
      frameBorder={0}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  ),
};
function App() {
  const sadhguru = Object.values(sadhguruDictionary);
  const ramdas = Object.values(ramdasDictionary);
  const neitzche = Object.values(neitzcheDictionary);
  const camus = Object.values(camusDictionary);
  const pg = Object.values(pgDictionary);
  const tb = Object.values(tbDictionary);
  const jk = Object.values(jkDictionary);
  const srim = Object.values(srimDictionary);
  const sidwarrier = Object.values(sidwarrierDictionary);
  const aw = Object.values(awDictionary);
  const jb = Object.values(jbDictionary);
  const wh = Object.values(whDictionary);
  const jr = Object.values(jrDictionary);
  const rf = Object.values(rfDictionary);
  const kh = Object.values(khDictionary);
  const ma = Object.values(maDictionary);
  const [show, setShow] = useState("");
  const sadhguruHandler = () => {
    setShow(sadhguru.map((video) => <span className="link"> {video} </span>));
  };
  const ramdasHandler = () => {
    setShow(ramdas.map((video) => <span className="link"> {video} </span>));
  };
  const neitzcheHandler = () => {
    setShow(neitzche.map((video) => <span className="link"> {video} </span>));
  };
  const camusHandler = () => {
    setShow(camus.map((video) => <span className="link"> {video} </span>));
  };
  const pgHandler = () => {
    setShow(pg.map((video) => <span className="link"> {video} </span>));
  };
  const tbHandler = () => {
    setShow(tb.map((video) => <span className="link"> {video} </span>));
  };
  const jkHandler = () => {
    setShow(jk.map((video) => <span className="link"> {video} </span>));
  };
  const srimHandler = () => {
    setShow(srim.map((video) => <span className="link"> {video} </span>));
  };
  const sidwarrierHandler = () => {
    setShow(sidwarrier.map((video) => <span className="link"> {video} </span>));
  };
  const awHandler = () => {
    setShow(aw.map((video) => <span className="link"> {video} </span>));
  };
  const jbHandler = () => {
    setShow(jb.map((video) => <span className="link"> {video} </span>));
  };
  const whHandler = () => {
    setShow(wh.map((video) => <span className="link"> {video} </span>));
  };
  const jrHandler = () => {
    setShow(jr.map((video) => <span className="link"> {video} </span>));
  };
  const rfHandler = () => {
    setShow(rf.map((video) => <span className="link"> {video} </span>));
  };
  const kHandler = () => {
    setShow(kh.map((video) => <span className="link"> {video} </span>));
  };
  const maHandler = () => {
    setShow(ma.map((video) => <span className="link"> {video} </span>));
  };
  return (
    <div className="App">
      <div className="head">
        <div className="header">
          <h1 className="logo"> 
          Mind<span>Map🌙</span>
          </h1>
         
        <h6 className="para">Check Out My Favourite Youtube Videos. Select a Personality to get started.</h6>
         <img className="image" src="https://i.pinimg.com/originals/24/a7/9a/24a79a561e11c22ad4ed03299420402e.jpg" />
        </div>
        
      </div>
      
      <div className="choices">
        <h2 className="choice" onClick={sadhguruHandler}>
          Sadhguru
        </h2>
        <h2 className="choice" onClick={ramdasHandler}>
          Ramdas
        </h2>
        <h2 className="choice" onClick={tbHandler}>
          Tom Bileyu
        </h2>
        <h2 className="choice" onClick={pgHandler}>
          Prakhar Gupta
        </h2>
        <h2 className="choice" onClick={jkHandler}>
          Jiddu Krishnamurthy
        </h2>
        <h2 className="choice" onClick={srimHandler}>
          Sri M
        </h2>
        <h2 className="choice" onClick={awHandler}>
          Alan Watts
        </h2>
        <h2 className="choice" onClick={neitzcheHandler}>
          Neitzche
        </h2>
        <h2 className="choice" onClick={sidwarrierHandler}>
          Siddartha Warrier
        </h2>
        <h2 className="choice" onClick={maHandler}>
          Marcus Aurelius
        </h2>
        <h2 className="choice" onClick={camusHandler}>
          Albert Camus
        </h2>
        <h2 className="choice" onClick={jbHandler}>
          John Butler
        </h2>
        <h2 className="choice" onClick={jrHandler}>
          Joe Rogan
        </h2>
        <h2 className="choice" onClick={whHandler}>
          Wim Hoff
        </h2>
        <h2 className="choice" onClick={rfHandler}>
          Richard Feynman
        </h2>
        <h2 className="choice" onClick={kHandler}>
          Kurzgesagt
        </h2>
         
      </div>
      
      <div className="showContainer">
        <div className="show">{show}</div>
      </div>
      
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffd700" fillOpacity="0.9" d="M0,160L48,133.3C96,107,192,53,288,64C384,75,480,149,576,149.3C672,149,768,75,864,74.7C960,75,1056,149,1152,154.7C1248,160,1344,96,1392,64L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" /></svg>
      
    </div>
  );
}

export default App;

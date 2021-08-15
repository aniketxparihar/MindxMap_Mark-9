import { React, useState } from "react";
import mind from './mind.png';
import "./App.css";

const ramdasDictionary = {
  1: (<div>
    <iframe width={300} height={200} src="https://www.youtube.com/embed/qraDO93AneQ" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
    <h1>10/10</h1>
    <h6>Two Masters shed Light on meditation</h6>
  </div>
  ),
  2: (<div>
    <iframe width={300} height={200} src="https://www.youtube.com/embed/U-qazB7aD3A" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
    <h1>6/10</h1>
    <h6>Here and How Series</h6>
  </div>
  ),
  3: (<div>
    <iframe width={300} height={200} src="https://www.youtube.com/embed/rTuXLLuHVXs" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
    <h1>8/10</h1>
    <h6>Love Beyond Time.</h6>
  </div>
  ),
};
const sadhguruDictionary = {
  1: (<div>
    <iframe
      width={300}
      height={200}
      src="https://www.youtube.com/embed/VbYZ8J2dFLg"
      title="YouTube video player"
      frameBorder={0}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
    <h1>9/10</h1>
    <h6>This Videos is an exceptional monolouge on Life and Death.</h6>
  </div>
    
  ),
  2: (<div>
    <iframe
      width={300}
      height={200}
      src="https://www.youtube.com/embed/MwgkvBZXum0"
      title="YouTube video player"
      frameBorder={0}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
    <h1>10/10</h1>
    <h6> junction of Modern science and Yogic Science </h6>
    
  </div>
    
  ),
  3: (<div>
    <iframe width={300} height={200} src="https://www.youtube.com/embed/IAoffyn2xpM" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
    <h1>7/10</h1>
    <h6>Talk between Matthew and Sadhguru</h6>
    
  </div>
  )
};

const awDictionary = {
  1: (<div>
    <iframe width={300} height={200} src="https://www.youtube.com/embed/HitOU27liRY" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />

    <h1>7/10</h1>
    <h6>Slow Down</h6>
  </div>
  ),
  2: (<div>
    <iframe width={300} height={200} src="https://www.youtube.com/embed/15JXVqXPn5E" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
    <h1>10/10</h1>
    <h6>Relax Your Mind</h6>
  </div>
  ),
  3: (<div>
   <iframe width={560} height={315} src="https://www.youtube.com/embed/gbngLDPSaDw" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
    <h1>10/10</h1>
    <h6>What is Reality!!!!?</h6>
  </div>
  ),
};
const sidwarrierDictionary = {
  1: (<div>
    <iframe width={300} height={200} src="https://www.youtube.com/embed/iVXV4KuBVKY" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
    <h1>6/10</h1>
    <h6>Neuroscience of Learning</h6>
  </div>
  ),
  2: (<div>
    <iframe width={300} height={200} src="https://www.youtube.com/embed/MioXJQ-zWh8" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
    <h1>7/10</h1>
    <h6>Existential Crisis!!</h6>
  </div>
  ),
  3: (<div>
    <iframe width={300} height={200} src="https://www.youtube.com/embed/smChtQw9_z0" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
    <h1>10/10</h1>
    <h6>Knowledge Bombs with Kunal Shah and Sid</h6>
  </div>
  ),
};
/*
const srimDictionary = {
  1: (<div>
    <iframe
      width={300}
      height={200}
      src="https://www.youtube.com/embed/MwgkvBZXum0"
      title="YouTube video player"
      frameBorder={0}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
    <h1>10/10</h1>
    <h6>This Videos explores the junction of Modern science </h6>
    <h6>and Yogic Science.</h6>
  </div>
  ),
  2: (<div>
    <iframe
      width={300}
      height={200}
      src="https://www.youtube.com/embed/MwgkvBZXum0"
      title="YouTube video player"
      frameBorder={0}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
    <h1>10/10</h1>
    <h6>This Videos explores the junction of Modern science </h6>
    <h6>and Yogic Science.</h6>
  </div>
  ),
  3: (<div>
    <iframe
      width={300}
      height={200}
      src="https://www.youtube.com/embed/MwgkvBZXum0"
      title="YouTube video player"
      frameBorder={0}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
    <h1>10/10</h1>
    <h6>This Videos explores the junction of Modern science </h6>
    <h6>and Yogic Science.</h6>
  </div>
  ),

  4: (<div>
    <iframe
      width={300}
      height={200}
      src="https://www.youtube.com/embed/MwgkvBZXum0"
      title="YouTube video player"
      frameBorder={0}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
    <h1>10/10</h1>
    <h6>This Videos explores the junction of Modern science </h6>
    <h6>and Yogic Science.</h6>
  </div>
  ),
};
const jkDictionary = {
  1: (<div>
    <iframe
      width={300}
      height={200}
      src="https://www.youtube.com/embed/MwgkvBZXum0"
      title="YouTube video player"
      frameBorder={0}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
    <h1>10/10</h1>
    <h6>This Videos explores the junction of Modern science </h6>
    <h6>and Yogic Science.</h6>
  </div>
  ),
  2: (<div>
    <iframe
      width={300}
      height={200}
      src="https://www.youtube.com/embed/MwgkvBZXum0"
      title="YouTube video player"
      frameBorder={0}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
    <h1>10/10</h1>
    <h6>This Videos explores the junction of Modern science </h6>
    <h6>and Yogic Science.</h6>
  </div>
  ),
};
const tbDictionary = {
  1: (<div>
    <iframe
      width={300}
      height={200}
      src="https://www.youtube.com/embed/MwgkvBZXum0"
      title="YouTube video player"
      frameBorder={0}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
    <h1>10/10</h1>
    <h6>This Videos explores the junction of Modern science </h6>
    <h6>and Yogic Science.</h6>
  </div>
  ),
  2: (<div>
    <iframe
      width={300}
      height={200}
      src="https://www.youtube.com/embed/MwgkvBZXum0"
      title="YouTube video player"
      frameBorder={0}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
    <h1>10/10</h1>
    <h6>This Videos explores the junction of Modern science </h6>
    <h6>and Yogic Science.</h6>
  </div>
  ),
};
const pgDictionary = {
  1: (<div>
    <iframe
      width={300}
      height={200}
      src="https://www.youtube.com/embed/MwgkvBZXum0"
      title="YouTube video player"
      frameBorder={0}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
    <h1>10/10</h1>
    <h6>This Videos explores the junction of Modern science </h6>
    <h6>and Yogic Science.</h6>
  </div>
  ),
  2: (<div>
    <iframe
      width={300}
      height={200}
      src="https://www.youtube.com/embed/MwgkvBZXum0"
      title="YouTube video player"
      frameBorder={0}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
    <h1>10/10</h1>
    <h6>This Videos explores the junction of Modern science </h6>
    <h6>and Yogic Science.</h6>
  </div>
  ),
};
const camusDictionary = {
  1: (<div>
    <iframe
      width={300}
      height={200}
      src="https://www.youtube.com/embed/MwgkvBZXum0"
      title="YouTube video player"
      frameBorder={0}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
    <h1>10/10</h1>
    <h6>This Videos explores the junction of Modern science </h6>
    <h6>and Yogic Science.</h6>
  </div>
  ),
  2: (<div>
    <iframe
      width={300}
      height={200}
      src="https://www.youtube.com/embed/MwgkvBZXum0"
      title="YouTube video player"
      frameBorder={0}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
    <h1>10/10</h1>
    <h6>This Videos explores the junction of Modern science </h6>
    <h6>and Yogic Science.</h6>
  </div>
  ),
};
const whDictionary = {
  1: (<div>
    <iframe
      width={300}
      height={200}
      src="https://www.youtube.com/embed/MwgkvBZXum0"
      title="YouTube video player"
      frameBorder={0}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
    <h1>10/10</h1>
    <h6>This Videos explores the junction of Modern science </h6>
    <h6>and Yogic Science.</h6>
  </div>
  ),
  2: (<div>
    <iframe
      width={300}
      height={200}
      src="https://www.youtube.com/embed/MwgkvBZXum0"
      title="YouTube video player"
      frameBorder={0}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
    <h1>10/10</h1>
    <h6>This Videos explores the junction of Modern science </h6>
    <h6>and Yogic Science.</h6>
  </div>
  ),
  3: (<div>
    <iframe
      width={300}
      height={200}
      src="https://www.youtube.com/embed/MwgkvBZXum0"
      title="YouTube video player"
      frameBorder={0}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
    <h1>10/10</h1>
    <h6>This Videos explores the junction of Modern science </h6>
    <h6>and Yogic Science.</h6>
  </div>
  ),

  4: (<div>
    <iframe
      width={300}
      height={200}
      src="https://www.youtube.com/embed/MwgkvBZXum0"
      title="YouTube video player"
      frameBorder={0}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
    <h1>10/10</h1>
    <h6>This Videos explores the junction of Modern science </h6>
    <h6>and Yogic Science.</h6>
  </div>
  ),
};
const jrDictionary = {
  1: (<div>
    <iframe
      width={300}
      height={200}
      src="https://www.youtube.com/embed/MwgkvBZXum0"
      title="YouTube video player"
      frameBorder={0}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
    <h1>10/10</h1>
    <h6>This Videos explores the junction of Modern science </h6>
    <h6>and Yogic Science.</h6>
  </div>
  ),
  2: (<div>
    <iframe
      width={300}
      height={200}
      src="https://www.youtube.com/embed/MwgkvBZXum0"
      title="YouTube video player"
      frameBorder={0}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
    <h1>10/10</h1>
    <h6>This Videos explores the junction of Modern science </h6>
    <h6>and Yogic Science.</h6>
  </div>
  ),
  3: (<div>
    <iframe
      width={300}
      height={200}
      src="https://www.youtube.com/embed/MwgkvBZXum0"
      title="YouTube video player"
      frameBorder={0}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
    <h1>10/10</h1>
    <h6>This Videos explores the junction of Modern science </h6>
    <h6>and Yogic Science.</h6>
  </div>
  ),

  4: (<div>
    <iframe
      width={300}
      height={200}
      src="https://www.youtube.com/embed/MwgkvBZXum0"
      title="YouTube video player"
      frameBorder={0}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
    <h1>10/10</h1>
    <h6>This Videos explores the junction of Modern science </h6>
    <h6>and Yogic Science.</h6>
  </div>
  ),
};
const rfDictionary = {
  1: (<div>
    <iframe
      width={300}
      height={200}
      src="https://www.youtube.com/embed/MwgkvBZXum0"
      title="YouTube video player"
      frameBorder={0}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
    <h1>10/10</h1>
    <h6>This Videos explores the junction of Modern science </h6>
    <h6>and Yogic Science.</h6>
  </div>
  ),
  2: (<div>
    <iframe
      width={300}
      height={200}
      src="https://www.youtube.com/embed/MwgkvBZXum0"
      title="YouTube video player"
      frameBorder={0}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
    <h1>10/10</h1>
    <h6>This Videos explores the junction of Modern science </h6>
    <h6>and Yogic Science.</h6>
  </div>
  ),
  3: (<div>
    <iframe
      width={300}
      height={200}
      src="https://www.youtube.com/embed/MwgkvBZXum0"
      title="YouTube video player"
      frameBorder={0}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
    <h1>10/10</h1>
    <h6>This Videos explores the junction of Modern science </h6>
    <h6>and Yogic Science.</h6>
  </div>
  ),

  4: (<div>
    <iframe
      width={300}
      height={200}
      src="https://www.youtube.com/embed/MwgkvBZXum0"
      title="YouTube video player"
      frameBorder={0}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
    <h1>10/10</h1>
    <h6>This Videos explores the junction of Modern science </h6>
    <h6>and Yogic Science.</h6>
  </div>
  ),
};
const maDictionary = {
  1: (<div>
    <iframe
      width={300}
      height={200}
      src="https://www.youtube.com/embed/MwgkvBZXum0"
      title="YouTube video player"
      frameBorder={0}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
    <h1>10/10</h1>
    <h6>This Videos explores the junction of Modern science </h6>
    <h6>and Yogic Science.</h6>
  </div>
  ),
  2: (<div>
    <iframe
      width={300}
      height={200}
      src="https://www.youtube.com/embed/MwgkvBZXum0"
      title="YouTube video player"
      frameBorder={0}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
    <h1>10/10</h1>
    <h6>This Videos explores the junction of Modern science </h6>
    <h6>and Yogic Science.</h6>
  </div>
  ),
  3: (<div>
    <iframe
      width={300}
      height={200}
      src="https://www.youtube.com/embed/MwgkvBZXum0"
      title="YouTube video player"
      frameBorder={0}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
    <h1>10/10</h1>
    <h6>This Videos explores the junction of Modern science </h6>
    <h6>and Yogic Science.</h6>
  </div>
  ),

  4: (<div>
    <iframe
      width={300}
      height={200}
      src="https://www.youtube.com/embed/MwgkvBZXum0"
      title="YouTube video player"
      frameBorder={0}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
    <h1>10/10</h1>
    <h6>This Videos explores the junction of Modern science </h6>
    <h6>and Yogic Science.</h6>
  </div>
  ),
};
const jbDictionary = {
  1: (<div>
    <iframe
      width={300}
      height={200}
      src="https://www.youtube.com/embed/MwgkvBZXum0"
      title="YouTube video player"
      frameBorder={0}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
    <h1>10/10</h1>
    <h6>This Videos explores the junction of Modern science </h6>
    <h6>and Yogic Science.</h6>
  </div>
  ),
  2: (<div>
    <iframe
      width={300}
      height={200}
      src="https://www.youtube.com/embed/MwgkvBZXum0"
      title="YouTube video player"
      frameBorder={0}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
    <h1>10/10</h1>
    <h6>This Videos explores the junction of Modern science </h6>
    <h6>and Yogic Science.</h6>
  </div>
  ),
  3: (<div>
    <iframe
      width={300}
      height={200}
      src="https://www.youtube.com/embed/MwgkvBZXum0"
      title="YouTube video player"
      frameBorder={0}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
    <h1>10/10</h1>
    <h6>This Videos explores the junction of Modern science </h6>
    <h6>and Yogic Science.</h6>
  </div>
  ),

  4: (<div>
    <iframe
      width={300}
      height={200}
      src="https://www.youtube.com/embed/MwgkvBZXum0"
      title="YouTube video player"
      frameBorder={0}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
    <h1>10/10</h1>
    <h6>This Videos explores the junction of Modern science </h6>
    <h6>and Yogic Science.</h6>
  </div>
  ),
};
const khDictionary = {
  1: (<div>
    <iframe
      width={300}
      height={200}
      src="https://www.youtube.com/embed/MwgkvBZXum0"
      title="YouTube video player"
      frameBorder={0}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
    <h1>10/10</h1>
    <h6>This Videos explores the junction of Modern science </h6>
    <h6>and Yogic Science.</h6>
  </div>
  ),
  2: (<div>
    <iframe
      width={300}
      height={200}
      src="https://www.youtube.com/embed/MwgkvBZXum0"
      title="YouTube video player"
      frameBorder={0}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
    <h1>10/10</h1>
    <h6>This Videos explores the junction of Modern science </h6>
    <h6>and Yogic Science.</h6>
  </div>
  ),
  3: (<div>
    <iframe
      width={300}
      height={200}
      src="https://www.youtube.com/embed/MwgkvBZXum0"
      title="YouTube video player"
      frameBorder={0}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
    <h1>10/10</h1>
    <h6>This Videos explores the junction of Modern science </h6>
    <h6>and Yogic Science.</h6>
  </div>
  ),

  4: (<div>
    <iframe
      width={300}
      height={200}
      src="https://www.youtube.com/embed/MwgkvBZXum0"
      title="YouTube video player"
      frameBorder={0}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
    <h1>10/10</h1>
    <h6>This Videos explores the junction of Modern science </h6>
    <h6>and Yogic Science.</h6>
  </div>
  ),
};*/
function App() {
  const sadhguru = Object.values(sadhguruDictionary);
  const ramdas = Object.values(ramdasDictionary);
  //const neitzche = Object.values(neitzcheDictionary);
  //const camus = Object.values(camusDictionary);
  //const pg = Object.values(pgDictionary);
  //const tb = Object.values(tbDictionary);
  //const jk = Object.values(jkDictionary);
  //const srim = Object.values(srimDictionary);
  const sidwarrier = Object.values(sidwarrierDictionary);
  /*const aw = Object.values(awDictionary);
  const jb = Object.values(jbDictionary);
  const wh = Object.values(whDictionary);
  const jr = Object.values(jrDictionary);
  const rf = Object.values(rfDictionary);
  const kh = Object.values(khDictionary);
  const ma = Object.values(maDictionary);*/
  const [show, setShow] = useState("");
  const sadhguruHandler = () => {
    setShow(sadhguru.map((video) => <span className="link"> {video} </span>));
  };
  const ramdasHandler = () => {
    setShow(ramdas.map((video) => <span className="link"> {video} </span>));
  };
  //const neitzcheHandler = () => {
  //  setShow(neitzche.map((video) => <span className="link"> {video} </span>));
  //};
  /*const camusHandler = () => {
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
  };*/
  const sidwarrierHandler = () => {
    setShow(sidwarrier.map((video) => <span className="link"> {video} </span>));
  };
  /*const awHandler = () => {
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
  };*/
  return (
    <div className="App">
      <div className="head">
        <div className="header">
          <h1 className="logo"> 
          Mind<span>Map🌙</span>
          </h1>
         
        <h6 className="para">Check Out My Favourite Youtube Videos. Select a Personality to get started. Stay Tuned Many more Videos will be shared soon.</h6>
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
        <h2 className="choice" onClick={sidwarrierHandler}>
          Siddartha Warrier
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

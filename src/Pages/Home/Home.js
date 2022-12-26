import React, { useState } from "react";
import "./Home.css";

export const Home = () => {
  
  const allScope = require.context("../../Images/Scope", true);
  const [scope, setScope] = useState(window.localStorage.getItem("Scope"));
  window.localStorage.setItem("Scope", scope);

  return (
    <div className={`box-home ${window.localStorage.getItem("Scope")}`}>
      <div className="box-score animate__animated animate__bounceInDown">
        <h1 className="h1-home">Let's go noob</h1>
        <p className="p-home">
          Practice your aim for shooter games, so you can rank up and they won't
          call you a noob anymore.
        </p>
        <h2 className="h2-home">Choose your scope:</h2>
        <div>
          <img src={allScope("./scope1.png")} onClick={()=>setScope("img1-home")} className="img1-home scope" />
          <img src={allScope("./scope2.png")} onClick={()=>setScope("img2-home")} className="img2-home scope" />
          <img src={allScope("./scope3.png")} onClick={()=>setScope("img3-home")} className="img3-home scope" />
          <img src={allScope("./scope4.png")} onClick={()=>setScope("img4-home")} className="img4-home scope" />
          <img src={allScope("./scope5.png")} onClick={()=>setScope("img5-home")} className="img5-home scope" />
          <img src={allScope("./scope6.png")} onClick={()=>setScope("img6-home")} className="img6-home scope" />
          <img src={allScope("./scope7.png")} onClick={()=>setScope("img7-home")} className="img7-home scope" />
          <img src={allScope("./scope8.png")} onClick={()=>setScope("img8-home")} className="img8-home scope" />
        </div>
      </div>
    </div>
  );
};

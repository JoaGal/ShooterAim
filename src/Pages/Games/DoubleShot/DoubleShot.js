import React from "react";
import "./DoubleShot.css";
import { useMoveBall } from "../../../Hooks/useMoveBall";
import { BsFillHeartFill } from "react-icons/bs";
import { VscDebugRestart } from "react-icons/vsc";

export const DoubleShot = () => {
  const {
    left,
    top,
    onOf,
    time,
    setTime,
    lifeStatus,
    life,
    start,
    point,
    points,
    setGame,
    top2,
    left2,
    ballOpacity
  } = useMoveBall();

  const startDoubleShot = () => {
    setGame("doubleShot");
    start();
  };

  return (
    <div className="container-doubleshot">
      {onOf === false || life === 0 ? (
        <div className="container-play">
          <button className="button-play" onClick={startDoubleShot}>
            {life === 3 ? "Play" : <VscDebugRestart className="ico-play" />}
          </button>
        </div>
      ) : null}
      <div className="box-points">
        {Number.isInteger(points) ? points : points - 0.5}
      </div>
      <div className={`box-doubleshot ${window.localStorage.getItem("Scope")}`}>
        <div className="life-container">
          {life === 3 && <BsFillHeartFill className="ico-life" />}
          {life >= 2 && <BsFillHeartFill className="ico-life" />}
          {life >= 1 && <BsFillHeartFill className="ico-life" />}
        </div>
        <span
          className="bal-doubleshot"
          style={{
            animation: `${
              onOf && !lifeStatus && ballOpacity !== 1 && `animate ${time}s linear infinite`
            }`,
            top: `${top}px`,
            left: `${left}px`,
          }}
          onClick={(e) => point(e, 1)}
        ></span>
        <span
          className="bal-doubleshot"
          style={{
            animation: `${
              onOf && !lifeStatus && ballOpacity !== 2 && `animate ${time}s linear infinite`
            }`,
            top: `${top2}px`,
            left: `${left2}px`,
          }}
          onClick={(e) => point(e, 2)}
        ></span>
      </div>
      <input
        className="input-speed"
        placeholder="speed''"
        onChange={(e) => setTime(e.target.value)}
        type="number"
      />
    </div>
  );
};

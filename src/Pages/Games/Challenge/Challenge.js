import React from "react";
import "./Challenge.css";
import { useMoveBall } from "../../../Hooks/useMoveBall";
import { BsFillHeartFill } from "react-icons/bs";
import { VscDebugRestart } from "react-icons/vsc";

export const Challenge = () => {
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
    ballOpacity,
  } = useMoveBall();

  const startChallenge = () => {
    setGame("challenge");
    start();
  };
  return (
    <div className="container-challenge">
      {onOf === false || life === 0 ? (
        <div className="container-play">
          <button className="button-play" onClick={startChallenge}>
            {life === 3 ? "Play" : <VscDebugRestart className="ico-play" />}
          </button>
        </div>
      ) : null}
      <div className="box-points">
        {points}
      </div>
      <div className={`box-challenge ${window.localStorage.getItem("Scope")}`}>
        <div className="life-container">
          {life === 3 && <BsFillHeartFill className="ico-life" />}
          {life >= 2 && <BsFillHeartFill className="ico-life" />}
          {life >= 1 && <BsFillHeartFill className="ico-life" />}
        </div>
        <span
          className="bal-challenge"
          id="ball-good"
          style={{
            animation: `${
              onOf && !lifeStatus && `animate ${time}s linear infinite`
            }`,
            top: `${top}%`,
            left: `${left}%`,
          }}
          onClick={(e) => point(e)}
        ></span>
        <span
          className="bal-challenge"
          id="ball-bad"
          style={{
            animation: `${
              onOf && !lifeStatus && `bad ${time}s linear infinite`
            }`,
            top: `${top2}%`,
            left: `${left2}%`,
          }}
          onClick={(e) => point(e)}
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

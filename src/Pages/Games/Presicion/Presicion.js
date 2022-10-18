import React from "react";
import { useMoveBall } from "../../../Hooks/useMoveBall";
import "./Presicion.css";
import { BsFillHeartFill } from "react-icons/bs";
import { Start } from "../../../Components/Start/Start";

export const Presicion = () => {
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
  } = useMoveBall();

  return (
    <div className="container-presicion">
      {(onOf === false || life === 0) &&
       <Start play={start}/>}
      <div className="box-points">{points}</div>
      <div className={`box-presicion ${window.localStorage.getItem("Scope")}`}>
        <div className="life-container">
          {life === 3 && <BsFillHeartFill className="ico-life" />}
          {life >= 2 && <BsFillHeartFill className="ico-life" />}
          {life >= 1 && <BsFillHeartFill className="ico-life" />}
        </div>
        <span
          className="bal-presicion"       
          style={{
            animation: `${
              onOf && !lifeStatus && `animate ${time}s linear infinite`
            }`,
            top: `${top}%`,
            left: `${left}%`,
          }}
          onClick={(e)=> point(e)}
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

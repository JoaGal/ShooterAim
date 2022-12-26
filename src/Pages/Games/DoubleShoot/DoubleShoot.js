import React from "react";
import "../AllGames.css";
import { useMoveBall } from "../../../Hooks/useMoveBall";
import { BsFillHeartFill } from "react-icons/bs";
import { Start } from "../../../Components/Start/Start";
import { Speed } from "../../../Components/Speed/Speed";
import { Point } from "../../../Components/Point/Point";
import { Ball } from "../../../Components/Ball/Ball";

export const DoubleShoot = () => {
  const {
    onOf,
    time,
    setTime,
    lifeStatus,
    life,
    start,
    point,
    points,
    ballTouch
  } = useMoveBall();

  return (
    <div className="container  animate__animated animate__zoomIn">
      {(onOf === false || life === 0) && <Start play={start} />}
      <Point point={points} />
      <div className={`box ${window.localStorage.getItem("Scope")}`}>
      <div className="box-transparent">
        <div className="life-container">
          {life === 3 && <BsFillHeartFill className="life-ico" />}
          {life >= 2 && <BsFillHeartFill className="life-ico" />}
          {life >= 1 && <BsFillHeartFill className="life-ico" />}
        </div>
        {onOf && !lifeStatus && !ballTouch.includes(0) && (
          <Ball time={time} point={()=> point("ballDoubleshoot", 0)} size={20} ballTouch={ballTouch.length}/>
        )}
        {onOf && !lifeStatus && !ballTouch.includes(1) &&(
          <Ball time={time} point={()=> point("ballDoubleshoot", 1)} size={20} ballTouch={ballTouch.length}/>
        )}
        </div>
      </div>
      <Speed setTimes={setTime} />
    </div>
  );
};

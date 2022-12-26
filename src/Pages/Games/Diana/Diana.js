import React from "react";
import "../AllGames.css";
import { useMoveBall } from "../../../Hooks/useMoveBall";
import { BsFillHeartFill } from "react-icons/bs";
import { Start } from "../../../Components/Start/Start";
import { Speed } from "../../../Components/Speed/Speed";
import { Point } from "../../../Components/Point/Point";
import { Ball } from "../../../Components/Ball/Ball";

export const Diana = () => {
  const { onOf, setTime, life, start, point, points, lifeStatus, time } =
    useMoveBall();

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
        {onOf && !lifeStatus && (
          <>
            <Ball
              time={time}
              point={() => point("ballDiana", 0)}
              size={20}
              color="blue"
            />
            <Ball
              time={time}
              point={() => point("ballDiana", 1)}
              size={15}
              color="yellow"
            />
            <Ball time={time} point={() => point("ballDiana", 2)} size={10} />
          </>
        )}
        </div>
      </div>
      <Speed setTimes={setTime} />
    </div>
  );
};

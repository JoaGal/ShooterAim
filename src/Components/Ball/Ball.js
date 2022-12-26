import React from "react";
import "./Ball.css"

export const Ball = ({color, time, point, size, ballTouch}) => {
  return (
    <span
          className="ball"
          style={{
            animation: `${color === undefined ? "animate" : color} ${time}s linear infinite`,
            top: `${(ballTouch === undefined || ballTouch === 0) && Math.random() * 100}%`,
            left: `${(ballTouch === undefined || ballTouch === 0) && Math.random() * 100}%`,
            width: `${size}px`,
            height: `${size}px`,
          }}
          onClick={()=> point()}
        />
  )
}


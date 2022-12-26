import React from "react";
import "./Point.css";

export const Point = ({point}) => {
  return (
    <div className="box-points">
     {Number.isInteger(point) ? point : point - 0.5}
  </div>
  )
}

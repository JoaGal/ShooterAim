import React from "react";
import "./Speed.css"

export const Speed = ({setTimes}) => {

  return (
    <input
        className="input-speed"
        placeholder="speed''"
        onChange={(e) => setTimes(e.target.value)}
        type="number"
      />
  )
}

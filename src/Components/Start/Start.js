import React from "react"
import { useMoveBall } from "../../Hooks/useMoveBall";
import { VscDebugRestart } from "react-icons/vsc";
import "./Start.css";


export const Start = ({play}) => {

    const {life} = useMoveBall();
  return (
        <div className="container-play">
          <button className="button-play" onClick={play}>
            {life === 3 ? "Play" : <VscDebugRestart className="ico-play"/>}
          </button>
        </div>
  )
}

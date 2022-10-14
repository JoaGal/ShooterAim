import React from "react";
import "./Games.css";
import { ImArrowDownRight2 } from "react-icons/im";
import { Link } from "react-router-dom";

export const Games = () => {
  return (
    <div className="box-games">
      <Link to="/games/challenge">
        <div className="box-game">
          <h3 className="h3-game">Challenge</h3>
          <div className="bal1-game"></div>
          <div className="bal4-game"></div>
        </div>
      </Link>
      <Link to="/games/doubleshot">
        <div className="box-game">
          <h3 className="h3-game">Doubleshot</h3>
          <div className="bal1-game"></div>
          <ImArrowDownRight2 className="icon-game" />
          <div className="bal2-game"></div>
        </div>
      </Link>
      <Link to="/games/presicion">
        <div className="box-game">
          <h3 className="h3-game">Presicion</h3>
          <div className="bal3-game"></div>
        </div>
      </Link>
    </div>
  );
};

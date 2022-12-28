import React from "react";
import "./Games.css";
import { ImArrowDownRight2 } from "react-icons/im";
import { IoIosArrowUp, IoIosArrowBack, IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

export const Games = () => {
  return (
    <div className="box-games animate__animated animate__bounceInDown">
      <Link to="/games/presicion">
        <div className="box-game">
          <h3 className="h3-game">Presicion</h3>
          <div className="bal3-game"></div>
        </div>
      </Link>
      <Link to="/games/challenge">
        <div className="box-game">
          <h3 className="h3-game">Challenge</h3>
          <div className="bal1-game"></div>
          <div className="bal4-game"></div>
        </div>
      </Link>
      <Link to="/games/doubleshoot">
        <div className="box-game">
          <h3 className="h3-game">Doubleshoot</h3>
          <div className="bal1-game"></div>
          <ImArrowDownRight2 className="icon-game" />
          <div className="bal2-game"></div>
        </div>
      </Link>
      <Link to="/games/diana">
        <div className="box-game">
          <h3 className="h3-game">Diana</h3>
          <div className="bal6-game"></div>
          <div className="bal5-game"></div>
          <div className="bal7-game"></div>
        </div>
      </Link>
      <Link to="/games/multishoot">
        <div className="box-game">
          <h3 className="h3-game">MultiShoot</h3>
          <div className="bal8-game"></div>
          <div className="bal9-game"></div>
          <div className="bal9-game"></div>
        </div>
      </Link>
      <Link to="/games/extreme">
        <div className="box-game">
          <h3 className="h3-game">Extreme</h3>
          <IoIosArrowUp className="icon-up"/>
          <IoIosArrowBack className="icon-side"/>
          <div className="bal10-game"></div>
          <IoIosArrowForward className="icon-side"/>
          <IoIosArrowDown className="icon-down"/>
        </div>
      </Link>
    </div>
  );
};

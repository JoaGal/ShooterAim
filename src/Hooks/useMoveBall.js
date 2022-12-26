import { useEffect, useState } from "react";

export const useMoveBall = () => {
  const [onOf, setOnOf] = useState(false);
  const [time, setTime] = useState(1);
  const [lifeStatus, setLifeStatus] = useState(false);
  const [life, setLife] = useState(3);
  const [points, setPoints] = useState(0);
  const [moveBall, setMoveBall] = useState(true);
  const [ballTouch, setBallTouch] = useState([]);
  const ball = Array.from({length: points + 1}, (v, i) => i);
  
  useEffect(() => {
    let interval = null;
    if (onOf) {
      interval = setInterval(() => {
        setMoveBall((moveBall) => !moveBall);
      }, time * 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [onOf]);

  useEffect(() => {
    if (!lifeStatus && onOf && life > 0) {
      setLife(life - 1);
      setBallTouch([]);
      if (!Number.isInteger(points)) {
        setPoints(points - 0.5);
      }
    } else if (life < 1) {
      setOnOf(false);
    } else {
      setLifeStatus(false);
      setBallTouch([]);
    }
  }, [moveBall]);

  const start = () => {
    setOnOf(true);
    if (life !== 3) {
      setTimeout(() => {
        setLife(3);
        setOnOf(true);
        setPoints(0);
      });
    }
  };

  const point = (name, i) => {
    if (name === "ballGood" && !lifeStatus) {
      setPoints(points + 1);
      setLifeStatus(true);
    } else if (name === "ballDoubleshoot") {
      const newBall = [...ballTouch, i]
      setBallTouch(newBall);
      if (ballTouch.length === 1) {
        setLifeStatus(true);
        setPoints(points + 1);
        setBallTouch([]);
      }
    } else if (name === "ballDiana") {
      setLifeStatus(true);
      if (i === 0) {
        setPoints(points + 1);
      } else if (i === 1) {
        setPoints(points + 2);
      } else{
        setPoints(points + 3);
      }
    }else if (name === "ballBad") {
      setPoints(points - 1);
      setLifeStatus(true);
      setLife(life - 1);
    }else if (name === "ballMultiShoot") {
      const newBall = [...ballTouch, i]
      setBallTouch(newBall);
      if (ballTouch.length === points) {
        setLifeStatus(true);
        setPoints(points + 1);
        setBallTouch([]);
      }
    }
  };

  return {
    onOf,
    time,
    setTime,
    lifeStatus,
    life,
    start,
    point,
    points,
    ball,
    ballTouch
  };
};

import { useEffect, useState } from "react";

export const useMoveBall = () => {
  const [left, setLeft] = useState(Math.random() * 100);
  const [top, setTop] = useState(Math.random() * 100);
  const [top2, setTop2] = useState(Math.random() * 100);
  const [left2, setLeft2] = useState(Math.random() * 100);
  const [onOf, setOnOf] = useState(false);
  const [time, setTime] = useState(1);
  const [lifeStatus, setLifeStatus] = useState(false);
  const [life, setLife] = useState(3);
  const [points, setPoints] = useState(0);
  const [game, setGame] = useState("");
  const [ballOpacity, setBallOpacity ] = useState(0)
  
  useEffect(() => {
    let interval = null;
    if (onOf) {
      interval = setInterval(() => {
        setTop(Math.random() * 100);
        setLeft(Math.random() * 100);
        if (game === "doubleShot" || game === "challenge" ) {
          setTop2(Math.random() * 100);
          setLeft2(Math.random() * 100);
        }
      }, (time * 1000));
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [onOf]);


  useEffect(() => {
    if (!lifeStatus && onOf && life > 0) {
      setLife(life - 1);
      if (!Number.isInteger(points)) {
        setBallOpacity(0);
        setPoints(points - 0.5);
      }
    } else if (life < 1) {
      setOnOf(false);
    } else {
      setLifeStatus(false);
      setBallOpacity(0);
    }
  }, [top]);

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

  const point = (e, number) => {
    if ((e.target.className.includes("bal-presicion") || e.target.id.includes("ball-good")) && !lifeStatus) {
      setPoints(points + 1);
      setLifeStatus(true);
    } else if (e.target.className.includes("bal-doubleshot") && ballOpacity !== number) {
      setPoints(points + 0.5);
      setBallOpacity(number)
      console.log(number)
      if (!Number.isInteger(points)) {
        setLifeStatus(true);
      }
    }else if (e.target.id.includes("ball-bad")) {
      setPoints(points - 1);
      setLifeStatus(true);
      setLife(life - 1)
    }
  };

  return {
    top,
    left,
    left2,
    top2,
    onOf,
    time,
    setTime,
    lifeStatus,
    life,
    start,
    point,
    points,
    setGame,
    ballOpacity
  };
};

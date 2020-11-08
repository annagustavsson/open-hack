import React, { useState, useEffect } from 'react';
import classes from "./emmissionDisplay.module.css";

const CounterController = () => {
  const [seconds, setSeconds] = useState(0);
  const [emmission, setEmmission] = useState(0);

  const emmissionUpdate = () => {
    const currentEmmisson = (seconds * 0.169375).toFixed(4);
    setEmmission(currentEmmisson);
  }
 
useEffect(() => {
    let interval = null;
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1/10);
      }, 100);
      emmissionUpdate();
      return () => clearInterval(interval);
  }, [seconds]);

  return (
    <div className={classes.emmissionContainer}>
      <div>
        {/* {seconds}s */}
        Current emmissions saved/generated: {emmission} gCO<sub>2</sub>e
      </div>
    </div>
  );
};

export default CounterController;
import React, { useState, useEffect } from 'react';
import classes from "./emmissionDisplay.module.css";

const CounterController = ({seconds, emmission, carValue,  bikeValue, secondsHandler, emmissionHandler}) => {
    const numberOfCars = 157500
    const numberOfBikes = 135000

    const totPeople = numberOfCars + numberOfBikes
  
  const emmissionUpdate = () => {
    const emissionForCar = (seconds * 0.169375) * totPeople * (carValue/100) / 1000;
    const emissionForBike = (seconds * 0.013225) * totPeople * (bikeValue/100) / 1000;

    const currentEmmisson = (seconds * 0.169375).toFixed(4);
      emmissionHandler(currentEmmisson);
  }

useEffect(() => {
    let interval = null;
      interval = setInterval(() => {
        secondsHandler();
      }, 100);
      emmissionUpdate();
      return () => clearInterval(interval);
  }, [seconds]);

  return (
    <div className={classes.emmissionContainer}>
      <div>
        {/* {seconds}s */}
        Current emmissions generated: {emmission} kg CO<sub>2</sub>e
      </div>
    </div>
  );
};

export default CounterController;
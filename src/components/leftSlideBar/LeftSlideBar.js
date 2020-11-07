import React, { useState, useEffect } from "react";
import classes from "./leftSlideBar.module.css"
import RangeSlider from 'react-bootstrap-range-slider';

const LeftSlideBarController = () => {

  const [ inputValue, setInputValue ] = useState(0);
  const [carValue, setCarValue] = useState(0); 
  const [bikeValue, setBikeValue] = useState(0);

  useEffect(() => {
    updateDisplayValue();
  }, [inputValue]); //for everytime inputValue is changed updateDisplayValue is called.


  const updateDisplayValue = () => {
        const cars = 50 + Math.abs(inputValue)
        const bikes = 50 - Math.abs(inputValue)
        setCarValue(cars)
        setBikeValue(bikes)
      
  }


  return (
    <div className={classes.sidebar}>
        <div>Bikes:{bikeValue}%</div>
        <div>Cars:{carValue}%</div>
        <div>
        <RangeSlider
            tooltip={"off"} //turns off the default number displayed
            min={-50}
            max={50}
            value={inputValue}
            onChange={changeEvent => setInputValue(changeEvent.target.value)}/>
        </div>
        
    </div>
    
  );

};


export default LeftSlideBarController
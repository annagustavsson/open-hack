import './App.css';
import React, {useState} from "react"
import ContentRight from "./components/ContentRight/ContentRightController";
import MapController from "./components/Map/MapController"
import LeftSlideBar from "./components/LeftSlideBar/LeftSlideBarController";
import CounterController from "./components/CounterDisplay/CounterController"
import 'bootstrap/dist/css/bootstrap.css';

function App() {
    const [inputValue, setInputValue ] = useState(0);
    const [carValue, setCarValue] = useState(0); 
    const [bikeValue, setBikeValue] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [emmission, setEmmission] = useState(0);

    const inputValueHandler = (x) => {
      setInputValue(x);
    }

    const carValueHandler = (x) => {
      setCarValue(x);
    }

    const bikeValueHandler = (x) => {
      setBikeValue(x);
    }

    const secondsHandler = (x) => {
      setSeconds(seconds + 1/10);
    }

    const emmissionHandler = (x) => {
      setEmmission(x);
    }
    
    return (
        <div className="App">
          <LeftSlideBar
              inputValue = {inputValue}
              carValue = {carValue}
              bikeValue = {bikeValue}
              
              inputValueHandler = {inputValueHandler}
              carValueHandler = {carValueHandler}
              bikeValueHandler = {bikeValueHandler}
          />

          <MapController
              carValue = {carValue}
              bikeValue = {bikeValue}
          />

          <ContentRight

          />

          <CounterController
            seconds = {seconds}
            emmission = {emmission}
            carValue = {carValue}
            bikeValue = {bikeValue}

            secondsHandler = {secondsHandler}
            emmissionHandler = {emmissionHandler}
          />
      </div>
    );
}

export default App;

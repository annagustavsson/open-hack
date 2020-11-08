import './App.css';
import React from "react"
import ContentRight from "./components/ContentRight/ContentRightController";
import MapController from "./components/Map/MapController"
import LeftSlideBar from "./components/LeftSlideBar/LeftSlideBarController";
import CounterController from "./components/CounterDisplay/CounterController"
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
      <LeftSlideBar/>
      <MapController/>
      <ContentRight/>
      <CounterController/>
    </div>
  );
}

export default App;

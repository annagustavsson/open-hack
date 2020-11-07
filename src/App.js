import './App.css';
import React from "react"
import ContentRight from "./components/contentRight/ContentRight";
import MapController from "./components/map/MapController"
import LeftSlideBar from "./components/leftSlideBar/LeftSlideBar";

function App() {
  return (
    <div className="App">
      <LeftSlideBar/>
      <MapController/>
      <ContentRight/>
    </div>
  );
}

export default App;

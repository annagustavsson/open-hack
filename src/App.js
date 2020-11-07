import './App.css';
import React from "react"
import ContentRight from "./components/ContentRight/ContentRight";
import MapController from "./components/Map/MapController"
import LeftSlideBar from "./components/leftSlideBar/leftSlideBar";
import 'bootstrap/dist/css/bootstrap.css';

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

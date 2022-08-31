// import logo from './logo.svg';
// import './App.css';
// import {
//   BrowserRouter,
//   Routes,
//   Route,
//   Link,
// } from "react-router-dom";
import NGObject from "./components/NGObject";
import Viewer from "./components/Viewer";


function App() {
  var object = new NGObject();

  return (
    <div className="container pt-3">
      <Viewer NGObject={object} name="GX1"></Viewer>
    </div>
  );
}

export default App;

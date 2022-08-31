/**
 * Author: Wilson Pilco Nuñez
 * Email: wilsonaux1@gmail.com
 * Created at: 2022-08-30 20:30
 */

import { useEffect, useState } from "react";
import NGObject from "./NGObject";
// import ButtonSelector from "./ButtonSelector.js";

function Viewer(props) {
  const [textValue, setTextValue] = useState("");
  const [currentView, setCurrentView] = useState("");

  /*
   * Valor por defecto
   */
  useEffect(() => {
    changeView("rules");
  }, []);

  function changeView(view) {
    console.log("change to " + view);
    if (props.NGObject !== undefined) {
      console.log("tiene prop");
      setCurrentView(view);
      switch (view) {
        case "source":
          setTextValue(props.NGObject.sourceContent);
          break;
        case "doc":
          setTextValue(props.NGObject.docContent);
          break;
        case "rules":
          setTextValue(props.NGObject.rulesContent);
          break;
        default:
          break;
      }
      console.log(textValue);
    } else {
      console.log("no esta inicializado");
    }
  }

  return (
    <div>
      <ul class="list-group mb-2">
        <li class="list-group-item">Name: {props.name}</li>
        <li class="list-group-item">Description: {NGObject.description}</li>
      </ul>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <button
            className={"nav-link " + (currentView === "rules" ? "active" : "")}
            aria-current="page"
            onClick={() => changeView("rules")}
          >
            Rules
          </button>
        </li>
        <li className="nav-item">
          <button
            className={"nav-link " + (currentView === "source" ? "active" : "")}
            onClick={() => changeView("source")}
          >
            Source
          </button>
        </li>
        <li className="nav-item">
          <button
            className={"nav-link " + (currentView === "doc" ? "active" : "")}
            onClick={() => changeView("doc")}
          >
            Doc.
          </button>
        </li>
        <li className="nav-item">
          <button
            className="nav-link disabled"
            onClick={() => changeView("help")}
          >
            Help
          </button>
        </li>
      </ul>
      <textarea
        value={textValue}
        readOnly
        className="d-block w-100 form-control"
        rows="15"
      ></textarea>
    </div>
  );
}

export default Viewer;
          // <ButtonSelector
          //   currentType={currentView}
          //   targetType="rules"
          //   onClick={() => changeView("rules")}
          // >
          //   Rules
          // </ButtonSelector>

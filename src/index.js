import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import myReducer from "./reducers";
import App from "./app";
import thunk from "redux-thunk";
import Results from './components/results'

let store = createStore(myReducer);

function render() {
  ReactDOM.render(
    <div className="container" style={{padding:'25px'}}>
      <App store={store} />
      <Results store={store} />
    </div>,
    document.getElementById("root")
  );
}

store.subscribe(render);

render();

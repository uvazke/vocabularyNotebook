import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import App from './components/App';
import reducer, { INITIAL_STATE } from "./redux/reducer";
import { createStore } from "redux"
const store = createStore(reducer,INITIAL_STATE)

ReactDOM.render(
	<Provider store={ store }>
    <App />
  </Provider>, 
  document.getElementById("root")
 );


import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import rootreducer from './redux/rootreducer';

function saveToLocalStorage(state) {
  try {
    const serialisedState = JSON.stringify(state);
    localStorage.setItem('persistantState', serialisedState);
  } catch (e) {
    console.warn(e);
  }
}

function loadFromLocalStorage() {
  try {
    const serialisedState = localStorage.getItem('persistantState');
    if (serialisedState === null) return undefined;
    const parsed = JSON.parse(serialisedState);
    parsed.pokemon = null;
    return parsed;
  } catch (e) {
    console.warn(e);
    return undefined;
  }
}

const store = createStore(
  rootreducer,
  loadFromLocalStorage(),
  applyMiddleware(thunk)
);

store.subscribe(() => saveToLocalStorage(store.getState()));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

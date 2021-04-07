import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './redux/reducer'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from './App';
import Home from './components/Home'
import Cart from './components/Cart';
import AdminPanel from './components/AdminPanel'

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

window.store = store

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route path="/cart" ><Cart /></Route>
          <Route path="/admin" ><AdminPanel /></Route>
        </Switch>
      </App>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
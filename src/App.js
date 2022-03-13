import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ModelS from './features/car/modelS/ModelS';


function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/">
            <Home/>
        </Route>
        <Route exact path="/modelS">
            <ModelS/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

import React from 'react';
import './App.css';
import HomePage from './pages/home';
import AboutPage from './pages/about';
import IQtestPage from './pages/iqtest';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import NavBar from './NavBar';
import Logo from './logo.png'

function App() {
  return (
    <Router>
      <div className="App">
        <img src={Logo} />
        <NavBar />
        <div id="page-body">
          <Route path="/" component={HomePage} exact />
          <Route path="/about" component={AboutPage} />    
          <Route path="/iqtest" component={IQtestPage} />
        </div>
      </div>
    </Router>
  );
}

export default App;

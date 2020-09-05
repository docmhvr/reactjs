import React from 'react';
import './App.css';
import HomePage from './pages/home';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" component={HomePage} exact />    
      </div>
    </Router>
  );
}

export default App;

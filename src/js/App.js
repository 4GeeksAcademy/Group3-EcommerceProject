import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/global.css';

import Navbar from './components/Navbar/Navbar';
import HomePage from './views/HomePage/HomePage';
import ServicesPage from './views/ServicesPage/ServicesPage';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/services">
          <ServicesPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;

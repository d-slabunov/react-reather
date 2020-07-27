import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router';
import WeatherDashboard from './components/WeatherDashboard';
import DayDashboard from './components/DayDashboard';
import './App.css';

const App = () => {
  return (
    <div className="App">
        <Switch>
            <Route exact path='/' component={WeatherDashboard}/>
            <Route path={'/:page'} component={DayDashboard} />
        </Switch>
    </div>
  );
};

export default withRouter(App);

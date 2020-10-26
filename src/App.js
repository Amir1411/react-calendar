import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';

import CalendarComponent from './Components/Calendar';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={CalendarComponent} />
    </Switch>
  );
}

export default App;

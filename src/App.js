import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';

import CalendarComponent from './components/calendar';
import CreateEventComponent from './components/createEvent';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={CalendarComponent} />
      <Route exact path='/create-event' component={CreateEventComponent} />
    </Switch>
  );
}

export default App;

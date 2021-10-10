import React from 'react';
import logo from './logo.svg';
import './App.css';
import Guest from './state/Guest';
import UserSearch from './state/UserSearch';
import UserSearchClass from './classes/UserSearchClass';
import EventComponent from './events/EventComponent';
import UserSearchRef from './refs/UserSearchRef';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Guest List</h3>
        <h1>Functional Component</h1>
        <Guest /> <br />
        <UserSearch /> <br />
        <EventComponent />
        <br />
        <UserSearchRef />
        {/* <h1>Class Component</h1> */}
        {/* <UserSearchClass /> */}
      </header>
    </div>
  );
}

export default App;

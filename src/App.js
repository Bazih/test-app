import React from 'react';
import './App.css';
import UsersContainer from "./components/containers/UsersContainer";

class App extends React.Component {
  render() {
    return (
      <div className="user-page">
        <UsersContainer />
      </div>
    )
  }
}

export default App;

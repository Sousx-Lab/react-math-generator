import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './pages/HomePage';
import {useState } from 'react';
import UserContext from './contexts/UserContext';
import {getStoredValueOrNull} from './services/getUser'
import "nes.css/css/nes.min.css";
import "./css/custom.css"

function App() {
  
  // const storedUserName = window.localStorage.getItem('username')
  const [ username, setUserName ] = useState(getStoredValueOrNull('username'))
  const userContextValue = {username, setUserName}
  return (
    <UserContext.Provider value={userContextValue}>
    <div>
      <HomePage name={username}/>
      </div>
    </UserContext.Provider>
    );
}

ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('app')
);
  



import React from 'react';
import logo from '../assets/logo/logo.svg';
import '../assets/css/App.css';
//component: pages
import Single from '../pages/single'

function App() {
  return (
    <div className="App">
        <Single logo={logo}/>
    </div>
  );
}

export default App;

import React, { useEffect,useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [Joke, setJoke] = useState("");

  useEffect(()=>{
    if(!navigator.onLine){
        if(localStorage.getItem("joke") === null) {
            setJoke("Loading...")
        } else {
            setJoke(localStorage.getItem("joke"));
        }
    } else {
        const URL = "https://api.chucknorris.io/jokes/random";
        fetch(URL).then(res=>res.json()).then(res=>{
            setJoke(res.value);
            localStorage.setItem("joke", res.value);
        })
    }
  
}, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {Joke}.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

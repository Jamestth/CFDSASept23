import logo from './logo.svg';
import bigbrain from "./imgs/brain-big-brain.gif"
import './App.css';
import React, { useState, useEffect } from 'react';


function App() {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    const apiUrl = 'http://localhost/api/random-quote';

    // Fetch data from the API.
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        // Step 5: Update the state variable with the fetched quote data.
        setQuote(data.quote);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);



  return (
    <div className="App">
      <header className="App-header">
        <div>
          <img
            src={bigbrain} // Replace with the actual URL of your GIF
            alt="A cool GIF"
            width="300" // Set the width and height as per your requirements
            height="200"
          />
        </div>
        <p>{quote}</p>

        <p>Github Repo Link:  
        <a
          className="App-link"
          href="https://github.com/Jamestth/CFDSASept23"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://github.com/Jamestth/CFDSASept23
        </a>
        </p>
      </header>
    </div>
  );
}

export default App;

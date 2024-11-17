import './App.css';
import Dashboard from './components/Dashboard.js';
import Header from './components/Header.js';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
      //fetching data from the backend
      axios
          .get("http://localhost:5000/api/data") //url of Flash endpoint with JSON data
          .then((response) => {
              console.log("data recieved: ", response.data);
              setData(response.data);
          })
          .catch((err) => {
              console.log("error fetching data: ", err.message)
              setError(err.message);
          });
  }, [])

  if (error) return <div>Error: {error}</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div className="App">
      <header className="App-header">
        <Header></Header>
        <Dashboard data = {data}></Dashboard>
      </header>
    </div>
  );
}

export default App;

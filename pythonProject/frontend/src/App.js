//library/package imports
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

//component imports
import './App.scss';
import Dashboard from './components/Dashboard.js';
import Header from './components/Header.js';
import TopTracks from './pages/TopTracks.js';
import RecentlyPlayed from './pages/recently_played.js';


function App() {
  //moving the data grabbing function to a parent function of the components
  //this makes the code more modular and reusable
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
    <Router>
      <div className="App">
        {/*header should be outside the Switch*/}
        <header className="App-header">
          <Header />
        </header>

        {/*defining routes*/}
        <Routes>
          {/*default route for the dashboard */}\
          <Route path="/" element={<Dashboard data={data} />} />
          {/* Additional route for the TopTracks page */}
          <Route path="/TopTracks" element={<TopTracks data={data} />} />
          {/* Add more routes as needed */}
          <Route path = "/RecentlyPlayed" element={<RecentlyPlayed data={data} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

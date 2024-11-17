import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/Dashboard.scss"

const Dashboard = () => {
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

    //display user data as html here
    return (
        <div>
            <h1> Welcome, {data.display_name || "Guest"} </h1>
            <img src={data.images[0].url} id="profile_img"></img>
        </div>
    )
}

//export this to be used 
export default Dashboard;
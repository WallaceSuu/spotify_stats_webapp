import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/Dashboard.scss"

const Dashboard = ({data}) => {
    //display user data as html
    return (
        <div>
            <h1> Welcome, {data.display_name || "Guest"} </h1>
            <img src={data.images[0].url} id="profile_img"></img>
        </div>
    )
}

//export this to be used 
export default Dashboard;
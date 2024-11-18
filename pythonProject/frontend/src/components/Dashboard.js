import React, { useState, useEffect } from "react";
import "../styles/Dashboard.scss"

const Dashboard = ({data}) => {
    //display user data as html
    return (
        <div class="dashboard">
            <h1> Welcome, {data.user_info.display_name || "Guest"} </h1>
            <img src={data.user_info.images[0].url} id="profile_img"></img>
        </div>
    )
}

//export this to be used 
export default Dashboard;
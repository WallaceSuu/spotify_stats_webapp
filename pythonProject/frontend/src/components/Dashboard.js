import React, { useState, useEffect } from "react";
import "../styles/Dashboard.scss"
import { Link } from "react-router-dom";

const Dashboard = ({data}) => {
     const [items, setItems] = useState(data.top_tracks_short.items);
    //display user data as html
    return (
        <div class="dashboard">
            <div class= "row">
                
                <div class ="leftcolumn">
                    <h1> Welcome, {data.user_info.display_name || "Guest"}! </h1>
                    <img src={data.user_info.images[0].url} id="profile_img"></img>
                    <h2>*change*Your personalised homepage surfaces all the music you’re sure to love in one handy place — check out your recommendations below and start listening. The more you listen, the better your recommendations will get!</h2>
                </div>  

                <div class = "rightcolumn">
                    <h1>What are you interested in?</h1>
                    <Link to="/TopTracks" className="button">Top Tracks</Link>
                    <Link to="/TopArtists" className="button"> Top Artists</Link>
                    <Link to="/TopGenres" className="button">  Top Genres </Link>
                    <Link to="/RecentlyPlayed" className="button"> Recently Played</Link>
                    <Link to="/Tracking" className="button"> Tracking </Link>
                
                </div>
            </div>

            <div class = "row">
                <h1>Discover new music!</h1>
                //display a 2x5 of featured albums from spotify 
            </div>


                         <ul className = "top_tracks">
                {items.map((item, index) => (
                    <li key = {index}>
                        <img src = {item.album.images[2].url}/>
                        <span className = "track_name"> {index+1}. {item.name} </span>
                        {item.artists.map((artist_name, index) => (
                            <div key={index}>
                                <span> {artist_name.name||"Unknown"} </span>
                                {index < item.artists.length - 1 && ','} <br/>
                            </div>
                        ))}
                    </li>
                ))}
            </ul>


            <div class = "row">
                <h1>Share your taste! </h1>
            </div>
        </div>

        
    )
}

//export this to be used 
export default Dashboard;
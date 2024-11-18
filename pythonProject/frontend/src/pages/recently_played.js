import React, { useState, useEffect } from "react";
import '../styles/RecentlyPlayed.scss'

const RecentlyPlayed = ({data}) => {
    const items = data.recently_played_tracks.items;

    return (
        <div className = "wrapper">
            <div className = "headerText">
                Recently Played
            </div>
             <ul className = "recentList">
                {items.map((item, index) => (
                    <li key = {index}>
                        <img src = {item.track.album.images[2].url}/>
                        <span className = "track_name"> {item.track.name} </span>
                        <span> {item.track.artists[0]?.name || "Unknown"} </span> <br/>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default RecentlyPlayed;
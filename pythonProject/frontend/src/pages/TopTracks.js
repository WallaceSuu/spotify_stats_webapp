import React, { useState, useEffect } from "react";
import '../styles/TopTracks.scss'

const RecentlyPlayed = ({data}) => {
    const [items, setItems] = useState(data.top_tracks_short.items); //state for the items depending on button pressed, default at short
    const fourWeek = () => {
        setItems(data.top_tracks_short.items);
    };

    const fourMonth = () => {
        setItems(data.top_tracks_medium.items);
    };

    const allTime = () => {
        setItems(data.top_tracks_long.items);
    };

    return (
        <div className = "wrapper">
            <div className = "headerText">
                {items.length} Top Tracks
            </div>
            <button onClick={fourWeek}>Four Weeks</button>
            <button onClick={fourMonth}>Four Months</button>
            <button onClick={allTime}>All time</button>
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
        </div>
    );
}

export default RecentlyPlayed;
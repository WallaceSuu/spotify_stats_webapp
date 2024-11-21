import React, { useState, useEffect } from "react";
import '../styles/RecentlyPlayed.scss'

const RecentlyPlayed = ({data}) => {
    const items = data.recently_played_tracks.items;
    const [visibleCount, setVisibleCount] = useState(20); //useState to set how many elements are visible at a time

    const showMore = () => {
        setVisibleCount(visibleCount+10);
    }
    
    const showAll = () => {
        setVisibleCount(50);
    }

    return (
        <div className = "wrapper">
            <div className = "headerText">
                {Math.min(visibleCount, items.length)} Recently Played Tracks
            </div>
            
            <div className="buttonContainer">
                <button onClick = {showMore} disabled = {visibleCount >= items.length}> Show 10 more</button>
                <button onClick = {showAll} disabled = {visibleCount == items.length}> Show all</button>
            </div>

             <ul className = "recentList">
                {items.slice(0, visibleCount).map((item, index) => (
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
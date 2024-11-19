import React, { useState, useEffect } from "react";
import "../styles/TopArtists.scss"

const TopArtists = ({data}) => {
    const [items, setItems] = useState(data.top_artists_short.items); //state for the items depending on button pressed, default at short
    const fourWeek = () => {
        setItems(data.top_artists_short.items);
    };

    const fourMonth = () => {
        setItems(data.top_artists_medium.items);
    };

    const allTime = () => {
        setItems(data.top_artists_long.items);
    };

    return (
        <div className = "wrapper">
            <div className = "headerText">
                {items.length} Top Artists
            </div>

            <button onClick={fourWeek}>Four Weeks</button>
            <button onClick={fourMonth}>Four Months</button>
            <button onClick={allTime}>All time</button>

             <ul className = "topArtists">
                {items.map((item, index) => (
                    <li key = {index}>
                        <a href={item.external_urls.spotify}>
                            <img href={item.external_urls.spotify} src = {item.images[1].url}/>
                        </a>
                        <span className = "artist_name"> {index+1}. {item.name} </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TopArtists;
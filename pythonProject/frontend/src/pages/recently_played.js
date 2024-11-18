import React, { useState, useEffect } from "react";
import '../styles/RecentlyPlayed.scss'

const RecentlyPlayed = ({data}) => {
    const items = data.recently_played_tracks.items;

    return (
        <div class="header">
            Recently Played:
             <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        {item.track.name} {           }    by {item.track.artists[0]?.name || "Unknown"} <br />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default RecentlyPlayed;
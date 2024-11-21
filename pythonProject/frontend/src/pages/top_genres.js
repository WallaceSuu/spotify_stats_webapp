import React, { useState, useEffect } from "react";
import "../styles/TopGenres.scss"

const TopGenres = ({data}) => {
    const [items, setItems] = useState(data.top_genres_short)

    const fourWeek = () => {
        setItems(data.top_genres_short);
    };

    const fourMonth = () => {
        setItems(data.top_genres_medium);
    };

    const allTime = () => {
        setItems(data.top_genres_long);
    };


    return (
        <div className = "wrapper">

            <div className="buttonContainer">
                <button onClick={fourWeek}>Four Weeks</button>
                <button onClick={fourMonth}>Four Months</button>
                <button onClick={allTime}>All time</button>
            </div>

            <ul className = "topGenres">
                {items.slice(0,5).map((item, index) => (
                    <li key = {index}>
                        <span>{index+1}. {item[0].charAt(0).toUpperCase()+item[0].slice(1)}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TopGenres;
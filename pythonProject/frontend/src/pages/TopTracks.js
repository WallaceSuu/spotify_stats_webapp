import React, { useState, useEffect } from "react";

const TopTracks = ({data}) => {
    const trackName = Array(10).fill("test");

    return (
        <div>
            {trackName.map((text, index) => (
                <p key={index}>{text}</p>
            ))}
        </div>
    )
}

export default TopTracks;
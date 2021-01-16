import React, { useState } from "react"

const Map = () => {
    const [level, setLevel] = useState("FS")
    const [room, setRoom] = useState("1")

    return (<div id="map">
        <button className="up">&#8679;</button>
        <div id="map-middle">
            <button className="left">&#8678;</button>
            <img className="roompic" src={`/Images/${level}${room}.png`} alt="First room of Forsaken City"></img>
            <button className="right">&#8680;</button>
        </div>
        <button className="down">&#8681;</button>
    </div>)
}

export default Map
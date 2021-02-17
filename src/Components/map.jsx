import React, { useState } from "react"
import exits from "../data/exits.json"

const Map = () => {
    const [level, setLevel] = useState("FS")
    const [room, setRoom] = useState("1")

    const move = (direction) => {
        setRoom(exits[level][room][direction])
    }

    const isDisabled = (direction) => {
        return (!exits[level][room].hasOwnProperty(direction))
    }

    return (<div id="map">
        <button className="up" disabled={isDisabled("N")} onClick={() => move("N")}>&#8679;</button>
        <div id="map-middle">
            <button className="left" disabled={isDisabled("W")} onClick={() => move("W")}>&#8678;</button>
            <img className="roompic" src={`/Images/${level}${room}.png`} alt="First room of Forsaken City"></img>
            <button className="right" disabled={isDisabled("E")} onClick={() => move("E")}>&#8680;</button>
        </div>
        <button className="down" disabled={isDisabled("S")} onClick={() => move("S")}>&#8681;</button>
    </div>)
}

export default Map
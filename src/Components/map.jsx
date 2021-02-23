import React, { useState } from "react";
import exits from "../data/exits.json";
import Info from "./info";

const Map = () => {
    const [level, setLevel] = useState("FS")
    const [room, setRoom] = useState("1")

    const move = (direction) => {
        setRoom(exits[level][room][direction])
    }

    const isDisabled = (direction) => {
        return (!exits[level][room].hasOwnProperty(direction))
    }

    const isHidden = (direction) => {
        const exists = exits[level][room].hasOwnProperty(direction)
        if (!exists) {
            return "hidden"
        }
    }

    return (<div id="map">
        {/* Up/North movement */}
        <button className="up" id={isHidden("N1")} onClick={() => move("N1")}>&#8679;</button>
        <button className="up" id={isHidden("N2")} onClick={() => move("N2")}>&#8679;</button>
        <button className="up" id={isHidden("N3")} onClick={() => move("N3")}>&#8679;</button>
        <div id="map-middle">
            {/* Left/East movement */}
            <button className="left" id={isHidden("W1")} onClick={() => move("W1")}>&#8678;</button>
            <button className="left" id={isHidden("W2")} onClick={() => move("W2")}>&#8678;</button>
            <button className="left" id={isHidden("W3")} onClick={() => move("W3")}>&#8678;</button>
            <img className="roompic" src={`/Images/${level}${room}.png`} alt="a room in the game Celeste"></img>
            {/* Right/East movement */}
            <button className="right" id={isHidden("E1")} onClick={() => move("E1")}>&#8680;</button>
            <button className="right" id={isHidden("E2")} onClick={() => move("E2")}>&#8680;</button>
            <button className="right" id={isHidden("E3")} onClick={() => move("E3")}>&#8680;</button>
        </div>
        {/* Down/South movement */}
        <button className="down" id={isHidden("S1")} onClick={() => move("S1")}>&#8681;</button>
        <button className="down" id={isHidden("S2")} onClick={() => move("S2")}>&#8681;</button>
        <button className="down" id={isHidden("S3")} onClick={() => move("S3")}>&#8681;</button>
        <button id={isHidden("next")} onClick={() => move("next")}>Next</button>
        <button id={isHidden("prev")} onClick={() => move("prev")}>Previous</button>
        <Info room={room} level={level} subchapter={exits[level][room].subchapter} setLevel={setLevel} setRoom={setRoom} />
    </div>)
}

export default Map
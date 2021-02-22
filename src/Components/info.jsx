import React from "react"
import exits from "../data/exits.json"

const info = (props) => {

    const dictionary = {
        "FS": "Forsaken City",
        "OS": "Old Site",
        "CR": "Celestial Resort",
        "GR": "Golden Ridge",
        "MT": "Mirror Temple",
        "RF": "Reflection",
        "SM": "Summit"
    }

    const roomNumbers = Object.keys(exits[props.level])

    const bookmarks = {
        "FS": { "Start": "1", "Crossing": "7", "Chasm": "15" },
        "OS": { "Start": "1", "Intervention": "13", "Awake": "26" }
    }

    const subchapters = Object.keys(bookmarks[props.level])

    const changeLevel = (level) => {
        props.setLevel(level);
        props.setRoom("1");
    }

    const changeSubChapter = (subchapter) => {
        props.setRoom(bookmarks[props.level][subchapter])
    }

    return (
        <div>
            <div>
                <p>Chapter: {dictionary[props.level]}</p>
                <p>Sub Chapter: {props.subchapter}</p>
                <p>Room: {props.room}</p>
                <h2>Select Chapter</h2>
                <button onClick={() => changeLevel("FS")}>Forsaken City</button>
                <button onClick={() => changeLevel("OS")}>Old Site</button>
                <button>Celestial Resort</button>
                <button>Golden Ridge</button>
                <button>Mirror Temple</button>
                <button>Reflection</button>
                <button>Summit</button>
            </div>
            <div>
                <h2>Select SubChapter</h2>
                <ul>
                    {subchapters.map(subchapter => {
                        return <li><button onClick={() => changeSubChapter(subchapter)}>{subchapter}</button></li>
                    })}
                </ul>
            </div>
            <div>
                <h2>Select Room</h2>
                <ul>
                    {roomNumbers.map(roomNumber => {
                        return <li><button onClick={() => props.setRoom(roomNumber)}>{roomNumber}</button></li>
                    })}
                </ul>
            </div>
        </div>
    )
}

export default info
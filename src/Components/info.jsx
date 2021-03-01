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
        "FS": { "Start": "1-6", "Crossing": "7-14", "Chasm": "15-20" },
        "OS": { "Start": "1-12", "Intervention": "13-25", "Awake": "26-33" },
        "CR": { "Start": "1-20", "Huge Mess": "21-45", "Elevator Shaft": "46-55", "Presidential Suite:": "56-64" },
        "GR": { "Start": "1-11", "Shrine": "12-16", "Old Trail": "17-24", "Cliff Face": "25-34" },
        "MT": { "Start": "1-12", "Depths": "13-26", "Unravelling": "27-38", "Search": "39-46", "Rescue": "47-58" },
        "R": { "Start": "1", "Lake": "2-7", "Hollows": "8-37", "Reflection": "38-42", "Rock Bottom": "43-65", "Resolution": "66-67" },
        "S": {
            "Start": "1-7",
            "500m": "8-16",
            "1000m": "17-24",
            "1500m": "25-35",
            "2000m": "36-48",
            "2500m": "49-62",
            "3000m": "63-92"
        }
    }

    const subchapters = Object.keys(bookmarks[props.level])

    const changeLevel = (level) => {
        props.setLevel(level);
        props.setRoom("1");
    }

    const changeSubChapter = (subchapter) => {
        props.setRoom(bookmarks[props.level][subchapter].split("-")[0])
    }

    const whichSub = () => {
        const bookmark = bookmarks[props.level]
        console.log("in whichsub")
        for (const subchapter in bookmark) {
            const start = bookmark[subchapter].split("-")[0]
            const end = bookmark[subchapter].split("-")[1]
            const roomNo = Number.parseInt(props.room)
            if (start <= roomNo && roomNo <= end) {
                return subchapter;
            }
        }
    }

    return (
        <div>
            <div>
                <p>Chapter: {dictionary[props.level]}</p>
                <p>Sub Chapter: {whichSub()}</p>
                <p>Room: {props.room}</p>
                <h2>Select Chapter</h2>
                <button onClick={() => changeLevel("FS")}>Forsaken City</button>
                <button onClick={() => changeLevel("OS")}>Old Site</button>
                <button onClick={() => changeLevel("CR")}>Celestial Resort</button>
                <button onClick={() => changeLevel("GR")}>Golden Ridge</button>
                <button onClick={() => changeLevel("MT")}>Mirror Temple</button>
                <button onClick={() => changeLevel("R")}>Reflection</button>
                <button onClick={() => changeLevel("S")}>Summit</button>
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
                        return <li>
                            <button onClick={() => props.setRoom(roomNumber)}>{roomNumber}</button>
                        </li>
                    })}
                </ul>
            </div>
        </div>
    )
}

export default info
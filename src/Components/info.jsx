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
        "OS": { "Start": "1-12", "Intervention": "13-25", "Awake": "26-33" }
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
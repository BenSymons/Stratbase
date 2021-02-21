import React from "react"

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
                <h2>Chapter: {dictionary[props.level]}</h2>
                <h2>Sub Chapter: {props.subchapter}</h2>
                <p>Room: {props.room}</p>
                <button onClick={() => changeLevel("FS")}>Forsaken City</button>
                <button onClick={() => changeLevel("OS")}>Old Site</button>
                <button>Celestial Resort</button>
                <button>Golden Ridge</button>
                <button>Mirror Temple</button>
                <button>Reflection</button>
                <button>Summit</button>
            </div>
            <div>
                <ul>
                    {subchapters.map(subchapter => {
                        return <li><button onClick={() => changeSubChapter(subchapter)}>{subchapter}</button></li>
                    })}
                </ul>
            </div>
        </div>
    )
}

export default info
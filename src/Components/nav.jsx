import React from "react"

const nav = (props) => {

    const dictionary = {
        "FS": "Forsaken City",
        "OS": "Old Site",
        "CR": "Celestial Resort",
        "GR": "Golden Ridge",
        "MT": "Mirror Temple",
        "RF": "Reflection",
        "SM": "Summit"
    }

    const changeLevel = (level) => {
        props.setLevel(level);
        props.setRoom("1");
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
        </div>
    )
}

export default nav
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

    return (
        <div>
            <div>
                <h2>Chapter: {dictionary[props.level]}</h2>
                <p>Room: {props.room}</p>
                <button>Forsaken City</button>
                <button>Old Site</button>
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
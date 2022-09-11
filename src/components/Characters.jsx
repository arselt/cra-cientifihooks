import React, { useState, useEffect } from "react"
import "./Characters.css";

const Characters = () => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/character/")
            .then(response => response.json())
            .then(data => setCharacters(data.results))
    }, []);

    return (
        <div className="Characters">
            {characters.map(character => (
                <div className="Character-cards">
                    <img
                        src={character.image}
                        alt="{character.name}"
                    />
                    <h2>{character.name}</h2>
                    <h3>{character.species}</h3>
                    <p>{character.origin.name}</p>
                    <p>{character.episode.length} episodes</p>
                </div>
            ))}
        </div>
    )
}

export default Characters;
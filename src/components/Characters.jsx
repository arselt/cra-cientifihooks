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
        <div className="characters">
            {characters.map(character => (
                <div className="character-card">
                    <img
                        className="card-img"
                        src={character.image}
                        alt="{character.name}"
                    />
                    <ul className="card-info">
                        <li><h2>{character.name}</h2></li>
                        <li><h3>{character.species}</h3></li>
                        <li><p>{character.origin.name}</p></li>
                        <li><p>{character.episode.length} episodes</p></li>
                    </ul>
                </div>
            ))}
        </div>
    )
}

export default Characters;
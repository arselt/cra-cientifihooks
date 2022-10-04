import React, { useState, useEffect, useReducer, useMemo, useRef, useCallback } from "react"
import "./Characters.css";
import Search from "./Search";

const initialState = {
    favorites: []
}

const favoriteReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_FAVORITE':
            return {
                ...state,
                favorites: [...state.favorites, action.payload]
            };
        default: return state;
    }
}

const Characters = () => {
    const [characters, setCharacters] = useState([]);
    const [favorite, dispatch] = useReducer(favoriteReducer, initialState);
    const [search, setSearch] = useState('');
    const searchInput = useRef(null);

    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/character/")
            .then(response => response.json())
            .then(data => setCharacters(data.results))
    }, []);

    const handleClick = favorite => {
        dispatch({ type: 'ADD_TO_FAVORITE', payload: favorite })
    }

    // const handleSearch = () => {
    //     setSearch(searchInput.current.value);
    // }

    const handleSearch = useCallback(() => {
        setSearch(searchInput.current.value);
    }, [])

    const filteredUsers = useMemo(() =>
        characters.filter((user) => {
            return user.name.toLowerCase().includes(search.toLowerCase());
        }),
        [characters, search]
    )

    return (
        <>
            <Search search={search} searchInput={searchInput} handleSearch={handleSearch} />
            <div className="characters">
                {filteredUsers.map(character => (
                    <div className="character-card" key={character.id}>
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
                            <li>
                                <button
                                    type="button"
                                    onClick={() => handleClick(character)}
                                >
                                    🤍
                                </button>
                            </li>
                        </ul>
                    </div>
                ))}
                <div>
                    <ul className="favorites-card">
                        {favorite.favorites.map(favorite => (
                            <li key={favorite.id}>
                                {favorite.name}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Characters;
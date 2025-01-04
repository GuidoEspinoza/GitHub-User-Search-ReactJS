import React from "react";
import "./SearchBar.css";

const SearchBar = ({ username, setUsername, fetchProfile }) => {
    return (
        <div className="searchBarContainer">
            <h1>Buscador de perfiles GitHub</h1>
            <form onSubmit={fetchProfile} className="searchBarForm">
                <input
                    className="searchBarInput"
                    type="text"
                    placeholder="Ingresa el perfil de Github"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <button type="submit" className="btn-primary">
                    Buscar
                </button>
            </form>
        </div>
    );
};

export default SearchBar;

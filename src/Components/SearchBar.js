import React, { useState } from "react";
import styled from "styled-components";

const SearchContainer = styled.div`
    position: relative;
`;

const SearchInput = styled.input`
    padding: 10px;
    border: 2px solid white;
    border-radius: 5px;
    background-color: transparent;
    color: white;
    font-size: 18px;
    width: 200px;

    &:focus {
        outline: none;
        border-color: #ffffff;
    }
`;

const SuggestionsList = styled.ul`
    position: absolute;
    top: 40px;
    left: 0;
    width: 100%;
    background-color: white;
    color: black;
    list-style: none;
    padding: 0;
    margin: 0;
    border-radius: 5px;
    border: 1px solid #ddd;
`;

const SuggestionItem = styled.li`
    padding: 10px;
    cursor: pointer;

    &:hover {
        background-color: #ddd;
    }
`;

const SearchBar = () => {
    const [query, setQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);

    const handleInputChange = (e) => {
        setQuery(e.target.value);
        // Для примера добавим простые подсказки
        const exampleSuggestions = ["Song 1", "Artist 2", "Album 3"];
        setSuggestions(exampleSuggestions.filter(s => s.toLowerCase().includes(query.toLowerCase())));
    };

    const handleSuggestionClick = (suggestion) => {
        setQuery(suggestion);
        setSuggestions([]);
    };

    return (
        <SearchContainer>
            <SearchInput
                type="text"
                value={query}
                onChange={handleInputChange}
                placeholder="Search..."
            />
            {suggestions.length > 0 && (
                <SuggestionsList>
                    {suggestions.map((suggestion, index) => (
                        <SuggestionItem
                            key={index}
                            onClick={() => handleSuggestionClick(suggestion)}
                        >
                            {suggestion}
                        </SuggestionItem>
                    ))}
                </SuggestionsList>
            )}
        </SearchContainer>
    );
};

export default SearchBar;

import React, { useState } from 'react';

function CocktailFinder() {
    const [cocktails, setCocktails] = useState([]);
    const [searchValue, setSearchValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchValue}`)
            .then(response => response.json())
            .then(data => {
                setCocktails(data.drinks);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={e => setSearchValue(e.target.value)} placeholder="Search for a cocktail" />
                <button type="submit">Search</button>
            </form>
            <ul>
                {cocktails.map(cocktail => (
                    <li key={cocktail.idDrink}>{cocktail.strDrink}</li>
                ))}
            </ul>
        </div>
    )
}

export default CocktailFinder;

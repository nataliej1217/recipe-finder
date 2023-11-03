import React, { useState } from 'react';

const IngredientInput = ({ onSearch, onCuisineChange }) => {
    const [includeIngredients, setIncludeIngredients] = useState('');
    const [excludeIngredients, setExcludeIngredients] = useState('');
    const [selectedCuisine, setSelectedCuisine] = useState('');
    
    
    const handleIncludeIngredientsChange = (event) => {
        setIncludeIngredients(event.target.value);
    };

    const handleExcludeIngredientsChange = (event) => {
        setExcludeIngredients(event.target.value);
    };
    
    const handleCuisineChange = (event) => {
        const selectedCuisine = event.target.value;
        setSelectedCuisine(selectedCuisine);
        onCuisineChange(selectedCuisine);
    };
    
    const cuisines = [
        'African',
        'Asian',
        'American',
        'British',
        'Cajun',
        'Caribbean',
        'Chinese',
        'Eastern European',
        'European',
        'French',
        'German',
        'Greek',
        'Indian',
        'Irish',
        'Italian',
        'Japanese',
        'Jewish',
        'Korean',
        'Latin American',
        'Mediterranean',
        'Mexican',
        'Middle Eastern',
        'Nordic',
        'Southern',
        'Spanish',
        'Thai',
        'Vietnamese',
    ];


    
    
    const handleSearch = () => {
        onSearch(includeIngredients, excludeIngredients, selectedCuisine);
    };


    return (
        <div style={{ marginLeft: '10px' }}>
        <div style={{ display: 'inline-block', marginRight: '10px' }}>
            <input
            type="text"
            placeholder="Include ingredients..."
            value={includeIngredients}
            onChange={handleIncludeIngredientsChange}
            />
        </div>
        <div style={{ display: 'inline-block', marginRight: '10px' }}>
            <input
            type="text"
            placeholder="Exclude ingredients..."
            value={excludeIngredients}
            onChange={handleExcludeIngredientsChange}
            />
        </div>
        <div style={{ display: 'inline-block', marginRight: '10px' }}>
            <label>Select Cuisine:</label>
            <select onChange={handleCuisineChange}>
                <option value="">All Cuisines</option>
                {cuisines.map((cuisine) => (
                <option key={cuisine} value={cuisine}>
                    {cuisine}
                </option>
                ))}
            </select>
        </div>
        <button onClick={handleSearch}>Search</button>
        </div>
    );
};

export default IngredientInput;
import axios from 'axios';

const API_KEY = process.env.REACT_APP_SPOONACULAR_API_KEY;
const BASE_URL = 'https://api.spoonacular.com/recipes/complexSearch';

export const getRecipesWithFilters = async (includeIngredients, excludeIngredients, cuisine) => {
    try {
        const response = await axios.get(BASE_URL, {
            params: {
                apiKey: API_KEY,
                includeIngredients: includeIngredients,
                excludeIngredients: excludeIngredients,
                cuisine: cuisine,
            },
            
        });
        
        return response.data.results; // Assuming result is an object with a 'results' property
    } catch (error) {
        throw error;
  }
};
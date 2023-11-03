import React, { useState } from 'react';
import IngredientInput from './components/IngredientInput';
import { getRecipesWithFilters } from './api/recipes';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Card, Col} from 'react-bootstrap';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [selectedCuisine, setSelectedCuisine] = useState('');
  const [searchMessage, setSearchMessage] = useState('');


  const handleSearch = async (includeIngredients, excludeIngredients, cuisine) => {
    
    try {
      const result = await getRecipesWithFilters(includeIngredients, excludeIngredients, cuisine); 
      if (result.length === 0) {
        setSearchMessage('No recipes found!');
      } else {
        setSearchMessage('');
      }
      console.log('searchMessage:', searchMessage);
      setRecipes(result);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };


  
  return (
    <div className="App">
      <h1 style={{ marginLeft: '10px' }} className="my-4 ml-3">Recipe Finder</h1>
      <IngredientInput onSearch={handleSearch} onCuisineChange={setSelectedCuisine} />

      <Container style={{ marginTop: '30px' }}>
        {searchMessage ? (
        <div>{searchMessage}</div>
        ) : (
          <Row xs={1} md={3} className="g-4">
            {recipes.map((recipe, index) => (
            <Col key={index}>
              <Card>
                <Card.Img src={recipe.image} alt={recipe.title} />
                  <Card.Body>
                    <Card.Title>{recipe.title}</Card.Title>
                  </Card.Body>
              </Card>
            </Col>
            ))}
          </Row>
          )}
      </Container>
      </div>
    );
}

export default App;

// RecipeList component
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore(state => state.recipes);
  const filteredRecipes = useStore((state) => state.filteredRecipes);
  const filterRecipes = useStore((state) => state.filterRecipes);
  const filterByIngredient = useStore((state) => state.filterByIngredient);
  const filterByCookingTime = useStore((state) => state.filterByCookingTime);

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    filterRecipes(term); // Trigger filtering action
  };
  const handleIngredientChange = (e) => {
    const ing = e.target.value;
    setIngredient(ing);
    filterByIngredient(ing);
  };

  const handleMaxTimeChange = (e) => {
    const time = e.target.value;
    setMaxTime(time);
    filterByCookingTime(Number(time));
  };
  return (
    <div>
      {recipes.map(recipe => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
          <input
        type="text"
        placeholder="Search recipes..."
        value={searchTerm}
        onChange={handleSearchChange}
        style={{ width: '100%', padding: '10px', marginBottom: '20px' }}
      />
      <input
        type="text"
        placeholder="Filter by ingredient..."
        value={ingredient}
        onChange={handleIngredientChange}
        style={{ width: '100%', padding: '10px', marginBottom: '20px' }}
      />
      <input
        type="number"
        placeholder="Max cooking time (minutes)"
        value={maxTime}
        onChange={handleMaxTimeChange}
        style={{ width: '100%', padding: '10px', marginBottom: '20px' }}
      />
      <ul>
        {filteredRecipes.map((recipe) => (
          <li key={recipe.id}>
            <strong>{recipe.name}</strong>: {recipe.ingredients}
          </li>
        ))}
      </ul>
        </div>
      ))}
    </div>
  );
};
export default RecipeList;
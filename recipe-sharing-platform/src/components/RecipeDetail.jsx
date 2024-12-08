import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Fetch the recipe data from the local JSON file
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        const selectedRecipe = data.find((item) => item.id === parseInt(id));
        setRecipe(selectedRecipe);
      })
      .catch((error) => console.error("Error fetching recipe:", error));
  }, [id]);

  if (!recipe) {
    return <div className="text-center p-4">Loading recipe...</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <div className="card bg-white shadow-md rounded-lg overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
          <p className="text-gray-600 mb-6">{recipe.summary}</p>
          <h2 className="text-2xl font-semibold mb-2">Ingredients:</h2>
          <ul className="list-disc list-inside mb-6">
            {/* Add sample ingredients for now */}
            <li>Ingredient 1</li>
            <li>Ingredient 2</li>
            <li>Ingredient 3</li>
          </ul>
          <h2 className="text-2xl font-semibold mb-2">Cooking Instructions:</h2>
          <p className="text-gray-600">
            {/* Add sample instructions for now */}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            condimentum purus id velit pharetra aliquet.
          </p>
        </div>
      </div>
    </div>
  );
};
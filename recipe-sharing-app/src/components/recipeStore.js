import create from 'zustand'

const useRecipeStore = create(set => ({
  recipes: [],
  addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),
  setRecipes: (recipes) => set({ recipes })
}));
// Delete a recipe by its ID
deleteRecipe: (id) =>
  set((state) => ({
    recipes: state.recipes.filter((recipe) => recipe.id !== id),
  }));

// Update a recipe by its ID
updateRecipe: (id, updatedRecipe) =>
  set((state) => ({
    recipes: state.recipes.map((recipe) =>
      recipe.id === id ? { ...recipe, ...updatedRecipe } : recipe
    ),
  }));
  
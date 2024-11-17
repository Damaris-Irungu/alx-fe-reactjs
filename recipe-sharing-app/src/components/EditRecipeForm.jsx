import useStore from './recipeStore';

const EditRecipeForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const recipes = useStore((state) => state.recipes);
  const updateRecipe = useStore((state) => state.updateRecipe);

  const recipe = recipes.find((recipe) => recipe.id === parseInt(id));
  const [updatedRecipe, setUpdatedRecipe] = useState(recipe || { name: '', ingredients: '' });

  if (!recipe) {
    return <p>Recipe not found.</p>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    updateRecipe(recipe.id, updatedRecipe);
    navigate(`/recipe/${recipe.id}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Recipe Name:</label>
        <input
          type="text"
          value={updatedRecipe.name}
          onChange={(e) => setUpdatedRecipe({ ...updatedRecipe, name: e.target.value })}
        />
      </div>
      <div>
        <label>Ingredients:</label>
        <input
          type="text"
          value={updatedRecipe.ingredients}
          onChange={(e) => setUpdatedRecipe({ ...updatedRecipe, ingredients: e.target.value })}
        />
      </div>
      <button type="submit">Save Changes</button>
      <button type="button" onClick={() => navigate(`/recipe/${recipe.id}`)}>Cancel</button>
    </form>
  );
};

export default EditRecipeForm;
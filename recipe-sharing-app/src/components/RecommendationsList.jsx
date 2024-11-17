import { useRecipeStore } from './recipeStore';

const RecommendationsList = () => {
  const recommendations = useStore((state) => state.recommendations);
  const generateRecommendations = useStore((state) => state.generateRecommendations);

  // Generate recommendations on component mount
  useEffect(() => {
    generateRecommendations();
  }, [generateRecommendations]);

  return (
    <div>
      <h2>Recommended Recipes</h2>
      {recommendations.length === 0 ? (
        <p>No recommendations available. Add more recipes to your collection!</p>
      ) : (
        <ul>
          {recommendations.map((recipe) => (
            <li key={recipe.id}>
              <Link to={`/recipe/${recipe.id}`} style={{ textDecoration: 'none', color: 'green' }}>
                <strong>{recipe.name}</strong>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RecommendationsList;
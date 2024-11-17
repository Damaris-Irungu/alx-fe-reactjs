import useStore from './recipeStore';

const DeleteRecipeButton = ({ id }) => {
  const deleteRecipe = useStore((state) => state.deleteRecipe);

  const handleDelete = () => {
    deleteRecipe(id);
    alert('Recipe deleted.');
  };

  return <button onClick={handleDelete}>Delete</button>;
};

export default DeleteRecipeButton;
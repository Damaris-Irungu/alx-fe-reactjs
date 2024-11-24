import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../TodoList';

describe('TodoList Component', () => {
  test('renders TodoList component with initial todos', () => {
    render(<TodoList />);
    // Check if initial todos are rendered
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Write Tests')).toBeInTheDocument();
    expect(screen.getByText('Build Todo App')).toBeInTheDocument();
  });

  test('adds a new todo item', () => {
    render(<TodoList />);
    
    // Simulate entering new todo
    fireEvent.change(screen.getByPlaceholderText('Add new todo'), {
      target: { value: 'New Todo' },
    });

    fireEvent.click(screen.getByText('Add Todo'));

    // Check if the new todo was added
    expect(screen.getByText('New Todo')).toBeInTheDocument();
  });

  test('toggles todo completion', () => {
    render(<TodoList />);
    
    // Find the "Learn React" todo and click it to toggle completion
    const todoItem = screen.getByText('Learn React');
    fireEvent.click(todoItem);

    // Check if the todo item is crossed out (completed)
    expect(todoItem).toHaveStyle('text-decoration: line-through');
    
    // Click again to toggle back to not completed
    fireEvent.click(todoItem);
    expect(todoItem).not.toHaveStyle('text-decoration: line-through');
  });

  test('deletes a todo item', () => {
    render(<TodoList />);

    // Find and click the delete button for the "Write Tests" todo
    const deleteButton = screen.getAllByText('Delete')[1];
    fireEvent.click(deleteButton);

    // Ensure the todo is removed from the list
    expect(screen.queryByText('Write Tests')).not.toBeInTheDocument();
  });
});
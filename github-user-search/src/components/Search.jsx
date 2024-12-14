import React, { useState } from 'react';
import fetchUserData from '../services/githubService';
import fetchAdvancedSearch from '../services/githubService';


const Search = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setUserData(null);

    try {
      const data = await fetchUserData(username);
      setUserData(data);
    } catch (err) {
      setError('Looks like we cant find the user');
    } finally {
      setLoading(false);
    }
    try {
      const query = {
        username,
        location,
        minRepos,
      };
      const data = await fetchAdvancedSearch(query);
      setUsers(data.items); // GitHub API returns results in `items` array
    } catch (err) {
      setError('An error occurred while searching for users.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
        />
        <button type="submit">Search</button>
      </form>

      {/* Conditional rendering for API states */}
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {userData && (
        <div>
          <img src={userData.avatar_url} alt={`${userData.login}'s avatar`} width="100" />
          <h2>{userData.name}</h2>
          <p>
            <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
              Visit Profile
            </a>
          </p>
        </div>
      )}
    </div>
  );
};

<div className="max-w-4xl mx-auto p-4">
  <h1 className="text-2xl font-bold mb-4 text-center">GitHub Advanced User Search</h1>
  <form
    onSubmit={handleSearch}
    className="bg-gray-100 p-4 rounded shadow-md space-y-4"
  >
    <div className="space-y-2">
      <label htmlFor="username" className="block text-sm font-medium">
        Username
      </label>
      <input
        type="text"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter GitHub username"
        className="w-full p-2 border rounded"
      />
    </div>
    <div className="space-y-2">
      <label htmlFor="location" className="block text-sm font-medium">
        Location
      </label>
      <input
        type="text"
        id="location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Enter location (e.g., San Francisco)"
        className="w-full p-2 border rounded"
      />
    </div>
    <div className="space-y-2">
      <label htmlFor="minRepos" className="block text-sm font-medium">
        Minimum Repositories
      </label>
      <input
        type="number"
        id="minRepos"
        value={minRepos}
        onChange={(e) => setMinRepos(e.target.value)}
        placeholder="Enter minimum repositories"
        className="w-full p-2 border rounded"
      />
    </div>
    <button
      type="submit"
      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
    >
      Search
    </button>
  </form>

  {loading && <p className="mt-4 text-blue-500">Loading...</p>}
  {error && <p className="mt-4 text-red-500">{error}</p>}
  {users.length > 0 && (
    <div className="mt-4 space-y-4">
      {users.map((user) => (
        <div
          key={user.id}
          className="flex items-center space-x-4 p-4 bg-white rounded shadow"
        >
          <img
            src={user.avatar_url}
            alt={`${user.login}'s avatar`}
            className="w-16 h-16 rounded-full"
          />
          <div>
            <h2 className="text-lg font-semibold">{user.login}</h2>
            {user.location && <p>Location: {user.location}</p>}
            <p>Repositories: {user.public_repos}</p>
            <a
              href={user.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              View Profile
            </a>
          </div>
        </div>
      ))}
    </div>
  )}
</div>



export default Search;
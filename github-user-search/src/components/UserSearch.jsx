import React, { useState } from 'react';

const UserSearch = () => {
  const [username, setUsername] = useState('');
  
  const handleSearch = () => {
    // Functionality to handle search will be added here later
    console.log('Searching for user:', username);
  };

  return (
    <div>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter GitHub username"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default UserSearch;
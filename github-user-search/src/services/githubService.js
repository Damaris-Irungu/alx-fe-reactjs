import axios from 'axios';

const GITHUB_API_URL = 'https://api.github.com/users/{username}';

const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${GITHUB_API_URL}${username}`, {
      headers: {
        Authorization: `token ${process.env.REACT_APP_GITHUB_API_KEY}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching user data', error);
    throw error;
  }
};

export default fetchUserData;
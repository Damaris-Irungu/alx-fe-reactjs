import UserContext from '../UserContext';
function UserDetails({ userData }) {
  const { name, age, bio } = useContext(UserContext);
    return (
      <div>
        <p>Name: {userData.name}</p>
        <p>Email: {userData.email}</p>
      </div>
    );
  }
  
  export default UserDetails;
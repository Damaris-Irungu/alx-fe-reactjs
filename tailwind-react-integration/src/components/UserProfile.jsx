function UserProfile() {
    return (
      <div className="user-profile bg-gray-100 md:p-8 sm:p-4 max-w-xs sm:max-w-sm mx-auto my-10 sm:my-20 rounded-lg shadow-lg">
        <img
          src="https://via.placeholder.com/150"
          alt="User"
          className="rounded-full sm:w-24 sm:h-24 md:w-36 md:h-36 mx-auto"
        />
        <h1 className="sm:text-lg md:text-xl text-blue-800 my-4 text-center">John Doe</h1>
        <p className="sm:text-sm md:text-base text-gray-600 text-center">
          Developer at Example Co. Loves to write code and explore new technologies.
        </p>
      </div>
    );
  }
  
  export default UserProfile;
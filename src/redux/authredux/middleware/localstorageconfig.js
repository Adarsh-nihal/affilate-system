// Function to save user details to local storage
export const saveUserDetails = (key,userData) => {
    localStorage.setItem(key, JSON.stringify(userData));
  };
  
  // Function to retrieve user details from local storage
// export  const retrieveUserDetails = (key) => {
//     const userData = localStorage.getItem(key);
//     return userData ? JSON.parse(userData) : {};
//   };

export const retrieveUserDetails = (key) => {
  try {
    const storedData = localStorage.getItem(key);
    return storedData ? JSON.parse(storedData) : null;
  } catch (error) {
    console.error("Error retrieving user details from localStorage:", error);
    return null;
  }
};
  
  export const removeFromLocalStorage=(key) =>{
    localStorage.removeItem(key);
}
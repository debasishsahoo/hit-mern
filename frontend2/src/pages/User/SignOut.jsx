import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import  AuthContext  from '../../context/UserContext';

const SignOut = () => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    logout(); // Call the logout function from context
    localStorage.removeItem('token'); // Clear token or any auth data
    navigate('/'); // Navigate to the login page
  };
  return (
    <button onClick={handleLogout}>
    Logout
  </button>
  )
}

export default SignOut
import axios from 'axios';
axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;

const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    localStorage.setItem('token', token);
  } else {
    delete axios.defaults.headers.common['Authorization'];
    localStorage.removeItem('token');
  }
}

export default setAuthToken
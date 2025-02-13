import { useState,useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/UserContext";

const SignUp = () => {
  const [credentials, setCredentials] = useState({ name: "", email: "", password: "" });
  const { registration } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) =>
    setCredentials({ ...credentials, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registration(credentials);
      alert("Signup Successful! Redirecting to Login...");
      navigate("/");
    } catch (error) {
      console.log("error:", error);
      alert("Signup Failed!");
    }
  };

  return (
    <div className="container">
      <div className="card p-4">
        <h2 className="text-center">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="text" name="name" className="form-control" onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" name="email" className="form-control" onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" name="password" className="form-control" onChange={handleChange} required />
          </div>
          <button className="btn btn-primary w-100" type="submit">Register</button>
        </form>
      </div>
    </div>
  )
}

export default SignUp
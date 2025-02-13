import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/UserContext";

const ChangePassword = () => {
  const [credentials, setCredentials] = useState({ oldPassword: "", newPassword: "" });
  const { ChangePassword } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) =>
    setCredentials({ ...credentials, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await ChangePassword(credentials);
      alert("Password Change Successful! Redirecting to Login...");
      navigate("/login");
    } catch (error) {
      console.log("error:", error);
      alert("Password Changed Failed!");
    }
  };

  return (
    <div className="container">
      <div className="card p-4">
        <h2 className="text-center">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">OldPassword</label>
            <input
              type="password"
              name="oldPassword"
              className="form-control"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">newPassword</label>
            <input
              type="password"
              name="newPassword"
              className="form-control"
              onChange={handleChange}
              required
            />
          </div>
          <button className="btn btn-primary w-100" type="submit">
            ChangePassword
          </button>
        </form>
      </div>
    </div>
  )
}

export default ChangePassword
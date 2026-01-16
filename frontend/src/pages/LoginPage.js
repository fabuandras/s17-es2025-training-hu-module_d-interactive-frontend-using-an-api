import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import "./css/login.css";
import { AuthContext } from "../contexts/AuthContext";

export default function LoginPage() {
  const { login, serverError, loading } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    login({ email, password });
  }

  return (
    <div className="login-page">
      <div className="login-card">
        <h1 className="login-title">Login</h1>

        {serverError && <p className="error-text">{serverError}</p>}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Email</label>
            <input
              className="form-input"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Password</label>
            <input
              className="form-input"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button className="login-button" type="submit" disabled={loading}>
            Login
          </button>
        </form>

        <div className="login-footer">
          Registration is free! <br />
          <NavLink to="/register">CREATE AN ACCOUNT</NavLink>
        </div>
      </div>
    </div>
  );
}
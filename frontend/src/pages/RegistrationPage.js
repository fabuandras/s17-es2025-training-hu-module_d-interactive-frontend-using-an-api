import { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import "./css/registration.css";

export default function RegistrationPage() {
  const { register, serverError, loading } = useContext(AuthContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function getStrength(password) {
    if (!password) return "Very Weak";
    if (password.length < 6) return "Very Weak";
    if (password.length < 10) return "Weak";
    return "Strong";
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("A jelszavak nem egyeznek!");
      return;
    }

    register({
      name: name,
      email: email,
      password: password,
    });
  }

  return (
    <div className="registration-page">
      <div className="registration-card">
        <h1 className="registration-title">Create Account</h1>

        {serverError && (
          <p className="error-text">{serverError}</p>
        )}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Full Name</label>
            <input
              className="form-input"
              type="text"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Email Address</label>
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
            <div className="password-strength">
              Password Strength: {getStrength(password)}
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Confirm Password</label>
            <input
              className="form-input"
              type="password"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <button
            className="registration-button"
            type="submit"
            disabled={loading}
          >
            Create Account
          </button>
        </form>

        <div className="registration-footer">
          Already have an account?{" "}
          <NavLink to="/login">SIGN IN HERE</NavLink>
        </div>
      </div>
    </div>
  );
}
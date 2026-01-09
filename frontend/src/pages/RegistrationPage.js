import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import "./css/login.css";
import { AuthContext } from "../contexts/AuthContext";

export default function RegistrationPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { register, serverError, loading } = useContext(AuthContext);

  function handleSubmit(e) {
    e.preventDefault();
    register({ name, email, password });
  }

  return (
    <div className="login">
      <h2>Registration</h2>

      {serverError && <div className="alert-error">{serverError}</div>}
      {loading && <div className="alert">Betöltés...</div>}

      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label>Email</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div>
          <input type="submit" value="REGISTER" />
        </div>

        <div className="szoveg">
          Already have an account? <NavLink to="/login">LOGIN</NavLink>
        </div>
      </form>
    </div>
  );
}

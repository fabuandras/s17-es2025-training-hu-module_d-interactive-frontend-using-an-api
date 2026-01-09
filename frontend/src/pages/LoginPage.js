import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import "./css/login.css";
import { AuthContext } from "../contexts/AuthContext";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, serverError, loading } = useContext(AuthContext);

  function handleSubmit(e) {
    e.preventDefault();
    login({ email, password });
  }

  return (
    <div className="login">
      <h2>Login</h2>

      {serverError && <div className="alert-error">{serverError}</div>}
      {loading && <div className="alert">Betöltés...</div>}

      <form onSubmit={handleSubmit}>
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
          <input type="submit" value="LOGIN" />
        </div>

        <div className="szoveg">
          Registration is free!{" "}
          <NavLink to="/register">CREATE AN ACCOUNT</NavLink>
        </div>
      </form>
    </div>
  );
}

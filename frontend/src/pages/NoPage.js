import React from "react";
import { Link } from "react-router-dom";

export default function NoPage() {
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>404 - Az oldal nem található</h1>
      <Link to="/login">Vissza a főoldalra</Link>
    </div>
  );
}
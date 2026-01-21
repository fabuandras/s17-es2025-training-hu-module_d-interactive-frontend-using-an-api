import React from "react";
import "./css/courseSearch.css";

export default function CourseSearch({
  query,
  setQuery,
  difficulty,
  setDifficulty,
}) {
  return (
    <div className="course-search">
      <input
        className="course-search__input"
        type="text"
        placeholder="Search courses by title or description..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <select
        className="course-search__select"
        value={difficulty}
        onChange={(e) => setDifficulty(e.target.value)}
      >
        <option value="All">All Difficulties</option>
        <option value="Beginner">Beginner</option>
        <option value="Intermediate">Intermediate</option>
        <option value="Advanced">Advanced</option>
      </select>
    </div>
  );
}
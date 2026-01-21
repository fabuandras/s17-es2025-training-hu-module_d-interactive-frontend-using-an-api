import React from "react";
import { NavLink } from "react-router-dom";
import "./css/course.css";

export default function Course({ course }) {
  const {
    id,
    title,
    description,
    difficulty,
    chapters,
    totalCredits,
    enrolled,
  } = course;

  return (
    <div className="course-card">
      <div className="course-tag">[COURSE]</div>

      <h2 className="course-title">{title.toUpperCase()}</h2>
      <div className="course-sep" />

      <p className="course-desc">{description}</p>

      <div className="course-metrics">
        <div className="course-metric">
          <div className="course-metric__label">DIFFICULTY</div>
          <div className="course-metric__value">{difficulty.toUpperCase()}</div>
        </div>

        <div className="course-metric">
          <div className="course-metric__label">CHAPTERS</div>
          <div className="course-metric__value">{chapters}</div>
        </div>

        <div className="course-metric">
          <div className="course-metric__label">TOTAL CREDITS</div>
          <div className="course-metric__value">{totalCredits} CREDITS</div>
        </div>
      </div>

      <NavLink
        className={`course-action ${enrolled ? "course-action--green" : ""}`}
        to={`/courses/${id}`}
      >
        {enrolled ? "CONTINUE LEARNING" : "ENROLL NOW"}
      </NavLink>
    </div>
  );
}
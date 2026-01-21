import React from "react";
import { NavLink, useParams } from "react-router-dom";
import "./css/courseDetails.css";

export default function CourseDetailsPage() {
  const { id } = useParams();

  // most még statikus demo adat (később API)
  const course = {
    id,
    title: "React Fundamentals",
    description:
      "Learn the basics of React including components, state, and props. Build your first interactive web applications with modern React development practices.",
    chaptersCompleted: 1,
    chaptersTotal: 8,
    creditsEarned: 3,
    creditsTotal: 35,
    chapters: [
      {
        id: 1,
        title: "Chapter 1: Introduction to React",
        description:
          "Learn about introduction to react in this comprehensive chapter.",
        credits: 3,
        completed: true,
      },
      {
        id: 2,
        title: "Chapter 2: Components and JSX",
        description:
          "Learn about components and jsx in this comprehensive chapter.",
        credits: 5,
        completed: false,
      },
    ],
  };

  const chapterPercent = Math.round(
    (course.chaptersCompleted / course.chaptersTotal) * 100
  );
  const creditPercent = Math.round(
    (course.creditsEarned / course.creditsTotal) * 100
  );

  return (
    <div className="cd-wrap">
      <div className="cd-top-card">
        <NavLink className="cd-back" to="/courses">
          BACK TO COURSES
        </NavLink>

        <h1 className="cd-title">{course.title.toUpperCase()}</h1>
        <p className="cd-desc">{course.description}</p>

        <div className="cd-progress-grid">
          <div className="cd-progress">
            <div className="cd-progress-head">CHAPTER PROGRESS</div>
            <div className="cd-bar">
              <div
                className="cd-bar-fill"
                style={{ width: `${chapterPercent}%` }}
              />
            </div>
            <div className="cd-progress-foot">
              {course.chaptersCompleted} OF {course.chaptersTotal} CHAPTERS
              COMPLETED ({chapterPercent}%)
            </div>
          </div>

          <div className="cd-progress">
            <div className="cd-progress-head">CREDIT PROGRESS</div>
            <div className="cd-bar">
              <div
                className="cd-bar-fill"
                style={{ width: `${creditPercent}%` }}
              />
            </div>
            <div className="cd-progress-foot">
              {course.creditsEarned} OF {course.creditsTotal} CREDITS EARNED
            </div>
          </div>
        </div>
      </div>

      {course.chapters.map((ch) => (
        <div className="cd-chapter" key={ch.id}>
          <div className="cd-chapter-tag">[CHAPTER]</div>

          <h2 className="cd-chapter-title">{ch.title.toUpperCase()}</h2>
          <div className="cd-sep" />
          <p className="cd-chapter-desc">{ch.description}</p>

          <div className="cd-row">
            <div className="cd-credit-badge">{ch.credits} CREDITS</div>
          </div>

          <div className="cd-row cd-buttons">
            <button className="cd-btn cd-btn-muted">VIEW CHAPTER</button>

            {ch.completed ? (
              <button className="cd-btn cd-btn-green" disabled>
                CHAPTER COMPLETED
              </button>
            ) : (
              <button className="cd-btn cd-btn-green">MARK AS COMPLETED</button>
            )}
          </div>

          <button className="cd-share">SHARE ACHIEVEMENT</button>
        </div>
      ))}
    </div>
  );
}
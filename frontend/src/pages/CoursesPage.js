import React, { useMemo, useState } from "react";
import "./css/courses.css";
import CourseSearch from "../components/CourseSearch";
import Course from "../components/Course";

export default function CoursesPage() {
  // Most még statikus adatok (később API-ról jön)
  const [courses] = useState([
    {
      id: 1,
      title: "React Fundamentals",
      description:
        "Learn the basics of React including components, state, and props. Build your first interactive web applications.",
      difficulty: "Beginner",
      chapters: 8,
      totalCredits: 32,
      enrolled: true,
    },
    {
      id: 2,
      title: "Advanced JavaScript Patterns",
      description:
        "Master advanced JavaScript concepts including closures, prototypes, async programming, and design patterns.",
      difficulty: "Advanced",
      chapters: 12,
      totalCredits: 60,
      enrolled: false,
    },
    {
      id: 3,
      title: "Node.js Backend Development",
      description:
        "Build scalable backend applications with Node.js, Express, and databases. Learn API design and integration.",
      difficulty: "Intermediate",
      chapters: 10,
      totalCredits: 45,
      enrolled: true,
    },
    {
      id: 4,
      title: "Python Data Science",
      description:
        "Analyze data and build machine learning models using Python, pandas, numpy, and scikit-learn.",
      difficulty: "Intermediate",
      chapters: 15,
      totalCredits: 75,
      enrolled: false,
    },
    {
      id: 5,
      title: "CSS Grid & Flexbox",
      description:
        "Master modern CSS layout techniques including Grid and Flexbox for responsive web design.",
      difficulty: "Beginner",
      chapters: 6,
      totalCredits: 24,
      enrolled: false,
    },
    {
      id: 6,
      title: "DevOps with Docker & Kubernetes",
      description:
        "Learn containerization and orchestration for modern application deployment and scaling.",
      difficulty: "Advanced",
      chapters: 14,
      totalCredits: 70,
      enrolled: false,
    },
  ]);

  const [query, setQuery] = useState("");
  const [difficulty, setDifficulty] = useState("All");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();

    return courses.filter((c) => {
      const matchesText =
        !q ||
        c.title.toLowerCase().includes(q) ||
        c.description.toLowerCase().includes(q);

      const matchesDifficulty =
        difficulty === "All" || c.difficulty === difficulty;

      return matchesText && matchesDifficulty;
    });
  }, [courses, query, difficulty]);

  return (
    <div className="courses-wrap">
      <div className="courses-card">
        <h1 className="courses-title">Course Catalog</h1>
        <p className="courses-sub">
          Discover and enroll in courses to advance your skills
        </p>

        <CourseSearch
          query={query}
          setQuery={setQuery}
          difficulty={difficulty}
          setDifficulty={setDifficulty}
        />
      </div>

      <div className="courses-grid">
        {filtered.map((c) => (
          <Course key={c.id} course={c} />
        ))}
      </div>
    </div>
  );
}
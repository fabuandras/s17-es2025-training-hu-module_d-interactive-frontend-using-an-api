import React, { useContext, useState } from "react";
import "./css/mentors.css";
import Mentor from "../components/Mentor";
import { AuthContext } from "../contexts/AuthContext";

export default function MentorsPage() {
  const { user, loading } = useContext(AuthContext);

  const credits = user?.user?.creditBalance ?? 0;

  // demo adat (később API)
  const [sessions, setSessions] = useState([
    {
      id: 1,
      mentorName: "Sarah Chen",
      expertise: "React, Frontend Development, UI/UX Design",
      bio: "Senior Developer with 8+ years experience",
      date: "THURSDAY, FEBRUARY 15, 2024",
      time: "2:00 PM",
      duration: "60 MINUTES",
      cost: 12,
      booked: true,
    },
    {
      id: 2,
      mentorName: "Michael Rodriguez",
      expertise: "Node.js, Backend Development, Database Design",
      bio: "Full-Stack Architect with 10+ years experience",
      date: "FRIDAY, FEBRUARY 16, 2024",
      time: "10:00 AM",
      duration: "60 MINUTES",
      cost: 15,
      booked: false,
    },
  ]);

  function handleBook(session) {
    // demo: csak átállítjuk booked-re (később API)
    setSessions((prev) =>
      prev.map((s) => (s.id === session.id ? { ...s, booked: true } : s))
    );
  }

  if (loading || !user) return <div className="mentors-wrap">Betöltés...</div>;

  return (
    <div className="mentors-wrap">
      <div className="mentors-top">
        <h1 className="mentors-title">MENTOR SESSION BOOKING</h1>
        <p className="mentors-sub">
          Book one-on-one sessions with expert mentors to accelerate your
          learning
        </p>

        <div className="balance-box">
          <div className="balance-strong">
            Your Current Balance: {credits} Credits
          </div>
          <div className="balance-small">
            Sessions are automatically checked for confirmations every 30 seconds
          </div>
        </div>
      </div>

      <div className="mentors-list">
        <h2 className="mentors-section">AVAILABLE SESSIONS</h2>

        {sessions.map((s) => (
          <Mentor
            key={s.id}
            session={s}
            variant="available"
            onBook={handleBook}
          />
        ))}
      </div>
    </div>
  );
}
import React from "react";
import "./css/bookedSessions.css";
import Mentor from "../components/Mentor";

export default function BookedSessionPage() {
  // demo adat (később API)
  const bookedSessions = [
    {
      id: 1,
      mentorName: "Sarah Chen",
      date: "THURSDAY, FEBRUARY 15, 2024",
      time: "2:00 PM",
      cost: 12,
      bookedAt: "10/02/2024",
      status: "PENDING",
    },
    {
      id: 2,
      mentorName: "Emily Johnson",
      date: "FRIDAY, FEBRUARY 16, 2024",
      time: "4:00 PM",
      cost: 14,
      bookedAt: "11/02/2024",
      status: "REJECTED",
    },
  ];

  return (
    <div className="booked-wrap">
      <div className="booked-card">
        <h1 className="booked-title">YOUR BOOKED SESSIONS</h1>

        {bookedSessions.map((s) => (
          <Mentor key={s.id} session={s} variant="booked" />
        ))}
      </div>
    </div>
  );
}
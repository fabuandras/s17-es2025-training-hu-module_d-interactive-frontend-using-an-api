import React from "react";
import "./css/mentor.css";

export default function Mentor({ session, variant = "available", onBook }) {
  // variant: "available" | "booked"
  const {
    mentorName,
    expertise,
    bio,
    date,
    time,
    duration,
    cost,
    status,      // booked oldalhoz: "PENDING" | "REJECTED" | "CONFIRMED"
    bookedAt,    // booked dátum
    booked,      // available oldalon: true/false
  } = session;

  return (
    <div className="mentor-card">
      <div className="mentor-tag">[SESSION]</div>

      <h3 className="mentor-name">{mentorName.toUpperCase()}</h3>
      <div className="mentor-sep" />

      {variant === "available" ? (
        <>
          <p className="mentor-small">
            <strong>Expertise:</strong> {expertise}
          </p>
          <p className="mentor-small">{bio}</p>

          <div className="mentor-metrics">
            <div className="mentor-metric">
              <div className="mentor-metric__label">DATE</div>
              <div className="mentor-metric__value">{date}</div>
            </div>

            <div className="mentor-metric">
              <div className="mentor-metric__label">TIME</div>
              <div className="mentor-metric__value">{time}</div>
            </div>

            <div className="mentor-metric">
              <div className="mentor-metric__label">DURATION</div>
              <div className="mentor-metric__value">{duration}</div>
            </div>

            <div className="mentor-metric">
              <div className="mentor-metric__label">COST</div>
              <div className="mentor-metric__value">{cost} CREDITS</div>
            </div>
          </div>

          <div className="mentor-actions">
            <button className="mentor-btn mentor-btn-muted" disabled>
              VIEW PROFILE
            </button>

            {booked ? (
              <button className="mentor-btn mentor-btn-status" disabled>
                SESSION BOOKED
              </button>
            ) : (
              <button
                className="mentor-btn mentor-btn-primary"
                onClick={() => onBook?.(session)}
              >
                BOOK SESSION
              </button>
            )}
          </div>
        </>
      ) : (
        <>
          <div className={`status-badge ${status?.toLowerCase()}`}>
            {status === "PENDING" ? "PENDING CONFIRMATION" : status}
          </div>

          <div className="mentor-metrics mentor-metrics--booked">
            <div className="mentor-metric">
              <div className="mentor-metric__label">DATE</div>
              <div className="mentor-metric__value">{date}</div>
            </div>

            <div className="mentor-metric">
              <div className="mentor-metric__label">TIME</div>
              <div className="mentor-metric__value">{time}</div>
            </div>

            <div className="mentor-metric">
              <div className="mentor-metric__label">COST</div>
              <div className="mentor-metric__value">{cost} CREDITS</div>
            </div>

            <div className="mentor-metric">
              <div className="mentor-metric__label">BOOKED</div>
              <div className="mentor-metric__value">{bookedAt}</div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
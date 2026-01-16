import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import "./css/dashboard.css";
import { AuthContext } from "../contexts/AuthContext";

export default function DashboardPage() {
  const { user, loading } = useContext(AuthContext);

  if (loading || !user) return <div className="dash-wrap">Betöltés...</div>;

  const name = user?.user?.name || "John Doe";
  const credits = user?.user?.creditBalance ?? 0;

  // ezek most statikus placeholder számok (később jöhet API)
  const enrolled = 3;
  const completed = 8;
  const totalEarned = credits;

  return (
    <div className="dash-wrap">
      <div className="dash-card">
        <div className="dash-header">
          <h1>WELCOME BACK, {name.toUpperCase()}!</h1>
          <p className="dash-sub">
            CURRENT BALANCE: <strong>{credits} CREDITS</strong>
          </p>
        </div>

        <div className="dash-sep" />

        <div className="dash-metrics">
          <div className="metric">
            <div className="metric-tag">[METRIC]</div>
            <div className="metric-value">{enrolled}</div>
            <div className="metric-label">ENROLLED COURSES</div>
          </div>

          <div className="metric">
            <div className="metric-tag">[METRIC]</div>
            <div className="metric-value">{completed}</div>
            <div className="metric-label">COMPLETED CHAPTERS</div>
          </div>

          <div className="metric">
            <div className="metric-tag">[METRIC]</div>
            <div className="metric-value">{totalEarned}</div>
            <div className="metric-label">TOTAL CREDITS EARNED</div>
          </div>
        </div>

        <div className="dash-charts">
          <div className="panel">
            <div className="panel-top">
              <h3>CREDIT PROGRESS (LAST 30 DAYS)</h3>
              <span className="panel-tag">[CHART]</span>
            </div>
            <div className="panel-body chart-placeholder">
              {/* később ide jöhet egy valódi chart */}
              <div className="fake-grid" />
            </div>
          </div>

          <div className="panel">
            <div className="panel-top">
              <h3>COURSE COMPLETION STATUS</h3>
              <span className="panel-tag">[CHART]</span>
            </div>
            <div className="panel-body donut-placeholder">
              {/* később ide jöhet donut chart */}
              <div className="donut" />
              <div className="legend">
                <div className="legend-item">
                  <span className="dot" /> Completed Chapters
                </div>
                <div className="legend-item">
                  <span className="dot light" /> Remaining Chapters
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="dash-actions">
          <NavLink className="action-btn" to="/courses">
            BROWSE COURSES
          </NavLink>
          <NavLink className="action-btn" to="/mentors">
            BOOK MENTOR SESSION
          </NavLink>
        </div>
      </div>
    </div>
  );
}
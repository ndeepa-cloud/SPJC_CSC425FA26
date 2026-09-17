import { useState } from 'react'

function StudentDashboard() {
  const [grade, setGrade] = useState("A")

  let gradePoint

  if (grade === "A") {
    gradePoint = 4.0
  } else if (grade === "B") {
    gradePoint = 3.0
  } else if (grade === "C") {
    gradePoint = 2.0
  } else if (grade === "D") {
    gradePoint = 1.0
  } else {
    gradePoint = 0.0
  }

  let gpaStatus

  if (gradePoint === 4.0) {
    gpaStatus = "Excellent"
  } else if (gradePoint >= 3.0) {
    gpaStatus = "Good"
  } else if (gradePoint >= 2.0) {
    gpaStatus = "Fair"
  } else {
    gpaStatus = "Needs improvement"
  }

  return (
    <main
      id="student-dashboard"
      className="dashboard"
      aria-labelledby="student-title"
      tabIndex={-1}
    >
      <header className="dashboard-header">
        <p className="eyebrow">Your academic overview</p>

        <h1 id="student-title">Student Dashboard</h1>

        <p>
          Review your progress and find your academic information.
        </p>

        <p className="demo-note">
          Course project preview. Select a grade to view its GPA value
          and academic status.
        </p>
      </header>

      <nav className="dashboard-nav" aria-label="Student sections">
        <ul>
          <li>
            <a href="#gpa">GPA</a>
          </li>

          <li>
            <a href="#attendance">Attendance</a>
          </li>

          <li>
            <a href="#transcript">Transcript</a>
          </li>

          <li>
            <a href="#alerts">Alerts</a>
          </li>

          <li>
            <a href="#courses">Upcoming Courses</a>
          </li>

          <li>
            <a href="#grades">Student Grades</a>
          </li>
        </ul>
      </nav>

      <div className="dashboard-grid">

        {/* GPA */}
        <section
          id="gpa"
          className="dashboard-card"
          aria-labelledby="gpa-heading"
          tabIndex={-1}
        >
          <h2 id="gpa-heading">GPA</h2>

          <p className="metric">{gradePoint.toFixed(1)}</p>

          <label htmlFor="grade-select">
            Select Grade:
          </label>

          <select
            id="grade-select"
            value={grade}
            onChange={(event) => setGrade(event.target.value)}
          >
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
            <option value="F">F</option>
          </select>

          <p>Selected Grade: {grade}</p>
          <p>Status: {gpaStatus}</p>
        </section>

        {/* Attendance */}
        <section
          id="attendance"
          className="dashboard-card"
          aria-labelledby="attendance-heading"
          tabIndex={-1}
        >
          <h2 id="attendance-heading">Attendance</h2>

          <p className="metric">90%</p>

          <p>Current attendance · sample value</p>
        </section>

        {/* Transcript */}
        <section
          id="transcript"
          className="dashboard-card"
          aria-labelledby="transcript-heading"
          tabIndex={-1}
        >
          <h2 id="transcript-heading">Transcript</h2>

          <p className="status-label">Not connected</p>

          <p>
            Completed courses, credit hours, and final grades will appear here
            when academic records are connected.
          </p>
        </section>

        {/* Alerts */}
        <section
          id="alerts"
          className="dashboard-card"
          aria-labelledby="alerts-heading"
          tabIndex={-1}
        >
          <h2 id="alerts-heading">Alerts</h2>

          <p className="status-label">
            GPA Status: {gpaStatus}
          </p>

          <p>
            Your current selected grade is {grade}, which represents a
            GPA value of {gradePoint.toFixed(1)}.
          </p>
        </section>

        {/* Upcoming Courses */}
        <section
          id="courses"
          className="dashboard-card"
          aria-labelledby="courses-heading"
          tabIndex={-1}
        >
          <h2 id="courses-heading">Upcoming Courses</h2>

          <p className="status-label">Not connected</p>

          <p>
            Your registered courses, meeting times, and locations will appear
            here when registration data is connected.
          </p>
        </section>

        {/* Student Grades */}
        <section
          id="grades"
          className="dashboard-card"
          aria-labelledby="grades-heading"
          tabIndex={-1}
        >
          <h2 id="grades-heading">Student Grades</h2>

          <p className="status-label">Not connected</p>

          <p>
            Your course grades and academic results will appear here when
            grade records are connected.
          </p>
        </section>

      </div>
    </main>
  )
}

export default StudentDashboard
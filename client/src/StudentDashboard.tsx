// This role component supplies content; App.css supplies the shared layout.
// Keep these examples separate from live records until a data source is connected.

function StudentDashboard() {
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
          Course project preview. GPA and attendance are sample values;
          other records are not connected.
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
        <section
          id="gpa"
          className="dashboard-card"
          aria-labelledby="gpa-heading"
          tabIndex={-1}
        >
          <h2 id="gpa-heading">GPA</h2>

          <p className="metric">3.5</p>

          <p>Current GPA · sample value</p>
        </section>

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

        <section
          id="alerts"
          className="dashboard-card"
          aria-labelledby="alerts-heading"
          tabIndex={-1}
        >
          <h2 id="alerts-heading">Alerts</h2>

          <p className="status-label">
            Sample status: no new academic alerts
          </p>

          <p>
            Check here for academic reminders and notices.
            Live alerts are not connected.
          </p>
        </section>

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
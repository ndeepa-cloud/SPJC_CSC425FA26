import { useState } from 'react'

function StudentDashboard() {
  const [grades, setGrades] = useState<string[]>(["A", "B", "C", "A"])

  function getGradePoint(grade: string) {
    if (grade === "A") {
      return 4.0
    } else if (grade === "B") {
      return 3.0
    } else if (grade === "C") {
      return 2.0
    } else if (grade === "D") {
      return 1.0
    } else {
      return 0.0
    }
  }

  function changeGrade(index: number, newGrade: string) {
    const updatedGrades = [...grades]
    updatedGrades[index] = newGrade
    setGrades(updatedGrades)
  }

  function addCourse() {
    setGrades([...grades, "A"])
  }

  function removeCourse(index: number) {
    const updatedGrades = grades.filter((_, i) => i !== index)
    setGrades(updatedGrades)
  }

  let totalPoints = 0

  for (let i = 0; i < grades.length; i++) {
    totalPoints = totalPoints + getGradePoint(grades[i])
  }

  let gpa = 0

  if (grades.length > 0) {
    gpa = totalPoints / grades.length
  }

  let gpaStatus

  if (grades.length === 0) {
    gpaStatus = "No grades entered"
  } else if (gpa >= 3.5) {
    gpaStatus = "Excellent"
  } else if (gpa >= 3.0) {
    gpaStatus = "Good"
  } else if (gpa >= 2.0) {
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
          Course project preview. Select a grade for each course to calculate
          your GPA and view your academic standing.
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

        {/* GPA Calculator */}
        <section
          id="gpa"
          className="dashboard-card"
          aria-labelledby="gpa-heading"
          tabIndex={-1}
        >
          <h2 id="gpa-heading">GPA Calculator</h2>

          {grades.map((courseGrade, index) => (
            <div key={index}>
              <label htmlFor={`course-${index}`}>
                Course {index + 1} Grade:
              </label>

              <select
                id={`course-${index}`}
                value={courseGrade}
                onChange={(event) =>
                  changeGrade(index, event.target.value)
                }
              >
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
                <option value="F">F</option>
              </select>

              {grades.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeCourse(index)}
                >
                  Remove
                </button>
              )}
            </div>
          ))}

          <button type="button" onClick={addCourse}>
            + Add Course
          </button>

          <h3>Calculated GPA</h3>

          <p className="metric">
            {grades.length > 0 ? gpa.toFixed(2) : "--"}
          </p>

          <p>
            Academic Standing: {gpaStatus}
          </p>
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

          {grades.length === 0 ? (
            <p>
              Add courses to calculate your GPA.
            </p>
          ) : gpa < 2.0 ? (
            <p>
              Warning: Your GPA is below 2.0. Academic improvement is needed.
            </p>
          ) : (
            <p>
              Your current calculated GPA is {gpa.toFixed(2)}.
            </p>
          )}
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

          <p className="status-label">
            {grades.length > 0 ? "Grades entered" : "No grades entered"}
          </p>

          {grades.length > 0 ? (
            <ul>
              {grades.map((courseGrade, index) => (
                <li key={index}>
                  Course {index + 1}: {courseGrade}
                </li>
              ))}
            </ul>
          ) : (
            <p>
              Add courses using the GPA calculator to view grades here.
            </p>
          )}
        </section>

      </div>
    </main>
  )
}

export default StudentDashboard
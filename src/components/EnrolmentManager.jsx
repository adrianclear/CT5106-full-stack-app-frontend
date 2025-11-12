import { useEffect, useState } from "react";
import { getCourses, enrolStudent, withdrawStudent, completeCourse, removeEnrolment } from "../api/enrolmentApi";

export default function EnrolmentManager({ studentId }) {
  const [courses, setCourses] = useState([]);
  const [courseId, setCourseId] = useState("");

  useEffect(() => {
    loadCourses();
  }, [studentId]);

  const loadCourses = async () => {
    const data = await getCourses(studentId);
    setCourses(data);
  };

  const handleEnrol = async () => {
    await enrolStudent(studentId, courseId);
    setCourseId("");
    loadCourses();
  };

  return (
    <div>
      <h3>Courses</h3>
      <input placeholder="Course ID" value={courseId} onChange={(e) => setCourseId(e.target.value)} />
      <button onClick={handleEnrol}>Enrol</button>

      <ul>
        {courses.map((c) => (
          <li key={c.courseId}>
            {c.courseName} ({c.status})
            <button onClick={() => withdrawStudent(studentId, c.courseId).then(loadCourses)}>Withdraw</button>
            <button onClick={() => completeCourse(studentId, c.courseId).then(loadCourses)}>Complete</button>
            <button onClick={() => removeEnrolment(studentId, c.courseId).then(loadCourses)}>Remove</button>
          </li>
        ))}
      </ul>

      
    </div>
  );
}

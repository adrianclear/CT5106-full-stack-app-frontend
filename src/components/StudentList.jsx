import { useEffect, useState } from "react";
import { getStudents, deleteStudent } from "../api/studentApi";
import { Link } from "react-router-dom";

export default function StudentList() {
  const [students, setStudents] = useState([]);

//   runs after the component first renders
// empty dependency array ([]) means it runs only once
// just fetches data to display from the backend
  useEffect(() => {
    loadStudents();
  }, []);

//   function to fetch student data from the backend
// sets students state after first render, component renders again,
// but loadStudents isn't called on the second render due to the 
// empty dependency array i.e., the array hasn't changed (it was empty before)
// so our side effect isn't carried out again.
// - good example of how it is used as an escape hatch from normal rendering i.e.,
// after setting state, re-render which sets state again, re-renders, and so on.
// getStudents() sends a GET request to /students (Spring Boot’s endpoint)
// await waits for data to arrive
  const loadStudents = async () => {
    const data = await getStudents();
    setStudents(data);
  };

//   called when user clicks delete
// deleteStudent(id) sends a DELETE request to /students/{id}.
// calls load students to make sure UI stays in sync with backend
  const handleDelete = async (id) => {
    await deleteStudent(id);
    loadStudents();
  };

  return (
    <div className="p-4">
      <h2>All Students</h2>
      {/* Navigates to the Add student page without page reload */}
      <Link to="/add" className="btn">Add Student</Link>
      <ul>
        {students.map((s) => (
          <li key={s.id}>
            {s.name} ({s.email})
            <Link to={`/students/${s.id}`}>View</Link>
            <button onClick={() => handleDelete(s.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

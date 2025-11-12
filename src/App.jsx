// BrowserRouter is the main component that manages URL changes
// Routes is a container for Route definitions
// Route defines mapping between a path and a component
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StudentList from "./components/StudentList";
import StudentForm from "./components/StudentForm";
import StudentDetails from "./components/StudentDetails";

export default function App() {
  return (
    // React router setup for the app
    // Router listens for changes in the browser’s address bar, keeps track of 
    // nav history, and allows us to define routes
    <Router>  
      {/* define routes */}
      <Routes>
        <Route path="/" element={<StudentList />} />
        <Route path="/add" element={<StudentForm />} />
        {/* studentId can be accessed inside the component using the React Router hook */}
        <Route path="/students/:studentId" element={<StudentDetails />} />
      </Routes>
    </Router>
  );
}

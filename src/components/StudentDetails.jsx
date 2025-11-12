import { useParams } from "react-router-dom";
import EnrolmentManager from "./EnrolmentManager.jsx";

export default function StudentDetails() {
    // studentId accessed using the React Router hook
    //see App.jsx where Route is defined
  const { studentId } = useParams();

  return (
    <div className="p-4">
      <h2>Manage Enrolments for Student #{studentId}</h2>
      <EnrolmentManager studentId={studentId} />
    </div>
  );
}

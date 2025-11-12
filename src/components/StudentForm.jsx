import { useState } from "react";
import { addStudent } from "../api/studentApi";
import { useNavigate } from "react-router-dom";

export default function StudentForm() {
    // uses a JavaScript object with matching fields to my AddStudentRequest DTO in
    // the infrastructure layer of my backend
    // useState to represent the form entries so that
  const [form, setForm] = useState({ 
    firstName: "", 
    lastName: "", 
    email: "" })

  const navigate = useNavigate();

  //general function to handle a change event from any of the form fields
  //form as a controlled component so React controls state as form value changes
  //otherwise only browser would handle state but form "state" would never change
  // when the form data has changed, we update the state and React re-renders the
  //component
  const handleChange = (e) => setForm(
    { 
        ...form, 
        [e.target.name]: e.target.value 
    });

    //called when the form is submitted
    //async keyword means this function can use await inside it — i.e., it can 
    // pause until asynchronous operations complete (call to REST endpoint here)
  const handleSubmit = async (e) => {
    e.preventDefault(); //by default, browser reloads page on submit. Instead, we want React to handle data
    await addStudent(form); //calls API helper function that communicates with backend
    navigate("/");  //React Router redirect back to the / route
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Student</h2>
      <input name="firstName" placeholder="First Name" onChange={handleChange} />
      <input name="lastName" placeholder="Last Name" onChange={handleChange} />
      <input name="email" placeholder="Email" onChange={handleChange} />
      <button type="submit">Add</button>
    </form>
  );
}

import axios from "axios";

const BASE_URL = "https://ct5106-full-stack-app-testing.onrender.com/students";

export const getStudents = async () => {
  const res = await axios.get(BASE_URL);
  return res.data.students; // depends on ViewAllStudentsResponse shape
};

export const addStudent = async (student) => {
  const res = await axios.post(BASE_URL, student);
  return res.data;
};

export const updateStudent = async (id, student) => {
  const res = await axios.put(`${BASE_URL}/${id}`, student);
  return res.data;
};

export const deleteStudent = async (id) => {
  await axios.delete(`${BASE_URL}/${id}`);
};

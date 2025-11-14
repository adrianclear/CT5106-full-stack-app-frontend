import axios from "axios";

const BASE_URL = `${import.meta.env.VITE_API_BASE_URL}/students`;

export const getCourses = async (studentId) => {
  const res = await axios.get(`${BASE_URL}/${studentId}/enrolments`);
  return res.data;
};

export const enrolStudent = async (studentId, courseId) => {
  const res = await axios.post(`${BASE_URL}/${studentId}/enrolments`, { courseId });
  return res.data;
};

export const withdrawStudent = async (studentId, courseId) => {
  await axios.put(`${BASE_URL}/${studentId}/enrolments/${courseId}/withdraw`);
};

export const completeCourse = async (studentId, courseId) => {
  await axios.put(`${BASE_URL}/${studentId}/enrolments/${courseId}/complete`);
};

export const removeEnrolment = async (studentId, courseId) => {
  await axios.delete(`${BASE_URL}/${studentId}/enrolments/${courseId}`);
};

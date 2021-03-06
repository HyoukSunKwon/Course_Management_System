import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.REACT_APP_API_URL + "/students/";

export function getStudents() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}

export function saveStudent(student) {
  return fetch(baseUrl + (student.id || ""), {
    method: student.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify(student)
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteStudent(studentId) {
  return fetch(baseUrl + studentId, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react"

function App() {
  const [student, setStudent] = useState({ name: "", email: "", phone: "", address: "" });
  const [studentData, setStudentData] = useState([]);

  const handleChange = (event) => {
    event.preventDefault();
    setStudent({ ...student, [event.target.id]: event.target.value });
  };

  useEffect(() => { setStudentData(JSON.parse(localStorage.getItem("studentData"))) }, [])

  const handleSubmit = (event) => {
    event.preventDefault();
    setStudentData([...studentData, student]);
    setStudent({ name: "", email: "", phone: "", address: "" });
    localStorage.setItem("studentData", JSON.stringify([...studentData, student]));
  };

  useEffect(() => {
    console.log(studentData);
  }, [studentData]);

  return (
    <div className="student-container">
      <h1>Student Data</h1>
      <div className="input-container">
        <form onSubmit={handleSubmit}>
          <input id="name" type="text" value={student.name} onChange={handleChange} placeholder="Name" />
          <input id="email" type="text" value={student.email} onChange={handleChange} placeholder="Email" />
          <input id="phone" type="text" value={student.phone} onChange={handleChange} placeholder="Phone" />
          <input id="address" type="text" value={student.address} onChange={handleChange} placeholder="Address" />
          <button type='submit' className='btn btn-outline-danger btn-lg'>Submit</button>
        </form>
      </div>
      <h2>Result</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {studentData.map((data, index) => (
            <tr key={index}>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>{data.phone}</td>
              <td>{data.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;

import React, { useEffect, useState } from 'react';
import axios from 'axios';

function StudentList({ students }) {
  // ... (Your existing code remains the same)

  return (
    <div className="wrapper">
      {/* Sidebar */}

      {/* Content Wrapper. Contains page content */}
      <div className="content-wrapper" style={{ minHeight: '576px' }}>
        <div>
          <a className="btn btn-primary" href="/StudentForm" style={{ marginRight: '10px' }}>
            <i className="fas fa-plus"></i> New student
          </a>
          <a className="btn btn-primary" href="/student-upload">
            <i className="fas fa-upload"></i> Upload students
          </a>
        </div>

        <div className="table-responsive">
          <table id="studenttable" className="table table-bordered table-hover" data-page-length="100">
            <thead className="thead-light">
              <tr>
                <th>S/N</th>
                <th>Fullname</th>
                <th>Registration Number</th>
                <th>Current Class</th>
                <th>Gender</th>
                <th>Mobile Phone Number</th>
                <th>Programme</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, index) => (
                <tr key={index} className="clickable-row" onClick={() => handleRowClick(student.id)}>
                  <td>{index + 1}</td>
                  <td>{`${student.surname} ${student.firstname} ${student.other_name}`}</td>
                  <td>{student.registration_number}</td>
                  <td>{student.current_class}</td>
                  <td>{student.gender}</td>
                  <td>{student.parent_mobile_number}</td>
                  <td>{student.current_status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* /.content-wrapper */}
    </div>
  );
}

function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // Fetch data from the server when the component mounts
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5001/students');
        setStudents(response.data); // Assuming the response is an array of students
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {/* Pass the fetched data to the StudentList component */}
      <StudentList students={students} />
    </div>
  );
}

export default App;

import React, { useEffect, useState } from 'react';


function StudentList({ students }) {
  const [newStudent, setNewStudent] = useState({
    surname: '',
    firstname: '',
    other_name: '',
    registration_number: '',
    current_class: '',
    gender: '',
    parent_mobile_number: '',
    current_status: '',
  });

  const submitData = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/rust/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newStudent),
      });

      if (response.ok) {
        // Handle success, e.g., reset the form or fetch updated data
        console.log('Data submitted successfully');
      } else {
        console.error('Failed to submit data');
      }
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };

  useEffect(() => {
    // Initialize DataTable when component mounts
    $('#studenttable').DataTable();

    // Clean up DataTable when component unmounts
    return () => {
      $('#studenttable').DataTable().destroy();
    };
  }, []); // Empty dependency array ensures useEffect runs once on mount

  const handleRowClick = (studentId) => {
    // Define your click handling logic here
    console.log(`Row clicked: ${studentId}`);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewStudent((prevStudent) => ({
      ...prevStudent,
      [name]: value,
    }));
  };

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
                <th>Status</th>
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

// Example of a sample students array
const sampleStudents = [
  {
    id: 1,
    surname: 'Doe',
    firstname: 'John',
    other_name: 'Smith',
    registration_number: 'ABC123',
    current_class: 'Grade 10',
    gender: 'Male',
    parent_mobile_number: '123-456-7890',
    current_status: 'Active',
  },
  // Add more student objects as needed
];

function App() {
  return (
    <div>
      {/* Pass the sampleStudents array to the StudentList component */}
      <StudentList students={sampleStudents} />
    </div>
  );
}

export default App;

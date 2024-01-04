import React, { useState } from 'react';
import axios from 'axios';

function StudentAdd() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    gender: 'Select Gender',
    StudentClassName: 'Please Select Class',
    StudentSection: 'Please Select Section',
    admissionID: '',
    StudentAddress: '', // Added StudentAddress
    StudentEmail: '', // Added StudentEmail
    StudentPassword: '', // Added StudentPassword
    StudentPhone: '', // Added StudentPhone
    StudentRoll: '', // Added StudentRoll
    
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // You can access the form data in the `formData` state object.
    // You can handle the submission logic here.
    console.log(formData);

    try {
      const response = await axios.post('http://localhost:5001/StudentAdd', formData);
      console.log(response);
      // Handle the response from the server here
    } catch (error) {
      console.error('Error:', error);
      // Handle any errors here
    }
  };

  return (
    <div className="wrapper">
      {/* Navbar */}
      <nav className="main-header navbar navbar-expand navbar-white navbar-light">
        {/* Navbar content goes here */}
      </nav>
    
       {/* Content Wrapper. Contains page content */}
      <div className="content-wrapper" style={{ minHeight: "576px" }}>
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-1">
              <div className="col-sm-8">
                <h1>Add new student</h1>
              </div>
              <div className="col-sm-4">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item"></li>
                </ol>
              </div>
            </div>
          </div>
          {/* /.container-fluid */}
        </section>

        <div className="row">
          <div className="col-sm-12">
            <div className="card comman-shadow">
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="row"/>
                    {/* ... Your existing form elements ... */}
                    <div className="col-12 col-sm-4">
                      <div className="form-group local-forms">
                        <label>First Name <span className="login-danger">*</span></label>
                        <input
                          className="form-control"
                          type="text"
                          name="firstName" // Add the name attribute
                          value={formData.firstName} // Bind the value to the state
                          placeholder="Enter First Name"
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div className="col-12 col-sm-4"/>
                      <div className="form-group local-forms">
                        <label>Last Name <span className="login-danger">*</span></label>
                        <input
                          className="form-control"
                          type="text"
                          name="lastName" // Add the name attribute
                          value={formData.lastName} // Bind the value to the state
                          placeholder="Enter Last Name"
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="form-group local-forms">
                        <label>StudentClassName<span className="login-danger">*</span></label>
                        <input
                        className='form-control'
                        type='text'
                        name='StudentClassName'
                        value={formData.StudentClassName}
                        placeholder='Enter StudentClassName'
                        onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group local-forms">
                        <label>StudentSection<span className="login-danger">*</span></label>
                        <input
                        className='form-control'
                        type='text'
                        name='StudentSection'
                        value={formData.StudentSection}
                        placeholder='Enter StudentSection'
                        onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group local-forms">
                        <label>StudentRoll<span className="login-danger">*</span></label>
                        <input
                        className='form-control'
                        type='text'
                        name='StudentRoll'
                        value={formData.StudentRoll}
                        placeholder='Enter StudentRoll'
                        onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group local-forms">
                        <label>StudentEmail<span className="login-danger">*</span></label>
                        <input
                        className='form-control'
                        type='text'
                        name='StudentEmail'
                        value={formData.StudentEmail}
                        placeholder='Enter StudentEmail'
                        onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group local-forms">
                        <label>Gender<span className="login-danger">*</span></label>
                        <input
                        className='form-control'
                        type='text'
                        name='Gender'
                        value={formData.Gender}
                        placeholder='Gender'
                        onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group local-forms">
                        <label>StudentPhone<span className="login-danger">*</span></label>
                        <input
                        className='form-control'
                        type='text'
                        name='StudentPhone'
                        value={formData.StudentPhone}
                        placeholder='Enter StudentPhone'
                        onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group local-forms">
                        <label>StudentAddress<span className="login-danger">*</span></label>
                        <input
                        className='form-control'
                        type='text'
                        name='StudentAddress'
                        value={formData.StudentAddress}
                        placeholder='Enter StudentAddress'
                        onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group local-forms">
                        <label>Admission Id<span className="login-danger">*</span></label>
                        <input
                        className='form-control'
                        type='text'
                        name='AdmissionId'
                        value={formData.AdmissionId}
                        placeholder=' Admission Id'
                        onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group local-forms">
                        <label><span className="login-danger">*</span></label>
                        <input
                        className='form-control'
                        type='text'
                        name='StudentPassword'
                        value={formData.StudentPassword}
                        placeholder='Enter StudentPassword'
                        onChange={handleInputChange}
                        />
                    <div className="col-12">
                      <div className="student-submit">
                        <button type="submit" className="btn btn-primary">Submit</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentAdd;

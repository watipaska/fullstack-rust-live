import React, { useState } from "react";
import axios from "axios";

function StudentForm() {
  const [formData, setFormData] = useState({
    
    firstname: "",
    surname: "",
    other_name: "",
    gender: "",
    current_status:"",
    date_of_birth: "",
    current_class: "",
    registration_number: "",
    date_of_admission: "",
    parent_mobile_number: "",
    address: "",
    others: "",
    passport: "",
    
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
      const response = await axios.post(
        "http://localhost:5001/StudentAdd",
        formData
      );
      console.log(response);
      // Handle the response from the server here
    } catch (error) {
      console.error("Error:", error);
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
        {/* Main content */}
        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <div className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col">
                      <form onSubmit={handleSubmit}>
                          <>
                            <div className="form-group row">
                              <label
                                className="col-sm-3 col-form-label"
                                htmlFor="id_current_status"
                              >
                                Current Programme
                              </label>
                              <div className="col-sm-9">
                                <input
                                  name="current_status"
                                  value={formData.current_status}
                                  className="form-control"
                                  id="id_current_status"
                                  onChange={handleInputChange}
                                
                                  

                               ></input>   
                                
                              </div>
                            </div>

                            <div className="form-group row">
                              <label
                                className="col-sm-3 col-form-label"
                                htmlFor="id_registration_number"
                              >
                                Registration number
                              </label>
                              <div className="col-sm-9">
                                <input
                                  type="int"
                                  name="registration_number"
                                  value={formData.registration_number}
                                  maxLength={200}
                                  className="form-control"
                                  required
                                  id="id_registration_number"
                                  onChange={handleInputChange}
                                />
                              </div>
                            </div>

                            <div className="form-group row">
                              <label
                                className="col-sm-3 col-form-label"
                                htmlFor="id_surname"
                              >
                                Surname
                              </label>
                              <div className="col-sm-9">
                                <input
                                  type="text"
                                  name="surname"
                                  value={formData.surname}
                                  maxLength={200}
                                  className="form-control"
                                  required
                                  id="id_surname"
                                  onChange={handleInputChange}
                                />
                              </div>
                            </div>

                            <div className="form-group row">
                              <label
                                className="col-sm-3 col-form-label"
                                htmlFor="id_firstname"
                              >
                                Firstname
                              </label>
                              <div className="col-sm-9">
                                <input
                                  type="text"
                                  name="firstname"
                                  value={formData.firstname}
                                  maxLength={200}
                                  className="form-control"
                                  required
                                  id="id_firstname"
                                  onChange={handleInputChange}
                                />
                              </div>
                            </div>

                            <div className="form-group row">
                              <label
                                className="col-sm-3 col-form-label"
                                htmlFor="id_other_name"
                              >
                                Other name
                              </label>
                              <div className="col-sm-9">
                                <input
                                  type="text"
                                  name="other_name"
                                  value={formData.other_name}
                                  maxLength={200}
                                  className="form-control"
                                  id="id_other_name"
                                  onChange={handleInputChange}
                                />
                              </div>
                            </div>

                            <div className="form-group row">
                              <label
                                className="col-sm-3 col-form-label"
                                htmlFor="id_gender"
                              >
                                Gender
                              </label>
                              <div className="col-sm-9">
                                <select
                                  name="gender"
                                  value={formData.gender}
                                  className="form-control"
                                  id="id_gender"
                                  onChange={handleInputChange}
                                >
                                  <option value="male" selected={true}>
                                    Male
                                  </option>

                                  <option value="female">Female</option>
                                </select>
                              </div>
                            </div>

                            <div className="form-group row">
                              <label
                                className="col-sm-3 col-form-label"
                                htmlFor="id_date_of_birth"
                              >
                                Date of birth
                              </label>
                              <div className="col-sm-9">
                                <input
                                  type="date"
                                  name="date_of_birth"
                                  value={formData.date_of_birth}
                                  className="form-control"
                                  required
                                  id="id_date_of_birth"
                                  onChange={handleInputChange}
                                />
                                <input
                                  type="hidden"
                                  name="initial-date_of_birth"
                                  value="2023-12-29 09:02:48+00:00"
                                  id="initial-id_date_of_birth"
                                />
                              </div>
                            </div>

                            <div className="form-group row">
                              <label
                                className="col-sm-3 col-form-label"
                                htmlFor="id_current_class"
                              >
                                Current class
                              </label>
                              <div className="col-sm-9">
                                <select
                                  name="current_class"
                                  value={formData.current_class}
                                  className="form-control"
                                  id="id_current_class"
                                  onChange={handleInputChange}
                                >
                                  <option value={true} selected={true}>
                                    ---------
                                  </option>

                                  <option value="4">11th</option>

                                  <option value="3">11th Math</option>

                                  <option value="1">JSS 1</option>

                                  <option value="2">JSS 2</option>
                                </select>
                              </div>
                            </div>

                            <div className="form-group row">
                              <label
                                className="col-sm-3 col-form-label"
                                htmlFor="id_date_of_admission"
                              >
                                Date of admission
                              </label>
                              <div className="col-sm-9">
                                <input
                                  type="date"
                                  name="date_of_admission"
                                  value={formData.date_of_admission}
                                  className="form-control"
                                  required
                                  id="id_date_of_admission"
                                  onChange={handleInputChange}
                                />
                                <input
                                  type="hidden"
                                  name="initial-date_of_admission"
                                  value="2023-12-29 09:02:48+00:00"
                                  id="initial-id_date_of_admission"
                                />
                              </div>
                            </div>

                            <div className="form-group row">
                              <label
                                className="col-sm-3 col-form-label"
                                htmlFor="id_parent_mobile_number"
                              >
                                Parent mobile number
                              </label>
                              <div className="col-sm-9">
                                <input
                                  type="text"
                                  name="parent_mobile_number"
                                  value={formData.parent_mobile_number}
                                  maxLength={13}
                                  className="form-control"
                                  id="id_parent_mobile_number"
                                  onChange={handleInputChange}
                                />
                              </div>
                            </div>

                            <div className="form-group row">
                              <label
                                className="col-sm-3 col-form-label"
                                htmlFor="id_address"
                              >
                                Address
                              </label>
                              <div className="col-sm-9">
                                <textarea
                                  name="address"
                                  cols={40}
                                  rows={2}
                                  value={formData.address}
                                  className="form-control"
                                  id="id_address"
                                  onChange={handleInputChange}
                                />
                              </div>
                            </div>

                            <div className="form-group row">
                              <label
                                className="col-sm-3 col-form-label"
                                htmlFor="id_others"
                              >
                                Others
                              </label>
                              <div className="col-sm-9">
                                <textarea
                                  name="others"
                                  cols={40}
                                  rows={2}
                                  value={formData.others}
                                  className="form-control"
                                  id="id_others"
                                  onChange={handleInputChange}
                                />
                              </div>
                            </div>

                            <div className="form-group row">
                              <label
                                className="col-sm-3 col-form-label"
                                htmlFor="id_passport"
                              >
                                Passport
                              </label>
                              <div className="col-sm-9">
                                <input
                                  type="file"
                                  name="passport"
                                  accept="image/*"
                                  value={formData.passport}
                                  className="form-control"
                                  id="id_passport"
                                  onChange={handleInputChange}
                                />
                              </div>
                            </div>
                          </>
                          {/* ... */}

                          <input
                            type="submit"
                            className="btn btn-primary"
                            value="Add new student"
                          />
                        </form>
                      </div>
                    </div>
                    {/* /.row */}
                  </div>
                  {/* ./card-body */}
                </div>
                {/* /.card */}
              </div>
              {/* /.col */}
            </div>
            {/* /.row */}
          </div>
          {/*/. container-fluid */}
        </section>
        {/* /.content */}
      </div>
      {/* /.content-wrapper */}
    </div>
  );
}

export default StudentForm;

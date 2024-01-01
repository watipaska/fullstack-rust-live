import React from 'react';

const StudentForm = () => {
  return (
    <div className="wrapper">
      {/* Navbar */}
      <nav className="main-header navbar navbar-expand navbar-white navbar-light">
        {/* Navbar content goes here */}
      </nav>

     
      {/* Content Wrapper. Contains page content */}
      <div className="content-wrapper" style={{ minHeight: '576px' }}>
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
                        {/* Your form goes here */}
                        <form action="http://127.0.0.1:8000/student/create/" method="POST" encType="multipart/form-data">
                          <input type="hidden" name="csrfmiddlewaretoken" value="pBD7OhPC2uf6lubgNWj7glG82V9BG0ioWIDK5uCVzupPGC5Dc9aVe24BvGPLztk2" />

                          <><div className="form-group row">
  <label className="col-sm-3 col-form-label" htmlFor="id_current_status">
    Current status
    
  </label>
  <div className="col-sm-9">
    <select name="current_status" className="form-control" id="id_current_status">
  <option value="active" selected={true}>Active</option>

  <option value="inactive">Inactive</option>

</select>
    
  </div>
</div>

<div className="form-group row">
  <label className="col-sm-3 col-form-label" htmlFor="id_registration_number">
    Registration number
    
  </label>
  <div className="col-sm-9">
    <input type="text" name="registration_number" maxLength={200} className="form-control" required id="id_registration_number" />
    
  </div>
</div>

<div className="form-group row">
  <label className="col-sm-3 col-form-label" htmlFor="id_surname">
    Surname
    
  </label>
  <div className="col-sm-9">
    <input type="text" name="surname" maxLength={200} className="form-control" required id="id_surname" />
    
  </div>
</div>

<div className="form-group row">
  <label className="col-sm-3 col-form-label" htmlFor="id_firstname">
    Firstname
    
  </label>
  <div className="col-sm-9">
    <input type="text" name="firstname" maxLength={200} className="form-control" required id="id_firstname" />
    
  </div>
</div>

<div className="form-group row">
  <label className="col-sm-3 col-form-label" htmlFor="id_other_name">
    Other name
    
  </label>
  <div className="col-sm-9">
    <input type="text" name="other_name" maxLength={200} className="form-control" id="id_other_name" />
    
  </div>
</div>

<div className="form-group row">
  <label className="col-sm-3 col-form-label" htmlFor="id_gender">
    Gender
    
  </label>
  <div className="col-sm-9">
    <select name="gender" className="form-control" id="id_gender">
  <option value="male" selected={true}>Male</option>

  <option value="female">Female</option>

</select>
    
  </div>
</div>

<div className="form-group row">
  <label className="col-sm-3 col-form-label" htmlFor="id_date_of_birth">
    Date of birth
    
  </label>
  <div className="col-sm-9">
    <input type="date" name="date_of_birth" value="2023-12-29" className="form-control" required id="id_date_of_birth" /><input type="hidden" name="initial-date_of_birth" value="2023-12-29 09:02:48+00:00" id="initial-id_date_of_birth" />
    
  </div>
</div>

<div className="form-group row">
  <label className="col-sm-3 col-form-label" htmlFor="id_current_class">
    Current class
    
  </label>
  <div className="col-sm-9">
    <select name="current_class" className="form-control" id="id_current_class">
  <option value={true} selected={true}>---------</option>

  <option value="4">11th</option>

  <option value="3">11th Math</option>

  <option value="1">JSS 1</option>

  <option value="2">JSS 2</option>

</select>
    
  </div>
</div>

<div className="form-group row">
  <label className="col-sm-3 col-form-label" htmlFor="id_date_of_admission">
    Date of admission
    
  </label>
  <div className="col-sm-9">
    <input type="text" name="date_of_admission" value="2023-12-29" className="form-control" required id="id_date_of_admission" /><input type="hidden" name="initial-date_of_admission" value="2023-12-29 09:02:48+00:00" id="initial-id_date_of_admission" />
    
  </div>
</div>

<div className="form-group row">
  <label className="col-sm-3 col-form-label" htmlFor="id_parent_mobile_number">
    Parent mobile number
    
  </label>
  <div className="col-sm-9">
    <input type="text" name="parent_mobile_number" maxLength={13} className="form-control" id="id_parent_mobile_number" />
    
  </div>
</div>

<div className="form-group row">
  <label className="col-sm-3 col-form-label" htmlFor="id_address">
    Address
    
  </label>
  <div className="col-sm-9">
    <textarea name="address" cols={40} rows={2} className="form-control" id="id_address" />
    
  </div>
</div>

<div className="form-group row">
  <label className="col-sm-3 col-form-label" htmlFor="id_others">
    Others
    
  </label>
  <div className="col-sm-9">
    <textarea name="others" cols={40} rows={2} className="form-control" id="id_others" />
    
  </div>
</div>

<div className="form-group row">
  <label className="col-sm-3 col-form-label" htmlFor="id_passport">
    Passport
    
  </label>
  <div className="col-sm-9">
    <input type="file" name="passport" accept="image/*" className="form-control" id="id_passport" />
    
  </div>
</div>



</>
                          {/* ... */}


                          <input type="submit" className="btn btn-primary" value="Add new student" />
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
};

export default StudentForm;

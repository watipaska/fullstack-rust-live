import React, { useState } from "react";

function Navbar({ currentSession, currentTerm }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="hold-transition sidebar-mini layout-fixed layout-navbar-fixed layout-footer-fixed">
      <div className="wrapper">
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-1">
              <div className="col-sm-8">
                <h1>Add new student</h1>
              </div>
              <div className="col-sm-4">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item" />
                </ol>
              </div>
            </div>
          </div>
          {/* /.container-fluid */}
        </section>
        <nav className="main-header navbar navbar-expand navbar-white navbar-light">
          {/* Left navbar links */}
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link"
                data-widget="pushmenu"
                href="#"
                role="button"
              >
                <i className="fas fa-bars" />
              </a>
            </li>
            <li className="nav-item d-none d-sm-inline-block">
              <a href="#" className="nav-link">
                <i className="fa fa-home" />
              </a>
            </li>
            <li className="nav-item d-none d-sm-inline-block">
              <a href="#" className="nav-link">
                Session: {currentSession}
              </a>
            </li>
            <li className="nav-item d-none d-sm-inline-block">
              <a href="#" className="nav-link">
                Term: {currentTerm}
              </a>
            </li>
          </ul>

          {/* Right navbar links */}
          <ul className="navbar-nav ml-auto">
            <li className={`nav-item dropdown ${isDropdownOpen ? "show" : ""}`}>
              <a
                className="nav-link"
                role="button"
                onClick={toggleDropdown}
                aria-haspopup="true"
                aria-expanded={isDropdownOpen}
              >
                <i className="far fa-user"></i>
              </a>
              <div
                className={`dropdown-menu dropdown-menu-lg dropdown-menu-right ${
                  isDropdownOpen ? "show" : ""
                }`}
              >
                <a href="#" className="dropdown-item">
                  <i className="fas fa-user mr-2"></i> Profile
                </a>
                <div className="dropdown-divider"></div>
                <a href="{% url 'logout' %}" className="dropdown-item">
                  <i className="fas fa-sign-out"></i> Sign out
                </a>
              </div>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-widget="control-sidebar"
                data-slide="true"
                href="#"
                role="button"
              >
                <i className="fas fa-th-large"></i>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;

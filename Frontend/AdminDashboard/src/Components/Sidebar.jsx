import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      {/* Brand Logo */}
      <Link to="/studentList" className="brand-link">
         School ADMIN.V1
      </Link>

      {/* Sidebar */}
      <div className="sidebar os-host os-theme-light os-host-resize-disabled os-host-scrollbar-horizontal-hidden os-host-scrollbar-vertical-hidden os-host-transition">
        <div className="os-resize-observer-host observed">
          <div
            className="os-resize-observer"
            style={{ left: "0px", right: "auto" }}
          ></div>
        </div>
        <div
          className="os-size-auto-observer observed"
          style={{ height: "calc(100% + 1px)", float: "left" }}
        >
          <div className="os-resize-observer"></div>
        </div>
        <div
          className="os-content-glue"
          style={{ margin: "0px -8px", width: "73px", height: "1500px" }}
        ></div>
        <div className="os-padding">
          <div className="os-viewport os-viewport-native-scrollbars-invisible">
            <div
              className="os-content"
              style={{ padding: "0px 8px", height: "100%", width: "100%" }}
            >
              {/* Sidebar Menu */}
              <nav className="mt-2">
                <ul
                  className="nav nav-pills nav-sidebar flex-column"
                  data-widget="treeview"
                  role="menu"
                  data-accordion="false"
                >
                  <li className="nav-item">
                    <Link to="/studentList" className="nav-link">
                      <i className="nav-icon fas fa-graduation-cap"></i>
                      <p>Students</p>
                    </Link>
                  </li>

                  <li className="nav-item">
                  <Link to="/staffList"
                      className="nav-link"
                    >
                      <i className="nav-icon fas fa-users"></i>
                      <p>Member of Staff</p>
                      </Link>
                  </li>

                  <li className="nav-header">Finance</li>
                  <li className="nav-item">
                    <Link to="/InvoiceList"
                      className="nav-link"
                    >
                      <i className="nav-icon fas fa-money-bill-alt"></i>
                      <p>Invoices</p>
                    </Link>
                  </li>

                  <li className="nav-header">Results</li>
                  <li className="nav-item">
                    <Link
                      to="createresult"
                      className="nav-link"
                    >
                      <i className="nav-icon fas fa-money-bill-alt"></i>
                      <p>Create Results</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to
                      ="/editResults"
                      className="nav-link"
                    >
                      <i className="nav-icon fas fa-money-bill-alt"></i>
                      <p>Update Results</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to
                      ="/allresults"
                      className="nav-link"
                    >
                      <i className="nav-icon fas fa-money-bill-alt"></i>
                      <p>View Results</p>
                    </Link>
                  </li>

                  <li className="nav-header">Others</li>
                  <li className="nav-item has-treeview">
                    <Link to=
                      "/allresults"
                      className="nav-link"
                    >
                      <i className="nav-icon fas fa-copy"></i>
                      <p>
                        Management
                        <i className="fas fa-angle-left right"></i>
                      </p>
                    </Link>
                    <ul className="nav nav-treeview">
                      <li className="nav-item">
                        <a
                          href="http://127.0.0.1:8000/session/list/"
                          className="nav-link"
                        >
                          <i className="nav-icon fas fa-bars"></i>
                          <p>Sessions</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="http://127.0.0.1:8000/term/list/"
                          className="nav-link"
                        >
                          <i className="nav-icon fas fa-bars"></i>
                          <p>
                            Terms
                            <i className="right"></i>
                          </p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <Link to ="/subjectlist"
                          className="nav-link"
                        >
                          <i className="nav-icon fas fa-bars"></i>
                          <p>Subjects</p>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <a
                          href="http://127.0.0.1:8000/class/list/"
                          className="nav-link"
                        >
                          <i className="nav-icon fas fa-bars"></i>
                          <p>Classes</p>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a
                      href="http://127.0.0.1:8000/site-config"
                      className="nav-link"
                    >
                      <i className="nav-icon fas fa-cog"></i>
                      <p>Settings</p>
                    </a>
                  </li>
                </ul>
              </nav>
              {/* /.sidebar-menu */}
            </div>
          </div>
        </div>
        <div className="os-scrollbar os-scrollbar-horizontal os-scrollbar-unusable os-scrollbar-auto-hidden">
          <div className="os-scrollbar-track">
            <div
              className="os-scrollbar-handle"
              style={{ width: "100%", transform: "translate(0px, 0px)" }}
            ></div>
          </div>
        </div>
        <div className="os-scrollbar os-scrollbar-vertical os-scrollbar-unusable os-scrollbar-auto-hidden">
          <div className="os-scrollbar-track">
            <div
              className="os-scrollbar-handle"
              style={{ height: "100%", transform: "translate(0px, 0px)" }}
            ></div>
          </div>
        </div>
        <div className="os-scrollbar-corner"></div>
      </div>
      {/* /.sidebar */}
    </aside>
  );
};

export default Sidebar;

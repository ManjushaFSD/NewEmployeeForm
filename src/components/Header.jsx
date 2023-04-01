import React from "react";

const header = () => {
  return (
    <div>
      <div className="conatiner">
        <col className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12" />

        <nav className="navbar navbar-expand-lg" style={{backgroundColor:"#E3CCAE"}}>
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              Employee-App
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/NewEmployeeForm">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/NewEmployeeForm/employeeform">
                    Employee-Form
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default header;

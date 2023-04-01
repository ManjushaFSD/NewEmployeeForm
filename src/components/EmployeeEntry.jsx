import React,{useState} from "react";
import Header from "./Header.jsx";

const EmployeeEntry = () => {

const [input, setinput] = useState({})

const [status, setstatus] = useState({})


const ChangeMyEmployee = (event)=>{

setstatus(false)
setinput({
  ...input,
  [event.target.name]:event.target.value
})

}

const clickAddEmployeeBtn = ()=>{
  console.log(input)
}


  return (
    <div>
      <Header />

      <div className="container">
        <div className="row g-3">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
              <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                  Name
                </label>
                <input type="text" className="form-control" name="name" onChange={ChangeMyEmployee} />
              </div>

              <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                  Designation
                </label>
                <input type="text" className="form-control" name="designation" onChange={ChangeMyEmployee} />
              </div>

              <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                  Location
                </label>
                <input type="text" className="form-control" name="location" onChange={ChangeMyEmployee} />
              </div>

              <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                  Salary
                </label>
                <input type="text" className="form-control" name="salary" onChange={ChangeMyEmployee} />
              </div>
              <div>
          <button onClick={clickAddEmployeeBtn} className="btn btn-danger">Register</button>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
{status ? (<p>Fill all the fields in the form</p>) : (<p>  </p>)}
          </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeEntry;

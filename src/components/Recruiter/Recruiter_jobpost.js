import React, { useReducer } from "react";

const initialvalue = {
  job_role: "",
  experience: "",
  skills: "",
  job_location: "",
  package: "",
  job_type: "",
};

export default function Recruiter_jobpost() {
  const reducer = (state, action) => {
    if (action.type === "inputjobrole") {
      return { ...state, job_role: action.value };
    }
    if (action.type === "inputexperience") {
      return { ...state, experience: action.value };
    }
    if (action.type === "inputskills") {
      return { ...state, skills: action.value };
    }
    if (action.type === "inputjoblocation") {
      return { ...state, job_location: action.value };
    }
    if (action.type === "inputpackage") {
      return { ...state, package: action.value };
    }
    if (action.type === "inputjobtype") {
      return { ...state, job_type: action.value };
    }
  };
  const [value, dispatch] = useReducer(reducer, initialvalue);
  const token = localStorage.getItem("token");
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `bearer ${token} `,
    },
    body: JSON.stringify(value),
  };
  const submit = (event) => {
    event.preventDefault();
    fetch("http://localhost:3000/recruiter/jobpost", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div>
      <form className="container" onSubmit={submit}>
        <h3>Post Job </h3>
        <p style={{color:'red'}}>* required fields</p>
        <div className="form-group">
          <label>Job Role *</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Job Role"
            required
            onChange={(event) =>
              dispatch({ type: "inputjobrole", value: event.target.value })
            }
          />
        </div>
        <div className="form-group">
          <label>Experience *</label>
          <input
            type="text"
            className="form-control"
            placeholder="Experience"
            required
            onChange={(event) =>
              dispatch({ type: "inputexperience", value: event.target.value })
            }
          />
        </div>
        <div className="form-group">
          <label>Skills *</label>
          <input
            type="text"
            className="form-control"
            required
            placeholder="Enter the Skills"
            onChange={(event) =>
              dispatch({
                type: "inputskills",
                value: event.target.value,
              })
            }
          />
        </div>

        <div className="form-group">
          <label>Job Location *</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Job Location "
            required
            onChange={(event) =>
              dispatch({ type: "inputjoblocation", value: event.target.value })
            }
          />
        </div>
        <div className="form-group">
          <label>Package *</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Package"
            required
            onChange={(event) =>
              dispatch({ type: "inputpackage", value: event.target.value })
            }
          />
        </div>
        <div className="form-group">
          <label>Job Type *</label>
          <input
            type="text"
            className="form-control"
            required
            placeholder="Enter Job Type "
            onChange={(event) =>
              dispatch({
                type: "inputjobtype",
                value: event.target.value,
              })
            }
          />
        </div>
        <br></br>
        <button type="submit" className="btn btn-dark btn-lg btn-block">
          Job PosT
        </button>
      </form>
    </div>
  );
}

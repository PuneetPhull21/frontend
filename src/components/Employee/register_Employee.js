import React, { useReducer } from "react";
import "./register_Employee.css";
import { useHistory } from "react-router";
const initialvalue = {
  first_name: "",
  last_name: "",
  email: "",
  gender: "",
  password: "",
};
export default function Register_Employee() {
  const reducer = (state, action) => {
    if (action.type === "inputfirst_name") {
      return { ...state, first_name: action.value };
    }
    if (action.type === "inputlast_name") {
      return { ...state, last_name: action.value };
    }
    if (action.type === "inputemail") {
      return { ...state, email: action.value };
    }
    if (action.type === "inputgender") {
      return { ...state, gender: action.value };
    }
    if (action.type === "inputpassword") {
      return { ...state, password: action.value };
    }
  };
  const [value, dispatch] = useReducer(reducer, initialvalue);
  const history = useHistory();
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body:JSON.stringify(value)
};
   
  const submit = async (event) => {
    event.preventDefault();
     await fetch('http://localhost:3000/register_emp',requestOptions)
     .then(response => response.json())
     .then((body) => {
          localStorage.setItem('token',body.token);
          localStorage.setItem('isLoggedin','1');
          history.push('/Employee_details');
     });
     
  };

  return (
    <form className="container" onSubmit={submit}>
      <h3>Register Employee</h3>
      <p style={{color:'red'}}>* required fields</p>
      <div className="form-group">
        <label>First name *</label>
        <input
          type="text"
          className="form-control"
          placeholder="First name"
          required
          onChange={(event) =>
            dispatch({ type: "inputfirst_name", value: event.target.value })
          }
        />
      </div>

      <div className="form-group">
        <label>Last name*</label>
        <input
          type="text"
          className="form-control"
          placeholder="Last name"
          required
          onChange={(event) =>
            dispatch({ type: "inputlast_name", value: event.target.value })
          }
        />
      </div>

      <div className="form-group">
        <label>Email*</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          required
          onChange={(event) =>
            dispatch({ type: "inputemail", value: event.target.value })
          }
        />
      </div>

      <div className="form-group">
        <label>Gender*</label>
        <input
          type="text"
          required
          className="form-control"
          placeholder="Enter Gender"
          onChange={(event) =>
            dispatch({ type: "inputgender", value: event.target.value })
          }
        />
      </div>

      <div className="$form-group">
        <label>Password*</label>
        <input
          type="password"
          className="form-control"
          required
          placeholder="Enter password"
          onChange={(event) =>
            dispatch({ type: "inputpassword", value: event.target.value })
          }
        />
      </div>

      <button type="submit" className="btn btn-dark btn-lg btn-block">
        Register
      </button>
      <p className="forgot-password text-right">Already registered  <a href="Employee_login">login</a> </p>
    </form>
  );
}

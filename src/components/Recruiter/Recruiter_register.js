import React, { useReducer } from "react";

const initialvalue = {
  company_name: "",
  email: "",
  industry_experience: "",
  technologys: "",
  mobile_number: "",
  company_website: "",
  password: "",
};
export default function Recruiter_register() {
  const reducer = (state, action) => {
    if (action.type === "inputcompanyname") {
        console.log(state);
      return { ...state, company_name: action.value };
    }
    if (action.type === "inputemail") {
      return { ...state, email: action.value };
    }
    if (action.type === "inputindustryexperience") {
      return { ...state, industry_experience: action.value };
    }
    if (action.type === "inputtechnoloys") {
      return { ...state, technologys: action.value };
    }
    if (action.type === "inputmobilenumber") {
      return { ...state, mobile_number: action.value };
    }
    if (action.type === "inputcompanywebsite") {
      return { ...state, company_website: action.value };
    }
    if (action.type === "inputpassword") {
      return { ...state, password: action.value };
    }
  };
  const [value, dispatch] = useReducer(reducer, initialvalue);

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body:JSON.stringify(value)
};

  const submit = (event) => {
    event.preventDefault();
    console.log(value);
    fetch("recruiter/register/recruiter",requestOptions)
    .then(response=>response.json()).then((data)=>{
      localStorage.setItem('isLoggedin2','1');
      localStorage.setItem('token',data.token)
    })
  };
  return (
    <div>
      <form className="container" onSubmit={submit}>
        <h3>Register Recruiter</h3>
        <p style={{color:'red'}}>* required fields</p>
        <div className="form-group">
          <label>Company Name *</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter The Company name"
            required
            onChange={(event) =>
              dispatch({ type: "inputcompanyname", value: event.target.value })
            }
          />
        </div>
        <div className="form-group">
          <label>Email *</label>
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
          <label>Industry Experience *</label>
          <input
            type="text"
            className="form-control"
            required
            placeholder="Enter the Industry Experience"
            onChange={(event) =>
              dispatch({
                type: "inputindustryexperience",
                value: event.target.value,
              })
            }
          />
        </div>

        <div className="form-group">
          <label>Technologys *</label>
          <input
            type="text"
            className="form-control"
            required
            placeholder="Enter Technologys in which company work "
            onChange={(event) =>
              dispatch({ type: "inputtechnoloys", value: event.target.value })
            }
          />
        </div>
        <div className="form-group">
          <label>Mobile Number *</label>
          <input
            type="text"
            className="form-control"
            required
            placeholder="Enter The Mobile number "
            onChange={(event) =>
              dispatch({ type: "inputmobilenumber", value: event.target.value })
            }
          />
        </div>
        <div className="form-group">
          <label>Company Website *</label>
          <input
            type="text"
            className="form-control"
            required
            placeholder="Enter The Company website "
            onChange={(event) =>
              dispatch({
                type: "inputcompanywebsite",
                value: event.target.value,
              })
            }
          />
        </div>

        <div className="$form-group">
          <label>Password *</label>
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
        <br></br>
        <button type="submit" className="btn btn-dark btn-lg btn-block">
          Register
        </button>
        <p className="forgot-password text-right">Already registered <a href="/Recruiter_login" > Login </a> </p>
      </form>
    </div>
  );
}

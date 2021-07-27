import React,{useReducer} from 'react';
import {Modal,Button} from 'react-bootstrap';

const initialvalue = {
    company_name: "",
    email: "",
    industry_experience: "",
    technologys: "",
    mobile_number: "",
    company_website: "",
  };

export default function Recruiter_editprofile(props) {
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
     const token =localStorage.getItem('token');
      const requestOptions = {
        method: 'PUT',
        headers: { 'authorization':`Bearer ${token}`,
            'Content-Type': 'application/json' },
        body:JSON.stringify(value)
    };
    
      const submit = (event) => {
        event.preventDefault();
        console.log(value);
        fetch("recruiter/update/recruiter",requestOptions)
        .then(response=>response.json()).then((data)=>{
          console.log(data);
          props.hidemodal(false)
        })
      };
    return (
        <div>
       <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={props.setshow}  
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <div className="form-group">
          <label>Company Name</label>
          <input
            type="text"
            className="form-control"
            placeholder={props.list[0].company_name}
            required
            onChange={(event) =>
              dispatch({ type: "inputcompanyname", value: event.target.value })
            }
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder={props.list[0].email}
            required
            onChange={(event) =>
              dispatch({ type: "inputemail", value: event.target.value })
            }
          />
        </div>
        <div className="form-group">
          <label>Industry Experience</label>
          <input
            type="text"
            className="form-control"
            required
            placeholder={props.list[0].industry_experience}
            onChange={(event) =>
              dispatch({
                type: "inputindustryexperience",
                value: event.target.value,
              })
            }
          />
        </div>

        <div className="form-group">
          <label>Technologys</label>
          <input
            type="text"
            className="form-control"
            required
            placeholder={props.list[0].technologys}
            onChange={(event) =>
              dispatch({ type: "inputtechnoloys", value: event.target.value })
            }
          />
        </div>
        <div className="form-group">
          <label>Mobile Number</label>
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
          <label>Company Website</label>
          <input
            type="text"
            className="form-control"
            required
            placeholder={props.list[0].company_website}
            onChange={(event) =>
              dispatch({
                type: "inputcompanywebsite",
                value: event.target.value,
              })
            }
          />
        </div>
      </Modal.Body>
      <Modal.Footer>
      <Button onClick={submit} >Edit</Button>
        <Button  onClick={props.hidemodal} >Close</Button>
      </Modal.Footer>
    </Modal> 
        </div>
    
    )
}

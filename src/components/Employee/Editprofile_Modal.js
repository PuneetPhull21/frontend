import React, {useReducer} from 'react';
import { useHistory } from 'react-router';
import {Modal,Button} from 'react-bootstrap';

const initialvalue = {
    nationality:'',
    state:'',
    hometown:'',
    currentlocation:'',
    qualification:'',
    experience:'',
    technologys:''
}

export default function Editprofile_Modal(props) {
    const reducer = (state, action) => {
        if (action.type === "inputcontact") {
            return { ...state, contact: action.value };
          }
        if (action.type === "inputnationality") {
          return { ...state, nationality: action.value };
        }
        if (action.type === "inputstate") {
          return { ...state, state: action.value };
        }
        if (action.type === "inputhometown") {
          return { ...state, hometown: action.value };
        }
        if (action.type === "inputcurrentlocation") {
          return { ...state, currentlocation: action.value };
        }
        if (action.type === "inputqualification") {
          return { ...state, qualification: action.value };
        }
        if (action.type === "inputexperience") {
            return { ...state, experience: action.value };
          }
          if (action.type === "inputtechnologys") {
            return { ...state, technologys: action.value };
          } 
      };
    const [value,dispatch] = useReducer(reducer,initialvalue);
    const history = useHistory();
    const token = localStorage.getItem('token');
    const requestOptions = {
        method: 'PUT',
        headers: { 'authorization':`Bearer ${token}`,
            'Content-Type': 'application/json' },
        body:JSON.stringify(value)
    };
    const submit = async (e)=>{
        e.preventDefault();
       await fetch('http://localhost:3000/update/employee_details',requestOptions)
        .then(response=> response.json())
            history.push('/Employeeprofile');
            props.hidemodal(false)
    }
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
        <h4>Centered Modal</h4>
            <form className="container">
      <h3>Employee Personal Details</h3>
      <div className="form-group">
        <label>Contact</label>
        <input
          type="text"
          className="form-control"
          required
          placeholder={props.list[0].registered_employee_detail.contact}  
          onChange={(event) =>
            dispatch({ type: "inputcontact", value: event.target.value })
          }
          
       />
      </div>
      <div className="form-group">
        <label>Nationality</label>
        <input
          type="text"
          className="form-control"
          placeholder={props.list[0].registered_employee_detail.nationality}
          required
          onChange={(event) =>
            dispatch({ type: "inputnationality", value: event.target.value })
          }
        />
      </div>

      <div className="form-group">
        <label>State</label>
        <input
          type="text"
          className="form-control"
          placeholder={props.list[0].registered_employee_detail.state}
          required
          onChange={(event) =>
            dispatch({ type: "inputstate", value: event.target.value })
          }
        />
      </div>

      <div className="form-group">
        <label>Home Town</label>
        <input
          type="text"
          className="form-control"
          placeholder={props.list[0].registered_employee_detail.hometown}
          required
          onChange={(event) =>
            dispatch({ type: "inputhometown", value: event.target.value })
          }
        />
      </div>

      <div className="form-group">
        <label>Current Location</label>
        <input
          type="text"
          className="form-control"
          required
          placeholder={props.list[0].registered_employee_detail.currentlocation}
          onChange={(event) =>
            dispatch({ type: "inputcurrentlocation", value: event.target.value })
          }
        />
      </div>

      <div className="form-group">
        <label>Qualification</label>
        <input
          type="text"
          className="form-control"
          placeholder={props.list[0].registered_employee_detail.qualification}
          required
          onChange={(event) =>
            dispatch({ type: "inputqualification", value: event.target.value })
          }
        />
      </div>

      <div className="form-group">
        <label>Experience</label>
        <input
          type="text"
          className="form-control"
          required
          placeholder={props.list[0].registered_employee_detail.experience}
          onChange={(event) =>
            dispatch({ type: "inputexperience", value: event.target.value })
          }
        />
      </div>

      <div className="form-group">
        <label>Technologys</label>
        <input
          type="text"
          className="form-control"
          placeholder={props.list[0].registered_employee_detail.technologys}
          required
          onChange={(event) =>
            dispatch({ type: "inputtechnologys", value: event.target.value })
          }
        />
      </div>
      </form>
    
      </Modal.Body>
      <Modal.Footer>
      <Button onClick={submit} >Edit</Button>
        <Button  onClick={props.hidemodal} >Close</Button>
      </Modal.Footer>
    </Modal> 
        </div>
    )
}

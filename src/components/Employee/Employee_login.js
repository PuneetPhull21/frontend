import React,{useReducer} from 'react';
import {Button} from  'react-bootstrap';
import { useHistory } from 'react-router';

const initialvalue = {
    email:'',
    password:''
}
export default function Employee_login() {
    const reducer = (state,action)=>{
        if(action.type ==="inputemail"){
            return ({...state,email:action.value})
        }
        if(action.type ==="inputpassword"){
            return ({...state,password:action.value})
        }
    }
    const history = useHistory();
    const [value,dispatch] = useReducer(reducer,initialvalue);
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body:JSON.stringify(value)
    };
     const submit = (event)=>{
         event.preventDefault();
        fetch('http://localhost:3000/login',requestOptions).then(response=>
            response.json()).then((data)=>{
            localStorage.setItem('token',data.token);
            localStorage.setItem('isLoggedin','1');
            history.push('/Employee_dashboard');
            })
         
     }

    return (
        
          <form className="container" onSubmit={submit}>
      <h3>Login Employee</h3>
      <p style={{color:'red'}}>* required fields</p>
      <div className="form-group">
        <label>Email *</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter the email"
          required
          onChange={(event) =>
            dispatch({ type: "inputemail", value: event.target.value })
          }
        />
      </div>

      <div className="form-group">
        <label>Passwordc *</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter the password"
          required
          onChange={(event) =>
            dispatch({ type: "inputpassword", value: event.target.value })
          }
        />
      </div>

      <Button type="submit" className="btn btn-dark btn-lg btn-block" >Login</Button>

    </form>
    )
}

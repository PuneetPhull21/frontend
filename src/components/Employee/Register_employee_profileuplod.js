import React,{useState} from 'react';
import {useHistory} from 'react-router-dom'; 

export default function Register_employee_profileuplod() {
   const [profile_pic,setvalue] = useState('');
   const data = new FormData();
const token = localStorage.getItem('token');
   const requestOptions = {
    method: 'POST',
    headers: { 'authorization':`bearer ${token}`},
    body:data,
};
const history = useHistory();
var  imgpreview ;
   const onhandler = (event)=>{
     setvalue(event.target.files[0])
     imgpreview = <img src={event.target.files[0]} alt='this to pic'/>
   }
   
   const upload = (e)=>{
     e.preventDefault();
    data.append("profile_pic",profile_pic);
     fetch('http://localhost:3000/register_upload',requestOptions)
     .then(resopne => resopne.json())
     history.push("/Employee_dashboard");
   }
    return (
        <div>
            <form onSubmit={upload} >
            <h1>Upload Personal Data</h1>
            <p style={{color:'red'}}>* required fields</p>
            <div className="profile-img">
                    {imgpreview}
                </div>
    
     <div className="form-group">
        <label>Upload Picture *</label>
        <input
          type="file"
          className="form-control"
          placeholder="Upload profile pic"
          required
          name="profile_pic"
         onChange={onhandler}
          
        />
      </div>
      <button type="submit" className="btn btn-dark btn-lg btn-block">
        upload  </button>
           
           </form>
        </div>
    )
}

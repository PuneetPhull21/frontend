/* eslint-disable */
import React, { useState, useEffect } from "react";
import { Table,Button } from "react-bootstrap";

export default function Recruiter_Postedlist() {
  const [list, setlist] = useState([]);
  const token = localStorage.getItem("token");
  const requestOptions = {
    method: "GET",
    headers: { "authorization": `Bearer ${token}`},
  };
  const requestOptions2 = {
    method: "DELETE",
    headers: { "authorization": `Bearer ${token}`},
  };
  useEffect(() => {
    fetch("http://localhost:3000/recruiter/postedjobs",requestOptions)
      .then((response) => response.json())
      .then((data) => {
        setlist(data.data);
      });
  },[]);

  const deletejobpost = (event) => {
    const deleteitem = list.filter((item, index) => {      
        return event === index;
   })
   fetch(`http://localhost:3000/recruiter/delete/jobpost/${deleteitem[0].job_id}`,requestOptions2)
   .then(response => response.json())
   .then((data)=>{
      alert("job post is deleted");
   })    
  }
  return (
    <div>
       {list.length > 0 ? (
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Job Role </th>
            <th>Experience</th>
            <th>Skills</th>
            <th>Job Location</th>
            <th>Package</th>
            <th>Job Type</th>
            <th>Posted</th>
            <th>Delete Post</th>
          </tr>
        </thead>
      
          <tbody>
            {list.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.job_role}</td>
                <td>{item.experience}</td>
                <td>{item.skills}</td>
                <td>{item.job_location}</td>
                <td>{item.package}</td>
                <td>{item.job_type}</td>
                <td><Button variant="primary" size="sm" disabled>
    Posted
  </Button>{' '}</td>
         <td><Button size="sm" variant="danger" onClick={()=>{deletejobpost(index)}} >Delete</Button></td>
              </tr>
            ))}
          </tbody>
      </Table>
      ) : (
        <h2>No job is Posted by you </h2>
      )}
    </div>
  );
}

/* eslint-disable */
import React,{useState,useEffect} from 'react';
import {Table,Button} from 'react-bootstrap';

export default function Applied_jobs() {
    const [list,setlist] = useState([]);
    const token = localStorage.getItem('token');
    var requestOptions = {
        method: "GET",
        headers: { authorization: `Bearer ${token}` },
      };

    useEffect(()=>{
        fetch("http://localhost:3000/all_applied_jobs",requestOptions)
        .then(response=>response.json()).then((data)=>{
          setlist(data.data)
        })
    },[])
    return (
        <div>
       {list.length > 0 ? 
      <Table striped bordered hover size="sm" variant="dark" >
        <thead>
          <tr>
            <th>#</th>
            <th>Job Role </th>
            <th>Experience</th>
            <th>Skills</th>
            <th>Job Location</th>
            <th>Package</th>
            <th>Job Type</th>
            <th>Applied</th>
          </tr>
        </thead>
          <tbody>
            {list.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.Applied_role}</td>
                <td>{item.experience}</td>
                <td>{item.skills}</td>
                <td>{item.job_location}</td>
                <td>{item.package}</td>
                <td>{item.job_type}</td>
              <td><Button variant="success" size="sm" disabled>
    Applied
  </Button>{' '}</td>
              </tr>
            ))}
          </tbody>
      </Table>
       :
        <h3>You not applied any job</h3>
      }
    </div>
    )
}

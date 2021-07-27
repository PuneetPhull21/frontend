/* eslint-disable */
import React,{useState,useEffect} from 'react';
import {Table,Button} from 'react-bootstrap';


export default function Recruiter_jobseekers(){
    const [list, setlist] = useState([]);
    const token = localStorage.getItem("token");
    const requestOptions = {
      method: "GET",
      headers: { authorization: `Bearer ${token}` },
    };
    useEffect(() => {
        fetch("http://localhost:3000/recruiter/jobseekers", requestOptions)
          .then((response) => response.json())
          .then((data) => {
            setlist(data.data);
          });
      },[]);
    return (
        <div>
         { list.length > 0 ? 
      <Table striped bordered hover size="sm" variant="dark" >
        <thead>
          <tr>
            <th>#</th>
            <th>Seeker Name</th>
            <th>Seeker Mail</th>
            <th>Gender </th>
            <th>Applied For</th>
          </tr>
        </thead>
          <tbody>
            {list.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.registered_employee.first_name} {item.registered_employee.last_name}</td>
                <td>{item.registered_employee.email}</td>
                <td>{item.registered_employee.gender}</td>
                <td>{item.Applied_role}</td>
              </tr>
            ))}
          </tbody>
      </Table>
       :
        <h3>There is no seeker</h3>
      }
    </div> 
        
    )
}



/* eslint-disable */
import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import { useHistory } from "react-router";

export default function Job_list() {
  const [list, setlist] = useState([]);
  const token = localStorage.getItem("token");
  const history = useHistory();
  var requestOptions = {
    method: "GET",
    headers: { authorization: `Bearer ${token}` },
  };
  useEffect(() => {
    fetch("http://localhost:3000/recruiter/jobslist", requestOptions).then(
      (response) => {
        response.json().then((data) => {
          setlist(data.data);
        });
      }
    );
  },[]);
  const apply = (event) => {
    console.log(event);
    const applied = list.filter((item, index) => {      
        return event === index ;
      
    })
    console.log(applied);
    const value = {
      Applied_role: applied[0].job_role,
      experience: applied[0].experience,
      skills: applied[0].skills,
      job_location: applied[0].job_location,
      package: applied[0].package,
      job_type: applied[0].job_type,
      recruiter_id: applied[0].id,
    };

    const requestOptions_2 ={
      method: 'POST',
      headers: { 'authorization':`Bearer ${token}`,
          'Content-Type': 'application/json' },
      body:JSON.stringify(value)
    }

    fetch("http://localhost:3000/applied/jobs",requestOptions_2)
    .then(response=> response.json())

    history.push('/Employee_Applied_jobs');
    

  };

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
              <th>Apply</th>
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
                <td>
                  {" "}
                  <Button
                    variant="success"
                    size="sm"
                    onClick={() => {
                      apply(index);
                    }}
                  >
                    Apply
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <h3>Currently there is no job avaliable</h3>
      )}
    </div>
  );
}

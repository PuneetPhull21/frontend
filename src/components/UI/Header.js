import React from 'react';
import {Navbar,Nav,Container} from 'react-bootstrap'
export default function Header() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
    <Container>
   
    <Nav className="me-auto">
      { localStorage.getItem('token') && localStorage.getItem('isLoggedin') ?
      <>
        <Navbar.Brand href="/Employee_dashboard">Home</Navbar.Brand>
      <Nav.Link href ="/Employee_Applied_jobs">Applied_jobs</Nav.Link>
      <Nav.Link href="/Employeeprofile">Profile</Nav.Link>
      <Nav.Link href="/Employee_dashboard">Dashboard</Nav.Link>
      </>
      : 
      localStorage.getItem('token') && localStorage.getItem('isLoggedin2') ?
        <>
         <Navbar.Brand href="/Recruiter_dashboard">Home</Navbar.Brand>
        <Nav.Link href ="/Recruiter_jobpost">JobPost</Nav.Link>
      <Nav.Link href="/Recruiter_profile">Profile</Nav.Link>
      <Nav.Link href="/Recruiter_dashboard">Dashboard</Nav.Link>
      <Nav.Link href="/Recruiter_jobseekers">Job Seekers</Nav.Link>
     
        </>
        :
        <>
         <Navbar.Brand href="/">Home</Navbar.Brand>
        <Nav.Link href="/Recruiter">Recruiter Register</Nav.Link>
      <Nav.Link href="/Employee">Employee Register</Nav.Link>
     
        </>
     }
    </Nav>
    </Container>
  </Navbar>
        </div>
    )
}

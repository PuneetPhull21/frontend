import React from "react";
import { Button } from "react-bootstrap";
import Carouse from "./Carouse";
import "./Home.css";

export default function Home() {
  return (
    <>
    <Carouse/>
        <h1 style={{marginLeft:'40rem'}} >Job's Portal</h1>
      <div className="home">
    <h1>The Easiest Way to Get The New Job</h1>
    <p>Post a job to tell as about your project We'll quickly match you with the right person</p>
      </div>
      <div className="button">
        <Button href="/Employee_login">Employee Login</Button>{" "}
        <span>
          {" "}
          <Button href="/Recruiter_login">Recruiter Login</Button>
        </span>
      </div>
      
    </>
  );
}

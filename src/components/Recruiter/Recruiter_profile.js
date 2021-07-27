/* eslint-disable */
import React,{useEffect,useState} from "react";
import { Button } from "react-bootstrap";
import RecruiterEditprofile from "./Recruiter_editprofile";
import { useHistory } from "react-router";

export default function Recruiter_profile() {
    const [show,setshow]= useState(false);
    const [list,setlist] = useState([]);
    const [showmodal,setshowmodal] = useState(false);  
    const token = localStorage.getItem('token');
    const requestOptions = {
        method: 'GET',
        headers: { 'authorization':`Bearer ${token}`},
    };
    useEffect(()=>{
        fetch('http://localhost:3000/recruiter/profile',requestOptions)
        .then(response => response.json())
        .then((data)=>{
            setlist(data.data);
        })

    },[])
    const showeditprodile = ()=>{
        setshow(true);
        setshowmodal(true);
    }
    const hideeditprofile = (event)=>{
        setshowmodal(false);
    }
    const history = useHistory();
 
    const logout = ()=>{
      alert("Successfully logout");
      localStorage.removeItem('token');
      localStorage.removeItem('isLoggedin2');
        history.push('/Recruiter_login');
    }

  return (
    <div>
           { list.length > 0 ?
      <div className="container emp-profile">
        <form>
          <div className="row">
            <div className="col-md-4">
              <div className="profile-img">
                <img src="" alt="" />
                <div className="file btn btn-lg btn-primary">
                  Change Photo
                  <input type="file" name="file" />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="profile-head">
                <h2>Recruiter Profile</h2>
                <h5>Company Name : {list[0].company_name}</h5>
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      id="home-tab"
                      data-toggle="tab"
                      href="#home"
                      role="tab"
                      aria-controls="home"
                      aria-selected="true"
                    >
                      About
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-2">
              <Button type="button" variant="dark" onClick={showeditprodile} >
                Edit Profile{" "}
              </Button>
              <br></br>
              <br></br>
              <Button type="button" variant="dark" onClick={logout} >
                Logout{" "}
              </Button>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="profile-work"></div>
            </div>
            <div className="col-md-8">
              <div className="tab-content profile-tab" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <label>Recruiter Id</label>
                    </div>
                    <div className="col-md-6">
                      <p>{list[0].id}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Email</label>
                    </div>
                    <div className="col-md-6">
                      <p>{list[0].email}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Industry Experience</label>
                    </div>
                    <div className="col-md-6">
                      <p>{list[0].industry_experience}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Company Number</label>
                    </div>
                    <div className="col-md-6">
                      <p>{list[0].mobile_number}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Company Website</label>
                    </div>
                    <div className="col-md-6">
                      <p>{list[0].company_website}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      : ""      
    }
    
    { show  ? <RecruiterEditprofile setshow={showmodal}  hidemodal={hideeditprofile} list={list} />: "" }
    </div>

  );
}

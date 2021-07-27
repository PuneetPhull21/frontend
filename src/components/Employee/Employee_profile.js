/* eslint-disable */
import React,{useEffect, useState} from 'react';
import {Button} from 'react-bootstrap';
import Editprofile_Modal from './Editprofile_Modal';
import './Employee_profile.css';
import  {useHistory}  from 'react-router';
export default function Employee_profile(props){
    const [show,setshow]= useState(false);
    const [list,setlist] = useState([]);
    const [list2,setlist2] = useState([]);
    const [showmodal,setshowmodal] = useState(false);  

const history = useHistory();
    const token = localStorage.getItem('token');
    const requestOptions = {
        method: 'GET',
        headers: { 'authorization':`Bearer ${token}`},
    };
    useEffect(()=>{
        fetch('http://localhost:3000/profile',requestOptions)
        .then(response => response.json())
        .then((data)=>{
            setlist(data.data);
            
        })
        fetch('http://localhost:4000/display',requestOptions)
        .then(response=> response.json()).then((data)=>{
            console.log(data.data);
           setlist2(data.data)
        })

    },[])
    const showeditprodile = ()=>{
        setshow(true);
        setshowmodal(true);
    }
    const hideeditprofile = (event)=>{
        setshowmodal(false || event);
    }
    const logout = ()=>{
        alert("Successfully logout");
        localStorage.removeItem('token');
        localStorage.removeItem('isLoggedin');
          history.push('/Employee_login');
    }
    return (
        <div>
            {list.length > 0 ? 
            <div className="container emp-profile">
            <form method="post">
                <div className="row">
                    <div className="col-md-4">
                        { list2.length > 0 ?
                        <div className="profile-img">
                            <img src={list2[0].profile_pic}  alt=""/>
                            <div className="file btn btn-lg btn-primary">
                                Change Photo
                                <input type="file" name="file"/>
                            </div>
                        </div>
                        :""
}
                    </div>
                    <div className="col-md-6">
                        <div className="profile-head">
                                    <h5>
                                        {list[0].first_name}  {list[0].last_name}
                                    </h5>
                                    <h6>
                                        Web Developer and Designer
                                    </h6>
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-2">
                      <Button type="button" onClick={showeditprodile} variant="dark" >Edit Profile </Button>
                      <br></br>
                      <br></br>
                      <Button onClick={logout} variant="dark" >Logout</Button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="profile-work">
                            <h6> Nationality </h6>
                            <p>{list[0].registered_employee_detail.nationality}</p>
                            <h6> State </h6>
                            <p>{list[0].registered_employee_detail.state}</p>
                            <h6> HomeTown </h6>
                            <p>{list[0].registered_employee_detail.hometown}</p>
                            <h6>Current Location</h6>
                            <p>{list[0].registered_employee_detail.currentlocation}</p>
                            <h6>Qualification</h6>
                            <p>{list[0].registered_employee_detail.qualification}</p>

                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="tab-content profile-tab" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>User Id</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{list[0].id}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Name</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{list[0].first_name} {list[0].last_name}</p>
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
                                                <label>Phone</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{list[0].registered_employee_detail.contact}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Technologys</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{list[0].registered_employee_detail.technologys}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Experience</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{list[0].registered_employee_detail.experience}</p>
                                            </div>
                                        </div>
                            </div>
                            <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Experience</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>Expert</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Hourly Rate</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>10$/hr</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Total Projects</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>230</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>English Level</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>Expert</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Availability</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>6 months</p>
                                            </div>
                                        </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <label>Your Bio</label><br/>
                                        <p>Your detail description</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>           
        </div>
        :
 ""
            }

       { show  ? <Editprofile_Modal setshow={showmodal}  hidemodal={hideeditprofile} list={list} />: "" }
        </div>
    )
}

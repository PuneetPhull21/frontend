import React from 'react';
import RegisterEmployee from './components/Employee/register_Employee';
import RegisterEmployeeDeatils from './components/Employee/Register_Employee_deatils';
import RegisterEmployeeProfileuplod from './components/Employee/Register_employee_profileuplod';
import EmployeeDashboard from './components/Employee/Employee_Dashboard';
import Employeelogin from './components/Employee/Employee_login';
import Header from './components/UI/Header';
import RecruiterRegister from './components/Recruiter/Recruiter_register';
import RecruiterDashboard from './components/Recruiter/Recruiter_Dashboard';
import { BrowserRouter as Router , Route, Switch} from 'react-router-dom';
import RecruiterJobpost from './components/Recruiter/Recruiter_jobpost';
import RecruiterPostedlist from './components/Recruiter/Recruiter_Postedlist';
import Recruiterlogin from './components/Recruiter/Recruiter_login';
import Applied_jobs from './components/Employee/Applied_jobs';
import Recruiterjobseekers from './components/Recruiter/Recruiter_jobseekers';
import Employeeprofile from './components/Employee/Employee_profile';
import EditprofileModal from './components/Employee/Editprofile_Modal';
import Recruiter_profile from './components/Recruiter/Recruiter_profile';
import Home from './components/UI/Home';


export default function App() {
  return (
    <div>
      
        <Header/> 
      <Router>
      <Switch>
        { localStorage.getItem('token') && localStorage.getItem('isLoggedin') ?
        <>
        <Route exact path="/Employee_details" component={RegisterEmployeeDeatils} />
        <Route exact path="/Employee_profile_pic" component={RegisterEmployeeProfileuplod} />
        <Route exact path="/Employee_dashboard" component={EmployeeDashboard} />
        <Route exact path="/Employee_Applied_jobs" component={Applied_jobs} />
        <Route exact path="/Employeeprofile" component={Employeeprofile} />
        <Route exact path="/Employee_edit_profile" component={EditprofileModal} />
        </>
         :
         localStorage.getItem('token') && localStorage.getItem('isLoggedin2')?
        <>
       <Route exact path="/Recruiter_dashboard" component={RecruiterDashboard} />
        <Route exact path="/Recruiter_jobpost" component={RecruiterJobpost} />
        <Route exact path="/Recruiter_postedjobs" component={RecruiterPostedlist} />
        
        <Route exact path="/Recruiter_jobseekers" component={Recruiterjobseekers} />
        <Route exact path="/Recruiter_profile" component={Recruiter_profile} />
        </>
        :
        <>
         <Route exact path="/Employee" component={RegisterEmployee}/>
        <Route exact path="/Employee_login" component={Employeelogin} />
        <Route exact path="/Recruiter" component={RecruiterRegister} />
        <Route exact path="/Recruiter_login" component={Recruiterlogin} />
        <Route exact path="/" component={Home} />
        </>
}
        
        
      </Switch>
      </Router>
    </div>
  )
}



import React, { useContext } from 'react'
import Footer from './Components/Footer';
import Header from './Components/Header';
import HomeScreen from './Components/HomeScreen';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import MainNav from './Components/MainNav/MainNav';
import JobListing from './Components/JobListing';
import Register from './Components/RegisterPage/Register';
import { AuthProvide, GlobalContext } from './Components/Global/GlobalContext';
import JobDetails from './Components/JobDetails';
import UserProfile from './Components/UserProfile';
import Developers from './Components/Developers';
import HomeDash from './Dashboard/HomeDash';
import DashHolder from './Dashboard/DashHolder';
import DashHeader from './Dashboard/DashHeader';
import ProfilePage from './Dashboard/ProfilePage';
import JobApplied from './Dashboard/JobApplied';
import PostJobs from './Dashboard/PostJobs';
import ManageJobs from './Dashboard/ManageJobs';
import ShortListJobs from './Dashboard/ShortListJobs';
import ApplyForm from './Dashboard/ApplyForm';

const  App = () => {
 
// const {current} = useContext(GlobalContext)
  return (
   <AuthProvide>
        <Router>
          {/* <Header/> */}
          
        <Routes>
          <Route  path ="/"  element = {<HomeScreen/>}  />
          <Route  path ="/findjob"  element = {<JobListing/>}  />
          <Route  path ="/findjobDetail"  element = {<JobDetails/>}  />
          <Route  path ="/profile"  element = {<UserProfile/>}  />
          <Route  path ="/Developers"  element = {<Developers/>}  />
          <Route  path ="/dashboard"  element = {<DashHolder/>}  />
      <Route forceRefresh={true} path = "/mainprofile"  element = {<ProfilePage/>} />
        <Route  path = "/jobapplied"  element = {<JobApplied/>} />
        <Route  path = "/Postjobs"  element = {<PostJobs/>} />
        <Route  path = "/managejobs"  element = {<ManageJobs/>} />
        <Route  path = "/shortlistjobs"  element = {<ShortListJobs/>} />
        <Route  path = "/applyform"  element = {<ApplyForm/>} />

          
        
        </Routes>
        {/* <Footer/> */}
        
      </Router>
   </AuthProvide>
  );
}

export default App;

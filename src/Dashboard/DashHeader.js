import axios from 'axios'
import React, { useContext } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { GlobalContext } from '../Components/Global/GlobalContext'

const DashHeader = () => {

 
     const {current} = useContext(GlobalContext)
     const hist = useNavigate()
console.log('main', current)

const myId = current?._id

 const [data, setData] = React.useState([]);
 const [mani, setMani] = React.useState([]);

 const getUser = async () => {
		const res = await axios
			.get(`https://newqlinksbackapi.vercel.app/api/user/${myId}`)
			.then((response) => {
				console.log("my wounsdfh", response);
				setData(response?.data?.data);
			
			});
 };


 React.useEffect(()=>{
getUser()
 },[myId])


  return (
		<>
			<header class='main-header header-shaddow'>
				<div class='container-fluid'>
					<div class='main-box'>
						<div class='nav-outer'>
							<div class='logo-box'>
								<div class='logo'>
									<a href='index.html'>
										<img
											src='images/qlinklogo.png'
											style={{ width: "100px" }}
											alt=''
											title=''
										/>
									</a>
								</div>
							</div>

							<nav class='nav main-menu'>
								<ul class='navigation' id='navbar'></ul>
							</nav>
						</div>

						<div class='outer-box'>
							<div class='dropdown dashboard-option'>
								<a
									class='dropdown-toggle'
									role='button'
									data-toggle='dropdown'
									aria-expanded='false'>
									<img
										style={{
											objectFit: "cover",
											width: "40px",
											height: "40px",
										}}
										src={data?.avatar}
										alt='avatar'
										class='thumb'
									/>
									<span class='name'>My Account</span>
								</a>
								<ul class='dropdown-menu'>
									<li class='active'>
										<a href='candidate-dashboard.html'>
											{" "}
											<i class='la la-home'></i> Dashboard
										</a>
									</li>
									<li>
										<a href='candidate-dashboard-profile.html'>
											<i class='la la-user-tie'></i>My Profile
										</a>
									</li>
									<li>
										<a href='candidate-dashboard-resume.html'>
											<i class='la la-file-invoice'></i>My Resume
										</a>
									</li>
									<li>
										<a href='candidate-dashboard-applied-job.html'>
											<i class='la la-briefcase'></i> Applied Jobs{" "}
										</a>
									</li>
									<li>
										<a href='candidate-dashboard-job-alerts.html'>
											<i class='la la-bell'></i>Job Alerts
										</a>
									</li>
									<li>
										<a href='candidate-dashboard-shortlisted-resume.html'>
											<i class='la la-bookmark-o'></i>Shortlisted Jobs
										</a>
									</li>
									<li>
										<a href='candidate-dashboard-cv-manager.html'>
											<i class='la la-file-invoice'></i> CV manager
										</a>
									</li>
									<li>
										<a href='dashboard-packages.html'>
											<i class='la la-box'></i>Packages
										</a>
									</li>
									<li>
										<a href='dashboard-messages.html'>
											<i class='la la-comment-o'></i>Messages
										</a>
									</li>
									<li>
										<a href='dashboard-change-password.html'>
											<i class='la la-lock'></i>Change Password
										</a>
									</li>
									<li>
										<a href='dashboard-profile.html'>
											<i class='la la-user-alt'></i>View Profile
										</a>
									</li>
									<li>
										<a href='index.html'>
											<i class='la la-sign-out'></i>Logout
										</a>
									</li>
									<li>
										<a href='dashboard-delete.html'>
											<i class='la la-trash'></i>Delete Profile
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>

				<div class='mobile-header'>
					<div class='logo'>
						<a href='index.html'>
							<img
								src='images/qlinklogo.png'
								style={{ width: "100px", objectFit: "contain" }}
								alt=''
								title=''
							/>
						</a>
					</div>

					<div class='nav-outer clearfix'>
						<div class='outer-box'>
							<div class='login-box'>
								<a href='login-popup.html' class='call-modal'>
									<span class='icon-user'></span>
								</a>
							</div>

							<button id='toggle-user-sidebar'>
								<img
									style={{ objectFit: "cover", width: "40px", height: "40px" }}
									src={data?.avatar}
									alt='avatar'
									class='thumb'
								/>
							</button>
							<a href='#nav-mobile' class='mobile-nav-toggler navbar-trigger'>
								<span class='flaticon-menu-1'></span>
							</a>
						</div>
					</div>
				</div>

				<div id='nav-mobile'></div>
			</header>
			<div class='user-sidebar'>
				<div class='sidebar-inner'>
					<ul class='navigation'>
						<li class=''>
							<a href='/dashboard'>
								{" "}
								<i class='la la-home'></i> Dashboard
							</a>
						</li>
						<li>
							<a href='/mainprofile'>
								<i class='la la-user-tie'></i>My Profile
							</a>
						</li>
						{/* <li><a href="candidate-dashboard-resume.html"><i class="la la-file-invoice"></i>My Resume</a></li> */}
						<li>
							<a href='/jobapplied'>
								<i class='la la-briefcase'></i> Applied Jobs{" "}
							</a>
						</li>
						{current?.isDeveloper ? null : (
							<li class=''>
								<a href='/postjobs'>
									<i class='la la-paper-plane'></i>Post a New Job
								</a>
							</li>
						)}
						{current?.isDeveloper ? null : (
							<li class=''>
								<a href='/managejobs'>
									<i class='la la-briefcase'></i> Manage Jobs{" "}
								</a>
							</li>
						)}

						{/* <li><a href="candidate-dashboard-job-alerts.html"><i class="la la-bell"></i>Job Alerts</a></li> */}
						<li>
							<a href='/shortlistjobs'>
								<i class='la la-bookmark-o'></i>Job Alert
							</a>
						</li>
						<li>
							<a href='/messages'>
								<i class='la la-comment-o'></i>Messages
							</a>
						</li>
						{/* <li><a href="candidate-dashboard-cv-manager.html"><i class="la la-file-invoice"></i> CV manager</a></li> */}
						{/* <li><a href="dashboard-packages.html"><i class="la la-box"></i>Packages</a></li> */}
						{/*  */}
						{/* <li><a href="dashboard-change-password.html"><i class="la la-lock"></i>Change Password</a></li> */}
						{/* <li><a href="dashboard-profile"><i class="la la-user-alt"></i>View Profile</a></li> */}
						<li
							onClick={() => {
								window.localStorage.removeItem("dataUsers");
								hist(window.location.reload("/"));
							}}>
							<a href='/'>
								<i class='la la-sign-out'></i>Logout
							</a>
						</li>
						{/* <li><a href="dashboard-delete.html"><i class="la la-trash"></i>Delete Profile</a></li> */}
					</ul>

					{/* <div class="skills-percentage">
          <h4>Skills Percentage</h4>
          <p>Put value for "Cover Image" field to increase your skill up to "85%"</p>

       
          <div class="pie-graph">
            <div class="graph-outer">
              <input type="text" class="dial" data-fgColor="#7367F0" data-bgColor="transparent" data-width="234" data-height="234" data-linecap="normal" value="30"/>
              <div class="inner-text count-box"><span class="count-text txt" data-stop="30" data-speed="2000"></span>%</div>
            </div>
          </div>
        </div> */}
				</div>
			</div>
		</>
	);
}

export default DashHeader
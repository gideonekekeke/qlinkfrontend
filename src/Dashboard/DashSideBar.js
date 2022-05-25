import React, { useContext } from "react";
import styled from "styled-components";
import { CgMenu } from "react-icons/cg";
import { ImCancelCircle } from "react-icons/im";
import { AiFillHome } from "react-icons/ai";
import { FaSwatchbook } from "react-icons/fa";
import { FaSchool } from "react-icons/fa";
import { MdSchool, MdStayCurrentPortrait } from "react-icons/md";
import { MdContacts } from "react-icons/md";
import { FaConnectdevelop } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { GlobalContext } from "../Components/Global/GlobalContext";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../Components/Global/actions";
// import { GlobalContext } from '../Global/GlobalContext';
const DashSideBar = () => {
	const { current } = useContext(GlobalContext);
	const readData = useSelector((state) => state?.persistedReducer?.current);
	const hist = useNavigate();
	const dispatch = useDispatch();

	console.log("this is the userdataxdyhdsdzf", current)
	// const {handleShow} = useContext(GlobalContext)
	return (
		<MainSide>
			<button>Student Portal</button>
			<SubMenu>
				<br />
				<br />
				<br />
				<br />

				<ul class='navigation'>
					<li style={{ fontSize: "17px", margin: "10px" }} class=''>
						<a href='/dashboard'>
							{" "}
							<i class='la la-home'></i> Dashboard
						</a>
					</li>
					<li style={{ fontSize: "17px", margin: "10px" }}>
						<a href='/mainprofile'>
							<i class='la la-user-tie'></i>My Profile
						</a>
					</li>
					{/* <li><a href="candidate-dashboard-resume.html"><i class="la la-file-invoice"></i>My Resume</a></li> */}
					<li style={{ fontSize: "17px", margin: "10px" }}>
						<a href='/jobapplied'>
							<i class='la la-briefcase'></i> Applied Jobs{" "}
						</a>
					</li>
					{current?.isDeveloper ? null : (
						<li style={{ fontSize: "17px", margin: "10px" }} class=''>
							<a href='/postjobs'>
								<i class='la la-paper-plane'></i>Post a New Job
							</a>
						</li>
					)}
					{current?.isDeveloper ? null : (
						<li style={{ fontSize: "17px", margin: "10px" }} class=''>
							<a href='/managejobs'>
								<i class='la la-briefcase'></i> Manage Jobs{" "}
							</a>
						</li>
					)}

					{/* <li><a href="candidate-dashboard-job-alerts.html"><i class="la la-bell"></i>Job Alerts</a></li> */}
					<li style={{ fontSize: "17px", margin: "10px" }}>
						<a href='/shortlistjobs'>
							<i class='la la-bookmark-o'></i>Job Alert
						</a>
					</li>
					<li style={{ fontSize: "17px", margin: "10px" }}>
						<a href='/messages'>
							<i class='la la-comment-o'></i>Messages
						</a>
					</li>

					<li
						style={{ fontSize: "17px", margin: "10px" }}
						onClick={() => {
							dispatch(signOut());
							// hist(window.location.reload("/"));
						}}>
						<a >
							<i class='la la-sign-out'></i>Logout
						</a>
					</li>
					{/* <li><a href="dashboard-delete.html"><i class="la la-trash"></i>Delete Profile</a></li> */}
				</ul>
			</SubMenu>
		</MainSide>
	);
};

export default DashSideBar;

const MainSide = styled.div`
	width: 100%;
	background: rgba(0%, 0%, 0%, 0.5);
	z-index: 1;
	height: 100vh;
	position: fixed;
	top: 0;
	color: black;
	transition: all 350ms;
`;

// const SubUser = styled.div`
// 	display: flex;
// 	height: 100px;
// 	justify-content: space-between;
// 	align-items: center;
// 	padding: 0px 30px;

// 	img {
// 		width: 50px;
// 		height: 50px;
// 		border-radius: 25px;
// 		object-fit: cover;
// 		border: 2px solid white;
// 	}

// 	span {
// 		font-size: 15px;
// 		font-weight: bold;
// 	}
// `;

const SubMenu = styled.div`
	width: 320px;
	height: 100vh;
	background-color: white;
	/* float: right; */
	border-radius: 0 0 0px 10px;
	display: flex;
	flex-direction: column;
	padding-left: 20px;
	position: fixed;
	color: black;
	z-index: 1000;
	top: 0;
	/* padding-top: 50px;
		padding-left: 50px; */
	z-index: 1000;
	transition: all 350ms;
`;

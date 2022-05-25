import React, { useContext } from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import HomeScreen from "./Components/HomeScreen";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	useLocation,
} from "react-router-dom";
import MainNav from "./Components/MainNav/MainNav";
import JobListing from "./Components/JobListing";
import Register from "./Components/RegisterPage/Register";

import JobDetails from "./Components/JobDetails";
import UserProfile from "./Components/UserProfile";
import Developers from "./Components/Developers";
import HomeDash from "./Dashboard/HomeDash";
import DashHolder from "./Dashboard/DashHolder";
import DashHeader from "./Dashboard/DashHeader";
import ProfilePage from "./Dashboard/ProfilePage";
import JobApplied from "./Dashboard/JobApplied";
import PostJobs from "./Dashboard/PostJobs";
import ManageJobs from "./Dashboard/ManageJobs";
import ShortListJobs from "./Dashboard/ShortListJobs";
import ApplyForm from "./Dashboard/ApplyForm";
import PrivateRoute from "./Components/Global/PrivateRoute";
import DashMessages from "./Dashboard/DashMessages";
import DetailsBuild from "./Components/DetailsBuild";
import OtpVerificationInput from "./Components/RegisterPage/OtpVerificationInput";
import VerificationPage from "./Components/RegisterPage/VerificationPage";

const App = () => {
	//  const location = useLocation();
	// const {current} = useContext(GlobalContext)
	//  let background = location.state && location.state.background;

	return (
		<>
			<Router>
				<Routes>
					<Route path='/' element={<HomeScreen />} />
					<Route path='/findjob' element={<JobListing />} />
					<Route path='/:id/findjobDetail' element={<JobDetails />} />
					<Route path='/:id/profile' element={<DetailsBuild />} />
					<Route
						path='/api/user/dev/:id/:token'
						element={<OtpVerificationInput />}
					/>
					<Route
						path='/api/user/client/reg/:id/:token'
						element={<VerificationPage />}
					/>
					<Route path='/Developers' element={<Developers />} />
					<Route
						path='/dashboard'
						element={
							<PrivateRoute>
								<DashHolder />
							</PrivateRoute>
						}
					/>
					<Route
						forceRefresh={true}
						path='/mainprofile'
						element={<ProfilePage />}
					/>
					<Route path='/jobapplied' element={<JobApplied />} />

					<Route path='/Postjobs' element={<PostJobs />} />
					<Route path='/managejobs' element={<ManageJobs />} />
					<Route path='/shortlistjobs' element={<ShortListJobs />} />
					<Route path='/:id/applyform' element={<ApplyForm />} />
					<Route
						path='/messages'
						element={
							<PrivateRoute>
								<DashMessages />
							</PrivateRoute>
						}
					/>

					<Route path='/register' element={<Register />} />
				</Routes>
				{/* <Footer/> */}
			</Router>
		</>
	);
};

export default App;

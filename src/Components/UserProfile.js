import axios from "axios";
import React, { useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import moment from "moment";
import { GlobalContext } from "./Global/GlobalContext";
import swal from "sweetalert";
import Loading from "./LoadState";
import PrivateRoute from "../Components/Global/PrivateRoute";

const UserProfile = () => {
	const hist = useNavigate();
	const { current } = useContext(GlobalContext);
	const [data, setData] = React.useState([]);
	const [message, setMessage] = React.useState("");
	const [loading, setLoading] = React.useState(false);
	const [allFriend, setAllFriend] = React.useState([]);
	const [manyU, setManyU] = React.useState([]);
	const myId = current?._id;

	const { id } = useParams();

	const toggleLoad = () => {
		setLoading(true);
	};
	const fetchDetails = async () => {
		await axios
			.get(`https://qlinkappi.herokuapp.com/api/user/${id}`)

			.then((response) => {
				console.log("get user", response);

				setData(response?.data?.data);
			});
	};

	const captureDetails = {
		userName: data?.name,
		userImage: data?.avatar,
		addedID: data?._id,
	};

	const AddingFriend = async () => {
		await axios
			.post(`https://qlinkappi.herokuapp.com/${myId}/friend`, captureDetails)
			.then((response) => {
				hist("/messages");
				window.location.reload();
				setLoading(false);
			}).catch((error) => {
				if (error.response.status === 400) {
					swal({
							title: "cannot procceed , please Register or login your account",
							text: "",
							icon: "error",
							button: "ok",
						}).then((value) => {
						hist("/register")
						});

					}
			})

		
	};

	const getAllFriends = async () => {
		await axios
			.get(`https://qlinkappi.herokuapp.com`)

			.then((response) => {
				console.log("this are the friendsztgc oooo", response?.data);

				setAllFriend(response?.data);
			});
	};

	const fetchAllUsers = async () => {
		await axios
			.get(`https://qlinkappi.herokuapp.com/api/user`)

			.then((response) => {
				// console.log("get the many", response);

				setManyU(response?.data?.data);
			});
	};

	React.useEffect(() => {
		fetchDetails();
		getAllFriends();
		fetchAllUsers();
	}, [data]);

	return (
		<>
			<Header />
			<section style={{ marginTop: "50px" }} class='candidate-detail-section'>
				<div className='upper-box'>
					<div className='auto-container'>
						<div className='candidate-block-five'>
							<div className='inner-box'>
								<div className='content'>
									<figure className='image'>
										<img
											style={{ height: "100%", objectFit: "cover" }}
											src={data?.avatar}
											alt=''
										/>
									</figure>
									<h4 className='name'>
										<a href='#'>{data?.name}</a>
									</h4>
									<ul
										style={{ marginLeft: "-15px" }}
										className='candidate-info'>
										<li className='designation'>{data?.jobType}</li>
										<li>
											<span className='icon flaticon-map-locator'></span>{" "}
											{data?.location}
										</li>
										<li>
											<span className='icon flaticon-money'></span> $90 / hour
										</li>
										<li>
											<span className='icon flaticon-clock'></span> Member
											Since, {moment(data?.createdAt).toLocaleString()}
										</li>
									</ul>
									<ul className='post-tags'>
										<li>
											<a href='#'>App</a>
										</li>
										<li>
											<a href='#'>Design</a>
										</li>
										<li>
											<a href='#'>Digital</a>
										</li>
									</ul>
								</div>

								<div className='btn-box'>
									<a href='#' className='theme-btn btn-style-one'>
										Continue
									</a>
									<button className='bookmark-btn'>
										<i className='flaticon-bookmark'></i>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className='candidate-detail-outer'>
					<div className='auto-container'>
						<div className='row'>
							<div className='content-column col-lg-8 col-md-12 col-sm-12'>
								<div className='job-detail'>
									<h4>Candidates About</h4>
									<p>{data?.description}</p>

									<div className='resume-outer theme-yellow'>
										<div className='upper-title'>
											<h4>contact profile</h4>
										</div>

										<div className='resume-block'>
											<div className='inner'>
												<span className='name'></span>
												<div className='title-box'>
													<div className='info-box'>
														<h3>Email Address</h3>
														<span></span>
													</div>
													<div className='edit-box'></div>
												</div>
												<div className='text'>{data?.email}</div>
											</div>
										</div>
										<div className='resume-block'>
											<div className='inner'>
												<span className='name'></span>
												<div className='title-box'>
													<div className='info-box'>
														<h3>Website url</h3>
														<span></span>
													</div>
													<div className='edit-box'></div>
												</div>
												<div className='text'>{data?.websiteUrl}</div>
											</div>
											<div className='sidebar-widget contact-widget'>
												<h4 className='widget-title'>Chat Developer</h4>
												<div className='widget-content'>
													<div className='default-form'>
														{allFriend.find(
															(el) =>
																el?.userFriend === current?._id &&
																el?.addedID === id,
														) ? (
															<form>
																<div className='row clearfix'>
																	<div className='col-lg-12 col-md-12 col-sm-12 form-group'>
																		<Link to='/messages'>
																			<button
																				className='theme-btn btn-style-one'
																				type='submit'
																				name='submit-form'>
																				Continue Conversation
																			</button>
																		</Link>
																	</div>
																</div>
															</form>
														) : (
															<form
																onSubmit={(e) => {
																	e.preventDefault();
																	AddingFriend();
																	toggleLoad();
																}}>
																<div className='row clearfix'>
																	<div className='col-lg-12 col-md-12 col-sm-12 form-group'>
																	 
																	  	<button
																			className='theme-btn btn-style-one'
																			type='submit'
																			name='submit-form'>
																			Start Conversation
																		</button>
																	 
																	</div>
																</div>
															</form>
														)}
														{loading ? <Loading loading={loading} /> : null}
													</div>
												</div>
											</div>
										</div>
									</div>

									<div className='video-outer'></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<div className='sidebar-column col-lg-4 col-md-12 col-sm-12'>
				<aside className='sidebar'>
					<div className='sidebar-widget'>
						<div className='widget-content'>
							<ul className='job-overview'>
								<li>
									<i className='icon icon-calendar'></i>
									<h5>Experience:</h5>
									<span>0-2 Years</span>
								</li>

								<li>
									<i className='icon icon-expiry'></i>
									<h5>Age:</h5>
									<span>28-33 Years</span>
								</li>

								<li>
									<i className='icon icon-rate'></i>
									<h5>Current Salary:</h5>
									<span>11K - 15K</span>
								</li>

								<li>
									<i className='icon icon-salary'></i>
									<h5>Expected Salary:</h5>
									<span>26K - 30K</span>
								</li>

								<li>
									<i className='icon icon-user-2'></i>
									<h5>Gender:</h5>
									<span>Female</span>
								</li>

								<li>
									<i className='icon icon-language'></i>
									<h5>Language:</h5>
									<span>English, German, Spanish</span>
								</li>

								<li>
									<i className='icon icon-degree'></i>
									<h5>Education Level:</h5>
									<span>Master Degree</span>
								</li>
							</ul>
						</div>
					</div>

					<div className='sidebar-widget social-media-widget'>
						<h4 className='widget-title'>Social media</h4>
						<div className='widget-content'>
							<div className='social-links'>
								<a href='#'>
									<i className='fab fa-facebook-f'></i>
								</a>
								<a href='#'>
									<i className='fab fa-twitter'></i>
								</a>
								<a href='#'>
									<i className='fab fa-instagram'></i>
								</a>
								<a href='#'>
									<i className='fab fa-linkedin-in'></i>
								</a>
							</div>
						</div>
					</div>

					<div className='sidebar-widget'>
						<h4 className='widget-title'>Professional Skills</h4>
						<div className='widget-content'>
							<ul className='job-skills'>
								<li>
									<a href='#'>app</a>
								</li>
								<li>
									<a href='#'>administrative</a>
								</li>
								<li>
									<a href='#'>android</a>
								</li>
								<li>
									<a href='#'>wordpress</a>
								</li>
								<li>
									<a href='#'>design</a>
								</li>
								<li>
									<a href='#'>react</a>
								</li>
							</ul>
						</div>
					</div>

					<div className='sidebar-widget contact-widget'>
						<h4 className='widget-title'>Contact Us</h4>
						<div className='widget-content'>
							<div className='default-form'>
								<form>
									<div className='row clearfix'>
										<div className='col-lg-12 col-md-12 col-sm-12 form-group'>
											<input
												type='text'
												name='username'
												placeholder='Your Name'
												required
											/>
										</div>
										<div className='col-lg-12 col-md-12 col-sm-12 form-group'>
											<input
												type='email'
												name='email'
												placeholder='Email Address'
												required
											/>
										</div>
										<div className='col-lg-12 col-md-12 col-sm-12 form-group'>
											<textarea
												className='darma'
												name='message'
												placeholder='Message'></textarea>
										</div>
										<div className='col-lg-12 col-md-12 col-sm-12 form-group'>
											<button
												className='theme-btn btn-style-one'
												type='submit'
												name='submit-form'>
												Send Message
											</button>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</aside>
			</div>
			<Footer />
		</>
	);
};

export default UserProfile;

// <div className='col-lg-12 col-md-12 col-sm-12 form-group'>
// 														<textarea
//                         onChange = {(e)=>{
//                           setMessage(e.target.value)
//                         }}
// 															className='darma'
// 															name='message'
// 															placeholder='Message'></textarea>
// 													</div>

import axios from "axios";
import React, { useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import moment from "moment";
import { GlobalContext } from "./Global/GlobalContext";
import swal from "sweetalert";
import Loading from "./LoadState";

const UserProfile = () => {
	const hist = useNavigate();
	const { current } = useContext(GlobalContext);
	const [data, setData] = React.useState([]);
	const [message, setMessage] = React.useState("");
	const [loading, setLoading] = React.useState(false);
	const [allFriend, setAllFriend] = React.useState([])
	const [manyU, setManyU] = React.useState([])
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
			.post(
				`https://qlinkappi.herokuapp.com/api/user/${myId}/friend`,
				captureDetails,
			)
			.then((response) => {
				hist("/messages");
				window.location.reload();
				setLoading(false);
			});
	};


		const getAllFriends = async () => {
			await axios
				.get(`https://qlinkappi.herokuapp.com/api/user/chat/friend`)

				.then((response) => {
					// console.log("this are the friends oooo", response?.data);

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
		getAllFriends()
		fetchAllUsers()
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
																el?.userFriend === current?._id && el?.addedID === id )
														? (
															<form
															>
																<div className='row clearfix'>
																	<div className='col-lg-12 col-md-12 col-sm-12 form-group'>
																	<Link to ="/messages">
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

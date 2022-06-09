import React, { useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { GlobalContext } from "./Global/GlobalContext";
import axios from "axios";
import moment from "moment";
import ConversationModal from "./ConversationModal";
import Loading from "./LoadState";
import Header from "./Header";
import { shootFriend } from "./Global/actions";
import { useDispatch } from "react-redux";
import swal from "sweetalert";

const DetailsBuild = () => {
	const hist = useNavigate();
	const dispatch = useDispatch();
	const { current } = useContext(GlobalContext);
	const [data, setData] = React.useState([]);
	const [message, setMessage] = React.useState("");
	const [loading, setLoading] = React.useState(false);
	const [allFriend, setAllFriend] = React.useState([]);
	const [manyU, setManyU] = React.useState([]);
	const myId = current?._id;

	const [shows, setShows] = React.useState(false);

	const toggleShows = () => {
		setShows(!shows);
	};
	const { id } = useParams();

	const toggleLoad = () => {
		setLoading(!shows);
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
		const res = await axios
			.post(`https://qlinkappi.herokuapp.com/api/user/${myId}/friend`, captureDetails)
			.then((response) => {
				setLoading(false);
				console.log("i just added this friend now", response);
				dispatch(shootFriend(response?.data?.data));
			})
			.catch((error) => {
				if (error.response.status === 400) {
					swal({
						title: "cannot procceed , please Register or login your account",
						text: "",
						icon: "error",
						button: "ok",
					}).then((value) => {
						hist("/register");
					});
				}
			});
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
	}, []);
	return (
		<>
			<Header />
			<div className='page-wrapper'>
				{shows ? (
					<ConversationModal data={data} toggleShows={toggleShows} />
				) : null}
				<section className='candidate-detail-section'>
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
											Download Cv
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
										<h4> About {data?.name}</h4>
										<p>
										{data?.description}
										</p>
									

										<div className='resume-outer'>
											<div className='upper-title'>
												<h4>Education</h4>
											</div>

											<div className='resume-block'>
												<div className='inner'>
													<span className='name'>M</span>
													<div className='title-box'>
														<div className='info-box'>
															<h3>Bachlors in Fine Arts</h3>
															<span>Modern College</span>
														</div>
														<div className='edit-box'>
															<span className='year'>2012 - 2014</span>
														</div>
													</div>
													<div className='text'>
														Lorem ipsum dolor sit amet, consectetur adipiscing
														elit. Proin a ipsum tellus. Interdum et malesuada
														fames ac ante
														<br /> ipsum primis in faucibus.
													</div>
												</div>
											</div>

											<div className='resume-block'>
												<div className='inner'>
													<span className='name'>H</span>
													<div className='title-box'>
														<div className='info-box'>
															<h3>Computer Science</h3>
															<span>Harvard University</span>
														</div>
														<div className='edit-box'>
															<span className='year'>2008 - 2012</span>
														</div>
													</div>
													<div className='text'>
														Lorem ipsum dolor sit amet, consectetur adipiscing
														elit. Proin a ipsum tellus. Interdum et malesuada
														fames ac ante
														<br /> ipsum primis in faucibus.
													</div>
												</div>
											</div>
										</div>

										<div className='resume-outer theme-blue'>
											<div className='upper-title'>
												<h4>Work & Experience</h4>
											</div>

											<div className='resume-block'>
												<div className='inner'>
													<span className='name'>S</span>
													<div className='title-box'>
														<div className='info-box'>
															<h3>Product Designer</h3>
															<span>Spotify Inc.</span>
														</div>
														<div className='edit-box'>
															<span className='year'>2008 - 2012</span>
														</div>
													</div>
													<div className='text'>
														Lorem ipsum dolor sit amet, consectetur adipiscing
														elit. Proin a ipsum tellus. Interdum et malesuada
														fames ac ante
														<br /> ipsum primis in faucibus.
													</div>
												</div>
											</div>

											<div className='resume-block'>
												<div className='inner'>
													<span className='name'>D</span>
													<div className='title-box'>
														<div className='info-box'>
															<h3>Sr UX Engineer</h3>
															<span>Dropbox Inc.</span>
														</div>
														<div className='edit-box'>
															<span className='year'>2012 - 2014</span>
														</div>
													</div>
													<div className='text'>
														Lorem ipsum dolor sit amet, consectetur adipiscing
														elit. Proin a ipsum tellus. Interdum et malesuada
														fames ac ante
														<br /> ipsum primis in faucibus.
													</div>
												</div>
											</div>
										</div>

										<div className='portfolio-outer'>
											<div className='row'>
												<div className='col-lg-3 col-md-3 col-sm-6'>
													<figure className='image'>
														<a
															href='images/resource/portfolio-1.jpg'
															className='lightbox-image'>
															<img
																src='images/resource/portfolio-1.jpg'
																alt=''
															/>
														</a>
														<span className='icon flaticon-plus'></span>
													</figure>
												</div>
												<div className='col-lg-3 col-md-3 col-sm-6'>
													<figure className='image'>
														<a
															href='images/resource/portfolio-2.jpg'
															className='lightbox-image'>
															<img
																src='images/resource/portfolio-2.jpg'
																alt=''
															/>
														</a>
														<span className='icon flaticon-plus'></span>
													</figure>
												</div>
												<div className='col-lg-3 col-md-3 col-sm-6'>
													<figure className='image'>
														<a
															href='images/resource/portfolio-3.jpg'
															className='lightbox-image'>
															<img
																src='images/resource/portfolio-3.jpg'
																alt=''
															/>
														</a>
														<span className='icon flaticon-plus'></span>
													</figure>
												</div>
												<div className='col-lg-3 col-md-3 col-sm-6'>
													<figure className='image'>
														<a
															href='images/resource/portfolio-4.jpg'
															className='lightbox-image'>
															<img
																src='images/resource/portfolio-4.jpg'
																alt=''
															/>
														</a>
														<span className='icon flaticon-plus'></span>
													</figure>
												</div>
											</div>
										</div>

										<div className='resume-outer theme-yellow'></div>
									</div>
								</div>

								<div className='sidebar-column col-lg-4 col-md-12 col-sm-12'>
									<aside className='sidebar'>
										<div className='sidebar-widget'>
											<div className='widget-content'>
												<ul className='job-overview'>
													<li>
														<i className='icon icon-calendar'></i>
														<h5>Experience:</h5>
														<span>{data?.experience} Years</span>
													</li>

													<li>
														<i className='icon icon-rate'></i>
														<h5> Salary Expected:</h5>
														<span>{data?.salary}</span>
													</li>

													<li>
														<i className='icon icon-language'></i>
														<h5>Language:</h5>
														<span>English</span>
													</li>
												</ul>
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
																toggleShows();
															
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
									</aside>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</>
	);
};

export default DetailsBuild;

import axios from "axios";
import React, { useContext } from "react";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import { GlobalContext } from "./Global/GlobalContext";
import Header from "./Header";

const Developers = () => {
   const {current} = useContext(GlobalContext)
	  const [data, setData] = React.useState([]);

		const getUser = async () => {
			const res = await axios
				.get(`https://qlinkappi.herokuapp.com/api/user`)
				.then((response) => {
					console.log("my wounsdfh", response);
					setData(response?.data?.data);
				});
		};

		React.useEffect(() => {
			getUser();
		}, []);
	return (
		<>
			<Header />
			<section class='page-title style-two'>
				<div class='auto-container'>
					<div class='title-outer'>
						<h1>Find Developers</h1>
						<ul class='page-breadcrumb'>
							<li>
								<a href='/'>Home</a>
							</li>
							<li>Developers</li>
						</ul>
					</div>
					<div class='job-search-form'>
						<form method='post'>
							<div class='row'>
								<div class='form-group col-lg-4 col-md-12 col-sm-12'>
									<span class='icon flaticon-search-1'></span>
									<input
										type='text'
										name='field_name'
										placeholder='Job title, keywords, or company'
									/>
								</div>

								<div class='form-group col-lg-3 col-md-12 col-sm-12 location'>
									<span class='icon flaticon-map-locator'></span>
									<input
										type='text'
										name='field_name'
										placeholder='City or postcode'
									/>
								</div>

								<div class='form-group col-lg-3 col-md-12 col-sm-12 location'>
									<span class='icon flaticon-briefcase'></span>
									<select class='chosen-select'>
										<option value=''>All Categories</option>
										<option value='44'>Accounting / Finance</option>
										<option value='106'>Automotive Jobs</option>
										<option value='46'>Customer</option>
										<option value='48'>Design</option>
										<option value='47'>Development</option>
										<option value='45'>Health and Care</option>
										<option value='105'>Marketing</option>
										<option value='107'>Project Management</option>
									</select>
								</div>

								<div class='form-group col-lg-2 col-md-12 col-sm-12 text-right'>
									<button type='submit' class='theme-btn btn-style-one'>
										Find Developers
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</section>

			<section class='ls-section'>
				<div class='auto-container'>
					<div class='filters-backdrop'></div>

					<div class='row'>
						<div class='content-column col-lg-12'>
							<div class='ls-outer'>
								<div class='ls-switcher'>
									<div class='showing-result'>
										<div class='top-filters'>
											<div class='form-group'>
												<select class='chosen-select'>
													<option>Candidate Gender</option>
													<option>Male</option>
													<option>Female</option>
													<option>other</option>
												</select>
											</div>
											<div class='form-group'>
												<select class='chosen-select'>
													<option>Date Posted</option>
													<option>New Jobs</option>
													<option>Freelance</option>
													<option>Full Time</option>
													<option>Internship</option>
													<option>Part Time</option>
													<option>Temporary</option>
												</select>
											</div>

											<div class='form-group'>
												<select class='chosen-select'>
													<option>Experience Level</option>
													<option>New Jobs</option>
													<option>Freelance</option>
													<option>Full Time</option>
													<option>Internship</option>
													<option>Part Time</option>
													<option>Temporary</option>
												</select>
											</div>

											<div class='form-group'>
												<select class='chosen-select'>
													<option>Education Level</option>
													<option>New Jobs</option>
													<option>Freelance</option>
													<option>Full Time</option>
													<option>Internship</option>
													<option>Part Time</option>
													<option>Temporary</option>
												</select>
											</div>
										</div>
									</div>

									<div class='sort-by'>
										<select class='chosen-select'>
											<option>Most Recent</option>
											<option>Freelance</option>
											<option>Full Time</option>
											<option>Internship</option>
											<option>Part Time</option>
											<option>Temporary</option>
										</select>

										<select class='chosen-select'>
											<option>Show 10</option>
											<option>Show 20</option>
											<option>Show 30</option>
											<option>Show 40</option>
											<option>Show 50</option>
											<option>Show 60</option>
										</select>
									</div>
								</div>

								<div div className='CardHold'>
									{data.map((props) => (
										<>
											{props?.isDeveloper ? (
												<>
													{current?._id === props._id ? null : (
														<Link to={`/${props?._id}/profile`}>
															<div className='mainCard'>
																<div className='ImageHolding'>
																	<img src={props?.avatar} />
																</div>
																<h4 style={{ margin: "10px", color: "black" }}>
																	{props?.name}
																</h4>

																<div
																	style={{ color: "silver" }}
																	className='devMan'>
																	Developer
																</div>
																<p>
																	I have 4 years of experience in IOS
																	development. My expertise are: -IOS/watchOS
																	apps with objective c and swift -Social
																	Platform and third party sdk integration
																	-Payment Gateway / Wallet integration
																</p>
																<div
																	style={{
																		marginLeft: "10px",
																		fontWeight: "bold",
																		color: "#22D2B4",
																	}}>
																	<AiFillStar /> HIRE ME{" "}
																	<span
																		style={{
																			fontWeight: "lighter",
																			color: "silver",
																		}}>
																		-Nigeria
																	</span>
																</div>
															</div>
														</Link>
													)}
												</>
											) : null}
										</>
									))}
								</div>

								<nav class='ls-pagination'>
									<ul>
										<li class='prev'>
											<a href='#'>
												<i class='fa fa-arrow-left'></i>
											</a>
										</li>
										<li>
											<a href='#'>1</a>
										</li>
										<li>
											<a href='#' class='current-page'>
												2
											</a>
										</li>
										<li>
											<a href='#'>3</a>
										</li>
										<li class='next'>
											<a href='#'>
												<i class='fa fa-arrow-right'></i>
											</a>
										</li>
									</ul>
								</nav>
							</div>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
};

export default Developers;

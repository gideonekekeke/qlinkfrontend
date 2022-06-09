import React, { useContext } from "react";
import "../css/bootstrap.css";
import "./css/bootstrap.css";
import "../css/style.css";
import "../css/responsive.css";
import { Link } from "react-router-dom";
import { GlobalContext } from "./Global/GlobalContext";
import Header from "./Header";
import Footer from "./Footer";
import { useSelector } from "react-redux";
import { AiFillStar } from "react-icons/ai";
import { useForm } from "react-hook-form";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Loading from "./LoadState";
import Radium, { StyleRoot } from "radium";

const HomeScreen = () => {
	const [data, setData] = React.useState([]);
	const [dataV, setDataV] = React.useState([]);
	const [loading, setLoading] = React.useState(false);
	const {
		search,
		setSearch,
		showResult,
		setShowResult,
		dloading,
		setDloading,
		current,
	} = useContext(GlobalContext);

	const toggleLoading = () => {
		setLoading(true);
	};

	const myNavigation = useNavigate();

	const userModel = yup.object().shape({
		usersearch: yup.string().required("please put in your email"),
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(userModel),
	});

	const style = {
		// Adding media query..
		"@media (max-width: 700px)": {
			display: "none",
		},
	};

	const submit = handleSubmit(async (data) => {
		console.log(data);
		const { usersearch } = data;
		console.log("this is what im passing", usersearch);

		try {
			await axios
				.get(
					`https://qlinkappi.herokuapp.com/api/jobs/myjobs/jobs?search=${usersearch}`,
				)
				.then((result) => {
					console.log("this is the data", result.data);
					if (!result?.data?.length) {
						Swal.fire({
							icon: "error",
							title: "Oops...",
							text: "Wrong Search!",
							// footer: '<a href="">Why do I have this issue?</a>'
						}).then(() => {
							setLoading(false);
						});
						return;
						setLoading(false);
					}
					setShowResult(result);
					myNavigation("/findjob");
					setDloading(!dloading);
					console.log("the result commig from the search input", showResult);
				});
		} catch (error) {
			console.log("something went wrong white searching");
			setLoading(false);
		}
	});

	const [load, setLoad] = React.useState(true);
	const getUser = async () => {
		const res = await axios
			.get(`https://qlinkappi.herokuapp.com/api/user?limit=${5}`)
			.then((response) => {
				console.log("my wounsdfh", response);
				setData(response?.data?.data);
			});
		setLoad(false);
	};

	const getJobs = async () => {
		const res = await axios
			.get(`https://qlinkappi.herokuapp.com/api/jobs/alljobs?limit=${6}`)
			.then((response) => {
				console.log("my main now", response);
				setDataV(response?.data);
			});
		setLoad(false);
	};

	React.useEffect(() => {
		getUser();
		getJobs();
	}, []);

	const { handleShow } = useContext(GlobalContext);

	return (
		<div className='page-wrapper'>
			<Header />

			<div class='preloader'></div>

			<section className='banner-section-four -type-16'>
				<div className='auto-container'>
					<div className='content-box'>
						<div className='title-box wow fadeInUp' data-wow-delay='500ms'>
							<h3 style={{ fontFamily: "poppins" }}>
							  Software Developer's Marketplace
							</h3>
							<div className='bolding_text'>
								Join the World's Software Developer Marketplace
							</div>
							<p style={{ fontFamily: "poppins" }}>
								Millions of people use QLink to turn their ideas into reality.
							</p>
						</div>

						<div
							className='job-search-form wow fadeInUp'
							data-wow-delay='1000ms'>
							<form
								method='post'
								onSubmit={(e) => {
									e.preventDefault();
									submit();
									toggleLoading();
								}}>
								<div className='row justify-content-center justify-content-md-between'>
									<div className='form-group col-lg-9'>
										<span className='icon flaticon-search-1'></span>
										<input
											type='text'
											name='field_name'
											placeholder='Job title, keywords, or company'
											required
											{...register("usersearch")}
										/>
									</div>
									<div className='form-group col-auto'>
										<button
											style={{
												background: "#2DD4B8",
											}}
											type='submit'
											className='theme-btn btn-style-two'>
											Find Jobs
										</button>
									</div>
								</div>
							</form>
							{loading ? <Loading loading={loading} /> : null}
						</div>

						<div className='features-icons'>
							<div className='item'>
								<div className='icon-wrap'>
									<div className='icon flaticon-web-programming'></div>
								</div>

								<div className='title'>Programming & Tech</div>
							</div>

							<div className='item'>
								<div className='icon-wrap'>
									<div className='icon flaticon-promotion'></div>
								</div>

								<div className='title'>Product Awareness</div>
							</div>

							<div className='item'>
								<div className='icon-wrap'>
									<div className='icon flaticon-vector'></div>
								</div>

								<div className='title'>Project Management</div>
							</div>

							<div className='item'>
								<div className='icon-wrap'>
									<div className='icon flaticon-money-1'></div>
								</div>

								<div className='title'>Customer Service</div>
							</div>

							<div className='item'>
								<div className='icon-wrap'>
									<div className='icon flaticon-headhunting'></div>
								</div>

								<div className='title'>Data</div>
							</div>

							<div className='item'>
								<div className='icon-wrap'>
									<div className='icon flaticon-rocket-ship'></div>
								</div>

								<div className='title'>Automotive Jobs</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className='layout-pt-120 layout-pb-120'>
				<div className='auto-container'>
					<div className='sec-title text-center'>
						<h2>Recommended Jobs</h2>
						<div className='text'>
							Know your worth and find the job that qualify your life
						</div>
					</div>

					<div className='default-tabs tabs-box'>
						<div className='tab-buttons-wrap'>
							<ul className='tab-buttons -pills-condensed -blue'>
								<li className='tab-btn' data-tab='#tab1'>
									Feature
								</li>
								<li
									style={{
										background:
											"linear-gradient(90deg, rgba(34,210,180,1) 0%, rgba(29,174,155,1) 46%, rgba(52,117,106,1) 91%)",
									}}
									className='tab-btn active-btn'
									data-tab='#tab2'>
									Urgent{" "}
								</li>
								<li className='tab-btn' data-tab='#tab3'>
									Private
								</li>
							</ul>
						</div>

						<div className='tabs-content pt-50 wow fadeInUp'>
							<div className='tab active-tab' id='tab2'>
								<div className='row'>
									{load ? (
										<div
											style={{
												display: "flex",
												justifyContent: "center",
												alignItems: "center",
											}}>
											{" "}
											<ClipLoader size={30} />
										</div>
									) : null}
									{dataV?.map((props) => (
										<div className='job-block col-lg-4 col-md-6 col-sm-12'>
											<StyleRoot>
												<div className='inner-box'>
													<div className='content'>
														<span className='company-logo'>
															<img
																className='rounded-full'
																src='images/resource/company-logo/lu1.png'
																alt=''
															/>
														</span>
														<h4>
															<a href={`/${props?._id}/findjobDetail`}>
																{props?.jobTitle}
															</a>
														</h4>
														<ul className='job-info'>
															<li>
																<span className='icon flaticon-briefcase'></span>{" "}
																{props?.budget}
															</li>
															<li>
																<span className='icon flaticon-map-locator'></span>{" "}
																{props?.location}
															</li>
														</ul>
														<ul className='job-other-info'>
															<li className='required'>Urgent</li>
															<li className='time'>{props?.selectTime}</li>
														</ul>
														<button className='bookmark-btn'>
															<span className='flaticon-bookmark'></span>
														</button>
													</div>
												</div>
											</StyleRoot>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
				<div
					style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}>
					<Link style={{ textDecoration: "none" }} to='/findjob'>
						<button
							style={{
								height: "50px",
								width: "200px",
								border: "1px solid #22D2B4",
								color: "#22D2B4",
								fontWeight: "bold",
								borderRadius: "20px",
							}}>
							Load More Jobs
						</button>
					</Link>
				</div>
			</section>

			<section style={{ marginTop: "-100px" }} class='candidates-section'>
				<div class='auto-container'>
					<div
						style={{
							width: "100%",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							textAlign: "center",
						}}
						class='sec-title-outer'>
						<div class='sec-title'>
							<h2>Featured Developers</h2>
							<div class='text'>Hire a Programmer for any project</div>
						</div>
					</div>

					<div class='carousel-outer wow fadeInUp'>
						{load ? (
							<div
								style={{
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
								}}>
								{" "}
								<ClipLoader size={30} />
							</div>
						) : null}
						<div
							style={{
								display: "flex",
								flexWrap: "wrap",
								justifyContent: "center",
							}}
							class=''>
							{data?.map((props) => (
								<>
									{props?.isDeveloper ? (
										<div className='CardHold'>
											{props?._id === current?._id ? null : (
												<Link to={`/${props?._id}/profile`}>
													<div className='mainCard'>
														<div className='ImageHolding'>
															<img src={props?.avatar} />
														</div>
														<h4 style={{ margin: "10px", color: "black" }}>
															{props?.name}
														</h4>

														<div style={{ color: "silver" }} className='devMan'>
															Developer
														</div>
														<p>
															I have 4 years of experience in IOS development.
															My expertise are: -IOS/watchOS apps with objective
															c and swift -Social Platform and third party sdk
															integration -Payment Gateway / Wallet integration
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
										</div>
									) : null}
								</>
							))}

							<div
								style={{
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									marginTop: "20px",
								}}>
								<Link to='/developers'>
									<button
										style={{
											height: "50px",
											width: "250px",
											border: "1px solid #22D2B4",
											color: "#22D2B4",
											fontWeight: "bold",
											borderRadius: "20px",
										}}>
										Load More Developers
									</button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section class='about-section-two style-two layout-pt-60 layout-pb-60'>
				<div class='auto-container'>
					<div class='row justify-content-between align-items-center'>
						<div class='content-column mb-0 col-xl-5 col-lg-6 col-md-12 col-sm-12'>
							<div class='wow fadeInLeft'>
								<div class='sec-title'>
									<h2 class='fw-700'>Your next job starts right here</h2>
									<div class='text mt-30'>
										Set up a free profile to showcase your skills, experience,
										and desired pay rate to clients. You choose the payment
										method that's best for you to easily get paid for your work.
									</div>
								</div>
								<a
									style={{
										background:
											"linear-gradient(90deg, rgba(34,210,180,1) 0%, rgba(29,174,155,1) 46%, rgba(52,117,106,1) 91%)",
									}}
									href='/findjob'
									class='theme-btn -blue-dark'>
									Find Work
								</a>
							</div>
						</div>
						<div class='image-column -no-margin col-xl-6 col-lg-6 col-md-12 col-sm-12 wow fadeInRight'>
							<div class='image-box -type-1'>
								<figure
									class='main-image wow fadeIn anm'
									data-wow-delay='1200ms'
									data-speed-x='2'>
									<img src='images/index-13/images/2.png' alt='' />
								</figure>

								<div
									class='info_block wow fadeIn anm'
									data-wow-delay='1500ms'
									data-speed-x='3'
									data-speed-y='3'>
									<span class='icon flaticon-email-3'></span>
									<p>
										Work Inquiry From <br />
										Ali Tufan
									</p>
								</div>

								<div
									class='info_block_two wow fadeIn anm'
									data-wow-delay='1800ms'
									data-speed-x='2'
									data-speed-y='2'>
									<p>10k+ Candidates</p>
									<div class='image'>
										<img src='images/resource/multi-peoples.png' alt='' />
									</div>
								</div>

								<div
									class='info_block_four wow fadeIn anm'
									data-wow-delay='2400ms'
									data-speed-x='2'
									data-speed-y='3'>
									<span class='icon flaticon-file'></span>
									<div class='inner'>
										<p>Upload Your CV</p>
										<span class='sub-text'>It only takes a few seconds</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section
				className='call-to-action-two -type-4'
				style={{ backgroundImage: "url(images/index-16/cta/bg.png)" }}>
				<div className='auto-container wow fadeInUp'>
					<div className='sec-title light text-center'>
						<h2>Find the talent needed to get your business growing.</h2>
						<div className='text'>
							Over 1 million interactions, 50,000 success stories Make yours
							now.
						</div>
					</div>

					<div className='btn-box'>
						<a href='/findjob' className='theme-btn btn-one'>
							Search Job
						</a>
						<a
							style={{
								background:
									"linear-gradient(90deg, rgba(34,210,180,1) 0%, rgba(29,174,155,1) 46%, rgba(52,117,106,1) 91%)",
							}}
							onClick={handleShow}
							className='theme-btn btn-two'>
							Apply Job Now
						</a>
					</div>
				</div>
			</section>

			<section className='layout-pt-1201 layout-pb-120'>
				<div className='auto-container'>
					<div className='sec-title text-center'>
						<h2>How It Works</h2>
						<div className='text'>Steps by Step guide on how QLink works</div>
					</div>

					<div className='row grid-base pt-50 wow fadeInUp'>
						<div className='col-lg-3 col-md-6 col-sm-12'>
							<div className='work-block -type-4'>
								<div className='icon-wrap'>
									<span className='icon icon-drawing'></span>
								</div>

								<h5 className='title'>Register With Us</h5>
								<p className='text'>
									Create your Free Account with us and Get Hired or get Jobs
								</p>
							</div>
						</div>

						<div className='col-lg-3 col-md-6 col-sm-12'>
							<div className='work-block -type-4'>
								<div className='icon-wrap'>
									<span className='icon icon-process'></span>
								</div>

								<h5 className='title'>Create Your Profile</h5>
								<p className='text'>
									Set up your Profile so your audience can know more about your
									works
								</p>
							</div>
						</div>

						<div className='col-lg-3 col-md-6 col-sm-12'>
							<div className='work-block -type-4'>
								<div className='icon-wrap'>
									<span className='icon icon-task'></span>
								</div>

								<h5 className='title'>Browse Jobs</h5>
								<p className='text'>
									The latest jobs on software development and others...{" "}
								</p>
							</div>
						</div>

						<div className='col-lg-3 col-md-6 col-sm-12'>
							<div className='work-block -type-4'>
								<div className='icon-wrap'>
									<span className='icon icon-one-finger-click'></span>
								</div>

								<h5 className='title'>Hire Developer</h5>
								<p className='text'>
									Tailored talent matches to help you hire the right person
									faster
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section
				style={{ background: "#F3F4F6", width: "100%" }}
				class='layout-pt-60 layout-pb-60'>
				<div class='auto-container'>
					<div
						style={{ justifyContent: "space-between", display: "flex" }}
						class='row justify-content-between align-items-end'>
						<div style={{ width: "100%" }} class='col-lg-6'>
							<div class=''>
								<h2 class='fw-700'>Qlink Guide</h2>
								<div class='text mt-9'>
									get all updates on the qlink guide page
								</div>
							</div>
						</div>
					</div>

					<div class='row grid-base pt-50 wow fadeInUp'>
						<div class='col-xl-3 col-lg-3 col-md-6 col-sm-12'>
							<div class='blog -type-1'>
								<div class='blog-image'>
									<img
										style={{ height: "100%" }}
										src='images/index-12/news/rhapta-qubators.jpg'
										alt='image'
									/>
								</div>

								<div class='blog-content'>
									<h4>
										<a href='/dashboard'>
											Post a Project and Hire a Pro
											<br />{" "}
										</a>
									</h4>
									<div> Developer Marketplace</div>
								</div>
							</div>
						</div>

						<div class='col-xl-3 col-lg-3 col-md-6 col-sm-12'>
							<div class='blog -type-1'>
								<div class='blog-image'>
									<img src='images/index-12/news/5.jpg' alt='image' />
								</div>

								<div class='blog-content'>
									<h4>
										<a href='/dashboard'>Browse Projects</a>
									</h4>
									<div>
										Meet clients you’re excited to work with and take your
										skills to new heights
									</div>
								</div>
							</div>
						</div>

						<div class='col-xl-3 col-lg-3 col-md-6 col-sm-12'>
							<div class='blog -type-1'>
								<div class='blog-image'>
									<img src='images/index-12/news/6.jpg' alt='image' />
								</div>

								<div class='blog-content'>
									<h4>
										<a href='/dashboard'>Join Qubators Network</a>
									</h4>
									<div>
										Join the largest christian developer network in the world
									</div>
								</div>
							</div>
						</div>

						<div class='col-xl-3 col-lg-3 col-md-6 col-sm-12'>
							<div class='blog -type-1'>
								<div class='blog-image'>
									<img src='images/index-12/news/9.png' alt='image' />
								</div>

								<div class='blog-content'>
									<h4>
										<a href='/dashboard'>Meet Developers</a>
									</h4>
									<div>Get connected to developers around the world</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section class='layout-pt-60 layout-pb-60'>
				<div class='auto-container'>
					<div class='sec-title-outer'>
						<div class='sec-title'>
							<h2>Find great work</h2>
							{/* <div class="text">Lorem ipsum dolor sit amet elit, sed do eiusmod tempor</div> */}
						</div>
						<a href='/dashboard' class='link text-green'>
							Browse All Locations <span class='fa fa-angle-right'></span>
						</a>
					</div>

					<div class='row wow fadeInUp'>
						<div class='col-lg-3 col-md-6 col-sm-12'>
							<div class='feature-block'>
								<div class='inner-box'>
									<figure class='image'>
										<img
											style={{ height: "400px" }}
											src='images/index-15/cities/5.png'
											alt=''
										/>
									</figure>
									<div class='overlay-box'>
										<div class='content'>
											<h5>Projects Related to</h5>
											<span class='total-jobs'>Web Developments</span>
											<a href='/dashboard' class='overlay-link'></a>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div class='col-lg-3 col-md-6 col-sm-12'>
							<div class='feature-block'>
								<div class='inner-box'>
									<figure class='image'>
										<img
											style={{ height: "400px" }}
											src='images/index-15/cities/6.png'
											alt=''
										/>
									</figure>
									<div class='overlay-box'>
										<div class='content'>
											<h5>Build Website in</h5>
											<span class='total-jobs'>Wordpress</span>
											<a href='/dashboard' class='overlay-link'></a>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div class='col-lg-3 col-md-6 col-sm-12'>
							<div class='feature-block'>
								<div class='inner-box'>
									<figure class='image'>
										<img
											style={{ height: "400px" }}
											src='images/index-15/cities/7.png'
											alt=''
										/>
									</figure>
									<div class='overlay-box'>
										<div class='content'>
											<h5>Projects Related To</h5>
											<span class='total-jobs'>Mobile Apps</span>
											<a href='/dashboard' class='overlay-link'></a>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div class='col-lg-3 col-md-6 col-sm-12'>
							<div class='feature-block'>
								<div class='inner-box'>
									<figure class='image'>
										<img
											style={{ height: "400px" }}
											src='images/index-15/cities/8.png'
											alt=''
										/>
									</figure>
									<div class='overlay-box'>
										<div class='content'>
											<h5>Projects Related To</h5>
											<span class='total-jobs'>BlockChain</span>
											<a href='/dashboard' class='overlay-link'></a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* <section className="cta -type-2" style={{backgroundImage : "url(images/index-16/cta-2/2.jpg)"}}>
      <div className="auto-container">
        <div className="row grid-base justify-content-between">
          <div className="col-lg-5 col-md-6">
            <div className="cta-item">
              <div className="icon-wrap">
                <div className="icon icon-case"></div>
              </div>

              <div className="content">
                <div className="title">I'm a Developer</div>
                <div className="text">In the past 19+ years of experience, I worked for multiple banks and insurance company as a java Developer</div>
              </div>
            </div>
          </div>

          <div className="col-lg-5 col-md-6">
            <div className="cta-item -blue">
              <div className="content">
                <div className="title">I'm a Contractor</div>
                <div className="text">In the past 19+ years of experience, I worked for multiple banks and insurance company as a java Developer</div>
              </div>

              <div className="icon-wrap">
                <div className="icon icon-contact"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> */}

			<section
				style={{ backgroundColor: "#DBDBDB" }}
				class='call-to-action-two style-two'>
				<div class='auto-container wow fadeInUp'>
					<div class='sec-title light text-center'>
						<h2 style={{ color: "black", fontWeight: "bold" }}>
							Join the world's developer marketplace
						</h2>
						<div style={{ color: "black" }} class='text'>
							We've got you covered for all your project needs
						</div>
					</div>
					<div class='btn-box'>
						<a
							href='/dashboard'
							style={{
								color: "white",
								background:
									"linear-gradient(90deg, rgba(34,210,180,1) 0%, rgba(29,174,155,1) 46%, rgba(52,117,106,1) 91%)",
							}}
							class='theme-btn btn-style-three'>
							Get Started
						</a>
					</div>
				</div>
			</section>

			<Footer />
		</div>
	);
};

export default HomeScreen;

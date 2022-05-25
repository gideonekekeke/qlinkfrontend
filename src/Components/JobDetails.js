import axios from 'axios'
import moment from 'moment'
import React from 'react'
import { useParams } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'

const JobDetails = () => {

  const {id} = useParams()
const [load, setLoad] = React.useState(true);
    const [data, setData] = React.useState([]);

	const getUser = async () => {
		const res = await axios
			.get(`https://newqlinksbackapi.vercel.app/api/jobs/${id}/${id}/singlejob`)
			.then((response) => {
				console.log("see the details", response);
				setData(response?.data?.data);
			});
      setLoad(false)
	};

  React.useEffect(()=>{
getUser()

console.log("am trying to get nw", data)
  },[])
  return (
		<>
			<Header />
			<br />
			<section style={{ marginTop: "30px" }} class='job-detail-section'>
				<div class='upper-box'>
					<div class='auto-container'>
						<div class='job-block-seven'>
							<div class='inner-box'>
								<div class='content'>
									<span class='company-logo'>
										<img src='images/resource/company-logo/lu1.png' alt='' />
									</span>
									<h4>
										<a href='#'>{data?.jobTitle}</a>
									</h4>
									<ul class='job-info'>
										<li>
											<span class='icon flaticon-briefcase'></span>{" "}
											{data?.experience}
										</li>
										<li>
											<span class='icon flaticon-map-locator'></span>
											{data?.location}
										</li>
										<li>
											<span class='icon flaticon-clock-3'></span>{" "}
											{moment(data?.createdAt).fromNow()}
										</li>
										<li>
											<span class='icon flaticon-money'></span> {data?.budget}
										</li>
									</ul>
									<ul class='job-other-info'>
										<li class='time'>{data?.selectTime}</li>
										<li class='privacy'>Public</li>
										<li class='required'>Urgent</li>
									</ul>
								</div>

								<div class='btn-box'>
									<a href='/dashboard' class='theme-btn btn-style-one'>
										Apply For Job
									</a>
									<button class='bookmark-btn'>
										<i class='flaticon-bookmark'></i>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class='job-detail-outer'>
					<div class='auto-container'>
						<div class='row'>
							<div class='content-column col-lg-8 col-md-12 col-sm-12'>
								<div class='job-detail'>
									<h4>Job Description</h4>
									<p>{data?.description}</p>
									<h4>Key Responsibilities</h4>
									<ul class='list-style-three'>
										<li>
											Be involved in every step of the product design cycle from
											discovery to developer handoff and user acceptance
											testing.
										</li>
										<li>
											Work with BAs, product managers and tech teams to lead the
											Product Design
										</li>
										<li>
											Maintain quality of the design process and ensure that
											when designs are translated into code they accurately
											reflect the design specifications.
										</li>
										<li>
											Accurately estimate design tickets during planning
											sessions.
										</li>
										<li>
											Contribute to sketching sessions involving
											non-designersCreate, iterate and maintain UI deliverables
											including sketch files, style guides, high fidelity
											prototypes, micro interaction specifications and pattern
											libraries.
										</li>
										<li>
											Ensure design choices are data led by identifying
											assumptions to test each sprint, and work with the
											analysts in your team to plan moderated usability test
											sessions.
										</li>
										<li>
											Design pixel perfect responsive UI’s and understand that
											adopting common interface patterns is better for UX than
											reinventing the wheel
										</li>
										<li>
											Present your work to the wider business at Show & Tell
											sessions.
										</li>
									</ul>
									<h4>Skill & Experience</h4>
									<ul class='list-style-three'>
										<li>
											You have at least 3 years’ experience working as a Product
											Designer.
										</li>
										<li>
											You have experience using Sketch and InVision or Framer X
										</li>
										<li>
											You have some previous experience working in an agile
											environment – Think two-week sprints.
										</li>
										<li>
											You are familiar using Jira and Confluence in your
											workflow
										</li>
									</ul>
								</div>

								<div class='other-options'>
									<div class='social-share'>
										<h5>Share this job</h5>
										<a href='#' class='facebook'>
											<i class='fab fa-facebook-f'></i> Facebook
										</a>
										<a href='#' class='twitter'>
											<i class='fab fa-twitter'></i> Twitter
										</a>
										<a href='#' class='google'>
											<i class='fab fa-google'></i> Google+
										</a>
									</div>
								</div>

								<div class='related-jobs'>
									<div class='title-box'>
										<h3>Related Jobs</h3>
										<div class='text'>2020 jobs live - 293 added today.</div>
									</div>

									<div class='job-block'>
										<div class='inner-box'>
											<div class='content'>
												<span class='company-logo'>
													<img
														src='images/resource/company-logo/1-1.png'
														alt=''
													/>
												</span>
												<h4>
													<a href='#'>Software Engineer (Android), Libraries</a>
												</h4>
												<ul class='job-info'>
													<li>
														<span class='icon flaticon-briefcase'></span>{" "}
														Segment
													</li>
													<li>
														<span class='icon flaticon-map-locator'></span>{" "}
														London, UK
													</li>
													<li>
														<span class='icon flaticon-clock-3'></span> 11 hours
														ago
													</li>
													<li>
														<span class='icon flaticon-money'></span> $35k -
														$45k
													</li>
												</ul>
												<ul class='job-other-info'>
													<li class='time'>Full Time</li>
													<li class='privacy'>Private</li>
													<li class='required'>Urgent</li>
												</ul>
												<button class='bookmark-btn'>
													<span class='flaticon-bookmark'></span>
												</button>
											</div>
										</div>
									</div>

									<div class='job-block'>
										<div class='inner-box'>
											<div class='content'>
												<span class='company-logo'>
													<img
														src='images/resource/company-logo/1-2.png'
														alt=''
													/>
												</span>
												<h4>
													<a href='#'>Recruiting Coordinator</a>
												</h4>
												<ul class='job-info'>
													<li>
														<span class='icon flaticon-briefcase'></span>{" "}
														Segment
													</li>
													<li>
														<span class='icon flaticon-map-locator'></span>{" "}
														London, UK
													</li>
													<li>
														<span class='icon flaticon-clock-3'></span> 11 hours
														ago
													</li>
													<li>
														<span class='icon flaticon-money'></span> $35k -
														$45k
													</li>
												</ul>
												<ul class='job-other-info'>
													<li class='time'>Full Time</li>
													<li class='privacy'>Private</li>
													<li class='required'>Urgent</li>
												</ul>
												<button class='bookmark-btn'>
													<span class='flaticon-bookmark'></span>
												</button>
											</div>
										</div>
									</div>

									<div class='job-block'>
										<div class='inner-box'>
											<div class='content'>
												<span class='company-logo'>
													<img
														src='images/resource/company-logo/1-3.png'
														alt=''
													/>
												</span>
												<h4>
													<a href='#'>Product Manager, Studio</a>
												</h4>
												<ul class='job-info'>
													<li>
														<span class='icon flaticon-briefcase'></span>{" "}
														Segment
													</li>
													<li>
														<span class='icon flaticon-map-locator'></span>{" "}
														London, UK
													</li>
													<li>
														<span class='icon flaticon-clock-3'></span> 11 hours
														ago
													</li>
													<li>
														<span class='icon flaticon-money'></span> $35k -
														$45k
													</li>
												</ul>
												<ul class='job-other-info'>
													<li class='time'>Full Time</li>
													<li class='privacy'>Private</li>
													<li class='required'>Urgent</li>
												</ul>
												<button class='bookmark-btn'>
													<span class='flaticon-bookmark'></span>
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div class='sidebar-column col-lg-4 col-md-12 col-sm-12'>
								<aside class='sidebar'>
									<div class='sidebar-widget'>
										<h4 class='widget-title'>Job Overview</h4>
										<div class='widget-content'>
											<ul class='job-overview'>
												<li>
													<i class='icon icon-calendar'></i>
													<h5>Date Posted:</h5>
													<span>{moment(data?.createdAt).fromNow()}</span>
												</li>
											
												<li>
													<i class='icon icon-location'></i>
													<h5>Location:</h5>
													<span>{data?.location}</span>
												</li>
												<li>
													<i class='icon icon-user-2'></i>
													<h5>Job Title:</h5>
													<span>{data?.jobTitle}</span>
												</li>
											
											
												<li>
													<i class='icon icon-salary'></i>
													<h5>Budget</h5>
													<span>{data?.budget}</span>
												</li>
											</ul>
										</div>

									

										<h4 class='widget-title'>Job Skills</h4>
										<div class='widget-content'>
											<ul class='job-skills'>
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

								
								</aside>
							</div>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
}

export default JobDetails
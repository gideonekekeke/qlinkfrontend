import axios from 'axios'
import moment from 'moment'
import React,{useContext} from 'react'
import Footer from './Footer'
import Header from './Header'
import { GlobalContext } from './Global/GlobalContext'

const JobListing = () => {
    const [dataV, setDataV] = React.useState([]);
  const [load, setLoad] = React.useState(true)
  const {search, setSearch, showResult, setShowResult,dloading, setDloading} = useContext(GlobalContext)
  		const getJobs = async () => {
				const res = await axios
					.get("https://qlinkappi.herokuapp.com/api/jobs/alljobs")
					.then((response) => {
						console.log("my main now", response);
						setDataV(response?.data);
					});
				setLoad(false);
			};



    React.useEffect(()=>{
getJobs()
    },[])


  return (
		<>
			<Header />
			<br />
			<br />
			<br />

			<section class='page-title'>
				<div class='auto-container'>
					<div class='title-outer'>
						<h1>Find Jobs</h1>
						<ul class='page-breadcrumb'>
							<li>
								<a href='/'>Home</a>
							</li>
							<li>Jobs</li>
						</ul>
					</div>
				</div>
			</section>
			<section class='ls-section'>
				<div class='auto-container'>
					<div class='filters-backdrop'></div>

					<div class='row'>
						<div class='filters-column hide-left'>
							<div class='inner-column'>
								<div class='filters-outer'>
									<button type='button' class='theme-btn close-filters'>
										X
									</button>

									<div class='filter-block'>
										<h4>Search by Keywords</h4>
										<div class='form-group'>
											<input
												type='text'
												name='listing-search'
												placeholder='Job title, keywords, or company'
											/>
											<span class='icon flaticon-search-3'></span>
										</div>
									</div>

									<div class='filter-block'>
										<h4>Location</h4>
										<div class='form-group'>
											<input
												type='text'
												name='listing-search'
												placeholder='City or postcode'
											/>
											<span class='icon flaticon-map-locator'></span>
										</div>
										<p>Radius around selected destination</p>
										<div class='range-slider-one'>
											<div class='area-range-slider'></div>
											<div class='input-outer'>
												<div class='amount-outer'>
													<span class='area-amount'></span>km
												</div>
											</div>
										</div>
									</div>

									<div class='filter-block'>
										<h4>Category</h4>
										<div class='form-group'>
											<select class='chosen-select'>
												<option>Choose a category</option>
												<option>Residential</option>
												<option>Commercial</option>
												<option>Industrial</option>
												<option>Apartments</option>
											</select>
											<span class='icon flaticon-briefcase'></span>
										</div>
									</div>

									<div class='switchbox-outer'>
										<h4>Job type</h4>
										<ul class='switchbox'>
											<li>
												<label class='switch'>
													<input type='checkbox' checked />
													<span class='slider round'></span>
													<span class='title'>Freelance</span>
												</label>
											</li>
											<li>
												<label class='switch'>
													<input type='checkbox' />
													<span class='slider round'></span>
													<span class='title'>Full Time</span>
												</label>
											</li>
											<li>
												<label class='switch'>
													<input type='checkbox' />
													<span class='slider round'></span>
													<span class='title'>Internship</span>
												</label>
											</li>
											<li>
												<label class='switch'>
													<input type='checkbox' />
													<span class='slider round'></span>
													<span class='title'>Part Time</span>
												</label>
											</li>
											<li>
												<label class='switch'>
													<input type='checkbox' />
													<span class='slider round'></span>
													<span class='title'>Temporary</span>
												</label>
											</li>
										</ul>
									</div>

									<div class='checkbox-outer'>
										<h4>Date Posted</h4>
										<ul class='checkboxes'>
											<li>
												<input id='check-f' type='checkbox' name='check' />
												<label for='check-f'>All</label>
											</li>
											<li>
												<input id='check-a' type='checkbox' name='check' />
												<label for='check-a'>Last Hour</label>
											</li>
											<li>
												<input id='check-b' type='checkbox' name='check' />
												<label for='check-b'>Last 24 Hours</label>
											</li>
											<li>
												<input id='check-c' type='checkbox' name='check' />
												<label for='check-c'>Last 7 Days</label>
											</li>
											<li>
												<input id='check-d' type='checkbox' name='check' />
												<label for='check-d'>Last 14 Days</label>
											</li>
											<li>
												<input id='check-e' type='checkbox' name='check' />
												<label for='check-e'>Last 30 Days</label>
											</li>
										</ul>
									</div>

									<div class='checkbox-outer'>
										<h4>Experience Level</h4>
										<ul class='checkboxes square'>
											<li>
												<input id='check-ba' type='checkbox' name='check' />
												<label for='check-ba'>All</label>
											</li>
											<li>
												<input id='check-bb' type='checkbox' name='check' />
												<label for='check-bb'>Internship</label>
											</li>
											<li>
												<input id='check-bc' type='checkbox' name='check' />
												<label for='check-bc'>Entry level</label>
											</li>
											<li>
												<input id='check-bd' type='checkbox' name='check' />
												<label for='check-bd'>Associate</label>
											</li>
											<li>
												<input id='check-be' type='checkbox' name='check' />
												<label for='check-be'>Mid-Senior level4</label>
											</li>
											<li>
												<button class='view-more'>
													<span class='icon flaticon-plus'></span> View More
												</button>
											</li>
										</ul>
									</div>

									<div class='filter-block'>
										<h4>Salary</h4>

										<div class='range-slider-one salary-range'>
											<div class='salary-range-slider'></div>
											<div class='input-outer'>
												<div class='amount-outer'>
													<span class='amount salary-amount'>
														$<span class='min'>0</span>$
														<span class='max'>0</span>
													</span>
												</div>
											</div>
										</div>
									</div>

									<div class='filter-block'>
										<h4>Tags</h4>
										<ul class='tags-style-one'>
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
							</div>
						</div>

						<div class='content-column col-lg-12'>
							<div class='ls-outer'>
								<div class='ls-switcher'>
									<div class='showing-result show-filters'>
										<button type='button' class='theme-btn toggle-filters'>
											<span class='icon icon-filter'></span> Filter
										</button>
										<div class='text'>
											Showing <strong>41-60</strong> of <strong>944</strong>{" "}
											jobs
										</div>
									</div>
									<div class='sort-by'>
										<select class='chosen-select'>
											<option>New Jobs</option>
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

								<div class='row'>
								{
									
									dloading ? (<div>{
										dataV?.map((props) => (
										<div class='job-block col-lg-6 col-md-12 col-sm-12'>
											<div class='inner-box'>
												<div class='content'>
													<span class='company-logo'>
														<img
															src='images/resource/company-logo/lu1.png'
															alt=''
														/>
													</span>
													<h4>
														<a href={`/${props?._id}/findjobDetail`}>{props?.jobTitle}</a>
													</h4>
													<ul class='job-info'>
														<li>
															<span class='icon flaticon-briefcase'></span>{" "}
													 {props?.selectTime}
														</li>
														<li>
															<span class='icon flaticon-map-locator'></span>{" "}
														{props?.location}
														</li>
														<li>
															<span class='icon flaticon-clock-3'></span> 11
															{moment(props?.createdAt).fromNow()}
														</li>
														<li>
															<span class='icon flaticon-money'></span> {props?.budget}
														</li>
													</ul>
													<ul class='job-other-info'>
														<li class='time'>{props?.selectTime}</li>
														<li class='privacy'>Private</li>
														<li class='required'>Urgent</li>
													</ul>
													<button class='bookmark-btn'>
														<span class='flaticon-bookmark'></span>
													</button>
												</div>
											</div>
										</div>
									))
										}</div>) : (<div>

											{
												showResult?.data?.map((props) => (
										<div class='job-block col-lg-6 col-md-12 col-sm-12'>
											<div class='inner-box'>
												<div class='content'>
													<span class='company-logo'>
														<img
															src='images/resource/company-logo/lu1.png'
															alt=''
														/>
													</span>
													<h4>
														<a href={`/${props?._id}/findjobDetail`}>{props?.jobTitle}</a>
													</h4>
													<ul class='job-info'>
														<li>
															<span class='icon flaticon-briefcase'></span>{" "}
													 {props?.selectTime}
														</li>
														<li>
															<span class='icon flaticon-map-locator'></span>{" "}
														{props?.location}
														</li>
														<li>
															<span class='icon flaticon-clock-3'></span> 11
															{moment(props?.createdAt).fromNow()}
														</li>
														<li>
															<span class='icon flaticon-money'></span> {props?.budget}
														</li>
													</ul>
													<ul class='job-other-info'>
														<li class='time'>{props?.selectTime}</li>
														<li class='privacy'>Private</li>
														<li class='required'>Urgent</li>
													</ul>
													<button class='bookmark-btn'>
														<span class='flaticon-bookmark'></span>
													</button>
												</div>
											</div>
										</div>
									))
											}

									</div>)
									


									
									}
								</div>

								<nav class='ls-pagination mb-5'>
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

								<div class='call-to-action-four style-two'>
									<h5>Recruiting?</h5>
									<p>
										Advertise your jobs to millions of monthly users and search
										15.8 million <br />
										CVs in our database.
									</p>
									<a href='#' class='theme-btn btn-style-one bg-blue'>
										<span class='btn-title'>Start Recruiting Now</span>
									</a>
									<div
										class='image'
										style={{
											backgroundImage: "url(images/resource/ads-bg-4.png)",
										}}></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
}

export default JobListing
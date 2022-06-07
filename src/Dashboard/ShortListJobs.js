import axios from 'axios';
import React from 'react'
import { Link } from 'react-router-dom'
import DashHeader from './DashHeader'
import moment from 'moment'
const ShortListJobs = () => {
    const [data, setData] = React.useState([]);

			const getUser = async () => {
				const res = await axios
					.get("https://qlinkappi.herokuapp.com/api/jobs/alljobs")
					.then((response) => {
						console.log("my main now", response);
						setData(response?.data);
					});
			};
      React.useEffect(()=>{
getUser()
      },[])


  return (
		<div class='page-wrapper dashboard'>
			<DashHeader />
			<section style={{ marginTop: "100px" }} class='user-dashboard'>
				<div class='dashboard-outer'>
					<div class='upper-title-box'>
						<h3> Job Alert</h3>
						<div class='text'>Ready to jump back in?</div>
					</div>

					<div class='row'>
						<div class='col-lg-12'>
							<div class='ls-widget'>
								<div class='tabs-box'>
									<div class='widget-title'>
										<h4>Get a Job for yourself</h4>

										<div class='chosen-outer'>
											<select class='chosen-select'>
												<option>Last 6 Months</option>
												<option>Last 12 Months</option>
												<option>Last 16 Months</option>
												<option>Last 24 Months</option>
												<option>Last 5 year</option>
											</select>
										</div>
									</div>

									<div class='widget-content'>
										<div class='table-outer'>
											<table class='default-table manage-job-table'>
												<thead>
													<tr>
														<th>Job Title</th>
														<th>Date Posted</th>
														<th>Status</th>
														<th>Action</th>
													</tr>
												</thead>

												<tbody>
													{data?.map((props) => (
														<tr>
															<td>
																<div class='job-block'>
																	<div class='inner-box'>
																		<div class='content'>
																			<span class='company-logo'>
																				<img
																					src='images/resource/company-logo/var.png'
																					alt=''
																				/>
																			</span>
																			<h4>
																				<a href='#'>{props?.jobTitle}</a>
																			</h4>
																			<ul class='job-info'>
																				<li>
																					<span class='icon flaticon-briefcase'></span>{" "}
																					{props?.SelectTime}
																				</li>
																				<li>
																					<span class='icon flaticon-map-locator'></span>{" "}
																					{props?.location}
																				</li>
																			</ul>
																		</div>
																	</div>
																</div>
															</td>
															<td>{moment(props?.createdAt).fromNow()}</td>
															<td class='status'>Active</td>
															<td>
																
																	
																	
																			<Link to={`/${props._id}/applyform`}>
																				<button
																				
																					type='button'
																					class='theme-btn btn-style-one submit-btn'>
																					Apply
																				</button>
																			</Link>
																	
																	
															
															</td>
														</tr>
													))}
												</tbody>
											</table>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default ShortListJobs
import axios from 'axios'
import moment from 'moment'
import React, { useContext } from 'react'
import { GlobalContext } from '../Components/Global/GlobalContext'
import DashHeader from './DashHeader'

const ManageJobs = () => {
const {current} = useContext(GlobalContext)

const myId = current?._id

  const [data, setData] = React.useState([]);

	const getUser = async () => {
		const res = await axios
			.get(`https://qlinkappi.herokuapp.com/api/user/${myId}`)
			.then((response) => {
				console.log("see me ooo", response);
				setData(response?.data?.data);
			});
	};



  React.useEffect(()=>{
getUser()

console.log("am trying to get nw", data)
  },[myId])






  return (
		<div class='page-wrapper dashboard'>
			<DashHeader />
			<section style={{ marginTop: "100px" }} class='user-dashboard'>
				<div class='dashboard-outer'>
					<div class='upper-title-box'>
						<h3>Manage Jobs</h3>
						<div class='text'>Ready to jump back in?</div>
					</div>

					<div class='row'>
						<div class='col-lg-12'>
							<div class='ls-widget'>
								<div class='tabs-box'>
									<div class='widget-title'>
										<h4>My Job Listings</h4>

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
														<th>Title</th>
														<th>Applications</th>
														<th>Created & Expired</th>
														<th>Status</th>
														<th>Action</th>
													</tr>
												</thead>

												<tbody>
													{data?.job?.map((props) => (
														<tr>
															<td>
																<h6>{props?.jobTitle}</h6>
																<span class='info'>
																	<i class='icon flaticon-map-locator'></i>{" "}
																	London, UK
																</span>
															</td>
															<td class='applied'>
																<a href='#'>{props?.applied.length} Applied</a>
															</td>
															<td>{moment(props?.createdAt).fromNow()}</td>
															<td class='status'>Active</td>
															<td>
																<div class='option-box'>
																	<ul class='option-list'>
																		<li>
																			<button data-text='View Aplication'>
																				<span class='la la-eye'></span>
																			</button>
																		</li>
																		<li>
																			<button data-text='Reject Aplication'>
																				<span class='la la-pencil'></span>
																			</button>
																		</li>
																		<li>
																			<button data-text='Delete Aplication'>
																				<span class='la la-trash'></span>
																			</button>
																		</li>
																	</ul>
																</div>
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

export default ManageJobs
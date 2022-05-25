import axios from 'axios'
import React, { useContext } from 'react'
import { GlobalContext } from '../Components/Global/GlobalContext'
import ClipLoader from "react-spinners/ClipLoader";
const HomeDash = () => {
    const {current} = useContext(GlobalContext)
 
    const myId = current?._id
    console.log("weh", current)

     const [load, setLoad] = React.useState(true);
     const [data, setData] = React.useState([]);
     const[mani, setMani] = React.useState([])

			const getUser = async () => {
				const res = await axios
					.get(`https://qlinkappi.herokuapp.com/api/user/${myId}`)
					.then((response) => {
						console.log("my wounsdfh", response);
						setData(response?.data?.data);
						setLoad(false);
					});
			};
			const getUserJob = async () => {
				const res = await axios
					.get("https://qlinkappi.herokuapp.com/api/jobs/alljobs")
					.then((response) => {
						console.log("myhdfhjdfjf jobs", response);
						setMani(response?.data);
					});
			};

			React.useEffect(() => {
				getUser();
				console.log("my data hmmbvn", data);
				console.log("am getting all jobs", mani);
        getUserJob()
			}, [myId]);


  return (
		<section style={{ marginTop: "100px" }} class='user-dashboard'>
			<div class='dashboard-outer'>
				<div class='upper-title-box'>
					{load ? (
						<div style={{  }}>
							{" "}
							<ClipLoader size={30} />
						</div>
					) : null}
					<h3>{data?.name}</h3>
					<div class='text'>Ready to jump back in?</div>
				</div>
				<div class='row'>
					<div class='col-xl-3 col-lg-6 col-md-6 col-sm-12'>
						<div class='ui-item'>
							<div class='left'>
								<i class='icon flaticon-briefcase'></i>
							</div>
							<div class='right'>
								<h4>0</h4>
								<p>Applied Jobs</p>
							</div>
						</div>
					</div>
					<div class='col-xl-3 col-lg-6 col-md-6 col-sm-12'>
						<div class='ui-item ui-red'>
							<div class='left'>
								<i class='icon la la-file-invoice'></i>
							</div>
							<div class='right'>
								<h4>0</h4>
								<p>Job Alerts</p>
							</div>
						</div>
					</div>
					{/* <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12">
            <div class="ui-item ui-yellow">
              <div class="left">
                <i class="icon la la-comment-o"></i>
              </div>
              <div class="right">
                <h4>74</h4>
                <p>Messages</p>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12">
            <div class="ui-item ui-green">
              <div class="left">
                <i class="icon la la-bookmark-o"></i>
              </div>
              <div class="right">
                <h4>32</h4>
                <p>Shortlist</p>
              </div>
            </div>
          </div> */}
				</div>

				<div class='row'>
					<div class='col-lg-7'>
						<div class='graph-widget ls-widget'>
							<div class='tabs-box'>
								<div class='widget-title'>
									<h4>Your Profile Views</h4>
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
									<canvas id='chart' width='100' height='45'></canvas>
								</div>
							</div>
						</div>
					</div>

					<div class='col-lg-5'>
						<div class='notification-widget ls-widget'>
							<div class='widget-title'>
								<h4>Notifications</h4>
							</div>

							<div class='widget-content'>
								{mani?.map((props) => (
									<>
										{props?.user === current?._id ? (
											<>
												{props?.applied.map(({ name }) => (
													<ul class='notification-list'>
														<li>
															<span class='icon flaticon-briefcase'></span>{" "}
															<strong>
																<strong>{name}</strong>{" "}
																<span style={{ color: "gray" }}>
																	applied for a job
																</span>{" "}
																<span class='colored'>{props?.jobTitle}</span>
															</strong>{" "}
														</li>
													</ul>
												))}
											</>
										) : null}
									</>
								))}
							</div>
						</div>
					</div>

					<div class='col-lg-12'>
						<div class='applicants-widget ls-widget'>
							<div class='widget-title'>
								<h4> Recently Applicants</h4>
							</div>
							{mani?.applied?.map((props) => (
								<div class='widget-content'>
									<div class='row'>
										<div>{props?.name}</div>
										{/* <div class="job-block col-lg-6 col-md-12 col-sm-12">
                    <div class="inner-box">
                      <div class="content">
                        <span class="company-logo"><img src="images/resource/company-logo/1-1.png" alt=""/></span>
                        <h4><a href="#">Software Engineer (Android), Libraries</a></h4>
                        <ul class="job-info">
                          <li><span class="icon flaticon-briefcase"></span> Segment</li>
                          <li><span class="icon flaticon-map-locator"></span> London, UK</li>
                          <li><span class="icon flaticon-clock-3"></span> 11 hours ago</li>
                          <li><span class="icon flaticon-money"></span> $35k - $45k</li>
                        </ul>
                        <ul class="job-other-info">
                          <li class="time">Full Time</li>
                          <li class="privacy">Private</li>
                          <li class="required">Urgent</li>
                        </ul>
                        <button class="bookmark-btn"><span class="flaticon-bookmark"></span></button>
                      </div>
                    </div>
                  </div> */}
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default HomeDash
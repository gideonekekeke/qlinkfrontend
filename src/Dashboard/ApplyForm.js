import axios from "axios";
import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import swal from "sweetalert";
import Loading from "../Components/LoadState";
import DashHeader from "./DashHeader";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import * as yup from "yup";
import { GlobalContext } from "../Components/Global/GlobalContext";

const ApplyForm = () => {
	const { current } = useContext(GlobalContext);
	const { id } = useParams();

	const useID = id;

	const [image, setImage] = React.useState("");
	const [loading, setLoading] = React.useState(false);

	const [avatar, setAvatar] = React.useState("");
	const [userID, setUserID] = React.useState("3765364773");
	const [data, setData] = React.useState([]);
	const [dataApply, setDataApply] = React.useState([]);

	const [name, setName] = React.useState();
	const [email, setEmail] = React.useState();
	const [userCv, setUserCv] = React.useState();
	const [applicationletter, setApplicationLetter] = React.useState();

	const proModel = yup.object().shape({
		name: yup.string().required("field must not be empty"),
		email: yup.string().required("field must not be empty"),
		userCv: yup.string().required("field must not be empty"),
		applicationletter: yup.string().required("field must not be empty"),

		// password:yup.string().required("password needed").min(6),
		// confirmpassword:yup.string().oneOf([yup.ref('password'), null])
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(proModel),
	});

	const dataV = {
		name: current?.name,
		email: current?.email,
		userCv: current?.cv,
		applicationletter,
		userId: current?._id,
	};

	const submit = async () => {
		// console.log("testing value", data);

		// const { name, email, userCv, applicationletter } = data;

		//   formdata.append("userID", userID);

		if (!current?.cv) {
			swal({
				title: "Please Go to your Profile and Upload your cv",
				text: "You can clicked the button!",
				icon: "error",
				button: "ok",
			});
			setLoading(false);
		} else {
			await axios
				.post(`https://qlinkappi.herokuapp.com/api/jobs/${id}/apply`, dataV)
				.then((response) => {
					swal({
						title: "Applied successfully!",
						text: "You have successfully applied for this job",
						icon: "success",
						button: "ok",
					}).then(() => {
						window.location.reload();
					});
					setLoading(false);
				})
				.catch((error) => {
					swal({
						title: "An Error occured",
						text: "You can clicked the button!",
						icon: "error",
						button: "ok",
					});
					setLoading(false);
				});
		}
	};

	const toggleLoad = () => {
		setLoading(true);
	};

	const getSingleJob = async () => {
		const res = await axios.get(
			`https://qlinkappi.herokuapp.com/api/jobs/${id}/${id}/singlejob`,
		);
		setData(res?.data?.data);

		console.log("single job", res);
	};
	
	const uploadForm = async () => {
		//   const formdata = new FormData()
		//   formdata.append("name", name)
		//   formdata.append("email", email)
		//   formdata.append("location", location)
		//   formdata.append("experience", experience);
		//   formdata.append("phoneNumber", phoneNumber);
		//   formdata.append("image", image);
		//   formdata.append("userID", userID);
		// const url = `http://localhost:4444/api/content/${id}/createContent`;
		// const url = `localhost:5050/api/product/${id}/add`;
		// await axios
		// 	.post(
		// 		`https://qlinkappi.herokuapp.com/api/jobs/${id}/apply`,
		// 		formdata,
		// 		config,
		// 	)
		// 	.then((response) => {
		// 		if (response === 201) {
		// 			swal({
		// 				title: "uploaded successful!",
		// 				text: "You can clicked the button!",
		// 				icon: "success",
		// 				button: "ok",
		// 			});
		// 			setLoading(false);
		// 		}
		// 	})
		// 	.catch((error) => {
		// 		swal({
		// 			title: "An Error occured",
		// 			text: "You can clicked the button!",
		// 			icon: "error",
		// 			button: "ok",
		// 		});
		// 		setLoading(false);
		// 	});
	};

	React.useEffect(() => {
		getSingleJob();
	
	}, []);

	return (
		<div className='page-wrapper dashboard'>
			<DashHeader />
			<section style={{ marginTop: "100px" }} class='user-dashboard'>
				<div class='dashboard-outer'>
					<div class='upper-title-box'>
						<h3>Application Form</h3>
						<div class='text'>Ready to jump back in?</div>
					</div>

					<div class='row'>
						<div class='col-lg-12'>
							<div class='ls-widget'>
								<div class='tabs-box'>
									<div class='widget-title'>
										<h4>fill all details correctly</h4>
									</div>

									<div class='widget-content'>
										<form
											onSubmit={(e) => {
												e.preventDefault();
												toggleLoad();
												submit();
											}}
											class='default-form'>
											<div class='row'>
												<div class='form-group col-lg-6 col-md-12'>
													<label>Full Name</label>
													<input
														onChange={(e) => {
															setName(e.target.value);
														}}
														type='text'
														placeholder='Jerome'
														defaultValue={current?.name}
														value={current?.name}
													/>
												</div>

												<div class='form-group col-lg-6 col-md-12'>
													<label>Email</label>
													<input
														value={current?.email}
														onChange={(e) => {
															setEmail(e.target.value);
														}}
														type='text'
														placeholder='email@gmail.com'
														defaultValue={current?.email}
													/>
												</div>

												{/* <div class="form-group col-lg-6 col-md-12">
                        <label>Salary </label>
                        <input type="text" name="name" placeholder="salary"/>
                      </div> */}

												<div class='form-group col-lg-6 col-md-12'>
													<label>cv Uploaded</label>
													<input
														onChange={(e) => {
															setUserCv(e.target.value);
														}}
														type='text'
														defaultValue={current?.cv}
														value={current?.cv}
													/>
												</div>

												<div class='form-group col-lg-12 col-md-12'>
													<label>Application Letter</label>
													<textarea
														onChange={(e) => {
															setApplicationLetter(e.target.value);
														}}
														placeholder='type your application letter here...'></textarea>
												</div>

												{data?.applied?.find(
													(el) =>
														el?.userId === current?._id && el?.userApply === id,
												) ? (
													<div class='form-group col-lg-6 col-md-12'>
														<button disabled  style = {{cursor : "not-allowed", background : 'silver'}} class='theme-btn btn-style-one'>
															Already Applied
														</button>
													</div>
												) : (
													<div class='form-group col-lg-6 col-md-12'>
														<button class='theme-btn btn-style-one'>
															Apply Now
														</button>
													</div>
												)}
											</div>
										</form>
										<h4 style={{ fontWeight: "bold" }}>{data?.jobTitle}</h4>

										<br />
										<h5 style={{ fontWeight: "bold" }}>Job Description</h5>
										<br />
										<p>
											Be involved in every step of the product design cycle from
											discovery to developer handoff and user acceptance
											testing. Work with BAs, product managers and tech teams to
											lead the Product Design Maintain quality of the design
											process and ensure that when designs are translated into
											code they accurately reflect the design specifications.
											Accurately estimate design tickets during planning
											sessions. Contribute to sketching sessions involving
											non-designersCreate, iterate and maintain UI deliverables
											including sketch files, style guides, high fidelity
											prototypes, micro interaction specifications and pattern
											libraries. Ensure design choices are data led by
											identifying assumptions to test each sprint, and work with
											the analysts in your team to plan moderated usability test
											sessions. Design pixel perfect responsive UI’s and
											understand that adopting common interface patterns is
											better for UX than reinventing the wheel Present your work
											to the wider business at Show & Tell sessions.
										</p>
										{loading ? <Loading loading={loading} /> : null}
									</div>
								</div>
							</div>

							{/* <div class="ls-widget">
              <div class="tabs-box">
                <div class="widget-title">
                  <h4>Social Network</h4>
                </div>

                <div class="widget-content">
                  <form class="default-form">
                    <div class="row">
                    
                      <div class="form-group col-lg-6 col-md-12">
                        <label>Facebook</label>
                        <input type="text" name="name" placeholder="www.facebook.com/Invision"/>
                      </div>

                 
                      <div class="form-group col-lg-6 col-md-12">
                        <label>Twitter</label>
                        <input type="text" name="name" placeholder=""/>
                      </div>

                    
                      <div class="form-group col-lg-6 col-md-12">
                        <label>Linkedin</label>
                        <input type="text" name="name" placeholder=""/>
                      </div>

                 
                      <div class="form-group col-lg-6 col-md-12">
                        <label>Google Plus</label>
                        <input type="text" name="name" placeholder=""/>
                      </div>

                   
                      <div class="form-group col-lg-6 col-md-12">
                        <button class="theme-btn btn-style-one">Save</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

          
            <div class="ls-widget">
              <div class="tabs-box">
                <div class="widget-title">
                  <h4>Contact Information</h4>
                </div>

                <div class="widget-content">
                  <form class="default-form">
                    <div class="row">
                    
                      <div class="form-group col-lg-6 col-md-12">
                        <label>Country</label>
                        <select class="chosen-select">
                          <option>Australia</option>
                          <option>Pakistan</option>
                          <option>Chaina</option>
                          <option>Japan</option>
                          <option>India</option>
                        </select>
                      </div>

                  
                      <div class="form-group col-lg-6 col-md-12">
                        <label>City</label>
                        <select class="chosen-select">
                          <option>Melbourne</option>
                          <option>Pakistan</option>
                          <option>Chaina</option>
                          <option>Japan</option>
                          <option>India</option>
                        </select>
                      </div>

                
                      <div class="form-group col-lg-12 col-md-12">
                        <label>Complete Address</label>
                        <input type="text" name="name" placeholder="329 Queensberry Street, North Melbourne VIC 3051, Australia."/>
                      </div>

                  
                      <div class="form-group col-lg-6 col-md-12">
                        <label>Find On Map</label>
                        <input type="text" name="name" placeholder="329 Queensberry Street, North Melbourne VIC 3051, Australia."/>
                      </div>

                     
                      <div class="form-group col-lg-3 col-md-12">
                        <label>Latitude</label>
                        <input type="text" name="name" placeholder="Melbourne"/>
                      </div>

               
                      <div class="form-group col-lg-3 col-md-12">
                        <label>Longitude</label>
                        <input type="text" name="name" placeholder="Melbourne"/>
                      </div>

                    
                      <div class="form-group col-lg-12 col-md-12">
                        <button class="theme-btn btn-style-three">Search Location</button>
                      </div>


                      <div class="form-group col-lg-12 col-md-12">
                        <div class="map-outer">
                          <div class="map-canvas map-height" data-zoom="12" data-lat="-37.817085" data-lng="144.955631" data-type="roadmap" data-hue="#ffc400" data-title="Envato" data-icon-path="images/resource/map-marker.png" data-content="Melbourne VIC 3000, Australia<br><a href='mailto:info@youremail.com'>info@youremail.com</a>">
                          </div>
                        </div>
                      </div>

                      <div class="form-group col-lg-12 col-md-12">
                        <button class="theme-btn btn-style-one">Save</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div> */}
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default ApplyForm;

import axios from "axios";
import React, { useContext, useState } from "react";
import { GlobalContext } from "../Components/Global/GlobalContext";
import DashHeader from "./DashHeader";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import { db, storage, auth } from "../base";
import { addDoc, collection, doc, getDoc, setDoc } from "firebase/firestore";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import LinearProgress from "@mui/material/LinearProgress";
import {
	getStorage,
	ref,
	uploadBytesResumable,
	getDownloadURL,
} from "firebase/storage";
import Loading from "../Components/LoadState";
const ProfilePage = () => {
	const { current } = useContext(GlobalContext);
	const hist = useNavigate();

	const myId = current?._id;

	const [name, setName] = React.useState();
	const [email, setEmail] = React.useState();
	const [avatar, setAvatar] = React.useState("");
	const [jobTitle, setJobTitle] = React.useState();
	const [salary, setSalary] = React.useState();
	const [age, setAge] = React.useState();
	const [experience, setExperience] = React.useState();
	const [websiteUrl, setWebsiteUrl] = React.useState();
	const [description, setDescription] = React.useState();
	const [gender, setGender] = React.useState();
	const [location, setLocation] = React.useState();
	const [phoneNumber, setPhoneNumber] = React.useState();
	const [loading, setLoading] = React.useState(false);
	const [prevUrl, setPrevUrl] = React.useState("");
	const [image, setImage] = useState();
	const [cv, setCv] = React.useState("");
	const [percentage, setPercentage] = useState(0.00001);

	const toggleLoad = () => {
		setLoading(true);
	};

	const handleImage = async (e) => {
		const file = e.target.files[0];
		const save = URL.createObjectURL(file);
		setImage(save);

		const storageRef = ref(storage, "userAvatar/" + file.name);
		const uploadTask = uploadBytesResumable(storageRef, file);
		uploadTask.on(
			"state_changed",
			(snapshot) => {
				const progress =
					(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
				console.log("Upload is " + progress + "% done");
				setPercentage(progress);
			},
			(error) => {
				console.log(error.message);
			},
			() => {
				getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
					console.log("File available at", downloadURL);
					setCv(downloadURL);
					console.log("This is the Avatar: ", avatar);
				});
			},
		);
	};

	const postData = async () => {
		await axios
			.patch(`https://qlinkappi.herokuapp.com/api/user/editprofile/${myId}`, {
				name,
				jobTitle,
				email,
				salary,
				age,
				experience,
				websiteUrl,
				description,
				gender,
				location,
				phoneNumber,
				cv: cv,
			})
			.then((response) => {
				// console.log("update",response?.data.data)
				// edit profile from localstorage
				// const profile = JSON.parse(localStorage.getItem("dataUsers"));
				// Object.keys(response?.data?.data).forEach((key) => {
				// 	profile[key] = response?.data?.data[key];
				// });
				// localStorage.setItem("dataUsers", JSON.stringify(profile));
				swal({
					title: " Successfull",
					text: "Your Profile Has been Updated!",
					icon: "success",
					button: "ok",
				}).then((value) => {
					swal(window.location.reload());
				});
				setLoading(false);
			});
	};

	const [data, setData] = React.useState([]);

	const getUser = async () => {
		const res = await axios
			.get(`https://qlinkappi.herokuapp.com/api/user/${myId}`)
			.then((response) => {
				console.log("hdjfkkdeuhjfjjf", response?.data?.data);
				setData(response?.data?.data);
			});
	};

	const imageOnchange = (e) => {
		const file = e.target.files[0];
		const saveUrl = URL.createObjectURL(file);

		setAvatar(file);
		setPrevUrl(saveUrl);
		console.log(file);
	};

	React.useEffect(() => {
		getUser();
		console.log("my data oooogg", data);
	}, [myId]);

	

	const ChangeImageProfile = async () => {
		const config = {
			headers: {
				"content-type": "multipart/formdata",
			},
		};

		const formdata = new FormData();

		formdata.append("avatar", avatar);

		await axios
			.patch(
				`https://qlinkappi.herokuapp.com/api/user/${myId}/edituserAvatar`,
				formdata,
				config,
			)
			.then((response) => {
				setLoading(false);
				window.location.reload();
				// console.log("update",response?.data.data)
				// edit profile from localstorage
				const profile = JSON.parse(localStorage.getItem("dataUsers"));
				Object.keys(response?.data?.data).forEach((key) => {
					profile[key] = response?.data?.data[key];
				});
				localStorage.setItem("dataUsers", JSON.stringify(profile));
				swal({
					title: " Successfull",
					text: "Your Profile Has been Updated!",
					icon: "success",
					button: "ok",
				}).then((value) => {
					swal(window.location.reload());
				});
			});
	};

	return (
		<div className='page-wrapper dashboard'>
			<DashHeader />
			<section style={{ marginTop: "100px" }} class='user-dashboard'>
				<div class='dashboard-outer'>
					<div class='upper-title-box'>
						<h3>My Profile</h3>
						<div class='text'>Ready to jump back in?</div>
					</div>

					<div class='row'>
						<div class='col-lg-12'>
							<div class='ls-widget'>
								<div class='tabs-box'>
									<div class='widget-title'>
										<h4>My Profile</h4>
									</div>

									<div class='widget-content'>
										<form
											method='POST'
											enctype='multipart/form-data'
											onSubmit={(e) => {
												e.preventDefault();
												ChangeImageProfile();
											}}>
											<div class='uploading-outer'>
												<div
													style={{ display: "flex", flexDirection: "column" }}
													class='uploadButton'>
													<input
														class='uploadButton-input'
														type='file'
														id='upload'
														onChange={imageOnchange}
													/>
													{avatar ? (
														<div
															style={{
																height: "140px",
																width: "200px",
																background: "silver",
															}}>
															<img
																style={{
																	height: "100%",
																	width: "100%",
																	objectFit: "cover",
																}}
																src={prevUrl}
															/>
														</div>
													) : (
														<label
															class='uploadButton-button ripple-effect'
															for='upload'>
															Browse Pic
														</label>
													)}

													{avatar ? (
														<>
															<div style={{ marginTop: "10px" }} class=''>
																<button
																	onClick={() => {
																		setAvatar(null);
																	}}
																	style={{ background: "red" }}
																	type='submit'
																	class='theme-btn btn-style-one'>
																	Remove Image
																</button>
															</div>
															<div style={{ marginTop: "10px" }} class=''>
																<button
																	onClick={() => {
																		toggleLoad();
																	}}
																	type='submit'
																	class='theme-btn btn-style-one'>
																	Save and Upload Image
																</button>
															</div>
														</>
													) : (
														<div style={{ marginTop: "10px" }} class=''>
															<button
																disabled
																style={{ cursor: "not-allowed" }}
																class='theme-btn btn-style-one'>
																Save and Upload Image
															</button>
														</div>
													)}
													<span class='uploadButton-file-name'></span>
												</div>
												{avatar ? (
													<div class='text'>{avatar?.name}</div>
												) : (
													<div class='text'>
														Max file size is 1MB, Minimum dimension: 330x300 And
														Suitable files are .jpg & .png
													</div>
												)}
											</div>
											{Loading ? <Loading loading={loading} /> : null}
										</form>

										<form
											onSubmit={(e) => {
												postData();
												e.preventDefault();
												toggleLoad();
											}}
											class='default-form'>
											<div class='row'>
												<div class='form-group col-lg-6 col-md-12'>
													<label>Full Name</label>
													<input
														onChange={(e) => {
															setName(e.target.value);
														}}
														defaultValue={data?.name}
														type='text'
														placeholder=''
													/>
												</div>

												<div class='form-group col-lg-6 col-md-12'>
													<label>Job Title</label>
													<input
														onChange={(e) => {
															setJobTitle(e.target.value);
														}}
														type='text'
														defaultValue={data?.jobTitle}
														name='name'
														placeholder='UI Designer'
													/>
												</div>

												<div class='form-group col-lg-6 col-md-12'>
													<label>Phone</label>
													<input
														onChange={(e) => {
															setPhoneNumber(e.target.value);
														}}
														type='text'
														defaultValue={data?.phoneNumber}
														name='name'
														placeholder='0 123 456 7890'
													/>
												</div>

												<div class='form-group col-lg-6 col-md-12'>
													<label>Email address</label>
													<input
														onChange={(e) => {
															setEmail(e.target.value);
														}}
														type='text'
														value={data?.email}
														defaultValue={current?.email}
														name='name'
													/>
												</div>

												<div class='form-group col-lg-6 col-md-12'>
													<label>Website</label>
													<input
														onChange={(e) => {
															setWebsiteUrl(e.target.value);
														}}
														defaultValue={data?.websiteUrl}
														type='text'
														name='name'
														placeholder='www.jerome.com'
													/>
												</div>

												<div class='form-group col-lg-6 col-md-12'>
													<label>Salary </label>
													<input
														onChange={(e) => {
															setSalary(e.target.value);
														}}
														type='text'
														defaultValue={data?.salary}
														name='name'
														placeholder='salary'
													/>
												</div>

												<div class='form-group col-lg-6 col-md-12'>
													<label>Experience</label>
													<input
														onChange={(e) => {
															setExperience(e.target.value);
														}}
														type='text'
														defaultValue={data?.experience}
														name='name'
														placeholder='5-10 Years'
													/>
												</div>

												<div class='form-group col-lg-6 col-md-12'>
													<label>Age</label>
													<select
														onChange={(e) => {
															setAge(e.target.value);
														}}
														defaultValue={data?.age}
														class='chosen-select'>
														<option value='23 -27'>18 - 27 Years</option>
														<option value='28 -37'>28 - 37 Years</option>
														<option value='38 -47'>38 - 47 Years</option>
														<option value='48 - 57'>48 - 57 Years</option>
													</select>
												</div>

												<div class='form-group col-lg-6 col-md-12'>
													<label>Location</label>
													<input
														onChange={(e) => {
															setLocation(e.target.value);
														}}
														type='text'
														defaultValue={data?.location}
														name='name'
														placeholder='Certificate'
													/>
												</div>

												<div class='form-group col-lg-6 col-md-12'>
													<label>Gender</label>
													<select
														onChange={(e) => {
															setGender(e.target.value);
														}}
														class='chosen-select'>
														<option>Male</option>
														<option>Female</option>
													</select>
												</div>
												<div class='form-group col-lg-6 col-md-12'>
													<label>Upload CV</label>
													<input
														class='uploadButton-input'
														type='file'
														id='upload'
														placeholder='Upload CV'
														onChange={handleImage}
														required
													/>
												</div>

												{image ? (
													<>
														{percentage > 0 && percentage < 99 ? (
															<div style={{ width: "300px" }}>
																<LinearProgress
																	value={Math.floor(percentage)}
																	variant='determinate'
																/>
																{Math.floor(percentage)}%
															</div>
														) : null}
													</>
												) : null}

												{/* <div class="form-group col-lg-6 col-md-12">
                        <label>Allow In Search & Listing</label>
                        <select class="chosen-select">
                          <option>Yes</option>
                          <option>No</option>
                        </select>
                      </div> */}

												<div class='form-group col-lg-12 col-md-12'>
													<label>Description</label>
													<textarea
														onChange={(e) => {
															setDescription(e.target.value);
														}}
														defaultValue={data?.description}
														placeholder="Spent several years working on sheep on Wall Street. Had moderate success investing in Yugo's on Wall Street. Managed a small team buying and selling Pogo sticks for farmers. Spent several years licensing licorice in West Palm Beach, FL. Developed several new methods for working it banjos in the aftermarket. Spent a weekend importing banjos in West Palm Beach, FL.In this position, the Software Engineer collaborates with Evention's Development team to continuously enhance our current software solutions as well as create new solutions to eliminate the back-office operations and management challenges present"></textarea>
												</div>

												<div class='form-group col-lg-6 col-md-12'>
													<button class='theme-btn btn-style-one'>Save</button>
												</div>
											</div>
										</form>
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
							{loading ? <Loading loading={loading} /> : null}
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default ProfilePage;

import axios from 'axios'
import React from 'react'
import { useParams } from 'react-router-dom'
import swal from 'sweetalert'
import Loading from '../Components/LoadState'
import DashHeader from './DashHeader'
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import * as yup from "yup";


const ApplyForm = () => {
const {id} = useParams()

const useID = id;


const [image, setImage] = React.useState('')
const[loading, setLoading] = React.useState(false)

const [avatar, setAvatar] = React.useState('')
const [userID, setUserID] = React.useState('3765364773')

const onPreview = (e)=>{
const file = e.target.files[0]
const checkPreview = URL.createObjectURL(file)
setAvatar(file)
console.log(avatar)
setImage(file);

}

 const proModel = yup.object().shape({
		name: yup.string().required("field must not be empty"),
		email: yup.string().required("field must not be empty"),
		location: yup.string().required("field must not be empty"),
		experience: yup.string().required("field must not be empty"),
		phoneNumber: yup.string().required("field must not be empty"),
	
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

		  const submit = handleSubmit(async (data) => {
				console.log("testing value", data);
				console.log("image state", image);
				const { name, email, location, phoneNumber, experience } = data;

				const formdata = new FormData();

				formdata.append("name", name);
				formdata.append("email", email);
				formdata.append("location", location);
				formdata.append("experience", experience);
				formdata.append("phoneNumber", phoneNumber);
				formdata.append("image", image);
				//   formdata.append("userID", userID);

				const config = {
					headers: {
						"content-type": "multipart/formdata",
					},
				};

				await axios
					.post(
						`https://qlinkappi.herokuapp.com/api/jobs/${useID}/apply`,
						formdata,
						config,
					)
					.then((response) => {
						if (response === 201) {
							swal({
								title: "uploaded successful!",
								text: "You can clicked the button!",
								icon: "success",
								button: "ok",
							});
							setLoading(false);
						}
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
			});

const toggleLoad = ()=>{
  setLoading(true)
}

const uploadForm = async()=>{

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
  
}




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
										<div class='uploading-outer'>
											<div class='uploadButton'>
												<input
													// onChange={onPreview}
													class='uploadButton-input'
													type='file'
													id='upload'
												/>
												<label
													class='uploadButton-button ripple-effect'
													for='upload'></label>
												Upload your Cv
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

										<form
											onSubmit={(e) => {
												e.preventDefault();
                                                     submit()
												toggleLoad();
											}}
											class='default-form'>
											<input
												onChange={onPreview}
												type='file'
											/>
											<div class='row'>
												<div class='form-group col-lg-6 col-md-12'>
													<label>Full Name</label>
													<input
														{...register("name")}
														type='text'
													
														placeholder='Jerome'
													/>
												</div>

												<div class='form-group col-lg-6 col-md-12'>
													<label>Email</label>
													<input
														{...register("email")}
														type='text'
													
														placeholder='email@gmail.com'
													/>
												</div>

												<div class='form-group col-lg-6 col-md-12'>
													<label>Phone</label>
													<input
														{...register("phoneNumber")}
														type='text'
													
														placeholder='0 123 456 7890'
													/>
												</div>

												{/* <div class="form-group col-lg-6 col-md-12">
                        <label>Salary </label>
                        <input type="text" name="name" placeholder="salary"/>
                      </div> */}

												<div class='form-group col-lg-6 col-md-12'>
													<label>Experience</label>
													<input
														{...register("experience")}
														type='text'
														
														placeholder='5-10 Years'
													/>
												</div>

												<div class='form-group col-lg-12 col-md-12'>
													<label>Location</label>
													<input
														{...register("location")}
														type='text'
													
														placeholder='Certificate'
													/>
												</div>

									

												<div class='form-group col-lg-6 col-md-12'>
													<button
													type = "submit"
														class='theme-btn btn-style-one'>
														Submit
													</button>
												</div>
											</div>
										</form>
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
}

export default ApplyForm
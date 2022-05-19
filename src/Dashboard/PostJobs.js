import axios from 'axios'
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import swal from 'sweetalert'
import { GlobalContext } from '../Components/Global/GlobalContext'
import Loading from '../Components/LoadState'
import DashHeader from './DashHeader'

const PostJobs = () => {
    const {current} = useContext(GlobalContext)
    const myId = current?._id
    const hist = useNavigate()
     const [loading, setLoading] = React.useState(false)
   const [contactEmail, setContactEmail] = React.useState('')
   const [jobTitle, setJobTitle] = React.useState('')
   const [description, setDescription] = React.useState('')
   const [budget, setBudget] = React.useState("")
   const [skillSet, setSkillSet] = React.useState('')
   const [SelectTime, setSelectTime] = React.useState('')
   const [location, setLocation] = React.useState('')
   const [projectDuration, setProjectDuration] = React.useState('')
   const [experience, setExperience] = React.useState('')

   console.log("shfhdfjfjmf", myId)


    const toggleLoad = ()=>{
        setLoading(true)
    }

     const postData = async()=>{

    
       await axios.post(`https://newqlinksbackapi.vercel.app/api/jobs/${myId}/jobposting `, {
         contactEmail,
         jobTitle,
         description,
         budget,
         SelectTime,
         location,
         skillSet,
         experience,
         projectDuration

       }).then((response)=>{
         hist('/dashboard')
         window.location.reload()
               swal({
            title: " Success",
            text: "Your Product Has Been Uploaded",
            icon: "success",
            button: "ok",
          }).then((value) => {
            swal(hist('/dashboard'));
          }); 
    
            //  console.log(response.data.data.CreateUser)
            //  handleShow()
       })
       
       setLoading(false)
     
  }

  return (
		<div class='page-wrapper dashboard'>
			<DashHeader />

			<section style={{ marginTop: "100px" }} class='user-dashboard'>
				<div class='dashboard-outer'>
					<div class='upper-title-box'>
						<h3>Post a New Job!</h3>
						<div class='text'>Ready to jump back in?</div>
					</div>

					<div class='row'>
						<div class='col-lg-12'>
							<div class='ls-widget'>
								<div class='tabs-box'>
									<div class='widget-title'>
										<h4>Post Job</h4>
									</div>

									<div class='widget-content'>
										<div class='post-job-steps'>
											<div class='step'>
												<span class='icon flaticon-briefcase'></span>
												<h5>Job Detail</h5>
											</div>

											<div class='step'>
												<span class='icon flaticon-money'></span>
												<h5>Package & Payments</h5>
											</div>

											<div class='step'>
												<span class='icon flaticon-checked'></span>
												<h5>Confirmation</h5>
											</div>
										</div>

										<form
											onSubmit={(e) => {
												postData();
												e.preventDefault();
												toggleLoad();
											}}
											class='default-form'>
											<div class='row'>
												<div class='form-group col-lg-12 col-md-12'>
													<label>Job Title</label>
													<input
														onChange={(e) => {
															setJobTitle(e.target.value);
														}}
														type='text'
														required
														placeholder='Title'
													/>
												</div>

												<div class='form-group col-lg-12 col-md-12'>
													<label>Job Description</label>
													<textarea
														required
														onChange={(e) => {
															setDescription(e.target.value);
														}}
														placeholder="Spent several years working on sheep on Wall Street. Had moderate success investing in Yugo's on Wall Street. Managed a small team buying and selling Pogo sticks for farmers. Spent several years licensing licorice in West Palm Beach, FL. Developed several new methods for working it banjos in the aftermarket. Spent a weekend importing banjos in West Palm Beach, FL.In this position, the Software Engineer collaborates with Evention's Development team to continuously enhance our current software solutions as well as create new solutions to eliminate the back-office operations and management challenges present"></textarea>
												</div>

												<div class='form-group col-lg-6 col-md-12'>
													<label>Contact Email</label>
													<input
														required
														onChange={(e) => {
															setContactEmail(e.target.value);
														}}
														type='text'
														name='name'
														placeholder=''
													/>
												</div>
												<div class='form-group col-lg-6 col-md-12'>
													<label>Budget</label>
													<input
														placeholder='$1,000,000.00'
														onChange={(e) => {
															setBudget(e.target.value);
														}}
														type='text'
														required
														name='name'
													/>
												</div>

												<div class='form-group col-lg-6 col-md-12'>
													<label>Experience</label>
													<select
													
														
														onChange={(e) => {
															setExperience(e.target.value);
														}}
														class='chosen-select'>
														<option value='1'>1 year</option>
														<option value='2'>2 years</option>
														<option value='3'>3 years</option>
														<option value='4'>4 years +</option>
													</select>
												</div>

												<div class='form-group col-lg-6 col-md-12'>
													<label>Project Duration</label>
													<select
														required
														onChange={(e) => {
															setProjectDuration(e.target.value);
														}}
														class='chosen-select'>
														<option value='More Than 6 Months'>
															more than 6 Months
														</option>
														<option value='3 to 6 Months'>3 to 6 Months</option>
														<option value='1 to 3 Months'>1 to 3 Months</option>
														<option value='Less Than A Month'>
															Less Than A Month
														</option>
													</select>
												</div>

												<div class='form-group col-lg-6 col-md-12'>
													<label>Hours</label>
													<select
														required
														onChange={(e) => {
															setSelectTime(e.target.value);
														}}
														class='chosen-select'>
														<option>Fulltime</option>
														<option>Pertime</option>
														<option>Remote</option>
													</select>
												</div>

												<div class='form-group col-lg-6 col-md-12'>
													<label>Location</label>
													<input
														required
														onChange={(e) => {
															setLocation(e.target.value);
														}}
														type='text'
														name='name'
														placeholder=''
													/>
												</div>

												<div class='form-group col-lg-12 col-md-12'>
													<label>Skill Sets</label>
													<input
														onChange={(e) => {
															setSkillSet(e.target.value);
														}}
														type='text'
														required
												
                            placeholder = "React js , Php , Java , Html , Css , Tailwind ...."
													/>
												</div>
												{/* 
                      <div class="form-group col-lg-6 col-md-12">
                        <label>Location</label>
                        <select class="chosen-select">
                       
                        </select>
                      </div> */}

												{/* <div class="form-group col-lg-12 col-md-12">
                        <label>Application Deadline Date</label>
                        <input type="text" name="name" placeholder="06.04.2020"/>
                      </div> */}

												{/* <div class="form-group col-lg-6 col-md-12">
                        <label>Find On Map</label>
                        <input type="text" name="name" placeholder="329 Queensberry Street, North Melbourne VIC 3051, Australia."/>
                      </div> */}

												{/* <div class="form-group col-lg-3 col-md-12">
                        <label>Latitude</label>
                        <input type="text" name="name" placeholder="Melbourne"/>
                      </div> */}

												{/*                    
                      <div class="form-group col-lg-3 col-md-12">
                        <label>Longitude</label>
                        <input type="text" name="name" placeholder="Melbourne"/>
                      </div> */}

												<div class='form-group col-lg-12 col-md-12 '>
													<button class='theme-btn btn-style-one'>
														Submit
													</button>
												</div>
											</div>
										</form>
										{loading ? <Loading loading={loading} /> : null}
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

export default PostJobs
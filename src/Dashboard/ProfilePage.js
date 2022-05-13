import axios from 'axios'
import React, { useContext } from 'react'
import { GlobalContext } from '../Components/Global/GlobalContext'
import DashHeader from './DashHeader'
import swal from 'sweetalert'
import { useNavigate } from 'react-router-dom'
import Loading from '../Components/LoadState'
const ProfilePage = () => {
  const {current} = useContext(GlobalContext)
const hist = useNavigate()

const myId = current?._id

  const [name, setName] = React.useState()
  const [email, setEmail] = React.useState()
  // const [ava, setName] = React.useState('')
  const [jobTitle, setJobTitle] = React.useState()
  const [salary, setSalary] = React.useState()
  const [age, setAge] = React.useState()
  const [experience, setExperience] = React.useState()
  const [websiteUrl, setWebsiteUrl] = React.useState()
  const [description, setDescription] = React.useState()
  const [gender, setGender] = React.useState()
  const [location, setLocation] = React.useState()
  const [phoneNumber, setPhoneNumber] = React.useState()
  const [loading, setLoading] = React.useState(false)
  const toggleLoad = ()=>{
        setLoading(true)
    }



  const postData = async()=>{

       await axios.patch(`https://newqlinksbackapi.vercel.app/api/user/editprofile/${myId}`, {name,jobTitle, 
      email,
      salary,
      age,
      experience,
      websiteUrl,
      description,
      gender,
      location,
      phoneNumber,

      }).then((response)=>{

        // console.log("update",response?.data.data)
        // edit profile from localstorage
   const profile = JSON.parse(localStorage.getItem('dataUsers'));
    Object.keys(response?.data?.data).forEach((key) => {
        profile[key] = response?.data?.data[key];
    });
    localStorage.setItem('dataUsers', JSON.stringify(profile));
               swal({
            title: " Successfull",
            text: "Your Profile Has been Updated!",
            icon: "success",
            button: "ok",
          }).then((value) => {
            swal(window.location.reload());
          }); 
               setLoading(false)
        })
       
   
    
  }


  const updateProfile = (updatedData) => {
 
}





  return (
    <div className='page-wrapper dashboard'>
  <DashHeader />
  <section style = {{marginTop : '100px'}} class="user-dashboard">
    
      <div class="dashboard-outer">
        <div class="upper-title-box">
          <h3>My Profile</h3>
          <div class="text">Ready to jump back in?</div>
        </div>

        <div class="row">
          <div class="col-lg-12">
         
            <div class="ls-widget">
              <div class="tabs-box">
                <div class="widget-title">
                  <h4>My Profile</h4>
                </div>

                <div class="widget-content">

                  <div class="uploading-outer">
                    <div class="uploadButton">
                      <input class="uploadButton-input" type="file" name="attachments[]" accept="image/*, application/pdf" id="upload" multiple />
                      <label class="uploadButton-button ripple-effect" for="upload">Browse Logo</label>
                      <span class="uploadButton-file-name"></span>
                    </div>
                    <div class="text">Max file size is 1MB, Minimum dimension: 330x300 And Suitable files are .jpg & .png</div>
                  </div>

                  <form 
                  onSubmit={(e)=>{
                    postData()
                    e.preventDefault()
                    toggleLoad()

                  }}
                  class="default-form">
                    <div class="row">
                   
                      <div class="form-group col-lg-6 col-md-12">
                        <label>Full Name</label>
                        <input onChange={(e)=>{
                          setName(e.target.value)
                         
                        }} 
                         defaultValue={current?.name}
                        type="text"  placeholder=""/>
                      </div>

                    
                      <div class="form-group col-lg-6 col-md-12">
                        <label>Job Title</label>
                        <input onChange={(e)=>{
                          setJobTitle(e.target.value)
                        }}  type="text" defaultValue={current?.jobTitle} name="name" placeholder="UI Designer"/>
                      </div>

                     
                      <div class="form-group col-lg-6 col-md-12">
                        <label>Phone</label>
                        <input onChange={(e)=>{
                          setPhoneNumber(e.target.value)
                        }}  type="text" defaultValue={current?.phoneNumber} name="name" placeholder="0 123 456 7890"/>
                      </div>

                      
                      <div class="form-group col-lg-6 col-md-12">
                        <label>Email address</label>
                        <input
                        onChange={(e)=>{
                          setEmail(e.target.value)
                        }} 
                        type="text" value={current?.email}  defaultValue={current?.email} name="name"/>
                      </div>

                   
                      <div class="form-group col-lg-6 col-md-12">
                        <label>Website</label>
                        <input 
                        onChange={(e)=>{
                          setWebsiteUrl(e.target.value)
                        }} 
                        defaultValue={current?.websiteUrl} type="text" name="name" placeholder="www.jerome.com"/>
                      </div>

                      
                      <div class="form-group col-lg-6 col-md-12">
                        <label>Salary </label>
                        <input 
                        onChange={(e)=>{
                          setSalary(e.target.value)
                        }} 
                        type="text" defaultValue={current?.salary} name="name" placeholder="salary"/>
                      </div>
                   
                   

                      <div class="form-group col-lg-6 col-md-12">
                        <label>Experience</label>
                        <input 
                        onChange={(e)=>{
                          setExperience(e.target.value)
                        }} 
                        type="text" defaultValue={current?.experience} name="name" placeholder="5-10 Years"/>
                      </div>

                   
                      <div class="form-group col-lg-6 col-md-12">
                        <label>Age</label>
                        <select
                        onChange={(e)=>{
                          setAge(e.target.value)
                        }} 
                        defaultValue={current?.age} class="chosen-select">
                          <option value = "23 -27">18 - 27 Years</option>
                          <option value = "28 -37">28 - 37 Years</option>
                          <option value = "38 -47">38 - 47 Years</option>
                          <option value = "48 - 57">48 - 57 Years</option>
                        </select>
                      </div>

                     
                      <div class="form-group col-lg-6 col-md-12">
                        <label>Location</label>
                        <input 
                        onChange={(e)=>{
                          setLocation(e.target.value)
                        }} 
                        type="text" defaultValue={current?.location} name="name" placeholder="Certificate"/>
                      </div>
                   
                      <div class="form-group col-lg-6 col-md-12">
                        <label>Gender</label>
                        <select
                        onChange={(e)=>{
                          setGender(e.target.value)
                        }} 
                        class="chosen-select">
                          <option>Male</option>
                          <option>Female</option>
                        
                        </select>
                      </div>


                   
                    


                     
                      {/* <div class="form-group col-lg-6 col-md-12">
                        <label>Allow In Search & Listing</label>
                        <select class="chosen-select">
                          <option>Yes</option>
                          <option>No</option>
                        </select>
                      </div> */}

                      <div class="form-group col-lg-12 col-md-12">
                        <label>Description</label>
                        <textarea 
                        onChange={(e)=>{
                          setDescription(e.target.value)
                        }} 
                        placeholder="Spent several years working on sheep on Wall Street. Had moderate success investing in Yugo's on Wall Street. Managed a small team buying and selling Pogo sticks for farmers. Spent several years licensing licorice in West Palm Beach, FL. Developed several new methods for working it banjos in the aftermarket. Spent a weekend importing banjos in West Palm Beach, FL.In this position, the Software Engineer collaborates with Evention's Development team to continuously enhance our current software solutions as well as create new solutions to eliminate the back-office operations and management challenges present"></textarea>
                      </div>

                   
                      <div class="form-group col-lg-6 col-md-12">
                        <button class="theme-btn btn-style-one">Save</button>
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
           {
             loading ? <Loading loading = {loading}/> : null
           }
          </div>


        </div>
      </div>
    </section>
    </div>
  )
}

export default ProfilePage
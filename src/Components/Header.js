import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Register from './RegisterPage/Register'
import SideBarToggle from './RegisterPage/SideBarToggle'
import {ImCancelCircle} from 'react-icons/im'
import { GlobalContext } from './Global/GlobalContext'
const Header = () => {
  
  const {show, handleShow, current} = useContext(GlobalContext)

    const [showM, setShowM] = React.useState(false)

    const handleShowM = ()=>{
      setShowM(!showM)
    }
  return (
     
   <>
  <header class="main-header header-style-four -type-16">
      <div class="container-fluid">
   
        <div class="main-box">
     
          <div class="nav-outer">
            <div class="logo-box">
              <div class="logo"><a href="/"><img style = {{width : '100px'}} src="images/qlinkwhite.png" alt="" title=""/></a></div>
            </div>

            <nav class="nav main-menu">
              <ul class="navigation" id="navbar">
                <li class="current dropdown">
               
                  <div class="mega-menu">
                    <div class="mega-menu-bar row pt-0">
                    </div>
                  </div>
                </li>

                <li>
                 <Link to ="/"> <span>Home</span></Link>
               
                </li>
                <li>
                  <Link to = "/developers">
                  <span>Find Developers</span>
                  </Link>
                </li>
                <li>
                   <Link to = "/findjob">
                  <span>Find Jobs</span>
                  </Link>
               
                </li>

              
             

    
                <li class="mm-add-listing">
                  <a href="add-listing.html" class="theme-btn btn-style-one">Job Post</a>
                  <span>
                    <span class="contact-info">
                      <span class="phone-num"><span>Call us</span><a href="tel:1234567890">123 456 7890</a></span>
                      <span class="address">329 Queensberry Street, North Melbourne VIC <br/>3051, Australia.</span>
                      <a href="mailto:support@superio.com" class="email">support@superio.com</a>
                    </span>
                    <span class="social-links">
                      <a href="#"><span class="fab fa-facebook-f"></span></a>
                      <a href="#"><span class="fab fa-twitter"></span></a>
                      <a href="#"><span class="fab fa-instagram"></span></a>
                      <a href="#"><span class="fab fa-linkedin-in"></span></a>
                    </span>
                  </span>
                </li>
              </ul>
            </nav>
   
          </div>

          <div class="outer-box">
            <div class="btn-box">
              {
                current?.verified ?  <a href='/dashboard'  class="theme-btn btn-style-six call-modal">DashBoard</a> :  <a href='#' onClick = {handleShow} class="theme-btn btn-style-six call-modal">Login / Register</a>
              }
              <a href="dashboard-post-job.html" class="theme-btn btn-style-five">Job Post</a>
            </div>
          </div>
        </div>
      </div>

      
      <div class="sticky-header">
        <div class="auto-container">

          <div class="main-box">
            <div class="logo-box">
              <div class="sticky-logo"><a href="index.html"><img src="images/qlinklogo.png" alt="" title=""/></a></div>
            </div>

          </div>
        </div>
      </div>
 
      <div class="mobile-header">
        <div class="logo"><a href="index.html"><img src="images/qlinklogo.png" alt="" title=""/></a></div>

      
        <div class="nav-outer clearfix">

          <div class="outer-box">
         
            <div class="login-box">
              <a href="login-popup.html" class="call-modal"><span class="icon-user"></span></a>
            </div>

            {
              showM ?              <div style = {{zIndex : '1000', color : 'white', fontSize : '30px', marginLeft : '70px', cursor : 'pointer'}}><ImCancelCircle onClick = {handleShowM}/></div> : 
                 <a onClick={handleShowM} class="mobile-nav-toggler navbar-trigger"><span class="flaticon-menu-1"></span></a>
            }

         

          </div>
        </div>
      </div>

      <div id="nav-mobile"></div>
{
  showM ? 
        <SideBarToggle/> : null
}

     {
         show ?  <Register/> :null
     }
    </header>
 
   </>
  )
}

export default Header
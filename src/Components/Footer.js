import React, { useContext } from 'react'
import { GlobalContext } from './Global/GlobalContext';

let date = new Date().getFullYear();
const Footer = () => {
  const {current} = useContext(GlobalContext)

  return (
  <>
   <footer class="main-footer style-five">
    
      {/* <div class="widgets-section">
        <div class="auto-container">

          <div class="row">
            <div class="big-column col-xl-3 col-lg-3 col-md-12">
              <div class="footer-column about-widget">
                <div class="logo"><a href="#"><img style = {{width : '200px'}} src="images/qlinklogo.png" alt=""/></a></div>
                <p class="phone-num"><span>Call us </span><a href="thebeehost@support.com">123 456 7890</a></p>
                <p class="address">329 Queensberry Street, North Melbourne VIC<br/> 3051, Australia. <br/><a href="mailto:support@superio.com" class="email">support@superio.com</a></p>
              </div>
            </div>

            <div class="big-column col-xl-9 col-lg-9 col-md-12">
              <div class="row">
                <div class="footer-column col-lg-3 col-md-6 col-sm-12">
                  <div class="footer-widget links-widget">
                    <h4 class="widget-title">For Candidates</h4>
                    <div class="widget-content">
                      <ul class="list">
                        <li><a href="#">Browse Jobs</a></li>
                        <li><a href="#">Browse Categories</a></li>
                        <li><a href="#">Candidate Dashboard</a></li>
                        <li><a href="#">Job Alerts</a></li>
                        <li><a href="#">My Bookmarks</a></li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div class="footer-column col-lg-3 col-md-6 col-sm-12">
                  <div class="footer-widget links-widget">
                    <h4 class="widget-title">For Employers</h4>
                    <div class="widget-content">
                      <ul class="list">
                        <li><a href="#">Browse Candidates</a></li>
                        <li><a href="#">Employer Dashboard</a></li>
                        <li><a href="#">Add Job</a></li>
                        <li><a href="#">Job Packages</a></li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div class="footer-column col-lg-3 col-md-6 col-sm-12">
                  <div class="footer-widget links-widget">
                    <h4 class="widget-title">About Us</h4>
                    <div class="widget-content">
                      <ul class="list">
                        <li><a href="#">Job Page</a></li>
                        <li><a href="#">Job Page Alternative</a></li>
                        <li><a href="#">Resume Page</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Contact</a></li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div class="footer-column col-lg-3 col-md-6 col-sm-12">
                  <div class="footer-widget">
                    <h4 class="widget-title">Mobile Apps</h4>
                    <div class="widget-content">
                      <div class="download-btns">
                        <div class="text">Click and Get started in seconds</div>
                        <a href="#"><img src="images/icons/apple-2.png" alt=""/></a>
                        <a href="#"><img src="images/icons/google-2.png" alt=""/></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

   
      <div class="footer-bottom">
        <div class="auto-container">
          <div class="outer-box">
            <div class="copyright-text">© {date} <a href="#">QLink</a>. All Right Reserved.</div>
            <div class="social-links">
              <a href="#"><i class="fab fa-facebook-f"></i></a>
              <a href="#"><i class="fab fa-twitter"></i></a>
              <a href="#"><i class="fab fa-instagram"></i></a>
              <a href="#"><i class="fab fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>
      </div>
      <div class="scroll-to-top scroll-to-target" data-target="html"><span class="fa fa-angle-up"></span></div>
    </footer>
 
  </>
  )
}

export default Footer
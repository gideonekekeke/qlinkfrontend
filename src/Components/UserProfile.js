import React from 'react'
import Footer from './Footer'
import Header from './Header'

const UserProfile = () => {
  return (
    <>
    <Header/>
 <section style = {{marginTop : '50px'}} class="candidate-detail-section">
      <div className="upper-box">
        <div className="auto-container">
      
          <div className="candidate-block-five">
            <div className="inner-box">
              <div className="content">
                <figure className="image"><img src="images/resource/candidate-4.png" alt=""/></figure>
                <h4 className="name"><a href="#">Darlene Robertson</a></h4>
                <ul className="candidate-info">
                  <li className="designation">UI Designer at Invision</li>
                  <li><span className="icon flaticon-map-locator"></span> London, UK</li>
                  <li><span className="icon flaticon-money"></span> $99 / hour</li>
                  <li><span className="icon flaticon-clock"></span> Member Since,Aug 19, 2020</li>
                </ul>
                <ul className="post-tags">
                  <li><a href="#">App</a></li>
                  <li><a href="#">Design</a></li>
                  <li><a href="#">Digital</a></li>
                </ul>
              </div>

              <div className="btn-box">
                <a href="#" className="theme-btn btn-style-one">Download CV</a>
                <button className="bookmark-btn"><i className="flaticon-bookmark"></i></button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="candidate-detail-outer">
        <div className="auto-container">
          <div className="row">
            <div className="content-column col-lg-8 col-md-12 col-sm-12">
              <div className="job-detail">
                <h4>Candidates About</h4>
                <p>Hello my name is Nicole Wells and web developer from Portland. In pharetra orci dignissim, blandit mi semper, ultricies diam. Suspendisse malesuada suscipit nunc non volutpat. Sed porta nulla id orci laoreet tempor non consequat enim. Sed vitae aliquam velit. Aliquam ante erat, blandit at pretium et, accumsan ac est. Integer vehicula rhoncus molestie. Morbi ornare ipsum sed sem condimentum, et pulvinar tortor luctus. Suspendisse condimentum lorem ut elementum aliquam.</p>
                <p>Mauris nec erat ut libero vulputate pulvinar. Aliquam ante erat, blandit at pretium et, accumsan ac est. Integer vehicula rhoncus molestie. Morbi ornare ipsum sed sem condimentum, et pulvinar tortor luctus. Suspendisse condimentum lorem ut elementum aliquam. Mauris nec erat ut libero vulputate pulvinar.</p>

             
                <div className="resume-outer">
                  <div className="upper-title">
                    <h4>Education</h4>
                  </div>
                
                  <div className="resume-block">
                    <div className="inner">
                      <span className="name">M</span>
                      <div className="title-box">
                        <div className="info-box">
                          <h3>Bachlors in Fine Arts</h3>
                          <span>Modern College</span>
                        </div>
                        <div className="edit-box">
                          <span className="year">2012 - 2014</span>
                        </div>
                      </div>
                      <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante<br/> ipsum primis in faucibus.</div>
                    </div>
                  </div>

                
                  <div className="resume-block">
                    <div className="inner">
                      <span className="name">H</span>
                      <div className="title-box">
                        <div className="info-box">
                          <h3>Computer Science</h3>
                          <span>Harvard University</span>
                        </div>
                        <div className="edit-box">
                          <span className="year">2008 - 2012</span>
                        </div>
                      </div>
                      <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante<br/> ipsum primis in faucibus.</div>
                    </div>
                  </div>
                </div>

           
                <div className="resume-outer theme-blue">
                  <div className="upper-title">
                    <h4>Work & Experience</h4>
                  </div>
                  
                  <div className="resume-block">
                    <div className="inner">
                      <span className="name">S</span>
                      <div className="title-box">
                        <div className="info-box">
                          <h3>Product Designer</h3>
                          <span>Spotify Inc.</span>
                        </div>
                        <div className="edit-box">
                          <span className="year">2008 - 2012</span>
                        </div>
                      </div>
                      <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante<br/> ipsum primis in faucibus.</div>
                    </div>
                  </div>

               
                  <div className="resume-block">
                    <div className="inner">
                      <span className="name">D</span>
                      <div className="title-box">
                        <div className="info-box">
                          <h3>Sr UX Engineer</h3>
                          <span>Dropbox Inc.</span>
                        </div>
                        <div className="edit-box">
                          <span className="year">2012 - 2014</span>
                        </div>
                      </div>
                      <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante<br/> ipsum primis in faucibus.</div>
                    </div>
                  </div>
                </div>

           
                <div className="portfolio-outer">
                  <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-6">
                      <figure className="image">
                        <a href="images/resource/portfolio-1.jpg" className="lightbox-image"><img src="images/resource/portfolio-1.jpg" alt=""/></a>
                        <span className="icon flaticon-plus"></span>
                      </figure>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6">
                      <figure className="image">
                        <a href="images/resource/portfolio-2.jpg" className="lightbox-image"><img src="images/resource/portfolio-2.jpg" alt=""/></a>
                        <span className="icon flaticon-plus"></span>
                      </figure>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6">
                      <figure className="image">
                        <a href="images/resource/portfolio-3.jpg" className="lightbox-image"><img src="images/resource/portfolio-3.jpg" alt=""/></a>
                        <span className="icon flaticon-plus"></span>
                      </figure>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6">
                      <figure className="image">
                        <a href="images/resource/portfolio-4.jpg" className="lightbox-image"><img src="images/resource/portfolio-4.jpg" alt=""/></a>
                        <span className="icon flaticon-plus"></span>
                      </figure>
                    </div>
                  </div>
                </div>

              
                <div className="resume-outer theme-yellow">
                  <div className="upper-title">
                    <h4>Awards</h4>
                  </div>
                 
                  <div className="resume-block">
                    <div className="inner">
                      <span className="name"></span>
                      <div className="title-box">
                        <div className="info-box">
                          <h3>Perfect Attendance Programs</h3>
                          <span></span>
                        </div>
                        <div className="edit-box">
                          <span className="year">2012 - 2014</span>
                        </div>
                      </div>
                      <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante<br/> ipsum primis in faucibus.</div>
                    </div>
                  </div>


               
                  <div className="resume-block">
                    <div className="inner">
                      <span className="name"></span>
                      <div className="title-box">
                        <div className="info-box">
                          <h3>Top Performer Recognition</h3>
                          <span></span>
                        </div>
                        <div className="edit-box">
                          <span className="year">2012 - 2014</span>
                        </div>
                      </div>
                      <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante<br/> ipsum primis in faucibus.</div>
                    </div>
                  </div>
                </div>

                <div className="video-outer">
                  <h4>Candidates About</h4>
                  <div className="video-box">
                    <figure className="image">
                      <a href="https://www.youtube.com/watch?v=Fvae8nxzVz4" className="play-now" data-fancybox="gallery" data-caption="">
                        <img src="images/resource/video-img.jpg" alt=""/>
                        <i className="icon flaticon-play-button-3" aria-hidden="true"></i>
                      </a>
                    </figure>
                  </div>
                     <div className="sidebar-widget">
                  <div className="widget-content">
                    <ul className="job-overview">
                      <li>
                        <i className="icon icon-calendar"></i>
                        <h5>Experience:</h5>
                        <span>0-2 Years</span>
                      </li>

                      <li>
                        <i className="icon icon-expiry"></i>
                        <h5>Age:</h5>
                        <span>28-33 Years</span>
                      </li>

                      <li>
                        <i className="icon icon-rate"></i>
                        <h5>Current Salary:</h5>
                        <span>11K - 15K</span>
                      </li>

                      <li>
                        <i className="icon icon-salary"></i>
                        <h5>Expected Salary:</h5>
                        <span>26K - 30K</span>
                      </li>

                      <li>
                        <i className="icon icon-user-2"></i>
                        <h5>Gender:</h5>
                        <span>Female</span>
                      </li>

                      <li>
                        <i className="icon icon-language"></i>
                        <h5>Language:</h5>
                        <span>English, German, Spanish</span>
                      </li>

                      <li>
                        <i className="icon icon-degree"></i>
                        <h5>Education Level:</h5>
                        <span>Master Degree</span>
                      </li>

                    </ul>
                  </div>

                </div>
                </div>
                
              </div>
              
            </div>

           

            <div className="sidebar-column col-lg-4 col-md-12 col-sm-12">
              <div className="sidebar">
              

                <div className="sidebar-widget social-media-widget">
                  <h4 className="widget-title">Social media</h4>
                  <div className="widget-content">
                    <div className="social-links">
                      <a href="#"><i className="fab fa-facebook-f"></i></a>
                      <a href="#"><i className="fab fa-twitter"></i></a>
                      <a href="#"><i className="fab fa-instagram"></i></a>
                      <a href="#"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                  </div>
                </div>


                <div className="sidebar-widget">
                  
                  <h4 className="widget-title">Professional Skills</h4>
                  <div className="widget-content">
                    <ul className="job-skills">
                      <li><a href="#">app</a></li>
                      <li><a href="#">administrative</a></li>
                      <li><a href="#">android</a></li>
                      <li><a href="#">wordpress</a></li>
                      <li><a href="#">design</a></li>
                      <li><a href="#">react</a></li>
                    </ul>
                  </div>
                </div>

                <div className="sidebar-widget contact-widget">
                  <h4 className="widget-title">Contact Us</h4>
                  <div className="widget-content">
                  
                    <div className="default-form">
                    
                      <form>
                        <div className="row clearfix">
                          <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                            <input type="text" name="username" placeholder="Your Name" required/>
                          </div>
                          <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                            <input type="email" name="email" placeholder="Email Address" required/>
                          </div>
                          <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                            <textarea className="darma" name="message" placeholder="Message"></textarea>
                          </div>
                          <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                            <button className="theme-btn btn-style-one" type="submit" name="submit-form">Send Message</button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
<Footer/>
    </>
      )
}

export default UserProfile
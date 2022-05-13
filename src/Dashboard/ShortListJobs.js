import React from 'react'
import { Link } from 'react-router-dom'
import DashHeader from './DashHeader'

const ShortListJobs = () => {
  return (
    <div class="page-wrapper dashboard">
        <DashHeader/>
          <section style = {{marginTop : "100px"}} class="user-dashboard">
      <div class="dashboard-outer">
        <div class="upper-title-box">
          <h3> Job Alert</h3>
          <div class="text">Ready to jump back in?</div>
        </div>

        <div class="row">
          <div class="col-lg-12">

            <div class="ls-widget">
              <div class="tabs-box">
                <div class="widget-title">
                  <h4>Get a Job for yourself</h4>

                  <div class="chosen-outer">
                
                    <select class="chosen-select">
                      <option>Last 6 Months</option>
                      <option>Last 12 Months</option>
                      <option>Last 16 Months</option>
                      <option>Last 24 Months</option>
                      <option>Last 5 year</option>
                    </select>
                  </div>
                </div>

                <div class="widget-content">
                  <div class="table-outer">
                    <table class="default-table manage-job-table">
                      <thead>
                        <tr>
                          <th>Job Title</th>
                          <th>Date Applied</th>
                          <th>Status</th>
                          <th>Action</th>
                        </tr>
                      </thead>

                      <tbody>
                        <tr>
                          <td>
                           
                            <div class="job-block">
                              <div class="inner-box">
                                <div class="content">
                                  <span class="company-logo"><img src="images/resource/company-logo/1-1.png" alt=""/></span>
                                  <h4><a href="#">Senior Full Stack Engineer, Creator Success</a></h4>
                                  <ul class="job-info">
                                    <li><span class="icon flaticon-briefcase"></span> Segment</li>
                                    <li><span class="icon flaticon-map-locator"></span> London, UK</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td>Dec 5, 2020</td>
                          <td class="status">Active</td>
                          <td>
                            <div class="option-box">
                              <ul class="option-list">
                             <Link to = "/applyform">     <li><button data-text="View Aplication"><span class="la la-eye"></span></button></li></Link>
                           
                              </ul>
                            </div>
                          </td>
                        </tr>

                        <tr>
                          <td>
                       
                            <div class="job-block">
                              <div class="inner-box">
                                <div class="content">
                                  <span class="company-logo"><img src="images/resource/company-logo/1-2.png" alt=""/></span>
                                  <h4><a href="#">Senior Product Designer</a></h4>
                                  <ul class="job-info">
                                    <li><span class="icon flaticon-briefcase"></span> Segment</li>
                                    <li><span class="icon flaticon-map-locator"></span> London, UK</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td>Dec 5, 2020</td>
                          <td class="status">Active</td>
                          <td>
                            <div class="option-box">
                              <ul class="option-list">
                                <li><button data-text="View Aplication"><span class="la la-eye"></span></button></li>
        
                              </ul>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                           
                            <div class="job-block">
                              <div class="inner-box">
                                <div class="content">
                                  <span class="company-logo"><img src="images/resource/company-logo/1-3.png" alt=""/></span>
                                  <h4><a href="#">Sr. Full Stack Engineer</a></h4>
                                  <ul class="job-info">
                                    <li><span class="icon flaticon-briefcase"></span> Segment</li>
                                    <li><span class="icon flaticon-map-locator"></span> London, UK</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td>Dec 5, 2020</td>
                          <td class="status">Active</td>
                          <td>
                            <div class="option-box">
                              <ul class="option-list">
                                <li><button data-text="View Aplication"><span class="la la-eye"></span></button></li>

                              </ul>
                            </div>
                          </td>
                        </tr>

                        <tr>
                          <td>
                          
                            <div class="job-block">
                              <div class="inner-box">
                                <div class="content">
                                  <span class="company-logo"><img src="images/resource/company-logo/1-4.png" alt=""/></span>
                                  <h4><a href="#">Product Manager, Studio</a></h4>
                                  <ul class="job-info">
                                    <li><span class="icon flaticon-briefcase"></span> Segment</li>
                                    <li><span class="icon flaticon-map-locator"></span> London, UK</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td>Dec 5, 2020</td>
                          <td class="status">Active</td>
                          <td>
                            <div class="option-box">
                              <ul class="option-list">
                                <li><button data-text="View Aplication"><span class="la la-eye"></span></button></li>
                             
                              </ul>
                            </div>
                          </td>
                        </tr>
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
  )
}

export default ShortListJobs
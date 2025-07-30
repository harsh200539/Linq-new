import "../../src/css/styles.css"
import '../css/JoinOurTeam.css'
import { Navbar } from "./navbar"
import life1 from "../../src/images/life1.jpg";
import WhyChooseimg from '../images/whyus.jpg'
import Footer from "./footer";
import { useNavigate } from "react-router-dom"


export function JoinOurTeam() {
    const navigate= useNavigate ()
  return (
  
   <div>
<Navbar />
 <section class="py-5">
        <div class="container">
            <div class="row align-items-center ">
                <div class="col-lg-6">
                    <h2 class="display-6 fw-bold mb-2">Why Choose LINQ?</h2>
                    <p class="lead text-muted mb-3">At LINQ Corporate Solutions, we believe in fostering innovation, collaboration, and professional growth. Our team of 350+ professionals across two shifts ensures 24/7 research and client service delivery.</p>
                    <ul class="list-unstyled lead text-muted mb-3">
                        <li class="mb-2"><i class="fas fa-check text-warning me-2"></i> Global reach with local expertise</li>
                        <li class="mb-2"><i class="fas fa-check text-warning me-2"></i> Cutting-edge research methodologies</li>
                        <li class="mb-2"><i class="fas fa-check text-warning me-2"></i> Collaborative work environment</li>
                        <li class="mb-2"><i class="fas fa-check text-warning me-2"></i> Continuous learning opportunities</li>
                    </ul>
                </div>
                <div class="col-lg-6">
                    <img src={WhyChooseimg} alt="Team collaboration" class="img-fluid w-75 "/>
                </div>
            </div>
        </div>
    </section>

 {/* <section id="" className="py-5 py-md-5 py-lg-5 bg-linq-white text-linq-black">
      <div className="container">
        <div className="row align-items-center g-4 g-lg-5">
          <div className="col-lg-6 d-flex align-items-center justify-content-center order-lg-first">
            <div className="Aboutus" >
              <img  src={Aboutimg}/>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="d-flex flex-column justify-content-center space-y-4">
              <div className="mb-4">
                <h2 className="display-6 fw-bold mb-2">About Us</h2>
                <h3 className="h4 fw-semibold text-linq-dark mb-3">Work Locally, Make a Global Impact.</h3>
                <p className="lead text-muted mb-3">
                  LINQ Corporate Solutions Pvt. Ltd. is a dynamic market research and strategic advisory firm
                  headquartered in Vadodara, Gujarat. With a client base spanning 41 countries and experience across 8
                  core industries, we bring together global intelligence and local expertise to deliver powerful
                  insights and results.
                </p>
                <p className="lead text-muted">
                  Our dedicated team of 350+ professionals (150 in India and 200 internationally) operates in two
                  shifts, ensuring 24/7 research and client service delivery. Whether it’s in-depth data analysis,
                  strategic consulting, or full-stack digital support, LINQ is your partner in innovation and execution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> */}

 <section class="looking-for-section bg-linq-dark " id="positions">
        <div class="container">
            <div class="text-center mb-5">
                <h2 class="display-7 fw-bold mb-2 text-linq-white">We're Looking For</h2>
                <p class="lead text-linq-white">Join our talented team and help us deliver exceptional results to clients worldwide</p>
            </div>
            <div class="row">
                <div class="col-lg-6 mb-4">
                    <div class="position-card">
                        <h5><i class="fas fa-chart-line me-2"></i>Market Research Analysts</h5>
                        <p class="mb-3">Conduct in-depth data analysis to provide actionable market insights across various industries.</p>
                        <ul class="list-unstyled mb-3">
                            <li><small><i class="fas fa-map-marker-alt me-1"></i> Vadodara, India</small></li>
                            <li><small><i class="fas fa-clock me-1"></i> Full-time</small></li>
                            <li><small><i class="fas fa-graduation-cap me-1"></i> Bachelor's in Business/Economics</small></li>
                        </ul>
                        <button class="btn btn-outline-primary btn-sm" onClick={() => navigate("/JobDescription")}>Apply Now</button>
                    </div>
                </div>
                <div class="col-lg-6 mb-4">
                    <div class="position-card">
                        <h5><i class="fas fa-lightbulb me-2"></i>Strategic Advisors</h5>
                        <p class="mb-3">Conduct in-depth data analysis to provide actionable market insights across various industries.</p>
                        <ul class="list-unstyled mb-3">
                            <li><small><i class="fas fa-map-marker-alt me-1"></i> Vadodara, India</small></li>
                            <li><small><i class="fas fa-clock me-1"></i> Full-time</small></li>
                            <li><small><i class="fas fa-graduation-cap me-1"></i> MBA preferred</small></li>
                        </ul>
                        <button class="btn btn-outline-primary btn-sm">Apply Now</button>
                    </div>
                </div>
                <div class="col-lg-6 mb-4">
                    <div class="position-card">
                        <h5><i class="fas fa-database me-2"></i>Data Management Specialists</h5>
                        <p class="mb-3">Conduct in-depth data analysis to provide actionable market insights across various industries.</p>
                        <ul class="list-unstyled mb-3">
                            <li><small><i class="fas fa-map-marker-alt me-1"></i> Vadodara, India</small></li>
                            <li><small><i class="fas fa-clock me-1"></i> Full-time</small></li>
                            <li><small><i class="fas fa-graduation-cap me-1"></i> Computer Science/IT</small></li>
                        </ul>
                        <button class="btn btn-outline-primary btn-sm">Apply Now</button>
                    </div>
                </div>
                <div class="col-lg-6 mb-4">
                    <div class="position-card">
                        <h5><i class="fas fa-code me-2"></i>Web Developers</h5>
                        <p class="mb-3">Conduct in-depth data analysis to provide actionable market insights across various industries.</p>
                        <ul class="list-unstyled mb-3">
                            <li><small><i class="fas fa-map-marker-alt me-1"></i> Vadodara, India</small></li>
                            <li><small><i class="fas fa-clock me-1"></i> Full-time</small></li>
                            <li><small><i class="fas fa-graduation-cap me-1"></i> Computer Science/Web Development</small></li>
                        </ul>
                        <button class="btn btn-outline-primary btn-sm">Apply Now</button>
                    </div>
                </div>
                {/* <div class="col-lg-6 mb-4">
                    <div class="position-card">
                        <h5><i class="fas fa-chart-bar me-2"></i>Industry Intelligence Analysts</h5>
                        <p class="mb-3">Conduct in-depth data analysis to provide actionable market insights across various industries.</p>
                        <ul class="list-unstyled mb-3">
                            <li><small><i class="fas fa-map-marker-alt me-1"></i> Vadodara, India</small></li>
                            <li><small><i class="fas fa-clock me-1"></i> Full-time</small></li>
                            <li><small><i class="fas fa-graduation-cap me-1"></i> Industry-specific background preferred</small></li>
                        </ul>
                        <button class="btn btn-outline-primary btn-sm">Apply Now</button>
                    </div>
                </div> */}
                {/* <div class="col-lg-6 mb-4">
                    <div class="position-card">
                        <h5><i class="fas fa-bullhorn me-2"></i>Marketing & Operations Support</h5>
                        <p class="mb-3">Conduct in-depth data analysis to provide actionable market insights across various industries.</p>
                        <ul class="list-unstyled mb-3">
                            <li><small><i class="fas fa-map-marker-alt me-1"></i> Vadodara, India</small></li>
                            <li><small><i class="fas fa-clock me-1"></i> Full-time</small></li>
                            <li><small><i class="fas fa-graduation-cap me-1"></i> Marketing/Business Administration</small></li>
                        </ul>
                        <button class="btn btn-outline-primary btn-sm">Apply Now</button>
                    </div>
                </div> */}
            </div>
        </div>
    </section>


    <section class="application-section ">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-8">
                    <div class="text-center mb-5">
                        <h2 class="section-title">Ready to Join Us?</h2>
                        <p class="lead">Send us your application and become part of our innovative team</p>
                    </div>
                    <div class="card shadow">
                        <div class="card-body p-5">
                            <form>
                                <div class="row">
                                    <div class="col-md-6 mb-3">
                                        <label for="firstName" class="form-label">First Name</label>
                                        <input type="text" class="form-control" id="firstName" required/>
                                    </div>
                                    <div class="col-md-6 mb-3">
                                        <label for="lastName" class="form-label">Last Name</label>
                                        <input type="text" class="form-control" id="lastName" required/>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6 mb-3">
                                        <label for="email" class="form-label">Email</label>
                                        <input type="email" class="form-control" id="email" required/>
                                    </div>
                                    <div class="col-md-6 mb-3">
                                        <label for="phone" class="form-label">Phone</label>
                                        <input type="tel" class="form-control" id="phone" required/>
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label for="position" class="form-label">Position of Interest</label>
                                    <select class="form-select" id="position" required>
                                        <option value="">Select a position</option>
                                        <option value="market-research">Market Research Analyst</option>
                                        <option value="strategic-advisor">Strategic Advisor</option>
                                        <option value="data-management">Data Management Specialist</option>
                                        <option value="web-developer">Web Developer</option>
                                        <option value="industry-analyst">Industry Intelligence Analyst</option>
                                        <option value="marketing-operations">Marketing & Operations Support</option>
                                    </select>
                                </div>
                                <div class="mb-3">
                                    <label for="resume" class="form-label">Resume/CV</label>
                                    <input type="file" class="form-control" id="resume" accept=".pdf,.doc,.docx" required/>
                                </div>
                                <div class="mb-3">
                                    <label for="coverLetter" class="form-label">Cover Letter</label>
                                    <textarea class="form-control" id="coverLetter" rows="4" placeholder="Tell us why you'd be a great fit for our team..."></textarea>
                                </div>
                                <div class="text-center">
                                    <button type="submit" class="btn btn-lg btn-linq-primary">Submit Application</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

   <Footer />
   </div>
  
  )
}

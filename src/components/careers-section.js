import "../../src/css/styles.css"
import Careers from '../images/Careers.jpg'
export function CareersSection() {
  return (
    <section id="careers" className="py-5 py-md-5 py-lg-5 bg-linq-white text-linq-black">
      <div className="container">
        <div className="row align-items-center g-4 g-lg-5">
          <div className="col-lg-6 d-flex align-items-center justify-content-center order-lg-first">
            <div className="position-relative w-100">
              <img
                src={Careers}
                alt="Career Growth"
                className="img-fluid rounded-3 object-fit-cover w-100 h-100 img-hover-zoom"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="d-flex flex-column justify-content-center space-y-4">
              <div className="mb-4">
                <h2 className="display-5 fw-bold mb-3">Careers</h2>
                <p className="lead text-muted mb-3">
                  At LINQ, we believe in fast-tracked growth, meaningful work, and global exposure—without having to
                  leave home country. Our teams are empowered to take ownership, lead projects, and grow professionally
                  with full support.
                </p>
                <ul className="list-unstyled text-muted mb-4">
                  <li>• Structured onboarding</li>
                  <li>• Internal mobility & leadership paths</li>
                  <li>• Mentorship & training programs</li>
                  <li>• Recognition & rewards system</li>
                </ul>
                <p className="lead text-muted mb-3">
                  LINQ Corporate Solutions Pvt. Ltd. is an Equal Opportunity Employer. Join us and help drive tomorrow’s
                  innovations.
                </p>
                <p className="h5 fw-semibold text-linq-dark">Our motto: Work Hard. Play Hard. Grow Fast.</p>
              </div>
              <div className="d-flex flex-column flex-sm-row gap-2">
                <a href="#careers" className="btn btn-lg btn-dark ">
                  Join Our Team ➝
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

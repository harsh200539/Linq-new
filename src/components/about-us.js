import "../../src/css/styles.css"
import Aboutimg from '../images/AboutUs.jpg'
export function AboutUs() {
  return (
    <section id="about" className="py-5 py-md-5 py-lg-5 bg-linq-white text-linq-black">
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
                <h2 className="display-5 fw-bold mb-2">About Us</h2>
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
    </section>
  )
}
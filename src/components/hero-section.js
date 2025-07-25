import { Network, MessageSquare, Sprout } from "lucide-react"
import "../../src/css/styles.css"
import img_main from "../../src/images/home_img2.jpg"
import heroimg from '../images/Hero-img/2.jpg'
export function HeroSection() {
  return (
    <section id="home" className="py-5 py-md-5 py-lg-5 bg-linq-dark text-linq-white position-relative overflow-hidden">
      <div className="container">
        <div className="row align-items-center g-4 g-lg-5">
          <div className="col-lg-6">
            <div className="d-flex flex-column justify-content-center space-y-4">
              <div className="mb-4">
                <h1 className="display-4 fw-bold mb-2">Welcome to LINQ Corporate Solutions Pvt. Ltd.</h1>
                <p className="lead text-linq-white-50">
                  We specialize in delivering data-driven insights, strategic advisory, and global research services.
                </p>
              </div>
              <div className="row row-cols-1 row-cols-md-3 g-3 mb-4">
                <div className="col">
                  <div className="card text-center p-3 h-100 hero-linq-card">
                    <Network className="mx-auto mb-2" size={40} />
                    <h3 className="h5 fw-bold">Connect</h3>
                    <p className="card-text text-linq-white-75">Bringing people, ideas, or industries together.</p>
                  </div>
                </div>
                <div className="col">
                  <div className="card text-center p-3 h-100 hero-linq-card">
                    <MessageSquare className="mx-auto mb-2" size={40} />
                    <h3 className="h5 fw-bold">Communicate</h3>
                    <p className="card-text text-linq-white-75">
                      Emphasizes the exchange of knowledge, insights, and updates.
                    </p>
                  </div>
                </div>
                <div className="col">
                  <div className="card text-center p-3 h-100 hero-linq-card">
                    <Sprout className="mx-auto mb-2" size={40} />
                    <h3 className="h5 fw-bold">Cultivate</h3>
                    <p className="card-text text-linq-white-75">
                      Encouraging deeper understanding of trends and future directions.
                    </p>
                  </div>
                </div>
              </div>
              <div className="d-flex flex-column flex-sm-row gap-2">
                <a href="#contact" className="btn btn-lg btn-light ">
                  Get in Touch
                </a>
                <a href="#about" className="btn btn-lg btn-outline-light">
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 d-flex align-items-center justify-content-center">
            <div className="position-relative w-100" style={{ height: "600px" }}>
              <img
                src={heroimg}
                alt="Global Network"
                className="img-fluid rounded-3 object-fit-cover w-100 h-100 img-hover-zoom"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

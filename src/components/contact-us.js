import { MapPin, Mail, Phone, Linkedin, Twitter, Facebook, MessageCircle} from "lucide-react"
import { FaWhatsapp } from "react-icons/fa";
import { ContactForm } from "./contact-form.js"
import "../../src/css/styles.css"
import map from '../images/map.png'
export function ContactUs() {
  return (
    <section id="contact" className="pt-5 pt-md-5 pt-lg-5 bg-linq-dark text-linq-white pb-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-6 fw-bold mb-3">Contact Us</h2>
          <p className="lead text-linq-white-50 mx-auto" style={{ maxWidth: "700px" }}>
            We're always open to partnerships, talent, and conversations. Reach out to us!
          </p>
        </div>

        <div className="row g-5">
          <div className="col-lg-6">
            <div className="mb-5">
              <h3 className="h4 fw-bold text-linq-white mb-4">Get in Touch</h3>
              <div className="d-flex align-items-start mb-3">
                <MapPin className="text-linq-white me-3 mt-1" size={24} />
                <p className="text-linq-white">
                  Nilamber Corporate Park, Building C, 2nd Floor, Nilamber Circle, Vadodara, Gujarat 390007
                </p>
              </div>
              <div className="d-flex align-items-center mb-3">
                <Mail className="text-linq-white me-3" size={24} />
                <a href="mailto:hr.ns@linq-corporate.com" className="text-linq-white-75 text-decoration-none text-white">
                  hr.ds@linq-corporate.com /  hr.ns@linq-corporate.com
                </a>
              </div>
              <div className="d-flex align-items-center mb-3">
                <Phone className="text-linq-white me-3" size={24} />
                <a href="tel:+919377333411" className="text-linq-white-75 text-decoration-none text-white">
                  +91 9377333411
                </a>
              </div>
            </div>

            <div>
              <h3 className="h4 fw-bold text-linq-white mb-4">Follow Us</h3>
              <div className="d-flex gap-4">
                <a href="https://www.linkedin.com/company/linq-corporate-solutions-pvt-ltd/" aria-label="LinkedIn" className="text-linq-white">
                  <Linkedin size={32} />
                </a>
                {/* <a href="#" aria-label="Twitter" className="text-linq-white">
                  <Twitter size={32} />
                </a> */}
                {/* <a href="#" aria-label="Facebook" className="text-linq-white">
                  <Facebook size={32} />
                </a> */}
                 <a href="#" aria-label="Facebook" className="text-linq-white">
                 <FaWhatsapp  size={32}/>
                </a>
               <a
  href="https://maps.app.goo.gl/nrnhtJhnDdWukPfy9"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="MapPin"
  className="text-linq-white">
  <MapPin size={32} />
</a>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <ContactForm />
          </div>
        </div>

        
      </div>
      {/* <div className="mt-5 w-100" style={{ height: "400px" }}>
          <img
            src={map}
            alt="Location of LINQ Corporate Solutions in Vadodara"
            className="img-fluid rounded-3 object-fit-cover w-100 h-100"
          />
        </div> */}
    </section>
  )
}

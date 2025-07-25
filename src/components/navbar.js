import { Mountain, Menu } from "lucide-react"
import "../../src/css/styles.css"
import logo from '../images/logo-light.png'
export function Navbar() {
  return (
  
  <header className="navbar navbar-expand-lg navbar-dark navbar_linq bg-linq-dark py-3">
     
      <div className="container">
        {/* <a href="#" className="navbar-brand d-flex align-items-center">
          <Mountain className="me-2" size={24} />
          <span className="text-linq-white">LINQ Corporate Solutions</span>
        </a> */}
        <img src={logo} />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <Menu size={24} />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item mx-2">
              <a href="#home" className="nav-link text-linq-white">
                Home
              </a>
            </li>
            <li className="nav-item mx-2">
              <a href="#about" className="nav-link text-linq-white">
                About Us
              </a>
            </li>
            <li className="nav-item mx-2">
              <a href="#services" className="nav-link text-linq-white">
                What We Do
              </a>
            </li>
            <li className="nav-item mx-2">
              <a href="#industries" className="nav-link text-linq-white">
                Industries
              </a>
            </li>
            <li className="nav-item mx-2">
              <a href="#careers" className="nav-link text-linq-white">
                Careers
              </a>
            </li>
            <li className="nav-item mx-2">
              <a href="#contact" className="nav-link text-linq-white">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
   
    </header>
    
  
  )
}

import { Mountain, Menu } from "lucide-react"
import "../../src/css/styles.css"
import logo from '../images/logo-light.png'
import { useNavigate, useLocation } from "react-router-dom"

export function Navbar() {
 const navigate= useNavigate ()
 const location = useLocation()

 const isHomePage = location.pathname === '/' || location.pathname === '/home'

 const handleNavClick = (sectionId, route = null) => {
    if (isHomePage && !route) {
      // We're on home page, scroll to section
      scrollToSection(sectionId)
    } else {
      // We're on a different page, navigate to home and then scroll
      navigate('/')
      // Use setTimeout to ensure navigation completes before scrolling
      setTimeout(() => {
        scrollToSection(sectionId)
      }, 100)
    }
  }

  // Function to handle smooth scrolling
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  // return (
  
  // // <header className="navbar navbar-expand-lg navbar-dark navbar_linq  py-3 fixed-top ">
     
  // //     <div className="container">
  // //       {/* <a href="#" className="navbar-brand d-flex align-items-center">
  // //         <Mountain className="me-2" size={24} />
  // //         <span className="text-linq-white">LINQ Corporate Solutions</span>
  // //       </a> */}
  // //       <img src={logo}  onClick={() => navigate("/")}/>
  // //       <button
  // //         className="navbar-toggler"
  // //         type="button"
  // //         data-bs-toggle="collapse"
  // //         data-bs-target="#navbarNav"
  // //         aria-controls="navbarNav"
  // //         aria-expanded="false"
  // //         aria-label="Toggle navigation"
  // //       >
  // //         <Menu size={24} />
  // //       </button>
  // //       <div className="collapse navbar-collapse" id="navbarNav">
  // //         <ul className="navbar-nav ms-auto">
  // //           <li className="nav-item mx-2">
  // //             <a href="#home" className="nav-link text-linq-white"  onClick={() => navigate("/")}>
  // //               Home
  // //             </a>
  // //           </li>
  // //           <li className="nav-item mx-2">
  // //             <a href="#about" className="nav-link text-linq-white">
  // //               About Us
  // //             </a>
  // //           </li>
  // //           <li className="nav-item mx-2">
  // //             <a href="#services" className="nav-link text-linq-white">
  // //               What We Do
  // //             </a>
  // //           </li>
  // //           <li className="nav-item mx-2">
  // //             <a href="#industries" className="nav-link text-linq-white">
  // //               Industries
  // //             </a>
  // //           </li>
  // //           <li className="nav-item mx-2">
  // //             <a href="#careers" className="nav-link text-linq-white">
  // //               Careers
  // //             </a>
  // //           </li>
  // //           <li className="nav-item mx-2">
  // //             <a href="#contact" className="nav-link text-linq-white">
  // //               Contact Us
  // //             </a>
  // //           </li>
  // //         </ul>
  // //       </div>
  // //     </div>
   
  // //   </header>

  // <header className="navbar navbar-expand-lg navbar-dark navbar_linq py-3 fixed-top">
  //     <div className="container">
  //       <img 
  //         src={logo} 
  //         onClick={() => navigate("/")}
  //         style={{ cursor: 'pointer' }}
  //         alt="LINQ Logo"
  //       />
        
  //       <button
  //         className="navbar-toggler"
  //         type="button"
  //         data-bs-toggle="collapse"
  //         data-bs-target="#navbarNav"
  //         aria-controls="navbarNav"
  //         aria-expanded="false"
  //         aria-label="Toggle navigation"
  //       >
  //         <Menu size={24} />
  //       </button>
        
  //       <div className="collapse navbar-collapse" id="navbarNav">
  //         <ul className="navbar-nav ms-auto">
  //           <li className="nav-item mx-2">
  //             <button 
  //               className="nav-link text-linq-white bg-transparent border-0"
  //               onClick={() => navigate("/")}
  //             >
  //               Home
  //             </button>
  //           </li>
  //           <li className="nav-item mx-2">
  //             <button 
  //               className="nav-link text-linq-white bg-transparent border-0"
  //               onClick={() => scrollToSection('about')}
  //             >
  //               About Us
  //             </button>
  //           </li>
  //           <li className="nav-item mx-2">
  //             <button 
  //               className="nav-link text-linq-white bg-transparent border-0"
  //               onClick={() => scrollToSection('services')}
  //             >
  //               What We Do
  //             </button>
  //           </li>
  //           <li className="nav-item mx-2">
  //             <button 
  //               className="nav-link text-linq-white bg-transparent border-0"
  //               onClick={() => scrollToSection('industries')}
  //             >
  //               Industries
  //             </button>
  //           </li>
  //           <li className="nav-item mx-2">
  //             <button 
  //               className="nav-link text-linq-white bg-transparent border-0"
  //               onClick={() => scrollToSection('careers')}
  //             >
  //               Careers
  //             </button>
  //           </li>
  //           <li className="nav-item mx-2">
  //             <button 
  //               className="nav-link text-linq-white bg-transparent border-0"
  //               onClick={() => scrollToSection('contact')}
  //             >
  //               Contact Us
  //             </button>
  //           </li>
  //         </ul>
  //       </div>
  //     </div>
  //   </header>
    
  
  // )
  return (
    <header className="navbar navbar-expand-lg navbar-dark navbar_linq py-3 fixed-top">
      <div className="container">
        <img 
          src={logo} 
          // onClick={() => navigate("/")}
          onClick={() => handleNavClick('home')}
          style={{ cursor: 'pointer' }}
          alt="LINQ Logo"
        />
        
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
              <button 
                className="nav-link text-linq-white bg-transparent border-0"
                // onClick={() => navigate("/")}
                onClick={() => handleNavClick('home')}
              >
                Home
              </button>
            </li>
            <li className="nav-item mx-2">
              <button 
                className="nav-link text-linq-white bg-transparent border-0"
                onClick={() => handleNavClick('about')}
              >
                About Us
              </button>
            </li>
            <li className="nav-item mx-2">
              <button 
                className="nav-link text-linq-white bg-transparent border-0"
                onClick={() => handleNavClick('services')}
              >
                What We Do
              </button>
            </li>
            <li className="nav-item mx-2">
              <button 
                className="nav-link text-linq-white bg-transparent border-0"
                onClick={() => handleNavClick('life-at-linq')}
              >
                Life at Linq
              </button>
            </li>
            <li className="nav-item mx-2">
              <button 
                className="nav-link text-linq-white bg-transparent border-0"
                onClick={() => handleNavClick('careers')}
              >
                Careers
              </button>
            </li>
            <li className="nav-item mx-2">
              <button 
                className="nav-link text-linq-white bg-transparent border-0"
                onClick={() => handleNavClick('contact')}
              >
                Contact Us
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

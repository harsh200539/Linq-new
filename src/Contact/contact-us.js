"use client";

import {
  MapPin,
  Mail,
  Phone,
  Clock,
  LocateFixed,
} from "lucide-react";
import office from "../images/Get_In_Touch/GET_IN_TOUCH.webp";
import "../css/LandingSections.css";

export function ContactUs() {
  const bgSrc = office.src || office;

  return (
    <section
      id="contact"
      className="get_in_touch position-relative"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0.96) 0%, rgba(255, 255, 255, 0.85) 100%), url(${bgSrc})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "120px 0",
        marginTop: "-100px",
      }}
    >
      <div className="container">
        <div className="premium-section-header" data-aos="fade-up">
          <div className="premium-label">
            <span className="premium-label-dot" />
            Get In Touch
          </div>
          <h2 className="premium-title">
            <span className="premium-gradient-text">Contact</span> Us
          </h2>
          <p className="premium-subtitle">
            We're always open to partnerships, talent, and conversations. Reach out to us and let's build something great together.
          </p>
        </div>
        <div className="contact-container">
          <div className="contact-card border-0" data-aos="flip-left">
            <div className="icon-wrapper-small">
              <MapPin size={28} strokeWidth={1.5} />
            </div>
            <div className="card-label">Address</div>
            <div className="card-text">
              <p className="mb-0" style={{ color: "#05243c", fontWeight: "700" }}>
                Nilamber Corporate Park, <br />
                Building C, 2nd Floor, Nilamber Circle, <br />
                Vadodara, Gujarat 390007
              </p>
              <div className="mt-3">
                <a
                  href="https://www.google.com/maps?gs_lcrp=EgZjaHJvbWUqDQgBEC4YrwEYxwEYgAQyCggAEAAY4wIYgAQyDQgBEC4YrwEYxwEYgAQyBggCEEUYOzIHCAMQABiABDIHCAQQABiABDIGCAUQRRg8MgYIBhBFGD0yBggHEEUYPdIBCDM4NDhqMGo3qAIAsAIA&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=Ka2KDywAyV85MU7cDL7pSrNO&daddr=Nilamber+Circle,+Saiyed+Vasna,+Vadodara,+Gujarat+390007"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm btn-outline-danger d-inline-flex align-items-center gap-2 p-2 px-3"
                  style={{ borderRadius: "8px" }}
                >
                  <LocateFixed size={18} />
                  Get Directions
                </a>
              </div>
            </div>
          </div>

          <div className="middle-column" data-aos="fade-up">
            <div className="contact-card border-0">
              <div className="icon-wrapper-small">
                <Phone size={28} strokeWidth={1.5} />
              </div>
              <div className="card-label">Mobile</div>
              <div className="card-text mb-4" style={{ color: "#05243c", fontWeight: "700" }}>+91 9377333411</div>

              <div className="icon-wrapper-small">
                <Mail size={28} strokeWidth={1.5} />
              </div>
              <div className="card-label">Email</div>
              <div className="card-text" style={{ color: "#05243c", fontWeight: "700" }}>
                hr.ds@linq-corporate.com <br />
                hr.ns@linq-corporate.com
              </div>
            </div>
          </div>

          <div className="contact-card border-0" data-aos="flip-right">
            <div className="icon-wrapper-small">
              <Clock size={28} strokeWidth={1.5} />
            </div>
            <div className="card-label">Availability</div>
            <div className="card-text">
              <p className="mb-3">Our office operates 24×7. Standard shift timings:</p>
              <div style={{ color: "#05243c", fontWeight: "700" }}>
                <p className="mb-1">Day Shift: 9:30 AM to 6:00 PM</p>
                <p className="mb-0">Night Shift: 6:30 PM to 3:30 AM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

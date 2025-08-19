"use client"
import "../../src/css/styles.css"
export function ContactForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    // Handle form submission logic here (e.g., send data to an API)
    console.log("Form submitted!")
    alert("Thank you for your message! We will get back to you soon.")
    event.target.reset() // Reset form after submission
  }

  return (
    <form
  action="mailto:sam.razura@iq-hub.com"
  method="POST"
  encType="text/plain"
  className="card p-4 linq-card"
>
  <h3 className="h4 fw-bold text-linq-dark mb-4">Send us a message</h3>
  <div className="mb-3">
    <label htmlFor="name" className="form-label">Name</label>
    <input type="text" className="form-control" id="name" placeholder="Your Name" required />
  </div>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email</label>
    <input type="email" className="form-control" id="email" placeholder="your@example.com" required />
  </div>
  <div className="mb-3">
    <label htmlFor="subject" className="form-label">Subject</label>
    <input type="text" className="form-control" id="subject" placeholder="Subject of your inquiry" required />
  </div>
  <div className="mb-3">
    <label htmlFor="message" className="form-label">Message</label>
    <textarea className="form-control" id="message" placeholder="Your message..." rows="2" required></textarea>
  </div>
  <button type="submit" className="btn btn-lg btn-linq-primary w-100">
    Send Message
  </button>
</form>
  )
}

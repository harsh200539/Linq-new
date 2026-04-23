"use client";
import { Navbar } from "./Shared/navbar";
import Footer from "./Shared/footer";
import LinqHome from "./Landing/LinqHome";
import LifeAtLinqPage from "./LifeAtLinq/LifeAtLinqPage";
import Testimonials from "./Landing/testimonials";
import ContactPage from "./Contact/ContactPage";

export default function App({ testimonials }) {
  return (
    <div className="d-flex flex-column min-vh-100 bg-linq-white text-linq-black">
      <Navbar />
      <main className="flex-grow-1">
        <LinqHome />
        <LifeAtLinqPage />
        <div id="testimonials">
          <Testimonials initialTestimonials={testimonials} />
        </div>
        <ContactPage />
      </main>
      <Footer />
    </div>
  );
}
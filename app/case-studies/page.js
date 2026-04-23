import { Navbar } from "../../src/Shared/navbar";
import Footer from "../../src/Shared/footer";
import { CaseStudiesSection } from "../../src/Landing/CaseStudiesSection";

export const metadata = {
  title: "Case Studies | LINQ Corporate Solutions",
  description: "Explore our successful projects and the tangible impact we've delivered for global enterprise clients.",
};

export default function CaseStudiesPage() {
  return (
    <div className="min-vh-100 d-flex flex-column bg-white">
      <Navbar />
      <main className="flex-grow-1 pt-5">
        <CaseStudiesSection />
      </main>
      <Footer />
    </div>
  );
}

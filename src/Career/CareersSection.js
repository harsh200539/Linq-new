"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import CareersAnimatedList from "./CareersAnimatedList.js";
import ProjectCardList from "../Services/ProjectCardList.js";

const CAREERS_IMAGE = "/about/careers.webp";

export function CareersSection({ jobs }) {
  const router = useRouter();

  return (
    <section
      id="careers"
      className="py-5 py-md-5 py-lg-5 bg-linq-white text-linq-black position-relative overflow-hidden"
    >
      {/* Background Decoration - Only shown when jobs > 2 */}
      {jobs.length > 2 && (
        <div 
          className="position-absolute d-none d-lg-block"
          style={{ 
            top: '10%',
            right: '-10%',
            width: '700px',
            height: '700px',
            opacity: 0.05,
            filter: 'blur(10px)',
            zIndex: 0,
            pointerEvents: 'none'
          }}
        >
          <Image 
            src={CAREERS_IMAGE} 
            alt="Background Decoration" 
            fill 
            style={{ objectFit: 'contain' }}
          />
        </div>
      )}


      <div className="container position-relative" style={{ zIndex: 1, maxWidth: jobs.length > 2 ? '1100px' : '1320px' }}>
        <div className="row align-items-center g-4 g-lg-5">
          <div className="col-lg-12">
            <div className="d-flex flex-column justify-content-center space-y-4">
              <div className="mb-4">
                <h2 className="display-6 fw-bold mb-3 text-linq-dark text-center" data-aos="fade-up" data-aos-offset="-200">
                  Careers
                </h2>
                <p className="lead text-muted mb-3 text-center mx-auto" style={{ maxWidth: '800px' }} data-aos="fade-up" data-aos-offset="-200">
                  At LINQ, we believe in fast-tracked growth, meaningful work,
                  and global exposure—without having to leave your home country.
                </p>





              </div>
              <div className="row">
                {/* Column 1: Project Card List (Carousel) - Expanded */}
                <div className="col-lg-8 col-md-12 mb-4" data-aos="fade-up" data-aos-offset="-200" data-aos-delay="100">
                  <ProjectCardList initialJobs={jobs} />
                </div>

                {/* Column 2: Careers Animated List */}
                <div className="col-lg-4 col-md-12 mb-4" data-aos="fade-up" data-aos-offset="-200">
                  <CareersAnimatedList />
                </div>
              </div>

            </div>
          </div>
        </div>
        <div className="text-center mt-4 d-flex flex-wrap justify-content-center gap-3">
          <button
            href="#life-at-linq"
            className="Discover_Life_at_Linq" onClick={() => router.push("/view-our-team")}>
            View our Team
          </button>
          <button
            className="Discover_Life_at_Linq" 
            style={{ background: 'var(--linq-black)', color: 'white' }}
            onClick={() => router.push("/careers")}>
            Explore All Careers
          </button>
        </div>

      </div>
    </section>
  );
}

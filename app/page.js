import App from "../src/App";
import { fetchJobs, fetchMembers, fetchTestimonials } from "../src/lib/api";

// -> THESE SEO TAGS ARE FOR THE MAIN HOMEPAGE (LINQHOME) <-
// (They cover the Hero Section, Services, Testimonials, etc., shown on the root URL)
export const metadata = {
  title: "LINQ Corporate Solutions pvt ltd",
  description: "LINQ drives IQHUB's global operations from India — specializing in data mining, sales telecalling, web development, graphic design, market research, and large-scale event handling across 12+ industries including Healthcare, Defence, and Aviation.",
  alternates: {
    canonical: "https://linq-corporate.vercel.app",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "LINQ Corporate Solutions pvt ltd",
    description: "From data mining to event management, LINQ is the internal force behind IQHUB's success across Oil & Gas, Pharma, Biotech, Automotive, and more.",
  },
  twitter: {
    card: "summary_large_image",
    title: "LINQ Corporate Solutions pvt ltd",
    description:
      "From data mining to event management, LINQ is the internal force behind IQHUB's success across Oil & Gas, Pharma, Biotech, Automotive, and more.",
  },
};

export default async function Home() {
  // Server-side fetching
  const [jobs, members, testimonials] = await Promise.all([
    fetchJobs(),
    fetchMembers(),
    fetchTestimonials()
  ]);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "LINQ Corporate Solutions",
    "alternateName": "LINQ",
    "url": "https://linq-corporate.vercel.app",
    "logo": "https://linq-corporate.vercel.app/logo.png",
    "parentOrganization": {
      "@type": "Organization",
      "name": "IQHUB",
      "url": "https://iqhub.com"
    },
    "description": "The dedicated operational arm of IQHUB specializing in data-driven business solutions."
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <App jobs={jobs} members={members} testimonials={testimonials} />
    </>
  );
}

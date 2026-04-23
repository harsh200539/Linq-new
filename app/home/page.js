import App from "../../src/App";
import { fetchJobs, fetchMembers, fetchTestimonials } from "../../src/lib/api";

export const metadata = {
  title: "Home | LINQ Corporate Solutions",
  description: "Welcome to LINQ Corporate Solutions. Transforming Data into Strategic Advantage.",
};

export default async function HomePage() {
  const [jobs, members, testimonials] = await Promise.all([
    fetchJobs(),
    fetchMembers(),
    fetchTestimonials()
  ]);

  return <App jobs={jobs} members={members} testimonials={testimonials} />;
}

import CareerGrowth from "../../src/Career/career-growth";
import { fetchMembers } from "../../src/lib/api";

// -> THESE SEO TAGS ARE STRICTLY FOR THE "CAREER GROWTH" ROOT PAGE <-
export const metadata = {
  title: "LINQ Corporate Solutions pvt ltd",
  description:
    "Explore how LINQ team members grow professionally within IQHUB's ecosystem. Read team spotlights and career journeys from professionals across data, tech, design, and sales in India.",

  alternates: {
    canonical: "https://linq-corporate.vercel.app/career-growth",
  },

  openGraph: {
    title: "LINQ Corporate Solutions pvt ltd",
    description:
      "At LINQ, your career isn't just a job — it's a journey. See how our people are growing within IQHUB across 12+ global industries.",
    url: "https://linq-corporate.vercel.app/career-growth",
    images: [
      {
        url: "/og-career-growth.jpg",
        width: 1200,
        height: 630,
        alt: "Career Growth at LINQ",
      },
    ],
  },
};

export default async function Page() {
  const members = await fetchMembers();
  return <CareerGrowth members={members} />;
}

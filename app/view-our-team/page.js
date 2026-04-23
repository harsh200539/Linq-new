import ViewOurTeam from "../../src/LifeAtLinq/viewourteam";

// -> THESE SEO TAGS ARE STRICTLY FOR THE "VIEW OUR TEAM" PAGE <-
// (Powered by frontend component: src/LifeAtLinq/viewourteam.js)
export const metadata = {
  title: "LINQ Corporate Solutions pvt ltd",
  description: "Meet the talented professionals at LINQ who drive IQHUB's internal operations — from data analysts and web developers to sales specialists, designers, and market researchers based in India.",
  alternates: {
    canonical: "https://linq-corporate.vercel.app/view-our-team",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "LINQ Corporate Solutions pvt ltd",
    description: "Discover the driven individuals at LINQ who bring IQHUB's vision to life every day across industries like Cybersecurity, Sustainability, Biotechnology, and Deep Sea Mining.",
    url: "https://linq-corporate.vercel.app/view-our-team",
  },
  twitter: {
    card: "summary_large_image",
    title: "LINQ Corporate Solutions pvt ltd",
    description:
      "Discover the driven individuals at LINQ who bring IQHUB's vision to life every day across industries like Cybersecurity, Sustainability, Biotechnology, and Deep Sea Mining.",
    images: ["/og-team.jpg"],
  },
};

export default function Page() {
  return <ViewOurTeam />;
}

import { CASE_STUDIES } from "../../../src/lib/case-studies-data";
import { CaseStudyDetail } from "../../../src/CaseStudies/CaseStudyDetail";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return CASE_STUDIES.map((study) => ({
    slug: study.slug,
  }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const study = CASE_STUDIES.find((s) => s.slug === resolvedParams.slug);
  if (!study) return { title: "Case Study Not Found" };

  return {
    title: `${study.title} | Case Study | LINQ`,
    description: study.shortProblem,
  };
}

export default async function CaseStudyPage({ params }) {
  const resolvedParams = await params;
  const study = CASE_STUDIES.find((s) => s.slug === resolvedParams.slug);

  if (!study) {
    notFound();
  }

  return <CaseStudyDetail study={study} />;
}

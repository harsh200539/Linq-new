import JobDetailClient from '../../../src/components/careers/JobDetailClient';
import { fetchJobs } from '../../../src/lib/api';

/**
 * Generate static paths for all jobs at build time.
 * Required for output: 'export' in Next.js
 */
export async function generateStaticParams() {
  try {
    const jobs = await fetchJobs();
    if (!jobs || jobs.length === 0) return [];
    
    return jobs.map((job) => ({
      id: String(job.id),
    }));
  } catch (error) {
    console.error("Error generating static params for careers:", error);
    return [];
  }
}

/**
 * Dynamic metadata for each job page
 */
export async function generateMetadata({ params }) {
  const { id } = await params;
  const jobs = await fetchJobs();
  const job = jobs?.find(j => String(j.id) === String(id));

  if (!job) {
    return {
      title: 'Job Not Found | LINQ Careers',
    };
  }

  return {
    title: `${job.title} | Careers at LINQ`,
    description: job.description?.substring(0, 160) || `Apply for the ${job.title} position at LINQ.`,
  };
}

/**
 * Server Component Entry Point
 */
export default async function JobDetailPage({ params }) {
  const { id } = await params;
  const jobs = await fetchJobs();
  const job = jobs?.find(j => String(j.id) === String(id));

  return <JobDetailClient job={job} />;
}

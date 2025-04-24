import type { Route } from "./+types/case-studies";
import Navbar from "~/components/navbar";
import Footer from "~/components/footer";
import CaseStudiesHero from "~/components/case-studies/case-studies-hero";
import FeaturedCaseStudy from "~/components/case-studies/featured-case-study";
// {import CaseStudyGrid from "~/components/case-studies/case-study-grid";}
import ResultsMetrics from "~/components/case-studies/results-metrics";
import TestimonialSlider from "~/components/case-studies/testimonial-slider";
import CaseStudiesCta from "~/components/case-studies/case-studies-cta";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Case Studies | NexusGraph" },
    {
      name: "description",
      content:
        "Explore real-world examples of how our knowledge graph and RAG solutions have transformed businesses.",
    },
  ];
}

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-primary-bg text-primary-text">
      <Navbar />
      <CaseStudiesHero />
      <FeaturedCaseStudy />
      <ResultsMetrics />
      {/* { <CaseStudyGrid />} */}
      <TestimonialSlider />
      <CaseStudiesCta />
      <Footer />
    </div>
  );
}

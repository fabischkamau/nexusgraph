import type { Route } from "./+types/technology";
import Navbar from "~/components/navbar";
import Footer from "~/components/footer";
import TechnologyHero from "~/components/technology/technology-hero";
import ArchitectureOverview from "~/components/technology/architecture-overview";
import TechStackExplorer from "~/components/technology/tech-stack-explorer";
import FeatureComparison from "~/components/technology/feature-comparison";
import TechnologyDemo from "~/components/technology/technology-demo";
import TechnologyCta from "~/components/technology/technology-cta";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Technology| NexusGraph" },
    {
      name: "description",
      content:
        "Explore the advanced technology stack powering our knowledge graph and RAG solutions.",
    },
  ];
}

export default function TechnologyPage() {
  return (
    <div className="min-h-screen bg-primary-bg text-primary-text">
      <Navbar />
      <TechnologyHero />
      <ArchitectureOverview />
      <TechStackExplorer />
      <FeatureComparison />
      <TechnologyDemo />
      <TechnologyCta />
      <Footer />
    </div>
  );
}

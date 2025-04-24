import type { Route } from "./+types/solutions";
import Navbar from "~/components/navbar";
import Footer from "~/components/footer";
import SolutionsHero from "~/components/solutions/solutions-hero";
import IndustrySolutions from "~/components/solutions/industry-solutions";
import SolutionArchitecture from "~/components/solutions/solution-architecture";
import SolutionBenefits from "~/components/solutions/solution-benefits";
import SolutionExplorer from "~/components/solutions/solution-explorer";
import SolutionsCta from "~/components/solutions/solutions-cta";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Solutions | NexusGraph" },
    {
      name: "description",
      content:
        "Explore our industry-specific knowledge graph and RAG solutions for your business challenges.",
    },
  ];
}

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-primary-bg text-primary-text">
      <Navbar />
      <SolutionsHero />
      <IndustrySolutions />
      <SolutionArchitecture />
      <SolutionBenefits />
      <SolutionExplorer />
      <SolutionsCta />
      <Footer />
    </div>
  );
}

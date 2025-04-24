import type { Route } from "./+types/services";
import Navbar from "~/components/navbar";
import Footer from "~/components/footer";
import ServicesHero from "~/components/services/services-hero";
import ServicesTabs from "~/components/services/services-tabs";
import ProcessTimeline from "~/components/services/process-timeline";
import TechStack from "~/components/services/tech-stacks";
import ServicesCta from "~/components/services/services-cta";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Services | NexusGraph" },
    {
      name: "description",
      content:
        "Explore our comprehensive range of knowledge graph and RAG implementation services.",
    },
  ];
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-primary-bg text-primary-text">
      <Navbar />
      <ServicesHero />
      <ServicesTabs />
      <ProcessTimeline />
      <TechStack />
      <ServicesCta />
      <Footer />
    </div>
  );
}

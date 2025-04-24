import type { Route } from "./+types/home";
import Hero from "~/components/home/hero";
import Services from "~/components/home/services";
import TechnologyShowcase from "~/components/home/technology-showcase";
import CaseStudy from "~/components/home/case-study";
import CtaSection from "~/components/home/cta-section";
import Footer from "~/components/footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "NexusGraph | Connected Intelligence" },
    {
      name: "description",
      content:
        "Advanced RAG Systems & Knowledge Graph Solutions for Enterprise that unlock the full potential of your data ecosystem.",
    },
  ];
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-primary-bg text-primary-text">
      <Hero />
      <Services />
      <TechnologyShowcase />
      <CaseStudy />
      <CtaSection />
      <Footer />
    </div>
  );
}

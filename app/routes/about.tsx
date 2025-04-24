import type { Route } from "./+types/about";
import Navbar from "~/components/navbar";
import Footer from "~/components/footer";
import AboutHero from "~/components/about/about-hero";
import OurStory from "~/components/about/our-story";
import TeamSection from "~/components/about/team-section";
import Values from "~/components/about/values";
import Partners from "~/components/about/partners";
import AboutCta from "~/components/about/about-cta";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About Us | NexusGraph" },
    {
      name: "description",
      content: "Learn about our mission, team, and values at NexusGraph.",
    },
  ];
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-primary-bg text-primary-text">
      <Navbar />
      <AboutHero />
      <OurStory />
      <Values />
      <TeamSection />
      <Partners />
      <AboutCta />
      <Footer />
    </div>
  );
}

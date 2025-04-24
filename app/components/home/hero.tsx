"use client";

import { useRef } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "~/components/ui/button";
import Navbar from "~/components/navbar";
import GraphVisualization from "~/components/home/graph-visulaization";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  const scrollToNextSection = () => {
    if (sectionRef.current) {
      const nextSection = sectionRef.current.nextElementSibling;
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center"
    >
      <Navbar />
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gradient leading-tight">
            Transform Data Into Connected Intelligence
          </h1>
          <p className="text-lg md:text-xl text-secondary-text mb-10 max-w-xl">
            We unlock the hidden value in your complex, interconnected data. By
            expertly leveraging graph databases, advanced analytics, and AI
            integration (including RAG), we turn relationships into actionable
            insights and strategic advantages.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-gradient-primary text-white px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              Explore Solutions
            </Button>
            <Button
              variant="outline"
              className="border-accent-teal text-primary-text  bg-transparent hover:bg-accent-teal/10 px-8 py-6 text-lg transition-all hover:-translate-y-1 hover:text-accent-teal"
            >
              Request Demo
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 z-0">
        <GraphVisualization />
      </div>

      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-secondary-text text-sm opacity-80 hover:opacity-100 transition-all hover:-translate-y-1 cursor-pointer z-10"
        onClick={scrollToNextSection}
      >
        <span>Scroll to explore</span>
        <ChevronDown className="w-6 h-6 animate-bounce" />
      </div>
    </section>
  );
}

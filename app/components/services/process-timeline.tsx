"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function ProcessTimeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const steps = [
    {
      number: "01",
      title: "Discovery & Assessment",
      description:
        "We begin with a thorough assessment of your current data ecosystem, business objectives, and technical requirements to establish a clear roadmap.",
    },
    {
      number: "02",
      title: "Architecture Design",
      description:
        "Our experts design a tailored architecture that integrates knowledge graphs, RAG systems, or data pipelines according to your specific needs.",
    },
    {
      number: "03",
      title: "Development & Integration",
      description:
        "We implement the solution, integrating with your existing systems and data sources while ensuring scalability and performance.",
    },
    {
      number: "04",
      title: "Testing & Optimization",
      description:
        "Rigorous testing and fine-tuning ensure your solution delivers accurate results and optimal performance across all use cases.",
    },
    {
      number: "05",
      title: "Deployment & Training",
      description:
        "We deploy the solution to your environment and provide comprehensive training to ensure your team can effectively utilize and maintain it.",
    },
    {
      number: "06",
      title: "Ongoing Support",
      description:
        "Our relationship continues with dedicated support, regular updates, and continuous improvements to adapt to your evolving needs.",
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-radial-gradient-purple opacity-10 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gradient">Our Process</h2>
          <p className="text-secondary-text text-lg max-w-2xl mx-auto">
            We follow a structured, collaborative approach to deliver solutions
            that exceed expectations and drive measurable business value.
          </p>
        </div>

        <div ref={ref} className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-accent-purple to-accent-teal opacity-30 hidden md:block" />

          <div className="space-y-12 relative">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                }
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex flex-col ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } items-center gap-8`}
              >
                <div
                  className={`w-full md:w-1/2 ${
                    index % 2 === 0 ? "md:text-right" : "md:text-left"
                  }`}
                >
                  <div className="bg-secondary-bg/50 border border-accent-purple/20 rounded-xl p-8 hover:border-accent-purple/50 transition-all hover:-translate-y-2 hover:shadow-lg">
                    <div className="text-5xl font-bold bg-gradient-to-r from-accent-purple to-accent-teal bg-clip-text text-transparent mb-4">
                      {step.number}
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                    <p className="text-secondary-text">{step.description}</p>
                  </div>
                </div>

                <div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-gradient-primary shadow-lg z-10 hidden md:flex">
                  <div className="w-4 h-4 rounded-full bg-white" />
                </div>

                <div className="w-full md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

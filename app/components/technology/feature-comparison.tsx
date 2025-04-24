"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle2, XCircle, HelpCircle } from "lucide-react";

export default function FeatureComparison() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const features = [
    {
      category: "Data Capabilities",
      items: [
        {
          name: "Structured Data Support",
          nexusgraph: true,
          traditional: true,
          basic: true,
        },
        {
          name: "Unstructured Data Support",
          nexusgraph: true,
          traditional: false,
          basic: true,
        },
        {
          name: "Relationship Modeling",
          nexusgraph: true,
          traditional: true,
          basic: false,
        },
        {
          name: "Semantic Understanding",
          nexusgraph: true,
          traditional: false,
          basic: true,
        },
        {
          name: "Multi-modal Data",
          nexusgraph: true,
          traditional: false,
          basic: false,
        },
      ],
    },
    {
      category: "Query & Retrieval",
      items: [
        {
          name: "Keyword Search",
          nexusgraph: true,
          traditional: true,
          basic: true,
        },
        {
          name: "Semantic Search",
          nexusgraph: true,
          traditional: false,
          basic: true,
        },
        {
          name: "Graph Traversal",
          nexusgraph: true,
          traditional: true,
          basic: false,
        },
        {
          name: "Hybrid Retrieval",
          nexusgraph: true,
          traditional: false,
          basic: false,
        },
        {
          name: "Context-aware Queries",
          nexusgraph: true,
          traditional: false,
          basic: false,
        },
      ],
    },
    {
      category: "AI Integration",
      items: [
        {
          name: "LLM Integration",
          nexusgraph: true,
          traditional: false,
          basic: true,
        },
        {
          name: "Contextual Grounding",
          nexusgraph: true,
          traditional: false,
          basic: false,
        },
        {
          name: "Reasoning Capabilities",
          nexusgraph: true,
          traditional: false,
          basic: false,
        },
        {
          name: "Automated Knowledge Extraction",
          nexusgraph: true,
          traditional: false,
          basic: false,
        },
        {
          name: "Continuous Learning",
          nexusgraph: true,
          traditional: false,
          basic: false,
        },
      ],
    },
  ];

  const FeatureIcon = ({ value }: { value: boolean | "partial" }) => {
    if (value === true) {
      return <CheckCircle2 className="w-6 h-6 text-green-500" />;
    } else if (value === "partial") {
      return <HelpCircle className="w-6 h-6 text-yellow-500" />;
    } else {
      return <XCircle className="w-6 h-6 text-red-500" />;
    }
  };

  return (
    <section className="py-20 bg-secondary-bg">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gradient">
            Feature Comparison
          </h2>
          <p className="text-secondary-text text-lg max-w-2xl mx-auto">
            See how NexusGraph's technology stack compares to traditional
            database solutions and basic RAG implementations.
          </p>
        </div>

        <div ref={ref} className="overflow-x-auto">
          <table className="w-full min-w-[768px]">
            <thead>
              <tr className="border-b border-accent-purple/20">
                <th className="py-4 px-6 text-left w-1/3">Feature</th>
                <th className="py-4 px-6 text-center">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white text-xl font-bold mb-2">
                      N
                    </div>
                    <span>NexusGraph</span>
                  </div>
                </th>
                <th className="py-4 px-6 text-center">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center text-white text-xl font-bold mb-2">
                      T
                    </div>
                    <span>Traditional DB</span>
                  </div>
                </th>
                <th className="py-4 px-6 text-center">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center text-white text-xl font-bold mb-2">
                      B
                    </div>
                    <span>Basic RAG</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((category, categoryIndex) => (
                <motion.div key={categoryIndex}>
                  <motion.tr
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                    className="bg-primary-bg/30"
                  >
                    <td
                      colSpan={4}
                      className="py-3 px-6 font-bold text-lg bg-gradient-to-r from-accent-purple to-accent-teal bg-clip-text text-transparent"
                    >
                      {category.category}
                    </td>
                  </motion.tr>
                  {category.items.map((feature, featureIndex) => (
                    <motion.tr
                      key={featureIndex}
                      initial={{ opacity: 0, y: 10 }}
                      animate={
                        isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
                      }
                      transition={{
                        duration: 0.3,
                        delay: categoryIndex * 0.1 + featureIndex * 0.05,
                      }}
                      className="border-b border-accent-purple/10 hover:bg-primary-bg/50 transition-colors"
                    >
                      <td className="py-4 px-6">{feature.name}</td>
                      <td className="py-4 px-6 text-center">
                        <div className="flex justify-center">
                          <FeatureIcon value={feature.nexusgraph} />
                        </div>
                      </td>
                      <td className="py-4 px-6 text-center">
                        <div className="flex justify-center">
                          <FeatureIcon value={feature.traditional} />
                        </div>
                      </td>
                      <td className="py-4 px-6 text-center">
                        <div className="flex justify-center">
                          <FeatureIcon value={feature.basic} />
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </motion.div>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function ResultsMetrics() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const metrics = [
    {
      category: "Financial Services",
      items: [
        { label: "Fraud Detection Improvement", value: "76%" },
        { label: "Compliance Cost Reduction", value: "42%" },
        { label: "Customer Insights Enhancement", value: "3.8x" },
        { label: "Decision-Making Speed", value: "65%" },
      ],
    },
    {
      category: "Healthcare",
      items: [
        { label: "Patient Data Integration", value: "91%" },
        { label: "Research Acceleration", value: "4.5x" },
        { label: "Treatment Recommendation Accuracy", value: "83%" },
        { label: "Operational Efficiency Gain", value: "57%" },
      ],
    },
    {
      category: "Manufacturing",
      items: [
        { label: "Supply Chain Visibility", value: "89%" },
        { label: "Predictive Maintenance Accuracy", value: "74%" },
        { label: "Production Optimization", value: "31%" },
        { label: "Quality Control Improvement", value: "62%" },
      ],
    },
    {
      category: "Retail",
      items: [
        { label: "Customer Journey Mapping", value: "94%" },
        { label: "Inventory Optimization", value: "47%" },
        { label: "Personalization Effectiveness", value: "3.2x" },
        { label: "Market Trend Identification", value: "78%" },
      ],
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-radial-gradient-purple opacity-10 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gradient">
            Results Across Industries
          </h2>
          <p className="text-secondary-text text-lg max-w-2xl mx-auto">
            Our solutions have delivered measurable impact across diverse
            industries, helping organizations transform their data into
            actionable intelligence.
          </p>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {metrics.map((industry, industryIndex) => (
            <motion.div
              key={industryIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: industryIndex * 0.1 }}
              className="bg-secondary-bg/50 border border-accent-purple/20 rounded-xl p-6 hover:border-accent-purple/50 transition-all hover:-translate-y-2 hover:shadow-lg"
            >
              <h3 className="text-xl font-bold mb-6 text-center">
                {industry.category}
              </h3>

              <div className="space-y-4">
                {industry.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="flex justify-between items-center"
                  >
                    <span className="text-secondary-text">{item.label}</span>
                    <span className="font-bold text-lg bg-gradient-to-r from-accent-purple to-accent-teal bg-clip-text text-transparent">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

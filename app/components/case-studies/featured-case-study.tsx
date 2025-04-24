"use client";

import { motion } from "framer-motion";
import { Button } from "~/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function FeaturedCaseStudy() {
  return (
    <section className="py-20 bg-secondary-bg">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gradient">
            Featured Case Study
          </h2>
          <p className="text-secondary-text text-lg max-w-2xl mx-auto">
            See how we transformed a global financial institution's data
            ecosystem with our knowledge graph solution.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            className="lg:col-span-7 relative rounded-xl overflow-hidden shadow-2xl border border-accent-purple/30 aspect-video"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Global Financial Institution Case Study"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-bg/90 via-primary-bg/50 to-transparent flex items-end p-8">
              <div>
                <div className="inline-block bg-gradient-primary px-4 py-1 rounded-full text-sm font-semibold text-white mb-4">
                  Financial Services
                </div>
                <h3 className="text-3xl font-bold mb-2">
                  Global Financial Institution
                </h3>
                <p className="text-secondary-text max-w-lg">
                  Implementing a comprehensive knowledge graph solution to
                  connect disparate data sources and enhance decision-making.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="bg-primary-bg/50 border border-accent-purple/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6">Challenge</h3>
              <p className="text-secondary-text mb-8">
                The client faced significant challenges with siloed data across
                multiple departments, leading to inefficient decision-making,
                compliance risks, and missed business opportunities. Their
                existing systems couldn't provide a unified view of customer
                relationships and transaction patterns.
              </p>

              <h3 className="text-2xl font-bold mb-6">Solution</h3>
              <p className="text-secondary-text mb-8">
                We implemented a comprehensive knowledge graph solution that:
              </p>
              <ul className="list-disc pl-6 text-secondary-text space-y-3 mb-8">
                <li>
                  Connected 15+ disparate data sources into a unified graph
                  structure
                </li>
                <li>
                  Created a real-time view of customer relationships and
                  transaction patterns
                </li>
                <li>
                  Developed custom query interfaces for different departments
                </li>
                <li>
                  Implemented advanced analytics for risk assessment and
                  opportunity identification
                </li>
              </ul>

              <h3 className="text-2xl font-bold mb-6">Results</h3>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-secondary-bg rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-accent-purple to-accent-teal bg-clip-text text-transparent mb-1">
                    87%
                  </div>
                  <div className="text-secondary-text text-sm">
                    Faster information retrieval
                  </div>
                </div>

                <div className="bg-secondary-bg rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-accent-purple to-accent-teal bg-clip-text text-transparent mb-1">
                    63%
                  </div>
                  <div className="text-secondary-text text-sm">
                    Reduction in compliance incidents
                  </div>
                </div>

                <div className="bg-secondary-bg rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-accent-purple to-accent-teal bg-clip-text text-transparent mb-1">
                    4.2x
                  </div>
                  <div className="text-secondary-text text-sm">
                    Increase in data utilization
                  </div>
                </div>

                <div className="bg-secondary-bg rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-accent-purple to-accent-teal bg-clip-text text-transparent mb-1">
                    $12M
                  </div>
                  <div className="text-secondary-text text-sm">
                    Annual cost savings
                  </div>
                </div>
              </div>

              <Button className="w-full bg-gradient-primary text-white">
                Read Full Case Study <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";

export default function CaseStudiesHero() {
  return (
    <section className="pt-32 pb-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-radial-gradient-purple opacity-10 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-gradient leading-tight">
              Case Studies
            </h1>
            <p className="text-xl md:text-2xl text-secondary-text mb-12 max-w-3xl mx-auto">
              Explore how our knowledge graph and RAG solutions have helped
              organizations across industries transform their data ecosystems
              and drive innovation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
          >
            <div className="bg-secondary-bg/50 border border-accent-purple/20 rounded-xl p-6 flex flex-col items-center justify-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-accent-purple to-accent-teal bg-clip-text text-transparent mb-2">
                50+
              </div>
              <div className="text-secondary-text text-center text-sm">
                Successful Projects
              </div>
            </div>

            <div className="bg-secondary-bg/50 border border-accent-purple/20 rounded-xl p-6 flex flex-col items-center justify-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-accent-purple to-accent-teal bg-clip-text text-transparent mb-2">
                12
              </div>
              <div className="text-secondary-text text-center text-sm">
                Industries Served
              </div>
            </div>

            <div className="bg-secondary-bg/50 border border-accent-purple/20 rounded-xl p-6 flex flex-col items-center justify-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-accent-purple to-accent-teal bg-clip-text text-transparent mb-2">
                85%
              </div>
              <div className="text-secondary-text text-center text-sm">
                Avg. Efficiency Gain
              </div>
            </div>

            <div className="bg-secondary-bg/50 border border-accent-purple/20 rounded-xl p-6 flex flex-col items-center justify-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-accent-purple to-accent-teal bg-clip-text text-transparent mb-2">
                $50M+
              </div>
              <div className="text-secondary-text text-center text-sm">
                Client Cost Savings
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

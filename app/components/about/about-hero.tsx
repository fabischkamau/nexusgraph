"use client";

import { motion } from "framer-motion";

export default function AboutHero() {
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
              About Us
            </h1>
            <p className="text-xl md:text-2xl text-secondary-text mb-12 max-w-3xl mx-auto">
              We're on a mission to transform how organizations leverage their
              data through advanced knowledge graph and RAG solutions.
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
                2018
              </div>
              <div className="text-secondary-text text-center text-sm">
                Founded
              </div>
            </div>

            <div className="bg-secondary-bg/50 border border-accent-purple/20 rounded-xl p-6 flex flex-col items-center justify-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-accent-purple to-accent-teal bg-clip-text text-transparent mb-2">
                45+
              </div>
              <div className="text-secondary-text text-center text-sm">
                Team Members
              </div>
            </div>

            <div className="bg-secondary-bg/50 border border-accent-purple/20 rounded-xl p-6 flex flex-col items-center justify-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-accent-purple to-accent-teal bg-clip-text text-transparent mb-2">
                3
              </div>
              <div className="text-secondary-text text-center text-sm">
                Global Offices
              </div>
            </div>

            <div className="bg-secondary-bg/50 border border-accent-purple/20 rounded-xl p-6 flex flex-col items-center justify-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-accent-purple to-accent-teal bg-clip-text text-transparent mb-2">
                100+
              </div>
              <div className="text-secondary-text text-center text-sm">
                Clients Worldwide
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

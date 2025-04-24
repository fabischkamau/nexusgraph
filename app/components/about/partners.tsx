"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Partners() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const partners = [
    { name: "Neo4j", logo: "N" },
    { name: "TigerGraph", logo: "T" },
    { name: "Amazon Web Services", logo: "A" },
    { name: "Microsoft Azure", logo: "M" },
    { name: "Google Cloud", logo: "G" },
    { name: "OpenAI", logo: "O" },
    { name: "Anthropic", logo: "A" },
    { name: "Pinecone", logo: "P" },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-radial-gradient-purple opacity-10 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gradient">
            Our Partners
          </h2>
          <p className="text-secondary-text text-lg max-w-2xl mx-auto">
            We collaborate with leading technology providers to deliver
            comprehensive solutions for our clients.
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-secondary-bg/50 border border-accent-purple/20 rounded-xl p-8 flex items-center justify-center hover:border-accent-purple/50 transition-all hover:-translate-y-2 hover:shadow-lg"
            >
              <div className="w-20 h-20 rounded-full bg-gradient-primary flex items-center justify-center text-white text-2xl font-bold">
                {partner.logo}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-secondary-text">
            Interested in partnering with NexusGraph?{" "}
            <a href="#" className="text-accent-teal hover:underline">
              Contact our partnership team
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}

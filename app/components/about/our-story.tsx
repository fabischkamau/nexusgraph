"use client";

import { motion } from "framer-motion";

export default function OurStory() {
  return (
    <section className="py-20 bg-secondary-bg">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative rounded-xl overflow-hidden shadow-2xl border border-accent-purple/30 aspect-square"
          >
            <img
              src="/placeholder.svg?height=600&width=600"
              alt="NexusGraph Team"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-bg/90 via-primary-bg/50 to-transparent flex items-end p-8">
              <div>
                <div className="inline-block bg-gradient-primary px-4 py-1 rounded-full text-sm font-semibold text-white mb-4">
                  Our Journey
                </div>
                <h3 className="text-3xl font-bold mb-2">
                  From Vision to Reality
                </h3>
                <p className="text-secondary-text max-w-lg">
                  Founded in 2018 with a mission to unlock the power of
                  connected data.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 text-gradient">Our Story</h2>

            <div className="space-y-6 text-lg">
              <p className="text-secondary-text">
                NexusGraph was founded in 2018 by a team of data scientists,
                graph database experts, and AI researchers who shared a common
                vision: to help organizations unlock the full potential of their
                connected data.
              </p>

              <p className="text-secondary-text">
                We recognized that traditional data approaches were failing to
                capture the rich relationships and connections that exist within
                enterprise data ecosystems. At the same time, the emergence of
                knowledge graphs and graph databases was opening new
                possibilities for data intelligence.
              </p>

              <p className="text-secondary-text">
                Our journey began with a focus on knowledge graph
                implementations for financial services and healthcare
                organizations. As our expertise grew, we expanded into
                retrieval-augmented generation (RAG) systems, combining the
                power of knowledge graphs with advanced AI to create truly
                intelligent data solutions.
              </p>

              <p className="text-secondary-text">
                Today, NexusGraph is a global leader in knowledge graph and RAG
                implementations, with offices in San Francisco, London, and
                Singapore. Our team of 45+ specialists works with organizations
                across industries to transform how they access, connect, and
                leverage their data.
              </p>

              <p className="text-secondary-text">
                We remain committed to our founding vision: empowering
                organizations to harness the full potential of their connected
                data to drive innovation, efficiency, and growth.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

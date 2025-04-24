"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Lightbulb, Users, Zap, Shield, Target, RefreshCw } from "lucide-react";

export default function Values() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const values = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation",
      description:
        "We constantly push the boundaries of what's possible with knowledge graphs and AI, pioneering new approaches and solutions.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaboration",
      description:
        "We work closely with our clients, fostering partnerships that drive mutual success and create lasting value.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Excellence",
      description:
        "We are committed to delivering exceptional quality in everything we do, from code to communication.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Integrity",
      description:
        "We uphold the highest standards of ethics and transparency in our business practices and client relationships.",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Impact",
      description:
        "We measure our success by the tangible business outcomes and value we create for our clients.",
    },
    {
      icon: <RefreshCw className="w-8 h-8" />,
      title: "Adaptability",
      description:
        "We embrace change and continuously evolve our approaches to stay at the forefront of data intelligence.",
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-radial-gradient-purple opacity-10 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gradient">Our Values</h2>
          <p className="text-secondary-text text-lg max-w-2xl mx-auto">
            These core principles guide everything we do and define who we are
            as an organization.
          </p>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-secondary-bg/50 border border-accent-purple/20 rounded-xl p-8 hover:border-accent-purple/50 transition-all hover:-translate-y-2 hover:shadow-lg"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center text-white mb-6">
                {value.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
              <p className="text-secondary-text">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

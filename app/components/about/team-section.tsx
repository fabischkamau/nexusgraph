"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Linkedin, Twitter, Github } from "lucide-react";

export default function TeamSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const team = [
    {
      name: "Dr. Sarah Chen",
      role: "Co-Founder & CEO",
      bio: "Former AI Research Lead at Stanford with 15+ years of experience in knowledge graphs and machine learning.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Michael Rodriguez",
      role: "Co-Founder & CTO",
      bio: "Graph database pioneer who previously led engineering teams at Neo4j and Google Knowledge Graph.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Dr. James Wilson",
      role: "Chief Research Officer",
      bio: "PhD in Computer Science with expertise in retrieval-augmented generation and natural language processing.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Emily Nakamura",
      role: "VP of Client Solutions",
      bio: "Enterprise solution architect with deep experience implementing data intelligence systems across industries.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "David Park",
      role: "Head of Engineering",
      bio: "Distributed systems expert who has built scalable data platforms for Fortune 500 companies.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Sophia Martinez",
      role: "Director of Data Science",
      bio: "Data scientist specializing in graph analytics and machine learning for complex data ecosystems.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Robert Johnson",
      role: "VP of Sales",
      bio: "Enterprise sales leader with extensive experience in AI and data solutions for global organizations.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Aisha Patel",
      role: "Head of Product",
      bio: "Product strategist focused on creating intuitive, powerful knowledge graph and RAG solutions.",
      image: "/placeholder.svg?height=300&width=300",
    },
  ];

  return (
    <section className="py-20 bg-secondary-bg">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gradient">Our Team</h2>
          <p className="text-secondary-text text-lg max-w-2xl mx-auto">
            Meet the experts behind NexusGraph's innovative solutions and client
            success.
          </p>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-primary-bg/50 border border-accent-purple/20 rounded-xl overflow-hidden hover:border-accent-purple/50 transition-all hover:-translate-y-2 hover:shadow-lg group"
            >
              <div className="relative">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full aspect-square object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-bg to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-gradient-primary transition-all"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-gradient-primary transition-all"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-gradient-primary transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-accent-teal font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-secondary-text text-sm">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-secondary-text">
            And 35+ more talented engineers, data scientists, and solution
            architects across our global offices.
          </p>
        </div>
      </div>
    </section>
  );
}

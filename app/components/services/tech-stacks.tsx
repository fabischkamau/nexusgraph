"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ui/tooltip";

export default function TechStack() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const technologies = [
    {
      category: "Graph Databases",
      items: [
        {
          name: "Neo4j",
          icon: "N",
          avatar: "",
          description:
            "Industry-leading graph database with powerful query capabilities",
        },
        {
          name: "TigerGraph",
          icon: "T",
          avatar: "",
          description:
            "Scalable graph database optimized for deep link analytics",
        },
        {
          name: "Amazon Neptune",
          icon: "A",
          avatar: "",
          description: "Fully managed graph database service by AWS",
        },
        {
          name: "JanusGraph",
          icon: "J",
          avatar: "",
          description:
            "Distributed graph database with multi-datacenter high availability",
        },
      ],
    },
    {
      category: "Vector Databases",
      items: [
        {
          name: "Pinecone",
          icon: "P",
          avatar: "",
          description: "Vector database for similarity search applications",
        },
        {
          name: "Weaviate",
          icon: "W",
          avatar: "",
          description: "Open-source vector search engine",
        },
        {
          name: "Milvus",
          icon: "M",
          avatar: "",
          description: "Open-source vector database for similarity search",
        },
        {
          name: "Qdrant",
          icon: "Q",
          avatar: "",
          description:
            "Vector similarity search engine with extended filtering support",
        },
      ],
    },
    {
      category: "AI & ML",
      items: [
        {
          name: "OpenAI",
          icon: "O",
          avatar: "",
          description: "Leading AI research lab and API provider",
        },
        {
          name: "Hugging Face",
          icon: "H",
          avatar: "",
          description: "Platform for state-of-the-art machine learning models",
        },
        {
          name: "TensorFlow",
          icon: "T",
          avatar: "",
          description: "End-to-end open source platform for machine learning",
        },
        {
          name: "PyTorch",
          icon: "P",
          avatar: "",
          description: "Open source machine learning framework",
        },
      ],
    },
    {
      category: "Data Processing",
      items: [
        {
          name: "Apache Spark",
          icon: "S",
          avatar: "",
          description:
            "Unified analytics engine for large-scale data processing",
        },
        {
          name: "Kafka",
          icon: "K",
          avatar: "",
          description: "Distributed event streaming platform",
        },
        {
          name: "Airflow",
          icon: "A",
          avatar: "",
          description:
            "Platform to programmatically author, schedule and monitor workflows",
        },
        {
          name: "dbt",
          icon: "D",
          avatar: "",
          description:
            "Data transformation tool that enables analytics engineers to transform data",
        },
      ],
    },
  ];

  return (
    <section className="py-20 bg-secondary-bg">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gradient">
            Technology Stack
          </h2>
          <p className="text-secondary-text text-lg max-w-2xl mx-auto">
            We leverage cutting-edge technologies to build robust, scalable
            solutions that deliver exceptional results.
          </p>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {technologies.map((tech, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="bg-primary-bg/50 border border-accent-purple/20 rounded-xl p-6 hover:border-accent-purple/50 transition-all hover:-translate-y-2 hover:shadow-lg"
            >
              <h3 className="text-xl font-bold mb-6 text-center">
                {tech.category}
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {tech.items.map((item, itemIndex) => (
                  <TooltipProvider key={itemIndex}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="aspect-square bg-secondary-bg rounded-lg flex items-center justify-center cursor-pointer hover:bg-accent-purple/10 transition-colors">
                          <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white text-xl font-bold">
                            {item.icon}
                          </div>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent side="bottom" className="max-w-[200px]">
                        <div>
                          <p className="font-bold">{item.name}</p>
                          <p className="text-xs">{item.description}</p>
                        </div>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

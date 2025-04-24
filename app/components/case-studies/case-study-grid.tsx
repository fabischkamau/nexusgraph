"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "~/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CaseStudyGrid() {
  const [filter, setFilter] = useState("all");

  const caseStudies = [
    {
      id: 1,
      title: "Global Pharmaceutical Company",
      category: "healthcare",
      image: "/placeholder.svg?height=300&width=500",
      description:
        "Implementing a knowledge graph to connect research data, clinical trials, and patient outcomes for accelerated drug discovery.",
      results: [
        "4.5x faster research insights",
        "73% improvement in data accessibility",
        "$45M cost savings",
      ],
    },
    {
      id: 2,
      title: "E-Commerce Retailer",
      category: "retail",
      image: "/placeholder.svg?height=300&width=500",
      description:
        "Building a RAG system to enhance product search, recommendations, and customer support with contextual knowledge.",
      results: [
        "89% more relevant search results",
        "32% increase in conversion rate",
        "41% reduction in support tickets",
      ],
    },
    {
      id: 3,
      title: "Manufacturing Conglomerate",
      category: "manufacturing",
      image: "/placeholder.svg?height=300&width=500",
      description:
        "Creating a comprehensive supply chain knowledge graph to optimize operations and predict disruptions.",
      results: [
        "62% better disruption prediction",
        "27% inventory reduction",
        "18% logistics cost savings",
      ],
    },
    {
      id: 4,
      title: "Insurance Provider",
      category: "financial",
      image: "/placeholder.svg?height=300&width=500",
      description:
        "Implementing a fraud detection system using graph analytics to identify complex fraud patterns and relationships.",
      results: [
        "54% increase in fraud detection",
        "$28M in prevented fraud losses",
        "76% faster investigation time",
      ],
    },
    {
      id: 5,
      title: "Government Agency",
      category: "government",
      image: "/placeholder.svg?height=300&width=500",
      description:
        "Developing a knowledge management system to connect disparate data sources and improve citizen services.",
      results: [
        "83% faster information retrieval",
        "65% improvement in service delivery",
        "4.2x increase in data utilization",
      ],
    },
    {
      id: 6,
      title: "Telecommunications Provider",
      category: "telecom",
      image: "/placeholder.svg?height=300&width=500",
      description:
        "Building a network optimization system using graph analytics to improve service quality and reduce outages.",
      results: [
        "37% reduction in network outages",
        "29% improvement in service quality",
        "$32M operational cost savings",
      ],
    },
  ];

  const filteredCaseStudies =
    filter === "all"
      ? caseStudies
      : caseStudies.filter((study) => study.category === filter);

  return (
    <section className="py-20 bg-secondary-bg">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gradient">
            Explore Our Case Studies
          </h2>
          <p className="text-secondary-text text-lg max-w-2xl mx-auto">
            Discover how our solutions have helped organizations across
            industries transform their data ecosystems.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Button
            variant={filter === "all" ? "default" : "outline"}
            onClick={() => setFilter("all")}
            className={
              filter === "all"
                ? "bg-gradient-primary"
                : "border-accent-purple/20 hover:border-accent-purple/50"
            }
          >
            All Industries
          </Button>
          <Button
            variant={filter === "financial" ? "default" : "outline"}
            onClick={() => setFilter("financial")}
            className={
              filter === "financial"
                ? "bg-gradient-primary"
                : "border-accent-purple/20 hover:border-accent-purple/50"
            }
          >
            Financial Services
          </Button>
          <Button
            variant={filter === "healthcare" ? "default" : "outline"}
            onClick={() => setFilter("healthcare")}
            className={
              filter === "healthcare"
                ? "bg-gradient-primary"
                : "border-accent-purple/20 hover:border-accent-purple/50"
            }
          >
            Healthcare
          </Button>
          <Button
            variant={filter === "retail" ? "default" : "outline"}
            onClick={() => setFilter("retail")}
            className={
              filter === "retail"
                ? "bg-gradient-primary"
                : "border-accent-purple/20 hover:border-accent-purple/50"
            }
          >
            Retail
          </Button>
          <Button
            variant={filter === "manufacturing" ? "default" : "outline"}
            onClick={() => setFilter("manufacturing")}
            className={
              filter === "manufacturing"
                ? "bg-gradient-primary"
                : "border-accent-purple/20 hover:border-accent-purple/50"
            }
          >
            Manufacturing
          </Button>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredCaseStudies.map((study) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-primary-bg/50 border border-accent-purple/20 rounded-xl overflow-hidden hover:border-accent-purple/50 transition-all hover:-translate-y-2 hover:shadow-lg"
              >
                <div className="relative h-48">
                  <img
                    src={study.image || "/placeholder.svg"}
                    alt={study.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-bg to-transparent" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{study.title}</h3>
                  <p className="text-secondary-text text-sm mb-4">
                    {study.description}
                  </p>

                  <h4 className="font-semibold mb-2">Key Results:</h4>
                  <ul className="space-y-1 mb-6">
                    {study.results.map((result, index) => (
                      <li
                        key={index}
                        className="text-secondary-text text-sm flex items-start gap-2"
                      >
                        <span className="text-accent-teal">•</span>
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant="outline"
                    className="w-full border-accent-teal text-primary-text hover:bg-accent-teal/10"
                  >
                    Read Case Study <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

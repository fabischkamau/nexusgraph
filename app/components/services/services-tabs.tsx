"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { Card, CardContent } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import knowledgegraphsarchitecture from "~/assets/img/Knowledge-Graph-Architecture.png";
import ragsystems from "~/assets/img/rag.png";
import dataintergration from "~/assets/img/Data-integration-tools.jpg";
import {
  ArrowRight,
  Database,
  Network,
  Layers,
  Workflow,
  Code,
  LineChart,
} from "lucide-react";

export default function ServicesTabs() {
  const [activeTab, setActiveTab] = useState("knowledge-graphs");

  const services = {
    "knowledge-graphs": {
      title: "Knowledge Graph Architecture",
      description:
        "Our knowledge graph services help organizations connect disparate data sources into a unified, queryable graph structure that reveals hidden relationships and insights.",
      features: [
        {
          icon: <Database className="w-6 h-6" />,
          title: "Graph Database Implementation",
          description:
            "Setup and configuration of Neo4j, TigerGraph, or other graph database technologies tailored to your needs.",
        },
        {
          icon: <Network className="w-6 h-6" />,
          title: "Ontology Design",
          description:
            "Creation of custom ontologies and taxonomies that model your domain's entities and relationships.",
        },
        {
          icon: <Layers className="w-6 h-6" />,
          title: "Data Modeling",
          description:
            "Sophisticated data modeling that captures complex relationships and hierarchies within your data.",
        },
        {
          icon: <Workflow className="w-6 h-6" />,
          title: "Integration Services",
          description:
            "Seamless integration with existing data sources, APIs, and enterprise systems.",
        },
      ],
      image: knowledgegraphsarchitecture,
    },
    "rag-systems": {
      title: "RAG Implementation",
      description:
        "Our Retrieval-Augmented Generation (RAG) services enhance AI systems with the ability to access, retrieve, and leverage enterprise knowledge for more accurate and contextual responses.",
      features: [
        {
          icon: <Database className="w-6 h-6" />,
          title: "Vector Database Setup",
          description:
            "Implementation of vector databases like Pinecone, Weaviate, or Milvus for semantic search capabilities.",
        },
        {
          icon: <Code className="w-6 h-6" />,
          title: "Custom Retrieval Systems",
          description:
            "Development of tailored retrieval mechanisms optimized for your specific content and use cases.",
        },
        {
          icon: <Network className="w-6 h-6" />,
          title: "LLM Integration",
          description:
            "Seamless integration with leading large language models like GPT-4, Claude, or open-source alternatives.",
        },
        {
          icon: <LineChart className="w-6 h-6" />,
          title: "Performance Optimization",
          description:
            "Continuous refinement of retrieval accuracy, relevance, and response generation quality.",
        },
      ],
      image: ragsystems,
    },
    "data-integration": {
      title: "Data Integration & Analysis",
      description:
        "Our data integration services connect and transform your organization's data assets into actionable intelligence through advanced analytics and visualization.",
      features: [
        {
          icon: <Database className="w-6 h-6" />,
          title: "ETL Pipeline Development",
          description:
            "Creation of robust extract, transform, load (ETL) pipelines for data processing and integration.",
        },
        {
          icon: <Workflow className="w-6 h-6" />,
          title: "Data Cleansing & Enrichment",
          description:
            "Comprehensive data cleaning, normalization, and enrichment to ensure high-quality inputs.",
        },
        {
          icon: <LineChart className="w-6 h-6" />,
          title: "Advanced Analytics",
          description:
            "Implementation of statistical analysis, machine learning, and predictive modeling on your data.",
        },
        {
          icon: <Layers className="w-6 h-6" />,
          title: "Custom Dashboards",
          description:
            "Development of interactive dashboards and visualizations that bring your data to life.",
        },
      ],
      image: dataintergration,
    },
  };

  return (
    <section className="py-20 bg-secondary-bg">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gradient">
            Comprehensive Service Offerings
          </h2>
          <p className="text-secondary-text text-lg max-w-2xl mx-auto">
            Explore our specialized services designed to transform how your
            organization leverages connected data and AI.
          </p>
        </div>

        <Tabs
          defaultValue="knowledge-graphs"
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full"
        >
          <TabsList className="grid grid-cols-3 max-w-2xl mx-auto mb-12  text-text-primary">
            <TabsTrigger value="knowledge-graphs" className="text-lg py-3">
              Knowledge Graphs
            </TabsTrigger>
            <TabsTrigger value="rag-systems" className="text-lg py-3">
              RAG Systems
            </TabsTrigger>
            <TabsTrigger value="data-integration" className="text-lg py-3">
              Data Integration
            </TabsTrigger>
          </TabsList>

          {Object.entries(services).map(([key, service]) => (
            <TabsContent key={key} value={key} className="mt-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                      <h3 className="text-3xl font-bold mb-4">
                        {service.title}
                      </h3>
                      <p className="text-secondary-text text-lg mb-8">
                        {service.description}
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        {service.features.map((feature, index) => (
                          <Card
                            key={index}
                            className="bg-primary-bg/50 border border-accent-purple/20"
                          >
                            <CardContent className="p-6">
                              <div className="text-accent-teal mb-3">
                                {feature.icon}
                              </div>
                              <h4 className="font-bold text-lg mb-2 text-primary-text">
                                {feature.title}
                              </h4>
                              <p className="text-secondary-text text-sm">
                                {feature.description}
                              </p>
                            </CardContent>
                          </Card>
                        ))}
                      </div>

                      <Button className="bg-gradient-primary text-white px-6 py-2 text-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                        Learn More <ArrowRight className="ml-2 w-5 h-5" />
                      </Button>
                    </div>

                    <div className="relative rounded-xl overflow-hidden shadow-2xl border border-accent-purple/30 h-[400px]">
                      <img
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary-bg/80 to-transparent flex items-end p-8">
                        <div>
                          <h4 className="text-2xl font-bold mb-2">
                            {service.title}
                          </h4>
                          <p className="text-secondary-text">
                            Tailored solutions for enterprise needs
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}

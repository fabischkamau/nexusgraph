"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import knowledgegraphsarchitecture from "~/assets/img/Knowledge-Graph-Architecture.png";
import rag from "~/assets/img/RAG.webp";
import hybrid from "~/assets/img/hybrid.png";

export default function ArchitectureOverview() {
  const [activeTab, setActiveTab] = useState("knowledge-graph");

  const architectures = {
    "knowledge-graph": {
      title: "Knowledge Graph Architecture",
      description:
        "Our knowledge graph architecture creates a comprehensive representation of entities and relationships within your data ecosystem, enabling complex queries and insights discovery.",
      image: knowledgegraphsarchitecture,
      components: [
        {
          name: "Graph Database",
          description:
            "Core storage layer optimized for relationship data using Neo4j, TigerGraph, or Amazon Neptune.",
        },
        {
          name: "Ontology Layer",
          description:
            "Defines the structure, relationships, and rules that govern your knowledge domain.",
        },
        {
          name: "Data Integration",
          description:
            "ETL pipelines that transform and load data from various sources into the graph structure.",
        },
        {
          name: "Query Engine",
          description:
            "Specialized query processing for traversing relationships and extracting insights.",
        },
        {
          name: "Visualization Layer",
          description:
            "Interactive interfaces for exploring and analyzing the knowledge graph.",
        },
      ],
    },
    "rag-system": {
      title: "RAG System Architecture",
      description:
        "Our Retrieval-Augmented Generation (RAG) architecture enhances AI models with contextual knowledge retrieval, improving accuracy and relevance of generated responses.",
      image: rag,
      components: [
        {
          name: "Document Processing",
          description:
            "Ingestion, chunking, and preprocessing of documents and knowledge sources.",
        },
        {
          name: "Embedding Generation",
          description:
            "Creation of vector representations for text using state-of-the-art embedding models.",
        },
        {
          name: "Vector Database",
          description:
            "High-performance storage and retrieval of vector embeddings using Pinecone, Weaviate, or Milvus.",
        },
        {
          name: "Retrieval System",
          description:
            "Semantic search and hybrid retrieval mechanisms to find relevant context.",
        },
        {
          name: "LLM Integration",
          description:
            "Seamless connection to large language models with context augmentation.",
        },
      ],
    },
    "hybrid-solution": {
      title: "Hybrid Knowledge Architecture",
      description:
        "Our hybrid architecture combines knowledge graphs with RAG systems to create a comprehensive solution that leverages the strengths of both approaches.",
      image: hybrid,
      components: [
        {
          name: "Unified Data Layer",
          description:
            "Integrated storage combining graph and vector representations of your data.",
        },
        {
          name: "Cross-Modal Retrieval",
          description:
            "Retrieval mechanisms that leverage both graph relationships and semantic similarity.",
        },
        {
          name: "Knowledge Fusion",
          description:
            "Techniques for combining structured graph knowledge with unstructured text.",
        },
        {
          name: "Reasoning Engine",
          description:
            "Advanced reasoning capabilities that traverse graphs and leverage LLM capabilities.",
        },
        {
          name: "Adaptive Learning",
          description:
            "Continuous improvement through feedback loops and knowledge refinement.",
        },
      ],
    },
  };

  return (
    <section className="py-20 bg-secondary-bg">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gradient">
            Architecture Overview
          </h2>
          <p className="text-secondary-text text-lg max-w-2xl mx-auto">
            Explore the technical architecture behind our solutions and
            understand how each component works together to deliver powerful
            data intelligence.
          </p>
        </div>

        <Tabs
          defaultValue="knowledge-graph"
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full"
        >
          <TabsList className="grid grid-cols-3 max-w-2xl mx-auto mb-12">
            <TabsTrigger value="knowledge-graph" className="text-lg py-3">
              Knowledge Graph
            </TabsTrigger>
            <TabsTrigger value="rag-system" className="text-lg py-3">
              RAG System
            </TabsTrigger>
            <TabsTrigger value="hybrid-solution" className="text-lg py-3">
              Hybrid Solution
            </TabsTrigger>
          </TabsList>

          {Object.entries(architectures).map(([key, architecture]) => (
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
                        {architecture.title}
                      </h3>
                      <p className="text-secondary-text text-lg mb-8">
                        {architecture.description}
                      </p>

                      <div className="space-y-4 mb-8">
                        {architecture.components.map((component, index) => (
                          <div
                            key={index}
                            className="bg-primary-bg/50 border border-accent-purple/20 rounded-lg p-4 hover:border-accent-purple/50 transition-all"
                          >
                            <h4 className="font-bold text-lg mb-1">
                              {component.name}
                            </h4>
                            <p className="text-secondary-text text-sm">
                              {component.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="relative rounded-xl overflow-hidden shadow-2xl border border-accent-purple/30">
                      <img
                        src={architecture.image || "/placeholder.svg"}
                        alt={architecture.title}
                        className="w-full h-auto"
                      />
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

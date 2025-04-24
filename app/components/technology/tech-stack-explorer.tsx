"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { Card, CardContent } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { ChevronRight } from "lucide-react";

export default function TechStackExplorer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [activeTab, setActiveTab] = useState("graph-databases");

  const techCategories = {
    "graph-databases": {
      title: "Graph Databases",
      description:
        "Our graph database technologies provide the foundation for storing and querying complex relationship data.",
      technologies: [
        {
          name: "Neo4j",
          description:
            "Industry-leading graph database with powerful query capabilities using the Cypher query language.",
          features: [
            "ACID transactions",
            "Horizontal scaling",
            "Native graph storage",
            "Rich query language (Cypher)",
          ],
          logo: "N",
        },
        {
          name: "TigerGraph",
          description:
            "Scalable graph database optimized for deep link analytics and machine learning applications.",
          features: [
            "Parallel graph processing",
            "GSQL query language",
            "Distributed architecture",
            "Real-time deep link analytics",
          ],
          logo: "T",
        },
        {
          name: "Amazon Neptune",
          description:
            "Fully managed graph database service by AWS supporting both property graph and RDF models.",
          features: [
            "Fully managed service",
            "High availability",
            "Multiple graph models",
            "Integration with AWS ecosystem",
          ],
          logo: "A",
        },
        {
          name: "JanusGraph",
          description:
            "Distributed graph database with multi-datacenter high availability and flexible storage backend.",
          features: [
            "Elastic and linear scalability",
            "Multiple storage backends",
            "Gremlin query language",
            "Transaction support",
          ],
          logo: "J",
        },
      ],
    },
    "vector-databases": {
      title: "Vector Databases",
      description:
        "Our vector database technologies enable efficient storage and retrieval of high-dimensional embeddings for semantic search.",
      technologies: [
        {
          name: "Pinecone",
          description:
            "Vector database designed for machine learning applications with real-time vector search.",
          features: [
            "Managed vector database",
            "Hybrid search",
            "Metadata filtering",
            "Automatic scaling and tuning",
          ],
          logo: "P",
        },
        {
          name: "Weaviate",
          description:
            "Open-source vector search engine built to scale with machine learning models.",
          features: [
            "GraphQL API",
            "Multi-tenancy",
            "Automatic schema inference",
            "Hybrid search capabilities",
          ],
          logo: "W",
        },
        {
          name: "Milvus",
          description:
            "Open-source vector database for similarity search and AI applications.",
          features: [
            "Heterogeneous computing",
            "Multiple index types",
            "Scalar filtering",
            "Cloud-native architecture",
          ],
          logo: "M",
        },
        {
          name: "Qdrant",
          description:
            "Vector similarity search engine with extended filtering support.",
          features: [
            "Payload-based filtering",
            "Multiple vector distance metrics",
            "Distributed architecture",
            "REST and gRPC APIs",
          ],
          logo: "Q",
        },
      ],
    },
    "ai-frameworks": {
      title: "AI & LLM Integration",
      description:
        "Our AI integration technologies connect your data with state-of-the-art language models and machine learning frameworks.",
      technologies: [
        {
          name: "OpenAI",
          description:
            "Integration with OpenAI's powerful language models like GPT-4 and embedding models.",
          features: [
            "GPT-4 integration",
            "Text embedding models",
            "Fine-tuning capabilities",
            "Context window optimization",
          ],
          logo: "O",
        },
        {
          name: "Hugging Face",
          description:
            "Access to thousands of open-source models for various NLP and ML tasks.",
          features: [
            "Model hub integration",
            "Transformers library",
            "Custom model training",
            "Optimized inference",
          ],
          logo: "H",
        },
        {
          name: "LangChain",
          description:
            "Framework for developing applications powered by language models with composable components.",
          features: [
            "Prompt management",
            "Chain composition",
            "Agent frameworks",
            "Memory and context management",
          ],
          logo: "L",
        },
        {
          name: "LlamaIndex",
          description:
            "Data framework for connecting custom data sources to large language models.",
          features: [
            "Data connectors",
            "Index structures",
            "Query engines",
            "Structured data handling",
          ],
          logo: "L",
        },
      ],
    },
    "data-processing": {
      title: "Data Processing",
      description:
        "Our data processing technologies enable efficient ingestion, transformation, and analysis of large-scale data.",
      technologies: [
        {
          name: "Apache Spark",
          description:
            "Unified analytics engine for large-scale data processing with in-memory computation.",
          features: [
            "Distributed processing",
            "SQL, streaming, ML libraries",
            "In-memory computation",
            "Multiple language APIs",
          ],
          logo: "S",
        },
        {
          name: "Apache Kafka",
          description:
            "Distributed event streaming platform for high-performance data pipelines and streaming analytics.",
          features: [
            "Real-time streaming",
            "Distributed architecture",
            "Fault tolerance",
            "Connector ecosystem",
          ],
          logo: "K",
        },
        {
          name: "Apache Airflow",
          description:
            "Platform to programmatically author, schedule, and monitor workflows.",
          features: [
            "DAG-based workflows",
            "Rich UI for monitoring",
            "Extensible with custom operators",
            "Integration with cloud services",
          ],
          logo: "A",
        },
        {
          name: "dbt",
          description:
            "Data transformation tool that enables analytics engineers to transform data in their warehouse.",
          features: [
            "SQL-based transformations",
            "Version control integration",
            "Testing framework",
            "Documentation generation",
          ],
          logo: "D",
        },
      ],
    },
  };

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-radial-gradient-purple opacity-10 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gradient">
            Technology Stack Explorer
          </h2>
          <p className="text-secondary-text text-lg max-w-2xl mx-auto">
            Dive into the technologies that power our solutions and understand
            their capabilities and use cases.
          </p>
        </div>

        <div ref={ref}>
          <Tabs
            defaultValue="graph-databases"
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="grid grid-cols-2 md:grid-cols-4 max-w-4xl mx-auto mb-12">
              <TabsTrigger
                value="graph-databases"
                className="text-sm md:text-base py-3"
              >
                Graph Databases
              </TabsTrigger>
              <TabsTrigger
                value="vector-databases"
                className="text-sm md:text-base py-3"
              >
                Vector Databases
              </TabsTrigger>
              <TabsTrigger
                value="ai-frameworks"
                className="text-sm md:text-base py-3"
              >
                AI & LLM
              </TabsTrigger>
              <TabsTrigger
                value="data-processing"
                className="text-sm md:text-base py-3"
              >
                Data Processing
              </TabsTrigger>
            </TabsList>

            {Object.entries(techCategories).map(([key, category]) => (
              <TabsContent key={key} value={key} className="mt-0">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
                  <p className="text-secondary-text">{category.description}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.technologies.map((tech, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={
                        isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                      }
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <Card className="bg-secondary-bg/50 border border-accent-purple/20 h-full hover:border-accent-purple/50 transition-all hover:-translate-y-1 hover:shadow-lg">
                        <CardContent className="p-6">
                          <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white text-xl font-bold">
                              {tech.logo}
                            </div>
                            <h4 className="text-xl font-bold text-primary-text">
                              {tech.name}
                            </h4>
                          </div>

                          <p className="text-secondary-text text-sm mb-4">
                            {tech.description}
                          </p>

                          <h5 className="font-semibold mb-2 text-sm text-primary-text">
                            Key Features:
                          </h5>
                          <ul className="space-y-1 mb-4">
                            {tech.features.map((feature, idx) => (
                              <li
                                key={idx}
                                className="text-secondary-text text-sm flex items-start gap-2"
                              >
                                <ChevronRight className="w-4 h-4 text-accent-teal flex-shrink-0 mt-0.5" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>

                          <Button
                            variant="outline"
                            className="w-full border-accent-teal bg-transparent hover:text-accent-teal text-primary-text hover:bg-accent-teal/10 mt-2"
                            size="sm"
                          >
                            Learn More
                          </Button>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
}

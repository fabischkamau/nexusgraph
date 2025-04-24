"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";

export default function Faq() {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const faqs = [
    {
      question:
        "What is a knowledge graph and how can it benefit my organization?",
      answer:
        "A knowledge graph is a structured representation of knowledge that connects data points through relationships, creating a network of information. It benefits organizations by revealing hidden connections in data, enabling more intelligent search and discovery, supporting AI applications with contextual knowledge, and providing a unified view of complex information ecosystems.",
    },
    {
      question:
        "What is RAG (Retrieval-Augmented Generation) and why is it important?",
      answer:
        "RAG (Retrieval-Augmented Generation) is an AI architecture that enhances large language models by retrieving relevant information from a knowledge base before generating responses. It's important because it grounds AI outputs in factual information, reduces hallucinations, enables access to proprietary or specialized knowledge, and keeps information up-to-date without retraining the entire model.",
    },
    {
      question: "How long does a typical implementation take?",
      answer:
        "Implementation timelines vary based on project scope, complexity, and your organization's readiness. A basic knowledge graph or RAG implementation typically takes 2-3 months, while more complex enterprise-wide solutions may take 6-12 months. We work closely with your team to establish realistic timelines and often implement in phases to deliver value incrementally.",
    },
    {
      question: "What technologies do you use for your implementations?",
      answer:
        "We leverage a variety of technologies based on your specific needs and existing infrastructure. For knowledge graphs, we commonly use Neo4j, TigerGraph, or Amazon Neptune. For vector databases in RAG systems, we implement Pinecone, Weaviate, or Milvus. We integrate with leading LLM providers like OpenAI, Anthropic, or open-source alternatives, and use modern data processing frameworks like Apache Spark, Airflow, and Kafka.",
    },
    {
      question: "How do you ensure data security and privacy?",
      answer:
        "We prioritize data security and privacy through multiple approaches: implementing robust access controls and encryption, conducting thorough security assessments, ensuring compliance with relevant regulations (GDPR, HIPAA, etc.), establishing clear data governance policies, and providing options for on-premises deployment or private cloud environments when required.",
    },
    {
      question: "Do you offer ongoing support and maintenance?",
      answer:
        "Yes, we offer comprehensive support and maintenance services to ensure your knowledge graph or RAG system continues to perform optimally. Our support packages include regular updates and optimizations, monitoring and performance tuning, technical support with guaranteed response times, knowledge transfer and training for your team, and strategic consultations to evolve your system as your needs change.",
    },
  ];

  return (
    <section className="py-20 bg-secondary-bg">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gradient">
            Frequently Asked Questions
          </h2>
          <p className="text-secondary-text text-lg max-w-2xl mx-auto">
            Find answers to common questions about our services, implementation
            process, and technology.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="border border-accent-purple/20 rounded-xl overflow-hidden bg-primary-bg/50 px-6"
                >
                  <AccordionTrigger className="text-lg font-semibold py-4 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-secondary-text pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-secondary-text mb-4">
              Don't see your question here? Reach out to our team directly.
            </p>
            <a
              href="mailto:info@nexusgraph.com"
              className="text-accent-teal hover:text-accent-purple transition-colors font-medium"
            >
              info@nexusgraph.com
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

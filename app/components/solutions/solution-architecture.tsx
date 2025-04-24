"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function SolutionArchitecture() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const architectureComponents = [
    {
      title: "Data Integration Layer",
      description:
        "Connects to your existing data sources, including databases, APIs, documents, and streaming data, to create a unified data foundation.",
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21 5C21 6.65685 16.9706 8 12 8C7.02944 8 3 6.65685 3 5M21 5C21 3.34315 16.9706 2 12 2C7.02944 2 3 3.34315 3 5M21 5V19C21 20.66 17 22 12 22C7 22 3 20.66 3 19V5M21 12C21 13.66 17 15 12 15C7 15 3 13.66 3 12"
            stroke="url(#paint0_linear_arch1)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <defs>
            <linearGradient
              id="paint0_linear_arch1"
              x1="3"
              y1="2"
              x2="21"
              y2="22"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#7B42F6" />
              <stop offset="1" stopColor="#00E5FF" />
            </linearGradient>
          </defs>
        </svg>
      ),
    },
    {
      title: "Knowledge Processing Engine",
      description:
        "Transforms raw data into structured knowledge, extracting entities, relationships, and semantic meaning through advanced NLP and ML techniques.",
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 3V7C14 7.26522 14.1054 7.51957 14.2929 7.70711C14.4804 7.89464 14.7348 8 15 8H19M14 3H7C6.46957 3 5.96086 3.21071 5.58579 3.58579C5.21071 3.96086 5 4.46957 5 5V19C5 19.5304 5.21071 20.0391 5.58579 20.4142C5.96086 20.7893 6.46957 21 7 21H17C17.5304 21 18.0391 20.7893 18.4142 20.4142C18.7893 20.0391 19 19.5304 19 19V8M14 3L19 8M9 7H10M9 11H15M9 15H15"
            stroke="url(#paint0_linear_arch2)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <defs>
            <linearGradient
              id="paint0_linear_arch2"
              x1="5"
              y1="3"
              x2="19"
              y2="21"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#7B42F6" />
              <stop offset="1" stopColor="#00E5FF" />
            </linearGradient>
          </defs>
        </svg>
      ),
    },
    {
      title: "Knowledge Storage Layer",
      description:
        "Combines graph databases for relationship data and vector databases for semantic embeddings, creating a hybrid knowledge store.",
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2L2 7L12 12L22 7L12 2Z"
            stroke="url(#paint0_linear_arch3)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2 17L12 22L22 17"
            stroke="url(#paint1_linear_arch3)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2 12L12 17L22 12"
            stroke="url(#paint2_linear_arch3)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <defs>
            <linearGradient
              id="paint0_linear_arch3"
              x1="2"
              y1="2"
              x2="22"
              y2="12"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#7B42F6" />
              <stop offset="1" stopColor="#00E5FF" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_arch3"
              x1="2"
              y1="17"
              x2="22"
              y2="22"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#7B42F6" />
              <stop offset="1" stopColor="#00E5FF" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_arch3"
              x1="2"
              y1="12"
              x2="22"
              y2="17"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#7B42F6" />
              <stop offset="1" stopColor="#00E5FF" />
            </linearGradient>
          </defs>
        </svg>
      ),
    },
    {
      title: "Retrieval & Query Engine",
      description:
        "Provides advanced query capabilities, combining graph traversal, semantic search, and hybrid retrieval to find the most relevant information.",
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
            stroke="url(#paint0_linear_arch4)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21 21L16.65 16.65"
            stroke="url(#paint1_linear_arch4)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <defs>
            <linearGradient
              id="paint0_linear_arch4"
              x1="3"
              y1="3"
              x2="19"
              y2="19"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#7B42F6" />
              <stop offset="1" stopColor="#00E5FF" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_arch4"
              x1="16.65"
              y1="16.65"
              x2="21"
              y2="21"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#7B42F6" />
              <stop offset="1" stopColor="#00E5FF" />
            </linearGradient>
          </defs>
        </svg>
      ),
    },
    {
      title: "AI Integration Layer",
      description:
        "Connects with large language models and other AI systems, providing them with contextual knowledge for enhanced reasoning and generation.",
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"
            stroke="url(#paint0_linear_arch5)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2 12H22"
            stroke="url(#paint1_linear_arch5)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 2V22"
            stroke="url(#paint2_linear_arch5)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <defs>
            <linearGradient
              id="paint0_linear_arch5"
              x1="2"
              y1="2"
              x2="22"
              y2="22"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#7B42F6" />
              <stop offset="1" stopColor="#00E5FF" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_arch5"
              x1="2"
              y1="12"
              x2="22"
              y2="12"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#7B42F6" />
              <stop offset="1" stopColor="#00E5FF" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_arch5"
              x1="12"
              y1="2"
              x2="12"
              y2="22"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#7B42F6" />
              <stop offset="1" stopColor="#00E5FF" />
            </linearGradient>
          </defs>
        </svg>
      ),
    },
    {
      title: "Application & API Layer",
      description:
        "Provides interfaces for applications to interact with the knowledge system, including APIs, SDKs, and pre-built UI components.",
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 18L22 12L16 6"
            stroke="url(#paint0_linear_arch6)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 6L2 12L8 18"
            stroke="url(#paint1_linear_arch6)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <defs>
            <linearGradient
              id="paint0_linear_arch6"
              x1="16"
              y1="6"
              x2="22"
              y2="18"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#7B42F6" />
              <stop offset="1" stopColor="#00E5FF" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_arch6"
              x1="2"
              y1="12"
              x2="8"
              y2="18"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#7B42F6" />
              <stop offset="1" stopColor="#00E5FF" />
            </linearGradient>
          </defs>
        </svg>
      ),
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-radial-gradient-purple opacity-10 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gradient">
            Solution Architecture
          </h2>
          <p className="text-secondary-text text-lg max-w-2xl mx-auto">
            Our solutions are built on a modular, scalable architecture that can
            be tailored to your specific needs and integrated with your existing
            systems.
          </p>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {architectureComponents.map((component, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-secondary-bg/50 border border-accent-purple/20 rounded-xl p-8 hover:border-accent-purple/50 transition-all hover:-translate-y-2 hover:shadow-lg"
            >
              <div className="mb-6">{component.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{component.title}</h3>
              <p className="text-secondary-text">{component.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-secondary-text max-w-3xl mx-auto">
            Our architecture is designed to be flexible and adaptable, allowing
            us to tailor solutions to your specific industry needs while
            leveraging proven components and patterns.
          </p>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function SolutionBenefits() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const benefits = [
    {
      category: "Business Benefits",
      items: [
        {
          title: "Enhanced Decision Making",
          description:
            "Make better decisions faster with comprehensive, contextual information at your fingertips.",
        },
        {
          title: "Increased Operational Efficiency",
          description:
            "Streamline processes and reduce manual effort through intelligent automation and insights.",
        },
        {
          title: "Improved Customer Experience",
          description:
            "Deliver personalized, relevant experiences by understanding customer needs and preferences in context.",
        },
        {
          title: "Accelerated Innovation",
          description:
            "Identify new opportunities and insights by connecting previously siloed information.",
        },
      ],
    },
    {
      category: "Technical Benefits",
      items: [
        {
          title: "Unified Data Access",
          description:
            "Break down data silos with a unified view of information across your organization.",
        },
        {
          title: "Scalable Architecture",
          description:
            "Grow your knowledge ecosystem as your needs evolve with our scalable, modular architecture.",
        },
        {
          title: "AI Enhancement",
          description:
            "Improve AI capabilities with contextual knowledge and relationship-aware intelligence.",
        },
        {
          title: "Flexible Integration",
          description:
            "Easily integrate with your existing systems and data sources through standard APIs.",
        },
      ],
    },
    {
      category: "Competitive Advantages",
      items: [
        {
          title: "Market Differentiation",
          description:
            "Stand out from competitors with more intelligent, context-aware products and services.",
        },
        {
          title: "Faster Time to Market",
          description:
            "Accelerate development and deployment of new features and capabilities.",
        },
        {
          title: "Reduced Risk",
          description:
            "Mitigate risks through better visibility into relationships and potential issues.",
        },
        {
          title: "Future-Proof Technology",
          description:
            "Stay ahead of the curve with a foundation that adapts to emerging AI and data technologies.",
        },
      ],
    },
  ];

  return (
    <section className="py-20 bg-secondary-bg">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gradient">
            Solution Benefits
          </h2>
          <p className="text-secondary-text text-lg max-w-2xl mx-auto">
            Our knowledge graph and RAG solutions deliver tangible benefits
            across your organization, from business outcomes to technical
            advantages.
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {benefits.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="bg-primary-bg/50 border border-accent-purple/20 rounded-xl p-8"
            >
              <h3 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-accent-purple to-accent-teal bg-clip-text text-transparent">
                {category.category}
              </h3>

              <div className="space-y-6">
                {category.items.map((benefit, benefitIndex) => (
                  <motion.div
                    key={benefitIndex}
                    initial={{ opacity: 0, x: -10 }}
                    animate={
                      isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }
                    }
                    transition={{
                      duration: 0.3,
                      delay: categoryIndex * 0.1 + benefitIndex * 0.05 + 0.2,
                    }}
                    className="flex gap-4"
                  >
                    <CheckCircle2 className="w-6 h-6 text-accent-teal flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-lg mb-1">
                        {benefit.title}
                      </h4>
                      <p className="text-secondary-text text-sm">
                        {benefit.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

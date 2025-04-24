"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "~/components/ui/button";
import { ArrowRight } from "lucide-react";
import customer360 from "~/assets/img/Customer-Integration-Wheel.png";
import fraudDetection from "~/assets/img/AI-in-Banking-Fraud-Detection.jpg";
import researchAcceleration from "~/assets/img/research.jpg";
import supplyChain from "~/assets/img/supply-chain.jpg";
import knowledgeManagement from "~/assets/img/enterprise.jpg";
import regulatoryCompliance from "~/assets/img/regulatory.jpeg";

export default function SolutionExplorer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [selectedSolution, setSelectedSolution] = useState<string | null>(null);

  const solutions = [
    {
      id: "customer-360",
      title: "Customer 360° View",
      description:
        "Create a comprehensive view of your customers by connecting data from multiple sources and systems.",
      industry: "Cross-Industry",
      features: [
        "Unified customer profiles",
        "Relationship mapping",
        "Interaction history",
        "Preference tracking",
        "Behavioral analysis",
      ],
      benefits: [
        "Improved customer satisfaction",
        "Increased cross-sell/upsell opportunities",
        "Enhanced personalization",
        "Reduced customer churn",
      ],
      image: customer360,
    },
    {
      id: "fraud-detection",
      title: "Fraud Detection & Prevention",
      description:
        "Identify and prevent fraud by analyzing complex patterns and relationships in your transaction data.",
      industry: "Financial Services",
      features: [
        "Pattern recognition",
        "Anomaly detection",
        "Network analysis",
        "Real-time alerting",
        "Risk scoring",
      ],
      benefits: [
        "Reduced fraud losses",
        "Improved detection accuracy",
        "Faster investigation times",
        "Enhanced compliance",
      ],
      image: fraudDetection,
    },
    {
      id: "research-acceleration",
      title: "Research Acceleration",
      description:
        "Accelerate research and discovery by connecting scientific literature, experimental data, and domain knowledge.",
      industry: "Healthcare & Life Sciences",
      features: [
        "Literature integration",
        "Hypothesis generation",
        "Knowledge discovery",
        "Experiment tracking",
        "Collaborative research",
      ],
      benefits: [
        "Faster discovery timelines",
        "Improved research quality",
        "Enhanced collaboration",
        "Reduced duplication of effort",
      ],
      image: researchAcceleration,
    },
    {
      id: "supply-chain",
      title: "Supply Chain Optimization",
      description:
        "Optimize your supply chain by connecting suppliers, logistics, inventory, and customer demand data.",
      industry: "Manufacturing & Retail",
      features: [
        "End-to-end visibility",
        "Risk assessment",
        "Demand forecasting",
        "Supplier management",
        "Logistics optimization",
      ],
      benefits: [
        "Reduced inventory costs",
        "Improved delivery times",
        "Enhanced supplier relationships",
        "Greater resilience to disruptions",
      ],
      image: supplyChain,
    },
    {
      id: "knowledge-management",
      title: "Enterprise Knowledge Management",
      description:
        "Create a unified knowledge base that connects your organization's documents, expertise, and institutional knowledge.",
      industry: "Cross-Industry",
      features: [
        "Document integration",
        "Expert finding",
        "Knowledge discovery",
        "Contextual search",
        "Knowledge preservation",
      ],
      benefits: [
        "Improved knowledge sharing",
        "Faster onboarding",
        "Reduced knowledge loss",
        "Enhanced decision making",
      ],
      image: knowledgeManagement,
    },
    {
      id: "regulatory-compliance",
      title: "Regulatory Compliance",
      description:
        "Ensure compliance with complex regulations by connecting policies, procedures, and operational data.",
      industry: "Financial Services & Healthcare",
      features: [
        "Policy management",
        "Compliance monitoring",
        "Audit trail",
        "Risk assessment",
        "Regulatory updates",
      ],
      benefits: [
        "Reduced compliance violations",
        "Lower compliance costs",
        "Improved audit outcomes",
        "Enhanced regulatory reporting",
      ],
      image: regulatoryCompliance,
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-radial-gradient-purple opacity-10 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gradient">
            Solution Explorer
          </h2>
          <p className="text-secondary-text text-lg max-w-2xl mx-auto">
            Explore our pre-built solution templates that can be customized to
            address your specific business challenges.
          </p>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-secondary-bg/50 border rounded-xl overflow-hidden hover:shadow-lg transition-all ${
                selectedSolution === solution.id
                  ? "border-accent-teal scale-[1.02]"
                  : "border-accent-purple/20 hover:-translate-y-2 hover:border-accent-purple/50"
              }`}
              onClick={() =>
                setSelectedSolution(
                  solution.id === selectedSolution ? null : solution.id
                )
              }
            >
              <div className="relative h-48">
                <img
                  src={solution.image || "/placeholder.svg"}
                  alt={solution.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary-bg to-transparent" />
                <div className="absolute bottom-0 left-0 p-4">
                  <div className="inline-block bg-accent-purple/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium mb-2">
                    {solution.industry}
                  </div>
                  <h3 className="text-xl font-bold">{solution.title}</h3>
                </div>
              </div>

              <div className="p-6">
                <p className="text-secondary-text text-sm mb-4">
                  {solution.description}
                </p>

                {selectedSolution === solution.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 space-y-4"
                  >
                    <div>
                      <h4 className="font-semibold mb-2 text-sm">
                        Key Features
                      </h4>
                      <ul className="space-y-1">
                        {solution.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="text-secondary-text text-sm flex items-start gap-2"
                          >
                            <span className="text-accent-teal">•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2 text-sm">
                        Key Benefits
                      </h4>
                      <ul className="space-y-1">
                        {solution.benefits.map((benefit, idx) => (
                          <li
                            key={idx}
                            className="text-secondary-text text-sm flex items-start gap-2"
                          >
                            <span className="text-accent-teal">•</span>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button
                      variant="outline"
                      className="w-full border-accent-teal text-primary-text hover:bg-accent-teal/10 mt-2"
                    >
                      Learn More <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </motion.div>
                )}

                {selectedSolution !== solution.id && (
                  <Button
                    variant="ghost"
                    className="w-full text-accent-teal hover:bg-accent-teal/10 mt-2"
                    onClick={() => setSelectedSolution(solution.id)}
                  >
                    View Details <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

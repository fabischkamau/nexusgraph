"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { Button } from "~/components/ui/button";
import { ArrowRight } from "lucide-react";
import finance from "~/assets/img/finiancial-services.png";
import healthcare from "~/assets/img/Healthcare-Service-Provider.jpg";
import manufacturing from "~/assets/img/Application-Managed-Services.jpg";
import retail from "~/assets/img/retail-solutions.png";

export default function IndustrySolutions() {
  const [activeTab, setActiveTab] = useState("financial");

  const industries = {
    financial: {
      title: "Financial Services",
      description:
        "Our knowledge graph and RAG solutions help financial institutions enhance risk assessment, improve compliance, and gain deeper customer insights.",
      image: finance,
      useCases: [
        {
          title: "Fraud Detection & Prevention",
          description:
            "Identify complex fraud patterns by analyzing relationships between accounts, transactions, and entities.",
        },
        {
          title: "Regulatory Compliance",
          description:
            "Ensure compliance with evolving regulations through comprehensive data integration and contextual knowledge retrieval.",
        },
        {
          title: "Customer 360° View",
          description:
            "Create a unified view of customer relationships, preferences, and behaviors to enhance service and targeting.",
        },
        {
          title: "Risk Assessment",
          description:
            "Improve risk models by incorporating relationship data and contextual information from diverse sources.",
        },
      ],
      benefits: [
        "63% reduction in compliance-related incidents",
        "87% faster information retrieval",
        "4.2x increase in cross-departmental data utilization",
        "$12M annual cost savings from improved efficiency",
      ],
    },
    healthcare: {
      title: "Healthcare & Life Sciences",
      description:
        "Our solutions help healthcare organizations accelerate research, improve patient care, and optimize operations through connected data intelligence.",
      image: healthcare,
      useCases: [
        {
          title: "Clinical Research",
          description:
            "Accelerate drug discovery and clinical research by connecting disparate data sources and revealing hidden patterns.",
        },
        {
          title: "Patient Care Optimization",
          description:
            "Enhance diagnosis and treatment recommendations through comprehensive patient data integration and analysis.",
        },
        {
          title: "Healthcare Operations",
          description:
            "Improve resource allocation, scheduling, and supply chain management through connected operational data.",
        },
        {
          title: "Medical Knowledge Management",
          description:
            "Create a unified knowledge base of medical literature, clinical guidelines, and institutional knowledge.",
        },
      ],
      benefits: [
        "4.5x faster research insights generation",
        "73% improvement in data accessibility",
        "41% reduction in administrative overhead",
        "89% more comprehensive patient profiles",
      ],
    },
    manufacturing: {
      title: "Manufacturing & Supply Chain",
      description:
        "Our solutions help manufacturing organizations optimize supply chains, predict disruptions, and enhance quality control through connected data intelligence.",
      image: manufacturing,
      useCases: [
        {
          title: "Supply Chain Visibility",
          description:
            "Gain end-to-end visibility into complex supply chains by connecting suppliers, logistics, and inventory data.",
        },
        {
          title: "Predictive Maintenance",
          description:
            "Anticipate equipment failures and optimize maintenance schedules through integrated sensor and operational data.",
        },
        {
          title: "Quality Control",
          description:
            "Enhance quality assurance by connecting production data, testing results, and customer feedback.",
        },
        {
          title: "Production Optimization",
          description:
            "Improve production efficiency by analyzing relationships between processes, resources, and outcomes.",
        },
      ],
      benefits: [
        "62% better disruption prediction accuracy",
        "27% inventory reduction through improved visibility",
        "18% logistics cost savings",
        "35% reduction in quality-related issues",
      ],
    },
    retail: {
      title: "Retail & E-Commerce",
      description:
        "Our solutions help retail organizations enhance customer experiences, optimize inventory, and personalize marketing through connected data intelligence.",
      image: retail,
      useCases: [
        {
          title: "Customer Journey Mapping",
          description:
            "Create comprehensive views of customer journeys across channels to identify opportunities and pain points.",
        },
        {
          title: "Inventory Optimization",
          description:
            "Improve inventory management by connecting sales data, supplier information, and market trends.",
        },
        {
          title: "Personalized Recommendations",
          description:
            "Enhance product recommendations through deeper understanding of product relationships and customer preferences.",
        },
        {
          title: "Market Trend Analysis",
          description:
            "Identify emerging trends by analyzing connections between products, customer segments, and external factors.",
        },
      ],
      benefits: [
        "89% more relevant search and recommendation results",
        "32% increase in conversion rates",
        "41% reduction in customer support tickets",
        "23% improvement in inventory turnover",
      ],
    },
  };

  return (
    <section className="py-20 bg-secondary-bg">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gradient">
            Industry-Specific Solutions
          </h2>
          <p className="text-secondary-text text-lg max-w-2xl mx-auto">
            Explore how our knowledge graph and RAG solutions address the unique
            challenges and opportunities in different industries.
          </p>
        </div>

        <Tabs
          defaultValue="financial"
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full"
        >
          <TabsList className="grid grid-cols-2 md:grid-cols-4 max-w-3xl mx-auto mb-12">
            <TabsTrigger
              value="financial"
              className="text-sm md:text-base py-3"
            >
              Financial Services
            </TabsTrigger>
            <TabsTrigger
              value="healthcare"
              className="text-sm md:text-base py-3"
            >
              Healthcare
            </TabsTrigger>
            <TabsTrigger
              value="manufacturing"
              className="text-sm md:text-base py-3"
            >
              Manufacturing
            </TabsTrigger>
            <TabsTrigger value="retail" className="text-sm md:text-base py-3">
              Retail
            </TabsTrigger>
          </TabsList>

          {Object.entries(industries).map(([key, industry]) => (
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
                        {industry.title}
                      </h3>
                      <p className="text-secondary-text text-lg mb-8">
                        {industry.description}
                      </p>

                      <div className="space-y-6 mb-8">
                        <h4 className="text-xl font-semibold">Key Use Cases</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {industry.useCases.map((useCase, index) => (
                            <div
                              key={index}
                              className="bg-primary-bg/50 border border-accent-purple/20 rounded-lg p-4 hover:border-accent-purple/50 transition-all"
                            >
                              <h5 className="font-bold text-lg mb-2">
                                {useCase.title}
                              </h5>
                              <p className="text-secondary-text text-sm">
                                {useCase.description}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-4 mb-8">
                        <h4 className="text-xl font-semibold">Key Benefits</h4>
                        <ul className="space-y-2">
                          {industry.benefits.map((benefit, index) => (
                            <li
                              key={index}
                              className="flex items-start gap-2 text-secondary-text"
                            >
                              <ArrowRight className="w-5 h-5 text-accent-teal flex-shrink-0 mt-0.5" />
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Button className="bg-gradient-primary text-white px-6 py-2 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                        Explore {industry.title} Solutions{" "}
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Button>
                    </div>

                    <div className="relative rounded-xl overflow-hidden shadow-2xl border border-accent-purple/30 h-[400px]">
                      <img
                        src={industry.image || "/placeholder.svg"}
                        alt={industry.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary-bg/80 to-transparent flex items-end p-8">
                        <div>
                          <h4 className="text-2xl font-bold mb-2">
                            {industry.title} Solutions
                          </h4>
                          <p className="text-secondary-text">
                            Tailored for your specific industry challenges
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

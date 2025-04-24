"use client";

import { motion } from "framer-motion";
import { Button } from "~/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function SolutionsHero() {
  return (
    <section className="pt-32 pb-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-radial-gradient-purple opacity-10 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gradient leading-tight">
              Industry-Specific Solutions
            </h1>
            <p className="text-xl text-secondary-text mb-8 max-w-xl">
              Discover how our knowledge graph and RAG solutions can be tailored
              to address the unique challenges and opportunities in your
              industry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-gradient-primary text-white px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                Explore Solutions <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                className="border-accent-teal bg-transparent hover:text-accent-teal text-primary-text hover:bg-accent-teal/10 px-8 py-6 text-lg transition-all hover:-translate-y-1"
              >
                Schedule Consultation
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="bg-secondary-bg/50 border border-accent-purple/20 rounded-xl p-6 hover:border-accent-purple/50 transition-all hover:-translate-y-2 hover:shadow-lg">
                  <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white mb-4">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21 4H3C1.89543 4 1 4.89543 1 6V18C1 19.1046 1.89543 20 3 20H21C22.1046 20 23 19.1046 23 18V6C23 4.89543 22.1046 4 21 4Z"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M1 10H23"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2">Financial Services</h3>
                  <p className="text-secondary-text text-sm">
                    Enhance risk assessment, compliance, and customer insights
                  </p>
                </div>

                <div className="bg-secondary-bg/50 border border-accent-purple/20 rounded-xl p-6 hover:border-accent-purple/50 transition-all hover:-translate-y-2 hover:shadow-lg">
                  <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white mb-4">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22 12H18L15 21L9 3L6 12H2"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2">Healthcare</h3>
                  <p className="text-secondary-text text-sm">
                    Accelerate research, improve patient care, and optimize
                    operations
                  </p>
                </div>
              </div>

              <div className="space-y-6 mt-12">
                <div className="bg-secondary-bg/50 border border-accent-purple/20 rounded-xl p-6 hover:border-accent-purple/50 transition-all hover:-translate-y-2 hover:shadow-lg">
                  <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white mb-4">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16 4H18C18.5304 4 19.0391 4.21071 19.4142 4.58579C19.7893 4.96086 20 5.46957 20 6V20C20 20.5304 19.7893 21.0391 19.4142 21.4142C19.0391 21.7893 18.5304 22 18 22H6C5.46957 22 4.96086 21.7893 4.58579 21.4142C4.21071 21.0391 4 20.5304 4 20V6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4H8"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M15 2H9C8.44772 2 8 2.44772 8 3V5C8 5.55228 8.44772 6 9 6H15C15.5523 6 16 5.55228 16 5V3C16 2.44772 15.5523 2 15 2Z"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2">Manufacturing</h3>
                  <p className="text-secondary-text text-sm">
                    Optimize supply chains, predict disruptions, and enhance
                    quality control
                  </p>
                </div>

                <div className="bg-secondary-bg/50 border border-accent-purple/20 rounded-xl p-6 hover:border-accent-purple/50 transition-all hover:-translate-y-2 hover:shadow-lg">
                  <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white mb-4">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2">Retail</h3>
                  <p className="text-secondary-text text-sm">
                    Enhance customer experiences, optimize inventory, and
                    personalize marketing
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

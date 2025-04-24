"use client";

import type React from "react";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";
import { CheckCircle2 } from "lucide-react";

export default function ServicesCta() {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-radial-gradient-purple opacity-15 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6 text-gradient">
                Ready to Transform Your Data Strategy?
              </h2>
              <p className="text-secondary-text text-lg mb-8">
                Schedule a consultation with our experts to discover how our
                services can help you unlock the full potential of your data
                ecosystem and drive innovation across your organization.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-accent-teal mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-lg">Tailored Solutions</h4>
                    <p className="text-secondary-text">
                      Custom-designed implementations that address your specific
                      business challenges
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-accent-teal mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-lg">Expert Team</h4>
                    <p className="text-secondary-text">
                      Work with specialists in graph databases, RAG systems, and
                      data integration
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-accent-teal mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-lg">Proven Results</h4>
                    <p className="text-secondary-text">
                      Demonstrated success across industries with measurable
                      business impact
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-secondary-bg/80 backdrop-blur-sm rounded-xl p-8 border border-accent-purple/30 shadow-xl"
            >
              {!submitted ? (
                <>
                  <h3 className="text-2xl font-bold mb-6">
                    Request Information
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium mb-2"
                        >
                          Name
                        </label>
                        <Input
                          id="name"
                          placeholder="Your name"
                          className="bg-primary-bg/50"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium mb-2"
                        >
                          Email
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="Your email"
                          className="bg-primary-bg/50"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="service"
                        className="block text-sm font-medium mb-2"
                      >
                        Service of Interest
                      </label>
                      <select
                        id="service"
                        className="w-full rounded-md border border-input bg-primary-bg/50 px-3 py-2"
                      >
                        <option value="">Select a service</option>
                        <option value="knowledge-graphs">
                          Knowledge Graphs
                        </option>
                        <option value="rag-systems">RAG Systems</option>
                        <option value="data-integration">
                          Data Integration
                        </option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium mb-2"
                      >
                        Message
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your project or requirements"
                        className="bg-primary-bg/50"
                        rows={4}
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gradient-primary text-white py-6 text-lg"
                    >
                      Submit Request
                    </Button>
                  </form>
                </>
              ) : (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Thank You!</h3>
                  <p className="text-secondary-text mb-6">
                    We've received your request and will contact you shortly to
                    discuss how we can help with your project.
                  </p>
                  <Button
                    onClick={() => setSubmitted(false)}
                    variant="outline"
                    className="border-accent-teal text-primary-text hover:bg-accent-teal/10"
                  >
                    Submit Another Request
                  </Button>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

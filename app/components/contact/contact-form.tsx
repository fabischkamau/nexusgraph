"use client";

import type React from "react";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";
import { CheckCircle2 } from "lucide-react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, you would send the form data to your backend
    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-secondary-bg/80 backdrop-blur-sm rounded-xl p-8 border border-accent-purple/30 shadow-xl"
    >
      {!submitted ? (
        <>
          <h2 className="text-3xl font-bold mb-6 text-gradient">
            Get in Touch
          </h2>
          <p className="text-secondary-text mb-8">
            Fill out the form below and our team will get back to you within 24
            hours.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Full Name *
                </label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Your full name"
                  className="bg-primary-bg/50"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email Address *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Your email address"
                  className="bg-primary-bg/50"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium mb-2"
                >
                  Company
                </label>
                <Input
                  id="company"
                  name="company"
                  placeholder="Your company name"
                  className="bg-primary-bg/50"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium mb-2"
                >
                  Phone Number
                </label>
                <Input
                  id="phone"
                  name="phone"
                  placeholder="Your phone number"
                  className="bg-primary-bg/50"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium mb-2"
              >
                Subject *
              </label>
              <select
                id="subject"
                name="subject"
                className="w-full rounded-md border border-input bg-primary-bg/50 px-3 py-2"
                value={formData.subject}
                onChange={handleChange}
                required
              >
                <option value="">Select a subject</option>
                <option value="general">General Inquiry</option>
                <option value="sales">Sales Question</option>
                <option value="support">Technical Support</option>
                <option value="partnership">Partnership Opportunity</option>
                <option value="careers">Careers</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                Message *
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="Tell us about your project or requirements"
                className="bg-primary-bg/50"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <div className="flex items-start gap-2">
              <input type="checkbox" id="privacy" className="mt-1" required />
              <label htmlFor="privacy" className="text-sm text-secondary-text">
                I agree to the{" "}
                <a href="#" className="text-accent-teal hover:underline">
                  Privacy Policy
                </a>{" "}
                and consent to NexusGraph processing my data for the purpose of
                contacting me.
              </label>
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-primary text-white py-6 text-lg"
            >
              Send Message
            </Button>
          </form>
        </>
      ) : (
        <div className="text-center py-16">
          <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-white" />
          </div>
          <h3 className="text-2xl font-bold mb-4">Message Sent!</h3>
          <p className="text-secondary-text mb-8">
            Thank you for reaching out to us. Our team will review your message
            and get back to you within 24 hours.
          </p>
          <Button
            onClick={() => {
              setSubmitted(false);
              setFormData({
                name: "",
                email: "",
                company: "",
                phone: "",
                subject: "",
                message: "",
              });
            }}
            variant="outline"
            className="border-accent-teal text-primary-text hover:bg-accent-teal/10"
          >
            Send Another Message
          </Button>
        </div>
      )}
    </motion.div>
  );
}

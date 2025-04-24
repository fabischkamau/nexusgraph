"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "~/components/ui/button";
import sarah from "~/assets/img/guillaume-bolduc-SGzbP-t1vlg-unsplash.jpg";
import michael from "~/assets/img/esref-yasa-MOQ-CUuED8w-unsplash.jpg";
import david from "~/assets/img/tom-prejeant-x5I4yCFiZds-unsplash.jpg";

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const testimonials = [
    {
      quote:
        "NexusGraph's knowledge graph solution has transformed how we access and utilize our data. We've seen dramatic improvements in decision-making speed and accuracy across our organization.",
      author: "Sarah Johnson",
      title: "CTO, Global Financial Services",
      image: sarah,
    },
    {
      quote:
        "The RAG system implemented by NexusGraph has revolutionized our customer support operations. Our agents now have instant access to contextual knowledge, resulting in faster resolution times and higher customer satisfaction.",
      author: "Michael Chen",
      title: "VP of Customer Experience, E-Commerce Retailer",
      image: michael,
    },
    {
      quote:
        "Working with NexusGraph to implement our supply chain knowledge graph was a game-changer. Their expertise and innovative approach helped us achieve results that exceeded our expectations.",
      author: "David Rodriguez",
      title: "Supply Chain Director, Manufacturing Conglomerate",
      image: david,
    },
  ];

  const nextTestimonial = () => {
    setCurrent((current + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      nextTestimonial();
    }, 8000);

    return () => clearInterval(interval);
  }, [current, autoplay]);

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-radial-gradient-purple opacity-10 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gradient">
            Client Testimonials
          </h2>
          <p className="text-secondary-text text-lg max-w-2xl mx-auto">
            Hear what our clients have to say about their experience working
            with NexusGraph.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute -left-16 top-1/2 transform -translate-y-1/2 hidden md:block opacity-10 pointer-events-none">
            <Quote className="w-32 h-32 text-accent-purple" />
          </div>

          <div className="relative h-80 overflow-hidden">
            <AnimatePresence mode="wait">
              {testimonials.map(
                (testimonial, index) =>
                  index === current && (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
                    >
                      <p className="text-xl md:text-2xl italic text-primary-text mb-8">
                        "{testimonial.quote}"
                      </p>
                      <div className="flex items-center gap-4">
                        <img
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.author}
                          className="w-16 h-16 rounded-full object-cover border-2 border-accent-teal"
                        />
                        <div className="text-left">
                          <h4 className="font-bold text-lg">
                            {testimonial.author}
                          </h4>
                          <p className="text-secondary-text">
                            {testimonial.title}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )
              )}
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full border-accent-purple/20 text-primary-text bg-transparent hover:border-accent-purple/50 hover:bg-accent-purple/10"
              onMouseEnter={() => setAutoplay(false)}
              onMouseLeave={() => setAutoplay(true)}
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === current
                      ? "bg-gradient-primary scale-125"
                      : "bg-secondary-text/30 hover:bg-secondary-text/50"
                  }`}
                  onMouseEnter={() => setAutoplay(false)}
                  onMouseLeave={() => setAutoplay(true)}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full border-accent-purple/20 text-primary-text bg-transparent hover:border-accent-purple/50 hover:bg-accent-purple/10"
              onMouseEnter={() => setAutoplay(false)}
              onMouseLeave={() => setAutoplay(true)}
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

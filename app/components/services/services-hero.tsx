"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function ServicesHero() {
  const sectionRef = useRef<HTMLElement>(null);

  const scrollToNextSection = () => {
    if (sectionRef.current) {
      const nextSection = sectionRef.current.nextElementSibling;
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  // Particle animation
  useEffect(() => {
    const canvas = document.getElementById(
      "services-particles"
    ) as HTMLCanvasElement;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = 500;

    const particles: {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
    }[] = [];

    const createParticle = () => {
      const colors = ["#7B42F6", "#00E5FF", "#5A5AFF"];
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 5 + 1,
        speedX: Math.random() * 3 - 1.5,
        speedY: Math.random() * 3 - 1.5,
        color: colors[Math.floor(Math.random() * colors.length)],
      };
    };

    for (let i = 0; i < 50; i++) {
      particles.push(createParticle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = 0.3;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x > canvas.width) particle.x = 0;
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.y > canvas.height) particle.y = 0;
        if (particle.y < 0) particle.y = canvas.height;
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = 500;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section ref={sectionRef} className="pt-32 pb-20 relative overflow-hidden">
      <canvas
        id="services-particles"
        className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none"
      ></canvas>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-gradient leading-tight">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-secondary-text mb-12 max-w-3xl mx-auto">
              Comprehensive solutions for knowledge graphs, RAG systems, and
              data intelligence that transform how enterprises leverage their
              connected data.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-6"
          >
            <div className="bg-secondary-bg/50 border border-accent-purple/20 rounded-xl p-8 w-64 h-64 flex flex-col items-center justify-center hover:border-accent-purple/50 transition-all hover:-translate-y-2 hover:shadow-lg">
              <div className="w-16 h-16 mb-4 bg-gradient-primary rounded-full flex items-center justify-center">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2L2 7L12 12L22 7L12 2Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 17L12 22L22 17"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 12L12 17L22 12"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Knowledge Graphs</h3>
              <p className="text-secondary-text text-center">
                Design and implementation of sophisticated graph databases
              </p>
            </div>

            <div className="bg-secondary-bg/50 border border-accent-purple/20 rounded-xl p-8 w-64 h-64 flex flex-col items-center justify-center hover:border-accent-purple/50 transition-all hover:-translate-y-2 hover:shadow-lg">
              <div className="w-16 h-16 mb-4 bg-gradient-primary rounded-full flex items-center justify-center">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 16V8.00002C20.9996 7.6493 20.9071 7.30483 20.7315 7.00119C20.556 6.69754 20.3037 6.44539 20 6.27002L13 2.27002C12.696 2.09449 12.3511 2.00208 12 2.00208C11.6489 2.00208 11.304 2.09449 11 2.27002L4 6.27002C3.69626 6.44539 3.44398 6.69754 3.26846 7.00119C3.09294 7.30483 3.00036 7.6493 3 8.00002V16C3.00036 16.3508 3.09294 16.6952 3.26846 16.9989C3.44398 17.3025 3.69626 17.5547 4 17.73L11 21.73C11.304 21.9056 11.6489 21.998 12 21.998C12.3511 21.998 12.696 21.9056 13 21.73L20 17.73C20.3037 17.5547 20.556 17.3025 20.7315 16.9989C20.9071 16.6952 20.9996 16.3508 21 16Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3.27002 6.96002L12 12.01L20.73 6.96002"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 22.08V12"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">RAG Systems</h3>
              <p className="text-secondary-text text-center">
                Advanced retrieval-augmented generation for AI applications
              </p>
            </div>

            <div className="bg-secondary-bg/50 border border-accent-purple/20 rounded-xl p-8 w-64 h-64 flex flex-col items-center justify-center hover:border-accent-purple/50 transition-all hover:-translate-y-2 hover:shadow-lg">
              <div className="w-16 h-16 mb-4 bg-gradient-primary rounded-full flex items-center justify-center">
                <svg
                  width="32"
                  height="32"
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
              <h3 className="text-xl font-bold mb-2">Data Integration</h3>
              <p className="text-secondary-text text-center">
                Seamless connection of disparate enterprise data sources
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-secondary-text text-sm opacity-80 hover:opacity-100 transition-all hover:-translate-y-1 cursor-pointer z-10"
        onClick={scrollToNextSection}
      >
        <span>Explore our services</span>
        <ChevronDown className="w-6 h-6 animate-bounce" />
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <section className="pt-32 pb-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-radial-gradient-purple opacity-10 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-gradient leading-tight">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-secondary-text mb-8 max-w-3xl mx-auto">
              Get in touch with our team to discuss how we can help transform
              your data ecosystem with our knowledge graph and RAG solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-6"
          >
            <div className="bg-secondary-bg/50 border border-accent-purple/20 rounded-xl p-6 flex flex-col items-center justify-center w-64">
              <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white mb-4">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 16.92V19.92C22 20.4704 21.7893 20.9991 21.4142 21.3742C21.0391 21.7493 20.5104 21.96 19.96 21.96C18.4536 21.8577 16.9782 21.5215 15.59 20.96C14.2895 20.4319 13.1123 19.6919 12.1 18.78C11.1881 17.7677 10.4481 16.5905 9.92 15.29C9.35846 13.9018 9.02225 12.4264 8.92 10.92C8.91993 10.3696 9.1307 9.84082 9.50577 9.46575C9.88085 9.09068 10.4096 8.87991 11 8.88H14C14.4704 8.87991 14.9209 9.05217 15.2698 9.35872C15.6187 9.66527 15.8499 10.0849 15.92 10.55C16.0208 11.3565 16.2122 12.1484 16.49 12.91C16.6219 13.2693 16.655 13.6614 16.5854 14.0394C16.5158 14.4174 16.3464 14.7672 16.1 15.05L15.11 16.04C15.6841 17.3754 16.5246 18.5863 17.59 19.59C18.5937 20.6554 19.8046 21.4959 21.14 22.07L22.13 21.08C22.4128 20.8336 22.7626 20.6642 23.1406 20.5946C23.5186 20.525 23.9107 20.5581 24.27 20.69C25.0316 20.9678 25.8235 21.1592 26.63 21.26C27.1042 21.331 27.5241 21.5652 27.8287 21.9172C28.1333 22.2692 28.3 22.7225 28.29 23.19V26.19C28.29 26.7404 28.0792 27.2691 27.7042 27.6442C27.3291 28.0193 26.8004 28.23 26.25 28.23C24.7436 28.1277 23.2682 27.7915 21.88 27.23C20.5795 26.7019 19.4023 25.9619 18.39 25.05C17.4781 24.0377 16.7381 22.8605 16.21 21.56C15.6485 20.1718 15.3123 18.6964 15.21 17.19C15.21 16.6396 15.4208 16.1109 15.7958 15.7358C16.1709 15.3607 16.6996 15.15 17.25 15.15H20.25C20.7204 15.1499 21.1709 15.3222 21.5198 15.6287C21.8687 15.9353 22.0999 16.3549 22.17 16.82C22.2708 17.6265 22.4622 18.4184 22.74 19.18C22.8719 19.5393 22.905 19.9314 22.8354 20.3094C22.7658 20.6874 22.5964 21.0372 22.35 21.32L21.36 22.31C21.9341 23.6454 22.7746 24.8563 23.84 25.86C24.8437 26.9254 26.0546 27.7659 27.39 28.34L28.38 27.35C28.6628 27.1036 29.0126 26.9342 29.3906 26.8646C29.7686 26.795 30.1607 26.8281 30.52 26.96C31.2816 27.2378 32.0735 27.4292 32.88 27.53C33.3542 27.601 33.7741 27.8352 34.0787 28.1872C34.3833 28.5392 34.55 28.9925 34.54 29.46V32.46C34.54 33.0104 34.3292 33.5391 33.9542 33.9142C33.5791 34.2893 33.0504 34.5 32.5 34.5C31.0108 34.3969 29.5523 34.0606 28.18 33.5C26.8795 32.9719 25.7023 32.2319 24.69 31.32C23.7781 30.3077 23.0381 29.1305 22.51 27.83C21.9485 26.4418 21.6123 24.9664 21.51 23.46"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-1">Phone</h3>
              <p className="text-secondary-text text-center">
                +1 (555) 123-4567
              </p>
            </div>

            <div className="bg-secondary-bg/50 border border-accent-purple/20 rounded-xl p-6 flex flex-col items-center justify-center w-64">
              <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white mb-4">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M22 6L12 13L2 6"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-1">Email</h3>
              <p className="text-secondary-text text-center">
                info@nexusgraph.com
              </p>
            </div>

            <div className="bg-secondary-bg/50 border border-accent-purple/20 rounded-xl p-6 flex flex-col items-center justify-center w-64">
              <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white mb-4">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-1">Location</h3>
              <p className="text-secondary-text text-center">
                123 Tech Plaza, San Francisco, CA 94105
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

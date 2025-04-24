"use client";

import { motion } from "framer-motion";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

export default function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ once: true }}
      className="bg-secondary-bg/80 backdrop-blur-sm rounded-xl p-8 border border-accent-purple/30 shadow-xl"
    >
      <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

      <div className="space-y-6">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-white flex-shrink-0">
            <MapPin className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-lg mb-1">Address</h3>
            <p className="text-secondary-text">
              123 Tech Plaza
              <br />
              San Francisco, CA 94105
              <br />
              United States
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-white flex-shrink-0">
            <Phone className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-lg mb-1">Phone</h3>
            <p className="text-secondary-text">
              Main: +1 (555) 123-4567
              <br />
              Support: +1 (555) 987-6543
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-white flex-shrink-0">
            <Mail className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-lg mb-1">Email</h3>
            <p className="text-secondary-text">
              General: info@nexusgraph.com
              <br />
              Support: support@nexusgraph.com
              <br />
              Sales: sales@nexusgraph.com
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-white flex-shrink-0">
            <Clock className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-lg mb-1">Business Hours</h3>
            <p className="text-secondary-text">
              Monday - Friday: 9:00 AM - 6:00 PM PST
              <br />
              Saturday - Sunday: Closed
            </p>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-accent-purple/20">
          <h3 className="font-bold text-lg mb-3">Connect With Us</h3>
          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-accent-purple/10 flex items-center justify-center text-primary-text hover:bg-gradient-primary transition-all hover:-translate-y-1"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 9H2V21H6V9Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-accent-purple/10 flex items-center justify-center text-primary-text hover:bg-gradient-primary transition-all hover:-translate-y-1"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23 3C22.0424 3.67548 20.9821 4.19211 19.86 4.53C19.2577 3.83751 18.4573 3.34669 17.567 3.12393C16.6767 2.90116 15.7395 2.9572 14.8821 3.28445C14.0247 3.61171 13.2884 4.1944 12.773 4.95372C12.2575 5.71303 11.9877 6.61234 12 7.53V8.53C10.2426 8.57557 8.50127 8.18581 6.93101 7.39545C5.36074 6.60508 4.01032 5.43864 3 4C3 4 -1 13 8 17C5.94053 18.398 3.48716 19.0989 1 19C10 24 21 19 21 7.5C20.9991 7.22145 20.9723 6.94359 20.92 6.67C21.9406 5.66349 22.6608 4.39271 23 3Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-accent-purple/10 flex items-center justify-center text-primary-text hover:bg-gradient-primary transition-all hover:-translate-y-1"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-accent-purple/10 flex items-center justify-center text-primary-text hover:bg-gradient-primary transition-all hover:-translate-y-1"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 2H8C4.68629 2 2 4.68629 2 8V16C2 19.3137 4.68629 22 8 22H16C19.3137 22 22 19.3137 22 16V8C22 4.68629 19.3137 2 16 2Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M17.5 6.5H17.51"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

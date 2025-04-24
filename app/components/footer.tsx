import { Link } from "react-router";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Logo from "~/components/ui/logo";

export default function Footer() {
  return (
    <footer className="bg-secondary-bg pt-20 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
          <div>
            <Logo />
            <p className="text-secondary-text mt-6 mb-8 max-w-sm">
              Your end-to-end partner for graph-powered solutions. From database
              implementation and custom algorithms to intelligent RAG pipelines
              and insightful analytics dashboards, we transform your connected
              data into a powerful asset for solving critical business
              challenges."
            </p>
            <div className="flex gap-4">
              <Link
                to="#"
                className="w-10 h-10 rounded-full bg-accent-purple/10 flex items-center justify-center text-primary-text hover:bg-gradient-to-r hover:from-accent-purple hover:to-accent-teal transition-all hover:-translate-y-1"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                to="#"
                className="w-10 h-10 rounded-full bg-accent-purple/10 flex items-center justify-center text-primary-text hover:bg-gradient-to-r hover:from-accent-purple hover:to-accent-teal transition-all hover:-translate-y-1"
              >
                <Twitter className="w-5 h-5" />
              </Link>
              <Link
                to="#"
                className="w-10 h-10 rounded-full bg-accent-purple/10 flex items-center justify-center text-primary-text hover:bg-gradient-to-r hover:from-accent-purple hover:to-accent-teal transition-all hover:-translate-y-1"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link
                to="#"
                className="w-10 h-10 rounded-full bg-accent-purple/10 flex items-center justify-center text-primary-text hover:bg-gradient-to-r hover:from-accent-purple hover:to-accent-teal transition-all hover:-translate-y-1"
              >
                <Instagram className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Services</h3>
            <div className="flex flex-col gap-4">
              <Link
                to="#rag"
                className="text-secondary-text hover:text-accent-teal transition-colors hover:translate-x-1 inline-block"
              >
                RAG Implementation
              </Link>
              <Link
                to="#knowledge-graph"
                className="text-secondary-text hover:text-accent-teal transition-colors hover:translate-x-1 inline-block"
              >
                Knowledge Graph Architecture
              </Link>
              <Link
                to="#data-integration"
                className="text-secondary-text hover:text-accent-teal transition-colors hover:translate-x-1 inline-block"
              >
                Data Integration
              </Link>
              <Link
                to="#custom-retrieval"
                className="text-secondary-text hover:text-accent-teal transition-colors hover:translate-x-1 inline-block"
              >
                Custom Retrieval Systems
              </Link>
              <Link
                to="#vector-db"
                className="text-secondary-text hover:text-accent-teal transition-colors hover:translate-x-1 inline-block"
              >
                Vector Database Implementation
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Company</h3>
            <div className="flex flex-col gap-4">
              <Link
                to="#about"
                className="text-secondary-text hover:text-accent-teal transition-colors hover:translate-x-1 inline-block"
              >
                About Us
              </Link>
              <Link
                to="#case-studies"
                className="text-secondary-text hover:text-accent-teal transition-colors hover:translate-x-1 inline-block"
              >
                Case Studies
              </Link>
              <Link
                to="#careers"
                className="text-secondary-text hover:text-accent-teal transition-colors hover:translate-x-1 inline-block"
              >
                Careers
              </Link>
              <Link
                to="#blog"
                className="text-secondary-text hover:text-accent-teal transition-colors hover:translate-x-1 inline-block"
              >
                Blog
              </Link>
              <Link
                to="#contact"
                className="text-secondary-text hover:text-accent-teal transition-colors hover:translate-x-1 inline-block"
              >
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Resources</h3>
            <div className="flex flex-col gap-4">
              <Link
                to="#documentation"
                className="text-secondary-text hover:text-accent-teal transition-colors hover:translate-x-1 inline-block"
              >
                Documentation
              </Link>
              <Link
                to="#whitepapers"
                className="text-secondary-text hover:text-accent-teal transition-colors hover:translate-x-1 inline-block"
              >
                White Papers
              </Link>
              <Link
                to="#webinars"
                className="text-secondary-text hover:text-accent-teal transition-colors hover:translate-x-1 inline-block"
              >
                Webinars
              </Link>
              <Link
                to="#tutorials"
                className="text-secondary-text hover:text-accent-teal transition-colors hover:translate-x-1 inline-block"
              >
                Tutorials
              </Link>
              <Link
                to="#glossary"
                className="text-secondary-text hover:text-accent-teal transition-colors hover:translate-x-1 inline-block"
              >
                Glossary
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-accent-purple/20 text-center text-secondary-text text-sm">
          <p>
            &copy; {new Date().getFullYear()} NexusGraph. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

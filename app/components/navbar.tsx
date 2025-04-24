"use client";

import { useState, useEffect } from "react";
import { Link } from "react-router";
import { Menu } from "lucide-react";
import { Button } from "~/components/ui/button";
import { cn } from "~/lib/utils";
import Logo from "~/components/ui/logo";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "py-4 bg-primary-bg/95 backdrop-blur-md shadow-md"
          : "py-6 bg-primary-bg/80 backdrop-blur-md"
      )}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <Logo />

        <div
          className={cn(
            "md:flex items-center gap-10 transition-all duration-300",
            mobileMenuOpen
              ? "absolute top-full right-4 flex flex-col bg-secondary-bg p-8 rounded-xl shadow-lg gap-6"
              : "hidden md:flex"
          )}
        >
          <Link
            to="/"
            className="text-primary-text font-medium relative py-2 hover:text-accent-teal transition-colors"
          >
            Home
          </Link>
          <Link
            to="/services"
            className="text-primary-text font-medium relative py-2 hover:text-accent-teal transition-colors"
          >
            Services
          </Link>
          <Link
            to="/solutions"
            className="text-primary-text font-medium relative py-2 hover:text-accent-teal transition-colors"
          >
            Solutions
          </Link>
          <Link
            to="/technology"
            className="text-primary-text font-medium relative py-2 hover:text-accent-teal transition-colors"
          >
            Technology
          </Link>
          <Link
            to="/case-studies"
            className="text-primary-text font-medium relative py-2 hover:text-accent-teal transition-colors"
          >
            Case Studies
          </Link>
          <Link
            to="/about"
            className="text-primary-text font-medium relative py-2 hover:text-accent-teal transition-colors"
          >
            About Us
          </Link>
          <Link to="/contact">
            <Button className="bg-gradient-primary text-white shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              Contact Us
            </Button>
          </Link>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Menu className="h-6 w-6" />
        </Button>
      </div>
    </nav>
  );
}

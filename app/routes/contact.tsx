import type { Route } from "./+types/contact";
import Navbar from "~/components/navbar";
import Footer from "~/components/footer";
import ContactHero from "~/components/contact/contact-hero";
import ContactForm from "~/components/contact/contact-form";
import ContactMap from "~/components/contact/contact-map";
import ContactInfo from "~/components/contact/contact-info";
import Faq from "~/components/contact/faq";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Contact Us | NexusGraph" },
    {
      name: "description",
      content:
        "Get in touch with our team to discuss how we can help transform your data ecosystem.",
    },
  ];
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-primary-bg text-primary-text">
      <Navbar />
      <ContactHero />
      <div className="container mx-auto px-4 md:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactForm />
          <div>
            <ContactMap />
            <ContactInfo />
          </div>
        </div>
      </div>
      <Faq />
      <Footer />
    </div>
  );
}

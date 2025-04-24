import { Button } from "~/components/ui/button";

export default function CtaSection() {
  return (
    <section className="py-32 relative overflow-hidden text-center">
      <div className="absolute inset-0 bg-radial-gradient-purple opacity-15 pointer-events-none" />
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Ready to Transform Your Data Ecosystem?
          </h2>
          <p className="text-secondary-text text-xl mb-10 max-w-2xl mx-auto">
            Discover how our advanced RAG and knowledge graph solutions can
            unlock the full potential of your enterprise data.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-primary text-white px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              Schedule a Consultation
            </Button>
            <Button
              variant="outline"
              className="border-accent-teal text-primary-text   bg-transparent hover:bg-accent-teal/10 px-8 py-6 text-lg transition-all hover:-translate-y-1 hover:text-accent-teal"
            >
              Request a Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

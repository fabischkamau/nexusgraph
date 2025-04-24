import { Button } from "~/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function SolutionsCta() {
  return (
    <section className="py-20 bg-secondary-bg">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-gradient">
            Ready to Transform Your Data Strategy?
          </h2>
          <p className="text-secondary-text text-xl mb-10 max-w-3xl mx-auto">
            Schedule a consultation with our solution architects to discuss how
            our knowledge graph and RAG solutions can address your specific
            business challenges.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-primary text-white px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              Schedule a Consultation <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              className="border-accent-teal text-primary-text bg-transparent hover:text-accent-teal hover:bg-accent-teal/10 px-8 py-6 text-lg transition-all hover:-translate-y-1"
            >
              Request a Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

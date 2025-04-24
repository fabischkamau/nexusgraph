import { Button } from "~/components/ui/button";

export default function CaseStudy() {
  return (
    <section id="case-studies" className="py-32 bg-secondary-bg">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="max-w-xl">
            <div className="inline-block bg-gradient-to-r from-accent-purple to-accent-teal px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Featured Case Study
            </div>
            <h2 className="text-4xl font-bold mb-6">
              Global Financial Institution
            </h2>
            <p className="text-secondary-text text-lg mb-8">
              We implemented a comprehensive knowledge graph solution that
              connected disparate data sources across the organization, enabling
              faster decision-making and reducing compliance risks.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              <div className="bg-primary-bg/50 rounded-xl p-6 border border-accent-purple/20">
                <div className="text-3xl font-bold bg-gradient-to-r from-accent-purple to-accent-teal bg-clip-text text-transparent mb-2">
                  87%
                </div>
                <div className="text-secondary-text text-sm">
                  Faster information retrieval compared to previous systems
                </div>
              </div>

              <div className="bg-primary-bg/50 rounded-xl p-6 border border-accent-purple/20">
                <div className="text-3xl font-bold bg-gradient-to-r from-accent-purple to-accent-teal bg-clip-text text-transparent mb-2">
                  63%
                </div>
                <div className="text-secondary-text text-sm">
                  Reduction in compliance-related incidents
                </div>
              </div>

              <div className="bg-primary-bg/50 rounded-xl p-6 border border-accent-purple/20">
                <div className="text-3xl font-bold bg-gradient-to-r from-accent-purple to-accent-teal bg-clip-text text-transparent mb-2">
                  4.2x
                </div>
                <div className="text-secondary-text text-sm">
                  Increase in cross-departmental data utilization
                </div>
              </div>

              <div className="bg-primary-bg/50 rounded-xl p-6 border border-accent-purple/20">
                <div className="text-3xl font-bold bg-gradient-to-r from-accent-purple to-accent-teal bg-clip-text text-transparent mb-2">
                  $12M
                </div>
                <div className="text-secondary-text text-sm">
                  Annual cost savings from improved efficiency
                </div>
              </div>
            </div>

            <Button className="bg-gradient-primary text-white px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              View All Case Studies
            </Button>
          </div>

          <div className="relative h-[500px] w-full rounded-xl overflow-hidden shadow-2xl border border-accent-purple/30 bg-gradient-to-br from-secondary-bg to-primary-bg flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Financial Knowledge Graph Dashboard"
              className="w-[90%] h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

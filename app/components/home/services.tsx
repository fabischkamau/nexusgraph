import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "~/components/ui/card";

export default function Services() {
  const services = [
    {
      id: "rag",
      title: "RAG Implementation",
      description:
        "Build advanced retrieval-augmented generation systems that enhance AI responses with contextual knowledge from your enterprise data.",
      icon: (
        <svg
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-20 h-20"
        >
          <rect
            x="10"
            y="15"
            width="40"
            height="50"
            rx="4"
            stroke="url(#paint0_linear_service1)"
            strokeWidth="2"
          />
          <rect
            x="20"
            y="25"
            width="40"
            height="50"
            rx="4"
            stroke="url(#paint1_linear_service1)"
            strokeWidth="2"
          />
          <path
            d="M30 35H50"
            stroke="url(#paint2_linear_service1)"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M30 45H50"
            stroke="url(#paint3_linear_service1)"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M30 55H40"
            stroke="url(#paint4_linear_service1)"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M60 45L70 55"
            stroke="url(#paint5_linear_service1)"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle
            cx="60"
            cy="45"
            r="5"
            stroke="url(#paint6_linear_service1)"
            strokeWidth="2"
          />
          <defs>
            <linearGradient
              id="paint0_linear_service1"
              x1="10"
              y1="15"
              x2="50"
              y2="65"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#7B42F6" />
              <stop offset="1" stopColor="#00E5FF" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_service1"
              x1="20"
              y1="25"
              x2="60"
              y2="75"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#7B42F6" />
              <stop offset="1" stopColor="#00E5FF" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_service1"
              x1="30"
              y1="35"
              x2="50"
              y2="35"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#7B42F6" />
              <stop offset="1" stopColor="#00E5FF" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_service1"
              x1="30"
              y1="45"
              x2="50"
              y2="45"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#7B42F6" />
              <stop offset="1" stopColor="#00E5FF" />
            </linearGradient>
            <linearGradient
              id="paint4_linear_service1"
              x1="30"
              y1="55"
              x2="40"
              y2="55"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#7B42F6" />
              <stop offset="1" stopColor="#00E5FF" />
            </linearGradient>
            <linearGradient
              id="paint5_linear_service1"
              x1="60"
              y1="45"
              x2="70"
              y2="55"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#7B42F6" />
              <stop offset="1" stopColor="#00E5FF" />
            </linearGradient>
            <linearGradient
              id="paint6_linear_service1"
              x1="55"
              y1="40"
              x2="65"
              y2="50"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#7B42F6" />
              <stop offset="1" stopColor="#00E5FF" />
            </linearGradient>
          </defs>
        </svg>
      ),
    },
    {
      id: "knowledge-graph",
      title: "Knowledge Graph Architecture",
      description:
        "Design and implement sophisticated knowledge graphs that reveal hidden connections and relationships within your enterprise data.",
      icon: (
        <svg
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-20 h-20"
        >
          <circle
            cx="40"
            cy="40"
            r="25"
            stroke="url(#paint0_linear_service2)"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />
          <circle cx="40" cy="40" r="4" fill="url(#paint1_linear_service2)" />
          <circle cx="25" cy="25" r="4" fill="url(#paint2_linear_service2)" />
          <circle cx="55" cy="25" r="4" fill="url(#paint3_linear_service2)" />
          <circle cx="25" cy="55" r="4" fill="url(#paint4_linear_service2)" />
          <circle cx="55" cy="55" r="4" fill="url(#paint5_linear_service2)" />
          <circle cx="15" cy="40" r="4" fill="url(#paint6_linear_service2)" />
          <circle cx="65" cy="40" r="4" fill="url(#paint7_linear_service2)" />
          <path
            d="M40 36V44"
            stroke="url(#paint8_linear_service2)"
            strokeWidth="1.5"
          />
          <path
            d="M36 40H44"
            stroke="url(#paint9_linear_service2)"
            strokeWidth="1.5"
          />
          <path
            d="M40 36L25 25"
            stroke="url(#paint10_linear_service2)"
            strokeWidth="1.5"
          />
          <path
            d="M40 36L55 25"
            stroke="url(#paint11_linear_service2)"
            strokeWidth="1.5"
          />
          <path
            d="M40 44L25 55"
            stroke="url(#paint12_linear_service2)"
            strokeWidth="1.5"
          />
          <path
            d="M40 44L55 55"
            stroke="url(#paint13_linear_service2)"
            strokeWidth="1.5"
          />
          <path
            d="M36 40L15 40"
            stroke="url(#paint14_linear_service2)"
            strokeWidth="1.5"
          />
          <path
            d="M44 40L65 40"
            stroke="url(#paint15_linear_service2)"
            strokeWidth="1.5"
          />
          <defs>
            <linearGradient
              id="paint0_linear_service2"
              x1="15"
              y1="15"
              x2="65"
              y2="65"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#7B42F6" />
              <stop offset="1" stopColor="#00E5FF" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_service2"
              x1="36"
              y1="36"
              x2="44"
              y2="44"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#7B42F6" />
              <stop offset="1" stopColor="#00E5FF" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_service2"
              x1="21"
              y1="21"
              x2="29"
              y2="29"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#7B42F6" />
              <stop offset="1" stopColor="#00E5FF" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_service2"
              x1="51"
              y1="21"
              x2="59"
              y2="29"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#7B42F6" />
              <stop offset="1" stopColor="#00E5FF" />
            </linearGradient>
            <linearGradient
              id="paint4_linear_service2"
              x1="21"
              y1="51"
              x2="29"
              y2="59"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#7B42F6" />
              <stop offset="1" stopColor="#00E5FF" />
            </linearGradient>
            <linearGradient
              id="paint5_linear_service2"
              x1="51"
              y1="51"
              x2="59"
              y2="59"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#7B42F6" />
              <stop offset="1" stopColor="#00E5FF" />
            </linearGradient>
            <linearGradient
              id="paint6_linear_service2"
              x1="11"
              y1="36"
              x2="19"
              y2="44"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#7B42F6" />
              <stop offset="1" stopColor="#00E5FF" />
            </linearGradient>
            <linearGradient
              id="paint7_linear_service2"
              x1="61"
              y1="36"
              x2="69"
              y2="44"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#7B42F6" />
              <stop offset="1" stopColor="#00E5FF" />
            </linearGradient>
            <linearGradient
              id="paint8_linear_service2"
              x1="40"
              y1="36"
              x2="40"
              y2="44"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#7B42F6" />
              <stop offset="1" stopColor="#00E5FF" />
            </linearGradient>
            <linearGradient
              id="paint9_linear_service2"
              x1="36"
              y1="40"
              x2="44"
              y2="40"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#7B42F6" />
              <stop offset="1" stopColor="#00E5FF" />
            </linearGradient>
            <linearGradient
              id="paint10_linear_service2"
              x1="40"
              y1="36"
              x2="25"
              y2="25"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#7B42F6" />
              <stop offset="1" stopColor="#00E5FF" />
            </linearGradient>
            <linearGradient
              id="paint11_linear_service2"
              x1="40"
              y1="36"
              x2="55"
              y2="25"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#7B42F6" />
              <stop offset="1" stopColor="#00E5FF" />
            </linearGradient>
            <linearGradient
              id="paint12_linear_service2"
              x1="40"
              y1="44"
              x2="25"
              y2="55"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#7B42F6" />
              <stop offset="1" stopColor="#00E5FF" />
            </linearGradient>
            <linearGradient
              id="paint13_linear_service2"
              x1="40"
              y1="44"
              x2="55"
              y2="55"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#7B42F6" />
              <stop offset="1" stopColor="#00E5FF" />
            </linearGradient>
            <linearGradient
              id="paint14_linear_service2"
              x1="36"
              y1="40"
              x2="15"
              y2="40"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#7B42F6" />
              <stop offset="1" stopColor="#00E5FF" />
            </linearGradient>
            <linearGradient
              id="paint15_linear_service2"
              x1="44"
              y1="40"
              x2="65"
              y2="40"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#7B42F6" />
              <stop offset="1" stopColor="#00E5FF" />
            </linearGradient>
          </defs>
        </svg>
      ),
    },
    {
      id: "data-integration",
      title: "Data Integration & Analysis",
      description:
        "Seamlessly connect disparate data sources and transform raw information into actionable intelligence with advanced analytics.",
      icon: (
        <svg
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-20 h-20"
        >
          <path
            d="M40 15V65"
            stroke="url(#paint0_linear_service3)"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />
          <path
            d="M15 40H65"
            stroke="url(#paint1_linear_service3)"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />
          <rect
            x="15"
            y="15"
            width="15"
            height="15"
            rx="2"
            stroke="url(#paint2_linear_service3)"
            strokeWidth="1.5"
          />
          <rect
            x="50"
            y="15"
            width="15"
            height="15"
            rx="2"
            stroke="url(#paint3_linear_service3)"
            strokeWidth="1.5"
          />
          <rect
            x="15"
            y="50"
            width="15"
            height="15"
            rx="2"
            stroke="url(#paint4_linear_service3)"
            strokeWidth="1.5"
          />
          <rect
            x="50"
            y="50"
            width="15"
            height="15"
            rx="2"
            stroke="url(#paint5_linear_service3)"
            strokeWidth="1.5"
          />
          <path
            d="M35 22.5H45"
            stroke="url(#paint6_linear_service3)"
            strokeWidth="1.5"
          />
          <path
            d="M35 57.5H45"
            stroke="url(#paint7_linear_service3)"
            strokeWidth="1.5"
          />
          <path
            d="M22.5 35V45"
            stroke="url(#paint8_linear_service3)"
            strokeWidth="1.5"
          />
          <path
            d="M57.5 35V45"
            stroke="url(#paint9_linear_service3)"
            strokeWidth="1.5"
          />
          <circle
            cx="40"
            cy="40"
            r="10"
            stroke="url(#paint10_linear_service3)"
            strokeWidth="1.5"
          />
          <path
            d="M36 40H44"
            stroke="url(#paint11_linear_service3)"
            strokeWidth="1.5"
          />
          <path
            d="M40 36V44"
            stroke="url(#paint12_linear_service3)"
            strokeWidth="1.5"
          />
          <defs>
            <linearGradient
              id="paint0_linear_service3"
              x1="40"
              y1="15"
              x2="40"
              y2="65"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#7B42F6" />
              <stop offset="1" stopColor="#00E5FF" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_service3"
              x1="15"
              y1="40"
              x2="65"
              y2="40"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#7B42F6" />
              <stop offset="1" stopColor="#00E5FF" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_service3"
              x1="15"
              y1="15"
              x2="30"
              y2="30"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#7B42F6" />
              <stop offset="1" stopColor="#00E5FF" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_service3"
              x1="50"
              y1="15"
              x2="65"
              y2="30"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#7B42F6" />
              <stop offset="1" stopColor="#00E5FF" />
            </linearGradient>
            <linearGradient
              id="paint4_linear_service3"
              x1="15"
              y1="50"
              x2="30"
              y2="65"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#7B42F6" />
              <stop offset="1" stopColor="#00E5FF" />
            </linearGradient>
            <linearGradient
              id="paint5_linear_service3"
              x1="50"
              y1="50"
              x2="65"
              y2="65"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#7B42F6" />
              <stop offset="1" stopColor="#00E5FF" />
            </linearGradient>
            <linearGradient
              id="paint6_linear_service3"
              x1="35"
              y1="22.5"
              x2="45"
              y2="22.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#7B42F6" />
              <stop offset="1" stopColor="#00E5FF" />
            </linearGradient>
            <linearGradient
              id="paint7_linear_service3"
              x1="35"
              y1="57.5"
              x2="45"
              y2="57.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#7B42F6" />
              <stop offset="1" stopColor="#00E5FF" />
            </linearGradient>
            <linearGradient
              id="paint8_linear_service3"
              x1="22.5"
              y1="35"
              x2="22.5"
              y2="45"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#7B42F6" />
              <stop offset="1" stopColor="#00E5FF" />
            </linearGradient>
            <linearGradient
              id="paint9_linear_service3"
              x1="57.5"
              y1="35"
              x2="57.5"
              y2="45"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#7B42F6" />
              <stop offset="1" stopColor="#00E5FF" />
            </linearGradient>
            <linearGradient
              id="paint10_linear_service3"
              x1="30"
              y1="30"
              x2="50"
              y2="50"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#7B42F6" />
              <stop offset="1" stopColor="#00E5FF" />
            </linearGradient>
            <linearGradient
              id="paint11_linear_service3"
              x1="36"
              y1="40"
              x2="44"
              y2="40"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#7B42F6" />
              <stop offset="1" stopColor="#00E5FF" />
            </linearGradient>
            <linearGradient
              id="paint12_linear_service3"
              x1="40"
              y1="36"
              x2="40"
              y2="44"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#7B42F6" />
              <stop offset="1" stopColor="#00E5FF" />
            </linearGradient>
          </defs>
        </svg>
      ),
    },
  ];

  return (
    <section id="services" className="py-32 bg-secondary-bg">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gradient">
            Our Core Services
          </h2>
          <p className="text-secondary-text text-lg max-w-2xl mx-auto">
            We specialize in building advanced knowledge systems that transform
            how enterprises access, connect, and leverage their data.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service) => (
            <Card
              key={service.id}
              className="bg-secondary-bg/50 border border-accent-purple/20 rounded-xl overflow-hidden h-[400px] flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-accent-purple/50 cursor-pointer group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/10 to-accent-teal/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <CardContent className="p-10 flex flex-col h-full relative z-10">
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-primary-text">
                  {service.title}
                </h3>
                <p className="text-secondary-text mb-6">
                  {service.description}
                </p>
                <div className="mt-auto">
                  <a
                    href={`#${service.id}`}
                    className="text-accent-teal flex items-center gap-2 font-medium transition-all duration-300 group-hover:gap-3 group-hover:text-accent-purple"
                  >
                    Learn More
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

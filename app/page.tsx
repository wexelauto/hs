import React from "react";
import Link from "next/link";
import { Search, Wrench, Rocket, Zap, RefreshCw, Headphones, Layers, Shield, Settings, Phone, Mail, ShoppingCart, TrendingUp, Globe, Database } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FAQ } from "@/components/FAQ";
import { IndustryMarquee } from "@/components/IndustryMarquee";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gray-900/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gray-900/20 rounded-full blur-3xl animate-pulse" />
        </div>
        <div className="relative z-10 container mx-auto px-4 py-20 flex flex-col items-center justify-center text-center">
          <h1 className="text-6xl sm:text-7xl lg:text-8xl -mt-[35px] mb-12 text-balance">
            <span
              className="bg-clip-text text-transparent drop-shadow-lg font-black leading-none tracking-tight"
              style={{
                backgroundImage: "linear-gradient(180deg, rgb(245, 245, 245) 0%, rgb(128, 128, 128) 100%)",
              }}
            >
              Accelerated Operations. Intelligent Growth.
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mb-12 leading-relaxed text-balance">
            Deploy bespoke AI infrastructure to handle mission-critical workflows 24/7. Eradicate operational friction
            with autonomous systems built for infinite scale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-gray-100 font-semibold px-8 py-6 text-base rounded-full w-full sm:w-auto"
              >
                Start Your Journey
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <IndustryMarquee />

      <section className="pt-20 pb-20 bg-black border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-16">
            <p className="text-sm font-sans text-gray-500 mb-4 tracking-widest uppercase">CHALLENGES</p>
            <h2 className="text-5xl sm:text-6xl font-black text-white mb-6 text-balance">
              Problems We Solve
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed">
              Organizations struggle with operational complexity. We eliminate it with intelligent AI systems that adapt to your unique workflows.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                problem: "Manual Process Bottlenecks",
                solution:
                  "Intelligent automation removes repetitive tasks, freeing teams to focus on strategic work while eliminating human error.",
              },
              {
                problem: "Inconsistent Data Integration",
                solution:
                  "Unified AI infrastructure seamlessly connects systems and creates a single source of truth for real-time visibility across teams.",
              },
              {
                problem: "Lack of 24/7 Operations",
                solution:
                  "AI agents work around the clock without breaks, capturing opportunities and handling critical tasks instantly, any time of day.",
              },
              {
                problem: "Scaling Without Infrastructure",
                solution:
                  "Deploy AI to scale operations without hiring proportionally. Multiply team capacity without multiplying labor costs.",
              },
              {
                problem: "Limited Business Intelligence",
                solution:
                  "Real-time AI analytics deliver instant insights on every metric that matters, enabling faster, data-driven decisions.",
              },
              {
                problem: "Change Management Friction",
                solution:
                  "AI systems adapt and evolve with your business, responding to market shifts faster than traditional infrastructure ever could.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group flex flex-col py-8 px-6 rounded-lg border border-white/10 hover:border-white/20 bg-white/[0.02] hover:bg-white/[0.05] backdrop-blur transition-all duration-300"
              >
                <div className="mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-red-500/20 border border-red-500/40 flex items-center justify-center text-base font-bold text-red-400 flex-shrink-0" style={{ marginTop: "15px" }}>
                      ✕
                    </div>
                    <h3 className="text-lg font-bold text-white" style={{ marginBottom: "-20px" }}>
                      {item.problem}
                    </h3>
                  </div>
                </div>
                <div className="flex items-start gap-4 mt-auto" style={{ marginBottom: "15px" }}>
                  <div className="w-10 h-10 rounded-full bg-green-500/20 border border-green-500/40 flex items-center justify-center text-base font-bold text-green-400 flex-shrink-0">
                    ✓
                  </div>
                  <p className="text-base text-gray-300 leading-relaxed">
                    {item.solution}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="py-20 bg-black border-t border-white/5 scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-5xl sm:text-6xl font-black text-white mb-6 text-balance">
              Powerful Capabilities
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed">
              Our infrastructure is built on world-class AI models and engineered for maximum reliability and throughput.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
            {[
              {
                icon: Zap,
                title: "Intelligent Workflows",
                description: "AI-powered automation that learns and adapts to your unique business needs.",
              },
              {
                icon: RefreshCw,
                title: "Real-Time Integration",
                description: "Seamlessly connect with your existing tools and platforms instantly.",
              },
              {
                icon: Headphones,
                title: "24/7 Operation",
                description: "Continuous automation without human intervention or downtime.",
              },
              {
                icon: Layers,
                title: "Advanced Analytics",
                description: "Deep insights into your automation performance and ROI metrics.",
              },
              {
                icon: Shield,
                title: "Enterprise Security",
                description: "Bank-level security with compliance for regulated industries.",
              },
              {
                icon: Settings,
                title: "Dedicated Support",
                description: "Expert assistance from AI automation specialists.",
              },
            ].map((item, i) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={i}
                  className="group relative p-6 rounded-lg border border-white/10 hover:border-white/20 bg-white/[0.02] backdrop-blur hover:bg-white/[0.05] transition-all duration-300 flex flex-col items-center text-center"
                >
                  <div className="mb-4">
                    <IconComponent className="w-8 h-8 text-white" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-base font-bold mb-2 text-white">{item.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-black border-t border-white/5 scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-16">
            <p className="text-sm font-sans text-gray-500 mb-4 tracking-widest uppercase">(DIGITAL FOUNDRY)</p>
            <h2 className="text-5xl sm:text-6xl font-black text-white mb-6 text-balance">
              Enterprise AI Services
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed">
              Specialized AI solutions engineered for enterprise-scale operations. From voice automation to intelligent commerce, we build the systems that power next-generation businesses.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Phone,
                title: "AI Voice Solutions",
                description:
                  "AI voice agents that pick up the phone, qualify leads, book appointments, and handle support. They sound human, work 24/7, and never miss a call.",
              },
              {
                icon: Mail,
                title: "Mass Outreach Automation",
                description:
                  "AI writes a unique email for every prospect. Actual personalization based on who they are and what they care about. Thousands go out. They land in inboxes, not spam.",
              },
              {
                icon: ShoppingCart,
                title: "E-Commerce Intelligence",
                description:
                  "AI that knows what your customers want before they do. Dynamic pricing adjusts in real time. Abandoned carts get recovered automatically.",
              },
              {
                icon: TrendingUp,
                title: "Autonomous Social Media",
                description:
                  "AI that schedules posts, responds to engagement, and tracks performance across every platform you use. One dashboard. No manual posting.",
              },
              {
                icon: Globe,
                title: "Next-Gen Web Experiences",
                description:
                  "Websites that load fast, rank well, and convert visitors into customers. Clean code, strategic design, and SEO built into the foundation.",
              },
              {
                icon: Database,
                title: "Intelligent AI CRM",
                description:
                  "AI-powered CRM that drives engagement, scores leads, and automates follow-ups across every channel. Faster response times. A pipeline you can trust.",
              },
            ].map((item, i) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={i}
                  className="group relative p-6 rounded-lg border border-white/10 hover:border-white/20 bg-white/[0.02] backdrop-blur hover:bg-white/[0.05] transition-all duration-300"
                >
                  <div className="mb-4">
                    <IconComponent className="w-8 h-8 text-white" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-base font-bold mb-3 text-white">{item.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-black border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-sm font-sans text-gray-500 mb-4 tracking-widest">( OUR PROCESS )</p>
            <h2
              className="text-white text-balance"
              style={{ fontSize: "40px", fontWeight: "600", lineHeight: "1em" }}
            >
              How We Turn Ideas Into Intelligent Systems.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center group">
              <div className="mb-8">
                <Search className="w-16 h-16 text-white transition-colors duration-300" strokeWidth={1} />
              </div>
              <h3 className="text-2xl font-black text-white mb-4">1. DISCOVER</h3>
              <p className="text-gray-400 leading-relaxed">
                We analyze your data ecosystem to find the fertile ground where AI can take root and drive value.
              </p>
            </div>
            <div className="flex flex-col items-center text-center group">
              <div className="mb-8">
                <Wrench className="w-16 h-16 text-white transition-colors duration-300" strokeWidth={1} />
              </div>
              <h3 className="text-2xl font-black text-white mb-4">2. BUILD</h3>
              <p className="text-gray-400 leading-relaxed">
                Custom AI systems engineered to your specifications, integrating seamlessly with your existing infrastructure and workflows.
              </p>
            </div>
            <div className="flex flex-col items-center text-center group">
              <div className="mb-8">
                <Rocket className="w-16 h-16 text-white transition-colors duration-300" strokeWidth={1} />
              </div>
              <h3 className="text-2xl font-black text-white mb-4">3. LAUNCH</h3>
              <p className="text-gray-400 leading-relaxed">
                We implement continuous learning loops, allowing your system to evolve and improve as your business grows.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FAQ />

      <section className="py-20 bg-black border-t border-white/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-200 via-white to-gray-300 bg-clip-text text-transparent">
              Ready to Automate?
            </span>
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Join the future of work. Let's transform your business together.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-white text-black hover:bg-gray-100 font-semibold px-10 py-6 text-base rounded-full"
            >
              Book an Audit
            </Button>
          </Link>
        </div>
      </section>

    </div>
  );
}

import React from "react";
import Link from "next/link";
import { Server, Globe, Database, Clock, CircleCheckBig, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";

const metrics = [
  { name: "API Uptime", value: "99.99%", status: "", icon: <Server className="w-6 h-6 text-emerald-400" /> },
  { name: "Global Edge Network", value: "100%", status: "Operational", icon: <Globe className="w-6 h-6 text-emerald-400" /> },
  { name: "Database Latency", value: "12ms", status: "Optimal", icon: <Database className="w-6 h-6 text-emerald-400" /> },
  { name: "Avg Response Time", value: "45ms", status: "Fast", icon: <Clock className="w-6 h-6 text-emerald-400" /> }
];

const services = [
  { name: "Core Application", status: "Operational" },
  { name: "API Gateway", status: "Operational" },
  { name: "Authentication Identity", status: "Operational" },
  { name: "AI Inference Engine", status: "Operational" },
  { name: "Background Workers", status: "Operational" }
];

export default function Status() {
  return (
    <div className="min-h-screen bg-black text-white">
      <section className="relative pt-32 pb-16 border-b border-white/5 overflow-hidden min-h-[40vh] flex items-center">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-600/5 rounded-full blur-[120px] animate-pulse" />
        </div>
        <div className="relative z-10 container mx-auto px-4 max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 mb-8 shadow-[0_0_15px_rgba(16,185,129,0.15)]">
            <CircleCheckBig className="w-4 h-4" />
            <span className="text-sm font-medium tracking-wide">All Systems Operational</span>
          </div>
          <h1 className="text-5xl sm:text-7xl font-black mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500">System Status</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed text-balance">
            Real-time operational status and performance metrics for our core infrastructure and AI services.
          </p>
        </div>
      </section>

      <section className="py-24 bg-black relative">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric, i) => (
              <div key={i} className="group p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-white/5 group-hover:scale-110 transition-transform duration-500">
                    {metric.icon}
                  </div>
                </div>
                <h3 className="text-gray-400 text-sm font-medium mb-2">{metric.name}</h3>
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <span className="text-4xl font-bold text-white tracking-tight">{metric.value}</span>
                  <span className="text-sm text-emerald-400 font-medium">{metric.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-black relative border-t border-white/5">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex items-center gap-3 mb-10">
            <Activity className="w-6 h-6 text-gray-400" />
            <h2 className="text-3xl font-bold text-white">Active Services</h2>
          </div>
          <div className="bg-white/[0.02] border border-white/5 rounded-2xl overflow-hidden divide-y divide-white/5">
            {services.map((service, i) => (
              <div key={i} className="p-6 md:p-8 flex items-center justify-between hover:bg-white/[0.04] transition-colors group">
                <span className="text-lg font-medium text-gray-200 group-hover:text-white transition-colors">{service.name}</span>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-emerald-400 font-medium hidden sm:inline-block">{service.status}</span>
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)] animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-black relative border-t border-white/5">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex items-center gap-3 mb-10">
            <Clock className="w-6 h-6 text-gray-400" />
            <h2 className="text-3xl font-bold text-white">Past Incidents</h2>
          </div>
          <div className="p-12 rounded-2xl border border-white/5 bg-white/[0.02] text-center">
            <CircleCheckBig className="w-10 h-10 text-emerald-500/50 mx-auto mb-4" />
            <h3 className="text-xl font-medium text-white mb-2">No active incidents</h3>
            <p className="text-gray-400">All systems have been fully operational for the last 90 days.</p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-black border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-gradient-to-b from-transparent via-gray-800/10 to-transparent blur-[100px]" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-200 via-white to-gray-300 bg-clip-text text-transparent">Need technical support?</span>
          </h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Our engineering team is available 24/7 to assist with any technical issues or inquiries.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-black hover:bg-gray-100 font-semibold px-10 py-6 text-base rounded-full">
              Contact Support
            </Button>
          </Link>
        </div>
      </section>

    </div>
  );
}

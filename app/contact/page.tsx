"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Mail, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import * as LabelPrimitive from "@radix-ui/react-label";

const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

const Label = React.forwardRef<React.ElementRef<typeof LabelPrimitive.Root>, React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>>(
  ({ className, ...props }, ref) => (
    <LabelPrimitive.Root
      ref={ref}
      className={cn(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
);
Label.displayName = LabelPrimitive.Root.displayName;

function ContactForm() {
  const [status, setStatus] = useState("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setStatus("success");
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center mb-6">
          <Mail className="w-7 h-7 text-foreground" />
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-3">Message Sent</h3>
        <p className="text-muted-foreground max-w-md leading-relaxed">
          We've received your message and will get back to you within 24 hours. Check your inbox for a confirmation.
        </p>
        <Button onClick={() => setStatus("idle")} variant="outline" className="mt-8 border-white/20 text-foreground hover:bg-white/5">
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="firstName" className="text-muted-foreground text-xs tracking-widest uppercase font-sans">
            First Name
          </Label>
          <Input
            id="firstName"
            name="firstName"
            required
            placeholder="John"
            className="bg-white/[0.03] border-white/10 text-foreground placeholder:text-muted-foreground/50 h-12 focus-visible:border-white/30 focus-visible:ring-white/10"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName" className="text-muted-foreground text-xs tracking-widest uppercase font-sans">
            Last Name
          </Label>
          <Input
            id="lastName"
            name="lastName"
            required
            placeholder="Doe"
            className="bg-white/[0.03] border-white/10 text-foreground placeholder:text-muted-foreground/50 h-12 focus-visible:border-white/30 focus-visible:ring-white/10"
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="email" className="text-muted-foreground text-xs tracking-widest uppercase font-sans">
          Email Address
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          placeholder="john@company.com"
          className="bg-white/[0.03] border-white/10 text-foreground placeholder:text-muted-foreground/50 h-12 focus-visible:border-white/30 focus-visible:ring-white/10"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="company" className="text-muted-foreground text-xs tracking-widest uppercase font-sans">
          Company
        </Label>
        <Input
          id="company"
          name="company"
          placeholder="Acme Inc."
          className="bg-white/[0.03] border-white/10 text-foreground placeholder:text-muted-foreground/50 h-12 focus-visible:border-white/30 focus-visible:ring-white/10"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="subject" className="text-muted-foreground text-xs tracking-widest uppercase font-sans">
          What can we help with?
        </Label>
        <select
          id="subject"
          name="subject"
          required
          className="w-full h-12 rounded-md border bg-white/[0.03] border-white/10 text-foreground px-3 text-sm outline-none focus-visible:border-white/30 focus-visible:ring-white/10 focus-visible:ring-[3px] transition-[color,box-shadow] appearance-none"
          defaultValue=""
        >
          <option value="" disabled className="bg-black text-muted-foreground">
            Select a topic
          </option>
          <option value="ai-voice" className="bg-black">
            AI Voice Solutions
          </option>
          <option value="outreach" className="bg-black">
            Mass Outreach Automation
          </option>
          <option value="ecommerce" className="bg-black">
            E-Commerce Intelligence
          </option>
          <option value="social" className="bg-black">
            Autonomous Social Media
          </option>
          <option value="web" className="bg-black">
            Next-Gen Web Experiences
          </option>
          <option value="crm" className="bg-black">
            Intelligent AI CRM
          </option>
          <option value="general" className="bg-black">
            General Inquiry
          </option>
        </select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="message" className="text-muted-foreground text-xs tracking-widest uppercase font-sans">
          Message
        </Label>
        <Textarea
          id="message"
          name="message"
          required
          placeholder="Tell us about your project, goals, and timeline..."
          rows={5}
          className="bg-white/[0.03] border-white/10 text-foreground placeholder:text-muted-foreground/50 min-h-32 focus-visible:border-white/30 focus-visible:ring-white/10"
        />
      </div>
      <Button
        type="submit"
        disabled={status === "submitting"}
        size="lg"
        className="w-full bg-foreground text-background hover:bg-foreground/90 font-semibold h-12 text-base rounded-full group"
      >
        {status === "submitting" ? (
          "Sending..."
        ) : (
          <>
            Send Message
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </>
        )}
      </Button>
    </form>
  );
}

export default function Contact() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="pt-32 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-sans text-muted-foreground mb-6 tracking-widest uppercase">(Contact)</p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-foreground text-balance leading-none mb-8">
              Let's Build Something Intelligent.
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Ready to automate your operations? Tell us about your business and we'll craft a custom AI solution designed for your exact needs.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-16">
            <div className="lg:col-span-3" id="contact-form">
              <div className="p-8 sm:p-10 rounded-xl border border-white/10 bg-white/[0.02] scroll-mt-24">
                <ContactForm />
              </div>
            </div>
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h3 className="text-xs font-sans text-muted-foreground tracking-widest uppercase mb-6">Direct Contact</h3>
                <div className="space-y-5">
                  <a href="mailto:owais@wexel.ai" className="group flex items-center gap-4 p-4 rounded-lg border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-all">
                    <div className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center flex-shrink-0 group-hover:border-white/30 transition-colors">
                      <Mail className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="text-foreground font-medium">owais@wexel.ai</p>
                    </div>
                  </a>
                </div>
              </div>
              <div>
                <h3 className="text-xs font-sans text-muted-foreground tracking-widest uppercase mb-6">Response Time</h3>
                <div className="p-4 rounded-lg border border-white/10 bg-white/[0.02]">
                  <p className="text-foreground font-semibold mb-1">Within 24 hours</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    We respond to every inquiry within one business day. For urgent projects, mention it in your message.
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-xs font-sans text-muted-foreground tracking-widest uppercase mb-6">What Happens Next</h3>
                <div className="space-y-4">
                  {[
                    { step: "01", title: "Discovery Call", description: "We schedule a 20-minute call to understand your business and goals." },
                    { step: "02", title: "Custom Proposal", description: "You receive a tailored plan with scope, timeline, and transparent pricing." },
                    { step: "03", title: "Build & Launch", description: "Our team builds your AI solution and deploys it within weeks." },
                  ].map((e) => (
                    <div className="flex gap-4" key={e.step}>
                      <span className="text-xs font-sans text-muted-foreground/50 mt-1 flex-shrink-0">{e.step}</span>
                      <div>
                        <p className="text-foreground font-semibold text-sm mb-1">{e.title}</p>
                        <p className="text-sm text-muted-foreground leading-relaxed">{e.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xs font-sans text-muted-foreground tracking-widest uppercase mb-6">Follow Us</h3>
                <div className="flex gap-3">
                  {["Twitter", "LinkedIn", "GitHub"].map((e) => (
                    <a href="#" key={e} className="px-4 py-2 rounded-full border border-white/10 text-sm text-muted-foreground hover:text-foreground hover:border-white/25 transition-all">
                      {e}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

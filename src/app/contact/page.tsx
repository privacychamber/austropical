"use client";

import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", topic: "general", message: "" });
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSuccess(true);
    setForm({ name: "", email: "", topic: "general", message: "" });
  };

  return (
    <div className="bg-brand-cream text-brand-purple min-h-screen relative overflow-x-hidden font-sans">
      <Navbar />

      <section className="pt-36 pb-24 max-w-container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-left">
        
        {/* Left Side Details */}
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-4">
            <span className="text-xs font-black text-brand-orange bg-brand-orange/15 px-3 py-1.5 rounded-btn uppercase tracking-wider">
              Get In Touch
            </span>
            <h1 className="text-4xl font-black font-display text-brand-purple leading-tight">
              Connect With Us.
            </h1>
            <p className="text-brand-purple/75 text-sm font-semibold max-w-sm leading-relaxed">
              Have questions about wholesale, our custom Amazonian sourcing, subscription changes, or simple healthy recipes? Drop us a line!
            </p>
          </div>

          <div className="space-y-6 pt-4 border-t border-brand-purple/10 text-xs font-semibold text-brand-purple/80">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-brand-orange/10 flex items-center justify-center text-brand-orange">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-brand-purple uppercase tracking-wider text-[10px] text-brand-purple/40">Email Us</p>
                <p className="font-extrabold text-sm mt-0.5">hello@austropical.com.au</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-brand-purple uppercase tracking-wider text-[10px] text-brand-purple/40">Call Us</p>
                <p className="font-extrabold text-sm mt-0.5">+61 2 9876 5432</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-brand-pink/10 flex items-center justify-center text-brand-pink">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-brand-purple uppercase tracking-wider text-[10px] text-brand-purple/40">Location</p>
                <p className="font-extrabold text-sm mt-0.5">Sydney, NSW 2000, Australia</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Form Card */}
        <div className="lg:col-span-7 bg-white border border-brand-purple/5 p-8 md:p-10 rounded-card shadow-lg">
          {success ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-12 h-12 bg-brand-green/10 text-brand-green rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold font-display text-brand-purple">Message Sent!</h3>
              <p className="text-xs text-brand-purple/60 font-semibold max-w-sm mx-auto leading-relaxed">
                Thank you for contacting us. A wellness advisor from our customer service team will get back to you within 24 hours.
              </p>
              <button
                onClick={() => setSuccess(false)}
                className="px-6 py-2 bg-brand-purple hover:bg-brand-purple-light text-white text-xs font-bold rounded-btn transition-colors"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black text-brand-purple/50 uppercase tracking-widest block">Your Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-2.5 bg-brand-cream border border-brand-purple/10 rounded-input text-xs font-semibold focus:border-brand-purple outline-none"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black text-brand-purple/50 uppercase tracking-widest block">Email Address</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-2.5 bg-brand-cream border border-brand-purple/10 rounded-input text-xs font-semibold focus:border-brand-purple outline-none"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-black text-brand-purple/50 uppercase tracking-widest block">Inquiry Topic</label>
                <select
                  value={form.topic}
                  onChange={(e) => setForm({ ...form, topic: e.target.value })}
                  className="w-full px-4 py-2.5 bg-brand-cream border border-brand-purple/10 rounded-input text-xs font-semibold focus:border-brand-purple outline-none"
                >
                  <option value="general">General Inquiry</option>
                  <option value="order">Order Support &amp; Tracking</option>
                  <option value="wholesale">Wholesale &amp; Corporate Partnerships</option>
                  <option value="sustainability">Rainforest Sourcing Details</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-black text-brand-purple/50 uppercase tracking-widest block">Message</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="How can our superfoods team help you?"
                  className="w-full px-4 py-2.5 bg-brand-cream border border-brand-purple/10 rounded-input text-xs font-semibold focus:border-brand-purple outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-brand-purple hover:bg-brand-purple-light text-white font-bold rounded-btn transition-colors flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
              >
                <span>Submit Inquiry Message</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}

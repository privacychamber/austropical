"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "./Button";

interface QuizModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const QUESTIONS = [
  {
    title: "What's your typical morning vibe?",
    options: [
      { id: "rush", label: "Out the door in 5 mins", icon: "🏃‍♀️" },
      { id: "chill", label: "Slow & steady breakfast", icon: "☕" },
      { id: "workout", label: "Post-workout refuel", icon: "💪" },
    ]
  },
  {
    title: "How do you prefer your Açaí?",
    options: [
      { id: "blended", label: "Blended into a smoothie", icon: "🥤" },
      { id: "bowl", label: "Thick, loaded with toppings", icon: "🥣" },
      { id: "snack", label: "Just a quick frozen snack", icon: "🧊" },
    ]
  }
];

export function QuizModal({ isOpen, onClose }: QuizModalProps) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSelect = (optionId: string) => {
    setAnswers(prev => ({ ...prev, [step]: optionId }));
    setTimeout(() => {
      if (step < QUESTIONS.length - 1) {
        setStep(step + 1);
      } else {
        setStep(step + 1); // Move to lead capture
      }
    }, 400);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitted(true);
  };

  const resetQuiz = () => {
    setStep(0);
    setAnswers({});
    setEmail("");
    setIsSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={resetQuiz}
            className="absolute inset-0 bg-[#1A5D2C]/40 backdrop-blur-sm"
          />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-lg bg-[#FDFBF7] rounded-[40px] shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-[#B2D235] p-6 text-center relative">
              <button 
                onClick={resetQuiz}
                className="absolute top-6 right-6 text-[#1A5D2C] hover:bg-white/20 p-2 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <h2 className="font-display font-black text-2xl text-[#1A5D2C] uppercase tracking-wide">
                Find Your Flavor
              </h2>
            </div>

            <div className="p-8">
              <AnimatePresence mode="wait">
                
                {/* Questions */}
                {step < QUESTIONS.length && (
                  <motion.div 
                    key={step}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[#F7931E] font-bold text-sm tracking-widest uppercase">
                        Question {step + 1} of {QUESTIONS.length}
                      </span>
                    </div>
                    <h3 className="text-2xl font-black text-[#1A5D2C] leading-tight">
                      {QUESTIONS[step].title}
                    </h3>
                    
                    <div className="space-y-3">
                      {QUESTIONS[step].options.map((opt) => (
                        <button
                          key={opt.id}
                          onClick={() => handleSelect(opt.id)}
                          className={`w-full flex items-center gap-4 p-4 rounded-2xl border-2 transition-all duration-300 text-left ${
                            answers[step] === opt.id 
                              ? "border-[#1A5D2C] bg-[#1A5D2C]/5" 
                              : "border-[#1A5D2C]/10 hover:border-[#F7931E] bg-white"
                          }`}
                        >
                          <span className="text-2xl">{opt.icon}</span>
                          <span className="font-bold text-[#1A5D2C]">{opt.label}</span>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Lead Capture */}
                {step === QUESTIONS.length && !isSubmitted && (
                  <motion.div 
                    key="lead-capture"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center space-y-6"
                  >
                    <div className="w-20 h-20 bg-[#F7931E]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-4xl">🎉</span>
                    </div>
                    <h3 className="text-3xl font-black font-display text-[#1A5D2C] uppercase leading-tight">
                      We've found your perfect match!
                    </h3>
                    <p className="text-[#1A5D2C]/70">
                      Based on your answers, we know exactly which Austropical product will fuel your routine. Enter your email to reveal your match and get a <strong className="text-[#F7931E]">FREE sample code</strong>.
                    </p>
                    
                    <form onSubmit={handleSubmit} className="space-y-4 pt-4">
                      <input 
                        type="email" 
                        required
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-6 py-4 rounded-xl border-2 border-[#1A5D2C]/10 focus:border-[#1A5D2C] outline-none font-bold text-[#1A5D2C] placeholder-[#1A5D2C]/40 bg-white"
                      />
                      <Button type="submit" className="w-full bg-[#1A5D2C] hover:bg-[#F7931E] hover:text-[#1A5D2C] text-white py-6 rounded-xl font-bold shadow-[0_8px_30px_rgba(26,93,44,0.15)] transition-colors">
                        Reveal My Match & Get Free Sample
                      </Button>
                    </form>
                  </motion.div>
                )}

                {/* Success State */}
                {isSubmitted && (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center space-y-6 py-8"
                  >
                    <CheckCircle2 className="w-24 h-24 text-[#B2D235] mx-auto" />
                    <h3 className="text-3xl font-black font-display text-[#1A5D2C] uppercase">
                      You're a <br/> Smoothie Cube Pro!
                    </h3>
                    <p className="text-[#1A5D2C]/70">
                      Your free sample code has been sent to <strong>{email}</strong>. Use code <span className="font-bold text-[#F7931E] bg-[#F7931E]/10 px-2 py-1 rounded">FREEAUSTRO</span> at checkout!
                    </p>
                    <Button onClick={resetQuiz} className="mt-8 bg-white border-2 border-[#1A5D2C] text-[#1A5D2C] hover:bg-[#1A5D2C] hover:text-white rounded-xl px-8 font-bold transition-colors">
                      Continue Shopping
                    </Button>
                  </motion.div>
                )}

              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

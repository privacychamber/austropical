"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Mail, Lock, ShieldCheck, ArrowRight, Loader2 } from "lucide-react";

const GoogleIcon = () => (
  <svg className="w-4 h-4 text-brand-orange" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.24 10.285V13.4h6.887c-.275 1.565-1.88 4.604-6.887 4.604-4.33 0-7.859-3.578-7.859-8s3.529-8 7.859-8c2.46 0 4.105 1.025 5.047 1.926l2.427-2.334C18.155 2.124 15.435 1 12.24 1 6.033 1 1 6.033 1 12.24s5.033 11.24 11.24 11.24c6.478 0 10.793-4.537 10.793-10.986 0-.746-.08-1.32-.176-1.886H12.24z"/>
  </svg>
);

const AppleIcon = () => (
  <svg className="w-4 h-4 text-brand-purple" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-.96.04-2.13.64-2.82 1.45-.6.69-1.12 1.83-.98 2.94 1.07.08 2.16-.52 2.81-1.33z"/>
  </svg>
);


export default function LoginPage() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);
  const [step, setStep] = useState(1); // 1 = input email, 2 = OTP, 3 = Password
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  useEffect(() => {
    // Check if user is already logged in
    const user = localStorage.getItem("austropical_user");
    if (user) {
      router.push("/account");
    }
  }, [router]);

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setStep(2); // Move to OTP verification step
        setSuccessMsg("We sent a 4-digit code to " + email);
      }, 1000);
    } else if (step === 2) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        // Persist mock user session
        localStorage.setItem(
          "austropical_user",
          JSON.stringify({
            email,
            name: email.split("@")[0],
            points: 150,
            referralCode: "AUS-GLOW-" + Math.floor(1000 + Math.random() * 9000),
            joinedDate: new Date().toLocaleDateString("en-AU", { month: "long", year: "numeric" }),
          })
        );
        router.push("/account");
      }, 1200);
    }
  };

  const handleSocialMock = (provider: string) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      localStorage.setItem(
        "austropical_user",
        JSON.stringify({
          email: `${provider.toLowerCase()}user@austropical.com`,
          name: `${provider} Guest`,
          points: 200,
          referralCode: "AUS-GLOW-SOCIAL",
          joinedDate: new Date().toLocaleDateString("en-AU", { month: "long", year: "numeric" }),
        })
      );
      router.push("/account");
    }, 1000);
  };

  return (
    <div className="bg-brand-cream text-brand-purple min-h-screen relative overflow-x-hidden font-sans">
      <Navbar />

      <section className="pt-32 pb-24 max-w-container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side: Brand Story details */}
        <div className="hidden lg:block lg:col-span-6 space-y-6 text-left">
          <div className="inline-flex items-center gap-2 bg-brand-purple/5 px-4 py-2 rounded-btn">
            <ShieldCheck className="w-4 h-4 text-brand-orange" />
            <span className="text-xs font-black uppercase tracking-wider">Secure Access</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black font-display text-brand-purple leading-tight">
            Nourish Your Journey.
          </h2>
          <p className="text-brand-purple/80 text-base font-semibold max-w-md">
            Log in to manage subscriptions, trace your orders, view your loyalty wellness points, and invite friends to earn discounts.
          </p>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=600&q=80"
            alt="Smoothie"
            className="w-full h-48 object-cover rounded-card border border-brand-purple/5 shadow-md"
          />
        </div>

        {/* Right Side: Account details form card */}
        <div className="lg:col-span-6 max-w-md mx-auto w-full">
          <div className="bg-white border border-brand-purple/5 p-8 md:p-10 rounded-card shadow-lg text-left space-y-6">
            <div className="space-y-1">
              <h3 className="text-2xl font-bold font-display text-brand-purple">
                {isLogin ? "Welcome Back" : "Create Account"}
              </h3>
              <p className="text-xs font-semibold text-brand-purple/50">
                {isLogin ? "Sign in to your Austropical profile" : "Start your wellness ritual today"}
              </p>
            </div>

            {/* Stepper Logic form */}
            <form onSubmit={handleNextStep} className="space-y-4">
              {step === 1 && (
                <div className="space-y-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black text-brand-purple/50 uppercase tracking-widest block">
                      Email Address
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                        className="w-full pl-10 pr-4 py-2.5 bg-brand-cream border border-brand-purple/10 rounded-input text-sm font-semibold outline-none focus:border-brand-purple"
                      />
                      <Mail className="absolute left-3.5 top-3 w-4.5 h-4.5 text-brand-purple/40" />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 bg-brand-purple hover:bg-brand-purple-light text-white font-bold rounded-btn transition-colors flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      <>
                        <span>Continue</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4">
                  {successMsg && (
                    <p className="text-xs text-brand-green font-bold bg-brand-green/10 border border-brand-green/15 p-3 rounded-lg">
                      {successMsg}
                    </p>
                  )}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black text-brand-purple/50 uppercase tracking-widest block">
                      Enter 4-Digit OTP
                    </label>
                    <input
                      type="text"
                      required
                      maxLength={4}
                      placeholder="0000"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      className="w-full py-3 bg-brand-cream border border-brand-purple/10 rounded-input text-center text-xl font-bold tracking-widest outline-none focus:border-brand-purple"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 bg-brand-orange hover:bg-brand-yellow text-brand-purple font-black rounded-btn transition-colors flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      <span>Verify &amp; Log In</span>
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="text-xs text-brand-purple/50 font-bold block text-center w-full hover:underline"
                  >
                    Back to email input
                  </button>
                </div>
              )}
            </form>

            {/* Social credentials divider */}
            {step === 1 && (
              <div className="space-y-4 pt-4 border-t border-brand-purple/10">
                <div className="relative text-center">
                  <span className="bg-white px-3 text-xs font-semibold text-brand-purple/40 relative z-10">
                    Or secure credentials via
                  </span>
                  <div className="absolute top-1/2 left-0 right-0 h-px bg-brand-purple/10 z-0" />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => handleSocialMock("Google")}
                    className="py-2.5 border border-brand-purple/10 rounded-btn hover:bg-brand-cream text-xs font-bold flex items-center justify-center gap-2 transition-colors"
                  >
                    <GoogleIcon />
                    <span>Google</span>
                  </button>
                  <button
                    onClick={() => handleSocialMock("Apple")}
                    className="py-2.5 border border-brand-purple/10 rounded-btn hover:bg-brand-cream text-xs font-bold flex items-center justify-center gap-2 transition-colors"
                  >
                    <AppleIcon />
                    <span>Apple</span>
                  </button>
                </div>
              </div>
            )}

            {/* Bottom toggle */}
            <div className="pt-2 text-center text-xs font-semibold text-brand-purple/60">
              <button
                onClick={() => {
                  setIsLogin(!isLogin);
                  setStep(1);
                }}
                className="hover:underline text-brand-pink font-bold"
              >
                {isLogin ? "Create a new lifestyle profile" : "Log into existing account"}
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

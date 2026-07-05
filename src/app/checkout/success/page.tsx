"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import confetti from "canvas-confetti";
import { CheckCircle2, FileText, ShoppingBag, Truck, Calendar } from "lucide-react";

export default function OrderSuccessPage() {
  const router = useRouter();
  const [order, setOrder] = useState<any>(null);

  useEffect(() => {
    // Confetti burst
    const duration = 2.5 * 1000;
    const end = Date.now() + duration;

    (function frame() {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ["#FF9F1C", "#FFC531", "#E9418A"]
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ["#FF9F1C", "#FFC531", "#E9418A"]
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }());

    // Load order data from local storage
    const saved = localStorage.getItem("austropical_latest_order");
    if (saved) {
      setOrder(JSON.parse(saved));
    } else {
      // If no order data, send back to home
      router.push("/");
    }
  }, [router]);

  const handlePrint = () => {
    window.print();
  };

  if (!order) {
    return (
      <div className="min-h-screen bg-brand-ivory flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-brand-charcoal border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="bg-brand-ivory text-brand-charcoal min-h-screen relative overflow-x-hidden font-sans print:bg-white print:text-black">
      <div className="print:hidden">
        <Navbar />
      </div>

      <section className="pt-32 pb-24 max-w-2xl mx-auto px-6 print:pt-6">
        <div className="bg-white border border-brand-charcoal/5 p-8 md:p-12 rounded-card shadow-lg space-y-10 text-center relative print:border-none print:shadow-none print:p-0">
          
          {/* Header */}
          <div className="space-y-4 print:hidden">
            <div className="w-16 h-16 bg-brand-green/10 text-brand-green rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h1 className="text-3xl md:text-4xl font-black font-display text-brand-charcoal">
              Order Confirmed!
            </h1>
            <p className="text-brand-charcoal/75 text-sm font-semibold max-w-md mx-auto">
              Thank you for choosing Austropical. We are packing your organic superfoods with dry ice and shipping them right away.
            </p>
          </div>

          {/* Tracking info block */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border border-brand-charcoal/10 p-5 rounded-card bg-brand-ivory text-left text-xs font-semibold print:hidden">
            <div className="flex items-center gap-3">
              <Truck className="w-5 h-5 text-brand-orange flex-shrink-0" />
              <div>
                <p className="font-bold text-brand-charcoal">AustPost Super-Freeze</p>
                <p className="text-brand-charcoal/50">Tracking: {order.orderNumber}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 border-t sm:border-t-0 sm:border-l border-brand-charcoal/10 pt-3 sm:pt-0 sm:pl-4">
              <Calendar className="w-5 h-5 text-brand-green flex-shrink-0" />
              <div>
                <p className="font-bold text-brand-charcoal">Estimated Delivery</p>
                <p className="text-brand-charcoal/50">Next 2 - 3 Business Days</p>
              </div>
            </div>
          </div>

          {/* Receipt Details Box */}
          <div className="text-left space-y-6">
            <div className="border-b border-brand-charcoal/10 pb-4 flex justify-between items-end">
              <div>
                <span className="text-[10px] font-bold text-brand-orange uppercase tracking-wider">Invoice / Receipt</span>
                <h3 className="text-lg font-extrabold text-brand-charcoal">{order.orderNumber}</h3>
              </div>
              <p className="text-xs font-semibold text-brand-charcoal/60">{order.date}</p>
            </div>

            {/* Delivery address */}
            <div className="space-y-1.5 text-xs text-brand-charcoal/80 font-semibold">
              <p className="font-bold text-brand-charcoal uppercase tracking-wider text-[10px] text-brand-charcoal/40">Ship To</p>
              <p className="font-extrabold text-brand-charcoal">
                {order.shipping.firstName} {order.shipping.lastName}
              </p>
              <p>{order.shipping.address}</p>
              <p>
                {order.shipping.city}, {order.shipping.state} {order.shipping.postcode}
              </p>
              <p className="text-brand-charcoal/50">Email: {order.shipping.email}</p>
            </div>

            {/* Ordered Items grid */}
            <div className="space-y-4 pt-4 border-t border-brand-charcoal/5">
              <p className="font-bold text-brand-charcoal uppercase tracking-wider text-[10px] text-brand-charcoal/40">Ordered Items</p>
              <div className="space-y-3">
                {order.items.map((item: any) => (
                  <div key={`${item.id}-${item.variant || ""}`} className="flex justify-between items-center text-xs font-semibold">
                    <p className="text-brand-charcoal font-bold">
                      {item.name} <span className="text-brand-charcoal/50">x{item.quantity}</span>
                    </p>
                    <span className="font-extrabold">${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Calculation summary */}
            <div className="border-t border-brand-charcoal/15 pt-4 space-y-2.5 text-xs font-semibold text-brand-charcoal/80">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${order.subtotal.toFixed(2)}</span>
              </div>
              {order.discount > 0 && (
                <div className="flex justify-between text-brand-orange font-bold">
                  <span>Discount</span>
                  <span>-${order.discount.toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>GST (10% included)</span>
                <span>${order.gst.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-brand-green font-bold border-b border-brand-charcoal/5 pb-2.5">
                <span>Shipping</span>
                <span>FREE</span>
              </div>
              <div className="flex justify-between text-base font-extrabold text-brand-charcoal pt-1">
                <span>Total Paid</span>
                <span>${order.total.toFixed(2)}</span>
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 print:hidden">
            <button
              onClick={handlePrint}
              className="py-3 px-6 bg-brand-ivory hover:bg-brand-charcoal/5 text-brand-charcoal border border-brand-charcoal/10 font-bold text-sm rounded-btn transition-colors flex items-center justify-center gap-2"
            >
              <FileText className="w-4.5 h-4.5 text-brand-orange" />
              <span>Download Invoice / Print</span>
            </button>
            <Link
              href="/shop"
              className="py-3 px-6 bg-brand-charcoal hover:bg-brand-charcoal-light text-white font-bold text-sm rounded-btn transition-all text-center flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-4.5 h-4.5 text-brand-yellow" />
              <span>Continue Shopping</span>
            </Link>
          </div>
        </div>
      </section>

      <div className="print:hidden">
        <Footer />
      </div>
    </div>
  );
}

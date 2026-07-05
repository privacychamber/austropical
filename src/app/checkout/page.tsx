"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useStore } from "@/context/StoreContext";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ShieldCheck, Truck, CreditCard, ShoppingBag, ArrowLeft, Loader2, Tag } from "lucide-react";
import Link from "next/link";

export default function CheckoutPage() {
  const router = useRouter();
  const { cart, discount, clearCart } = useStore();
  const [step, setStep] = useState(1); // 1 = Shipping, 2 = Payment
  const [loading, setLoading] = useState(false);

  // Form States
  const [shippingForm, setShippingForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "NSW",
    postcode: "",
  });

  const [paymentForm, setPaymentForm] = useState({
    cardName: "",
    cardNumber: "",
    expiry: "",
    cvc: "",
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discountAmount = subtotal * (discount / 100);
  const gst = (subtotal - discountAmount) * 0.1; // 10% GST
  const total = subtotal - discountAmount + gst;

  if (cart.length === 0) {
    return (
      <div className="bg-brand-ivory text-brand-charcoal min-h-screen flex flex-col justify-between">
        <Navbar />
        <div className="max-w-md mx-auto text-center py-32 space-y-6">
          <ShoppingBag className="w-16 h-16 text-brand-charcoal/20 mx-auto" />
          <h2 className="text-3xl font-black font-display text-brand-charcoal">Your Cart is Empty</h2>
          <p className="text-brand-charcoal/60 text-sm">Please add some superfoods to checkout.</p>
          <Link href="/shop" className="inline-block px-6 py-3 bg-brand-charcoal text-white font-bold rounded-btn">
            Explore Collection
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const validateShipping = () => {
    const errors: Record<string, string> = {};
    if (!shippingForm.firstName) errors.firstName = "First name is required";
    if (!shippingForm.lastName) errors.lastName = "Last name is required";
    if (!shippingForm.email.includes("@")) errors.email = "Enter a valid email address";
    if (!shippingForm.address) errors.address = "Address is required";
    if (!shippingForm.city) errors.city = "City is required";
    if (!shippingForm.postcode) errors.postcode = "Postcode is required";
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const validatePayment = () => {
    const errors: Record<string, string> = {};
    if (!paymentForm.cardName) errors.cardName = "Name on card is required";
    if (paymentForm.cardNumber.replace(/\s/g, "").length < 16) errors.cardNumber = "Enter a 16-digit card number";
    if (!paymentForm.expiry.includes("/")) errors.expiry = "Enter Expiry (MM/YY)";
    if (paymentForm.cvc.length < 3) errors.cvc = "Enter valid CVC";
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateShipping()) {
      setStep(2);
      setFormErrors({});
    }
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (validatePayment()) {
      setLoading(true);
      // Simulate Stripe authentication payment delay
      setTimeout(() => {
        setLoading(false);
        // Persist order metadata to localstorage for receipt success display
        localStorage.setItem(
          "austropical_latest_order",
          JSON.stringify({
            items: cart,
            shipping: shippingForm,
            subtotal,
            discount: discountAmount,
            gst,
            total,
            date: new Date().toLocaleDateString("en-AU", {
              day: "numeric",
              month: "short",
              year: "numeric",
            }),
            orderNumber: "AUS-" + Math.floor(100000 + Math.random() * 900000),
          })
        );
        clearCart();
        router.push("/checkout/success");
      }, 2000);
    }
  };

  return (
    <div className="bg-brand-ivory text-brand-charcoal min-h-screen relative overflow-x-hidden font-sans">
      <Navbar />

      <section className="pt-32 pb-24 max-w-container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column Forms (Stepper) */}
          <div className="lg:col-span-8 space-y-8">
            {/* Steps indicator bar */}
            <div className="flex items-center gap-4 bg-white border border-brand-charcoal/5 p-4 rounded-card shadow-sm">
              <div className="flex items-center gap-2">
                <span className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs ${
                  step >= 1 ? "bg-brand-charcoal text-white" : "bg-brand-charcoal/10 text-brand-charcoal"
                }`}>
                  1
                </span>
                <span className="text-xs font-black uppercase tracking-wider">Shipping Details</span>
              </div>
              <div className="h-px bg-brand-charcoal/10 flex-1" />
              <div className="flex items-center gap-2">
                <span className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs ${
                  step === 2 ? "bg-brand-charcoal text-white" : "bg-brand-charcoal/10 text-brand-charcoal"
                }`}>
                  2
                </span>
                <span className="text-xs font-black uppercase tracking-wider text-brand-charcoal/50">
                  Secure Payment
                </span>
              </div>
            </div>

            {/* Stepper Content */}
            <div className="bg-white border border-brand-charcoal/5 p-8 rounded-card shadow-sm text-left">
              {step === 1 ? (
                // Shipping details Form
                <form onSubmit={handleShippingSubmit} className="space-y-6">
                  <h3 className="text-xl font-bold font-display text-brand-charcoal flex items-center gap-2 pb-4 border-b border-brand-charcoal/10">
                    <Truck className="w-5 h-5 text-brand-orange" />
                    Delivery Address
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-black text-brand-charcoal/50 uppercase tracking-widest block">First Name</label>
                      <input
                        type="text"
                        required
                        value={shippingForm.firstName}
                        onChange={(e) => setShippingForm({ ...shippingForm, firstName: e.target.value })}
                        className="w-full px-4 py-2.5 bg-brand-ivory border border-brand-charcoal/10 rounded-input text-sm font-semibold outline-none focus:border-brand-charcoal"
                      />
                      {formErrors.firstName && <p className="text-[10px] text-brand-orange font-bold">{formErrors.firstName}</p>}
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-black text-brand-charcoal/50 uppercase tracking-widest block">Last Name</label>
                      <input
                        type="text"
                        required
                        value={shippingForm.lastName}
                        onChange={(e) => setShippingForm({ ...shippingForm, lastName: e.target.value })}
                        className="w-full px-4 py-2.5 bg-brand-ivory border border-brand-charcoal/10 rounded-input text-sm font-semibold outline-none focus:border-brand-charcoal"
                      />
                      {formErrors.lastName && <p className="text-[10px] text-brand-orange font-bold">{formErrors.lastName}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-black text-brand-charcoal/50 uppercase tracking-widest block">Email Address</label>
                      <input
                        type="email"
                        required
                        value={shippingForm.email}
                        onChange={(e) => setShippingForm({ ...shippingForm, email: e.target.value })}
                        className="w-full px-4 py-2.5 bg-brand-ivory border border-brand-charcoal/10 rounded-input text-sm font-semibold outline-none focus:border-brand-charcoal"
                      />
                      {formErrors.email && <p className="text-[10px] text-brand-orange font-bold">{formErrors.email}</p>}
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-black text-brand-charcoal/50 uppercase tracking-widest block">Phone Number</label>
                      <input
                        type="tel"
                        required
                        value={shippingForm.phone}
                        onChange={(e) => setShippingForm({ ...shippingForm, phone: e.target.value })}
                        className="w-full px-4 py-2.5 bg-brand-ivory border border-brand-charcoal/10 rounded-input text-sm font-semibold outline-none focus:border-brand-charcoal"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black text-brand-charcoal/50 uppercase tracking-widest block">Street Address</label>
                    <input
                      type="text"
                      required
                      value={shippingForm.address}
                      onChange={(e) => setShippingForm({ ...shippingForm, address: e.target.value })}
                      placeholder="Street number and name"
                      className="w-full px-4 py-2.5 bg-brand-ivory border border-brand-charcoal/10 rounded-input text-sm font-semibold outline-none focus:border-brand-charcoal"
                    />
                    {formErrors.address && <p className="text-[10px] text-brand-orange font-bold">{formErrors.address}</p>}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-black text-brand-charcoal/50 uppercase tracking-widest block">Suburb/City</label>
                      <input
                        type="text"
                        required
                        value={shippingForm.city}
                        onChange={(e) => setShippingForm({ ...shippingForm, city: e.target.value })}
                        className="w-full px-4 py-2.5 bg-brand-ivory border border-brand-charcoal/10 rounded-input text-sm font-semibold outline-none focus:border-brand-charcoal"
                      />
                      {formErrors.city && <p className="text-[10px] text-brand-orange font-bold">{formErrors.city}</p>}
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-black text-brand-charcoal/50 uppercase tracking-widest block">State</label>
                      <select
                        value={shippingForm.state}
                        onChange={(e) => setShippingForm({ ...shippingForm, state: e.target.value })}
                        className="w-full px-4 py-2.5 bg-brand-ivory border border-brand-charcoal/10 rounded-input text-sm font-semibold outline-none focus:border-brand-charcoal"
                      >
                        <option value="NSW">NSW</option>
                        <option value="VIC">VIC</option>
                        <option value="QLD">QLD</option>
                        <option value="WA">WA</option>
                        <option value="SA">SA</option>
                        <option value="TAS">TAS</option>
                      </select>
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-black text-brand-charcoal/50 uppercase tracking-widest block">Postcode</label>
                      <input
                        type="text"
                        required
                        value={shippingForm.postcode}
                        onChange={(e) => setShippingForm({ ...shippingForm, postcode: e.target.value })}
                        className="w-full px-4 py-2.5 bg-brand-ivory border border-brand-charcoal/10 rounded-input text-sm font-semibold outline-none focus:border-brand-charcoal"
                      />
                      {formErrors.postcode && <p className="text-[10px] text-brand-orange font-bold">{formErrors.postcode}</p>}
                    </div>
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full py-4 bg-brand-charcoal hover:bg-brand-charcoal-light text-white font-bold rounded-btn transition-colors flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
                    >
                      <span>Proceed to Secure Payment</span>
                      <ArrowLeft className="w-5 h-5 rotate-180" />
                    </button>
                  </div>
                </form>
              ) : (
                // Payment Form
                <form onSubmit={handlePlaceOrder} className="space-y-6">
                  <div className="flex items-center justify-between pb-4 border-b border-brand-charcoal/10">
                    <h3 className="text-xl font-bold font-display text-brand-charcoal flex items-center gap-2">
                      <CreditCard className="w-5 h-5 text-brand-orange" />
                      Secure Credit Card Payment
                    </h3>
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="text-xs font-bold text-brand-orange hover:underline flex items-center gap-1"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      Edit Shipping
                    </button>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black text-brand-charcoal/50 uppercase tracking-widest block">Name on Card</label>
                    <input
                      type="text"
                      required
                      value={paymentForm.cardName}
                      onChange={(e) => setPaymentForm({ ...paymentForm, cardName: e.target.value })}
                      placeholder="John Citizen"
                      className="w-full px-4 py-2.5 bg-brand-ivory border border-brand-charcoal/10 rounded-input text-sm font-semibold outline-none focus:border-brand-charcoal"
                    />
                    {formErrors.cardName && <p className="text-[10px] text-brand-orange font-bold">{formErrors.cardName}</p>}
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black text-brand-charcoal/50 uppercase tracking-widest block">Card Number</label>
                    <input
                      type="text"
                      required
                      value={paymentForm.cardNumber}
                      onChange={(e) => setPaymentForm({ ...paymentForm, cardNumber: e.target.value })}
                      placeholder="4111 2222 3333 4444"
                      className="w-full px-4 py-2.5 bg-brand-ivory border border-brand-charcoal/10 rounded-input text-sm font-semibold outline-none focus:border-brand-charcoal"
                    />
                    {formErrors.cardNumber && <p className="text-[10px] text-brand-orange font-bold">{formErrors.cardNumber}</p>}
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-black text-brand-charcoal/50 uppercase tracking-widest block">Expiry Date</label>
                      <input
                        type="text"
                        required
                        value={paymentForm.expiry}
                        onChange={(e) => setPaymentForm({ ...paymentForm, expiry: e.target.value })}
                        placeholder="MM/YY"
                        className="w-full px-4 py-2.5 bg-brand-ivory border border-brand-charcoal/10 rounded-input text-sm font-semibold outline-none focus:border-brand-charcoal"
                      />
                      {formErrors.expiry && <p className="text-[10px] text-brand-orange font-bold">{formErrors.expiry}</p>}
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-black text-brand-charcoal/50 uppercase tracking-widest block">Security Code (CVC)</label>
                      <input
                        type="password"
                        required
                        maxLength={4}
                        value={paymentForm.cvc}
                        onChange={(e) => setPaymentForm({ ...paymentForm, cvc: e.target.value })}
                        placeholder="123"
                        className="w-full px-4 py-2.5 bg-brand-ivory border border-brand-charcoal/10 rounded-input text-sm font-semibold outline-none focus:border-brand-charcoal"
                      />
                      {formErrors.cvc && <p className="text-[10px] text-brand-orange font-bold">{formErrors.cvc}</p>}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 p-4 bg-brand-green/5 border border-brand-green/15 rounded-card text-brand-green text-xs font-bold">
                    <ShieldCheck className="w-5 h-5 flex-shrink-0" />
                    <span>Your transaction is encrypted with 256-bit SSL protocols. Security verified by Stripe.</span>
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-4 bg-brand-orange hover:bg-brand-yellow disabled:bg-brand-charcoal/10 text-brand-charcoal disabled:text-brand-charcoal/45 font-black text-base rounded-btn transition-colors flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          <span>Authorizing Payment...</span>
                        </>
                      ) : (
                        <>
                          <span>Pay &amp; Finalize Order</span>
                          <span>→</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Order Summary */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white border border-brand-charcoal/5 p-6 rounded-card shadow-sm text-left space-y-6">
              <h3 className="text-base font-black uppercase tracking-wider pb-3 border-b border-brand-charcoal/10 flex items-center gap-2">
                <ShoppingBag className="w-4.5 h-4.5 text-brand-orange" />
                Order Summary
              </h3>

              {/* Items List */}
              <div className="max-h-60 overflow-y-auto space-y-4 pr-1">
                {cart.map((item) => (
                  <div key={`${item.id}-${item.variant || ""}`} className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-12 h-12 rounded-img bg-brand-ivory border border-brand-charcoal/5 overflow-hidden flex-shrink-0">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-bold text-brand-charcoal truncate">{item.name}</p>
                        <p className="text-[10px] text-brand-charcoal/50 font-semibold">Qty: {item.quantity}</p>
                      </div>
                    </div>
                    <span className="text-xs font-black text-brand-charcoal">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>

              {/* Calculation grid */}
              <div className="border-t border-brand-charcoal/10 pt-4 space-y-2.5 text-xs font-semibold text-brand-charcoal/80">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-brand-orange font-bold">
                    <span>Discount ({discount}%)</span>
                    <span>-${discountAmount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>GST (10%)</span>
                  <span>${gst.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-brand-green font-bold">
                  <span>Shipping</span>
                  <span>FREE</span>
                </div>
                <div className="border-t border-brand-charcoal/5 pt-3 flex justify-between text-base font-extrabold text-brand-charcoal">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

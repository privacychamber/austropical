"use client";

import React, { useState } from "react";
import { useStore } from "@/context/StoreContext";
import { X, Plus, Minus, Trash2, Tag, ShoppingBag } from "lucide-react";
import Link from "next/link";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const { cart, removeFromCart, updateCartQuantity, discount, applyPromoCode, promoCode } = useStore();
  const [promoInput, setPromoInput] = useState("");
  const [promoError, setPromoError] = useState("");
  const [promoSuccess, setPromoSuccess] = useState(false);

  if (!isOpen) return null;

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discountAmount = subtotal * (discount / 100);
  const total = subtotal - discountAmount;

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    setPromoError("");
    setPromoSuccess(false);

    if (!promoInput.trim()) return;

    const success = applyPromoCode(promoInput);
    if (success) {
      setPromoSuccess(true);
      setPromoInput("");
    } else {
      setPromoError("Invalid code. Try FRESH20 or AUSTROPICAL10.");
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden font-sans">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-brand-charcoal/40 backdrop-blur-sm transition-opacity duration-500"
        onClick={onClose}
      />

      {/* Drawer Panel */}
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-brand-ivory border-l border-brand-charcoal/10 flex flex-col shadow-2xl">
          {/* Header */}
          <div className="px-6 py-6 border-b border-brand-charcoal/10 flex items-center justify-between bg-brand-charcoal text-brand-ivory">
            <div className="flex items-center gap-3">
              <ShoppingBag className="w-6 h-6 text-brand-orange" />
              <h2 className="text-xl font-bold font-display tracking-wide">Your Superfood Cart</h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 -mr-2 text-brand-ivory/80 hover:text-brand-ivory rounded-full hover:bg-white/10 transition-colors"
              aria-label="Close cart"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Cart items list */}
          <div className="flex-1 py-6 overflow-y-auto px-6 space-y-6">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                <ShoppingBag className="w-16 h-16 text-brand-charcoal/20 stroke-[1.5]" />
                <div>
                  <p className="text-lg font-semibold text-brand-charcoal">Your cart is empty</p>
                  <p className="text-sm text-brand-charcoal/60 mt-1">
                    Fill it up with premium nourishing snacks!
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="px-6 py-3 bg-brand-charcoal hover:bg-brand-charcoal-light text-white font-semibold rounded-btn transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Start Shopping
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={`${item.id}-${item.variant || ""}`}
                  className="flex items-center gap-4 p-4 rounded-card bg-white border border-brand-charcoal/5 shadow-sm"
                >
                  <div className="w-20 h-20 bg-brand-ivory rounded-img overflow-hidden flex-shrink-0 border border-brand-charcoal/5 relative">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h4 className="text-base font-bold text-brand-charcoal truncate">
                      {item.name}
                    </h4>
                    {item.variant && (
                      <p className="text-xs text-brand-charcoal/60 mt-0.5">
                        Variant: {item.variant}
                      </p>
                    )}
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center border border-brand-charcoal/10 rounded-btn bg-brand-ivory overflow-hidden">
                        <button
                          onClick={() => updateCartQuantity(item.id, item.quantity - 1, item.variant)}
                          className="px-2.5 py-1 text-brand-charcoal/60 hover:text-brand-charcoal hover:bg-brand-charcoal/5 transition-colors"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-2 text-sm font-semibold text-brand-charcoal">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateCartQuantity(item.id, item.quantity + 1, item.variant)}
                          className="px-2.5 py-1 text-brand-charcoal/60 hover:text-brand-charcoal hover:bg-brand-charcoal/5 transition-colors"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <span className="text-base font-extrabold text-brand-charcoal">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id, item.variant)}
                    className="p-2 text-brand-charcoal/40 hover:text-brand-orange transition-colors"
                    aria-label="Remove item"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Footer content */}
          {cart.length > 0 && (
            <div className="border-t border-brand-charcoal/10 bg-white px-6 py-6 space-y-6">
              {/* Promo code form */}
              <form onSubmit={handleApplyPromo} className="flex gap-2">
                <div className="relative flex-1">
                  <input
                    type="text"
                    value={promoInput}
                    onChange={(e) => setPromoInput(e.target.value)}
                    placeholder={promoCode ? `Applied: ${promoCode}` : "Promo code (FRESH20)"}
                    className="w-full pl-10 pr-4 py-2.5 text-sm bg-brand-ivory border border-brand-charcoal/10 rounded-input focus:border-brand-charcoal focus:ring-1 focus:ring-brand-charcoal outline-none"
                  />
                  <Tag className="absolute left-3.5 top-3 w-4 h-4 text-brand-charcoal/40" />
                </div>
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-brand-charcoal text-brand-ivory font-bold text-sm rounded-btn hover:bg-brand-charcoal-light transition-colors"
                >
                  Apply
                </button>
              </form>

              {promoError && (
                <p className="text-xs text-brand-orange font-semibold mt-1 pl-1">{promoError}</p>
              )}
              {(promoSuccess || discount > 0) && (
                <p className="text-xs text-brand-green font-bold mt-1 pl-1">
                  Promo code applied! Enjoy {discount}% off your order.
                </p>
              )}

              {/* Price summary */}
              <div className="space-y-2.5">
                <div className="flex justify-between text-sm text-brand-charcoal/80">
                  <span>Subtotal</span>
                  <span className="font-semibold">${subtotal.toFixed(2)}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-sm text-brand-orange font-semibold">
                    <span>Discount ({discount}%)</span>
                    <span>-${discountAmount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between text-sm text-brand-charcoal/80">
                  <span>Estimated Shipping</span>
                  <span className="text-brand-green font-bold">FREE</span>
                </div>
                <div className="border-t border-brand-charcoal/5 pt-3 flex justify-between text-lg font-extrabold text-brand-charcoal">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 gap-3 pt-2">
                <Link
                  href="/checkout"
                  onClick={onClose}
                  className="w-full py-4 bg-brand-charcoal hover:bg-brand-charcoal-light text-brand-ivory text-center font-bold text-base rounded-btn transition-colors shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group"
                >
                  <span>Proceed to Secure Checkout</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
                <button
                  onClick={onClose}
                  className="w-full py-3 bg-brand-ivory hover:bg-brand-charcoal/5 text-brand-charcoal font-bold text-sm rounded-btn transition-colors border border-brand-charcoal/10"
                >
                  Continue Shopping
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

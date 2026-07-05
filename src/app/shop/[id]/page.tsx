"use client";

import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { useStore, Product } from "@/context/StoreContext";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
  Star,
  ShoppingBag,
  Heart,
  ChevronRight,
  ArrowLeft,
  Plus,
  Minus,
  Sparkles,
  CheckCircle2,
  Calendar,
  Truck,
  Leaf,
  ChevronDown
} from "lucide-react";
import Link from "next/link";

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { products, addToCart, toggleWishlist, isInWishlist } = useStore();
  
  const productId = params.id as string;
  const product = products.find((p) => p.id === productId);

  // States
  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState("Single Tub");
  const [openAccordion, setOpenAccordion] = useState<string | null>("nutritional");

  if (!product) {
    return (
      <div className="bg-brand-ivory text-brand-charcoal min-h-screen flex flex-col justify-between">
        <Navbar />
        <div className="max-w-md mx-auto text-center py-32 space-y-6">
          <h2 className="text-3xl font-black font-display text-brand-charcoal">Product Not Found</h2>
          <p className="text-brand-charcoal/60 text-sm">We couldn&apos;t find the product you are looking for.</p>
          <Link href="/shop" className="inline-block px-6 py-3 bg-brand-charcoal text-white font-bold rounded-btn">
            Back to Marketplace
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  // Variants list
  const variants = [
    { name: "Single Unit", desc: "Standard supply", multiplier: 1.0 },
    { name: "Pack of 3 (Save 10%)", desc: "Best value pack", multiplier: 2.7 },
    { name: "Subscription (Save 15%)", desc: "Delivered every month", multiplier: 0.85 }
  ];

  // Adjust price depending on selection
  const currentVariantPrice = () => {
    const matched = variants.find(v => v.name === selectedVariant);
    const mult = matched ? matched.multiplier : 1.0;
    return product.price * mult;
  };

  const handleAddToCart = () => {
    addToCart({
      ...product,
      price: currentVariantPrice() / (selectedVariant === "Pack of 3 (Save 10%)" ? 3 : 1)
    }, quantity, selectedVariant);
  };

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 3);

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <div className="bg-brand-ivory text-brand-charcoal min-h-screen relative overflow-x-hidden font-sans">
      <Navbar />

      {/* Breadcrumbs / Back button */}
      <div className="pt-32 pb-4 max-w-container mx-auto px-6 md:px-12 flex items-center justify-between">
        <button
          onClick={() => router.back()}
          className="text-sm font-bold text-brand-charcoal/70 hover:text-brand-charcoal flex items-center gap-1 hover:-translate-x-1 transition-transform"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back</span>
        </button>

        <div className="hidden sm:flex items-center gap-2 text-xs font-semibold text-brand-charcoal/50">
          <Link href="/" className="hover:text-brand-charcoal">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/shop" className="hover:text-brand-charcoal">Shop</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-brand-charcoal font-extrabold">{product.name}</span>
        </div>
      </div>

      {/* Main Detail grid */}
      <section className="py-8 max-w-container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
        
        {/* Left Column: Product Image Gallery */}
        <div className="lg:col-span-6 space-y-6">
          <div className="aspect-square w-full bg-white rounded-card overflow-hidden border border-brand-charcoal/5 shadow-md relative group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <button
              onClick={() => toggleWishlist(product.id)}
              className="absolute top-6 right-6 p-3 rounded-full bg-white/80 hover:bg-white text-brand-charcoal/60 hover:text-brand-orange transition-colors shadow-md z-10"
              aria-label="Toggle wishlist"
            >
              <Heart
                className={`w-5 h-5 ${
                  isInWishlist(product.id) ? "fill-brand-orange text-brand-orange" : ""
                }`}
              />
            </button>
            <div className="absolute bottom-6 left-6 flex gap-2">
              {product.badges.map((badge) => (
                <span key={badge} className="text-[10px] font-black bg-brand-charcoal text-brand-ivory px-3 py-1.5 rounded-btn uppercase tracking-wider shadow-sm">
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Product details and actions */}
        <div className="lg:col-span-6 text-left space-y-8">
          {/* Header */}
          <div className="space-y-3.5">
            <span className="text-xs font-black text-brand-orange bg-brand-orange/15 px-3 py-1.5 rounded-btn uppercase tracking-widest">
              {product.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-black font-display tracking-tight text-brand-charcoal leading-tight">
              {product.name}
            </h1>
            
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? "fill-brand-yellow text-brand-yellow"
                        : "text-brand-charcoal/20"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm font-bold text-brand-charcoal/80">
                {product.rating} ({product.reviewsCount} customer reviews)
              </span>
            </div>
          </div>

          {/* Pricing & description */}
          <div className="space-y-4">
            <p className="text-3xl font-black text-brand-charcoal">
              ${currentVariantPrice().toFixed(2)}
            </p>
            <p className="text-brand-charcoal/80 text-base font-medium leading-relaxed">
              {product.details}
            </p>
          </div>

          {/* Specs box (Grid of three key details) */}
          <div className="grid grid-cols-3 gap-4 border border-brand-charcoal/10 p-5 rounded-card bg-white">
            <div className="text-center space-y-1">
              <p className="text-[10px] font-black text-brand-charcoal/50 uppercase tracking-widest">Calories</p>
              <p className="text-lg font-bold text-brand-charcoal">{product.specs.calories} kcal</p>
            </div>
            <div className="text-center border-x border-brand-charcoal/10 space-y-1">
              <p className="text-[10px] font-black text-brand-charcoal/50 uppercase tracking-widest">Added Sugar</p>
              <p className="text-lg font-bold text-brand-charcoal">{product.specs.sugar}</p>
            </div>
            <div className="text-center space-y-1">
              <p className="text-[10px] font-black text-brand-charcoal/50 uppercase tracking-widest">Organic</p>
              <p className="text-lg font-bold text-brand-green">{product.specs.organic ? "Certified" : "No"}</p>
            </div>
          </div>

          {/* Variant Selector */}
          <div className="space-y-3">
            <label className="text-xs font-black text-brand-charcoal/50 uppercase tracking-widest block">
              Purchase Variant
            </label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {variants.map((v) => (
                <button
                  key={v.name}
                  onClick={() => setSelectedVariant(v.name)}
                  className={`p-4 rounded-card border-2 text-left space-y-1 transition-all ${
                    selectedVariant === v.name
                      ? "border-brand-charcoal bg-brand-charcoal/5"
                      : "border-brand-charcoal/10 bg-white hover:border-brand-charcoal/35"
                  }`}
                >
                  <p className="font-bold text-xs text-brand-charcoal">{v.name}</p>
                  <p className="text-[10px] text-brand-charcoal/50 font-semibold">{v.desc}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Add to Cart Actions */}
          <div className="flex items-center gap-4 pt-2">
            {/* Quantity Selector */}
            <div className="flex items-center border border-brand-charcoal/10 rounded-btn bg-white overflow-hidden shadow-sm">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-4 py-3.5 text-brand-charcoal/60 hover:text-brand-charcoal hover:bg-brand-charcoal/5 transition-colors"
                aria-label="Decrease quantity"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="px-4 text-base font-extrabold text-brand-charcoal w-12 text-center">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-4 py-3.5 text-brand-charcoal/60 hover:text-brand-charcoal hover:bg-brand-charcoal/5 transition-colors"
                aria-label="Increase quantity"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>

            {/* Main Action Button */}
            <button
              onClick={handleAddToCart}
              className="flex-1 py-4 bg-brand-charcoal hover:bg-brand-charcoal-light text-brand-ivory font-bold text-base rounded-btn transition-colors shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
            >
              <span>Add to Superfood Cart</span>
              <ShoppingBag className="w-5 h-5" />
            </button>
          </div>

          {/* Shipping values / highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-brand-charcoal/10 text-xs font-semibold text-brand-charcoal/70">
            <div className="flex items-center gap-2">
              <Truck className="w-4 h-4 text-brand-green flex-shrink-0" />
              <span>Free Next-Day Delivery across Australia</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-brand-orange flex-shrink-0" />
              <span>Unopened frozen tubs stay fresh up to 12 months</span>
            </div>
          </div>

          {/* Accordion list */}
          <div className="border-t border-brand-charcoal/10 pt-4 space-y-2">
            
            {/* Accordion 1 */}
            <div className="border-b border-brand-charcoal/5">
              <button
                onClick={() => toggleAccordion("nutritional")}
                className="w-full py-4 flex items-center justify-between text-left font-bold text-sm text-brand-charcoal"
              >
                <span>Nutritional Facts</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${openAccordion === "nutritional" ? "rotate-180" : ""}`} />
              </button>
              {openAccordion === "nutritional" && (
                <div className="pb-4 text-xs font-semibold text-brand-charcoal/75 space-y-2 leading-relaxed">
                  <div className="flex justify-between border-b border-brand-charcoal/5 pb-1">
                    <span>Serving Size</span>
                    <span>100g (Approx)</span>
                  </div>
                  <div className="flex justify-between border-b border-brand-charcoal/5 pb-1">
                    <span>Protein</span>
                    <span>2.1g</span>
                  </div>
                  <div className="flex justify-between border-b border-brand-charcoal/5 pb-1">
                    <span>Fats (healthy Omegas 3-6-9)</span>
                    <span>6.8g</span>
                  </div>
                  <div className="flex justify-between pb-1">
                    <span>Sugar (Naturally occurring)</span>
                    <span>1.2g</span>
                  </div>
                </div>
              )}
            </div>

            {/* Accordion 2 */}
            <div className="border-b border-brand-charcoal/5">
              <button
                onClick={() => toggleAccordion("sourcing")}
                className="w-full py-4 flex items-center justify-between text-left font-bold text-sm text-brand-charcoal"
              >
                <span>Sourcing &amp; Integrity</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${openAccordion === "sourcing" ? "rotate-180" : ""}`} />
              </button>
              {openAccordion === "sourcing" && (
                <div className="pb-4 text-xs font-semibold text-brand-charcoal/75 leading-relaxed">
                  Direct wild-harvest from the Pará state in Brazil. Fair trade agreements with small farming collectives protect native rainforest canopies from logging and support local nursery systems.
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Recommended Carousel */}
      <section className="py-20 max-w-container mx-auto px-6 md:px-12 border-t border-brand-charcoal/10">
        <h2 className="text-2xl font-black font-display text-brand-charcoal text-left mb-10">
          Frequently Bought Together
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {relatedProducts.map((p) => (
            <div
              key={p.id}
              className="bg-white border border-brand-charcoal/5 p-6 rounded-card shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="relative aspect-square w-full rounded-img bg-brand-ivory overflow-hidden border border-brand-charcoal/5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="text-left space-y-1.5">
                  <span className="text-[10px] font-black text-brand-orange uppercase tracking-wider">
                    {p.category}
                  </span>
                  <Link href={`/shop/${p.id}`} className="block">
                    <h4 className="text-lg font-bold font-display text-brand-charcoal hover:text-brand-orange transition-colors">
                      {p.name}
                    </h4>
                  </Link>
                  <p className="text-brand-charcoal/70 text-xs font-medium line-clamp-2">
                    {p.description}
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between pt-6 border-t border-brand-charcoal/5 mt-6">
                <span className="text-lg font-black text-brand-charcoal">
                  ${p.price.toFixed(2)}
                </span>
                <button
                  onClick={() => addToCart(p, 1)}
                  className="px-3.5 py-1.5 bg-brand-charcoal hover:bg-brand-charcoal-light text-brand-ivory font-bold text-xs rounded-btn transition-colors"
                >
                  Add +
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

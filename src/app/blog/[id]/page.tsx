"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import { useStore } from "@/context/StoreContext";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { ArrowLeft, Calendar, User, Clock, Bookmark, Share2 } from "lucide-react";

export default function BlogDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { blogs } = useStore();

  const postId = params.id as string;
  const post = blogs.find((b) => b.id === postId);

  if (!post) {
    return (
      <div className="bg-brand-cream text-brand-purple min-h-screen flex flex-col justify-between">
        <Navbar />
        <div className="max-w-md mx-auto text-center py-32 space-y-6">
          <h2 className="text-3xl font-black font-display text-brand-purple">Article Not Found</h2>
          <p className="text-brand-purple/60 text-sm">The requested blog post could not be found.</p>
          <Link href="/blog" className="inline-block px-6 py-3 bg-brand-purple text-white font-bold rounded-btn">
            Back to Wellness Hub
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const related = blogs.filter(b => b.id !== post.id).slice(0, 2);

  return (
    <div className="bg-brand-cream text-brand-purple min-h-screen relative overflow-x-hidden font-sans">
      <Navbar />

      {/* Back button header */}
      <div className="pt-32 pb-6 max-w-3xl mx-auto px-6 flex items-center justify-between">
        <button
          onClick={() => router.back()}
          className="text-xs font-bold text-brand-purple/70 hover:text-brand-purple flex items-center gap-1 hover:-translate-x-1 transition-transform"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Articles</span>
        </button>

        <div className="flex gap-3 text-brand-purple/40">
          <button className="hover:text-brand-orange transition-colors" aria-label="Bookmark article">
            <Bookmark className="w-4 h-4" />
          </button>
          <button className="hover:text-brand-orange transition-colors" aria-label="Share article">
            <Share2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Article content header layout */}
      <article className="max-w-3xl mx-auto px-6 space-y-8 text-left pb-24">
        <div className="space-y-4">
          <span className="text-[10px] font-black text-brand-orange bg-brand-orange/10 px-3 py-1.5 rounded-btn uppercase tracking-wider">
            {post.category}
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-display leading-[1.15] text-brand-purple">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-semibold text-brand-purple/50 pt-2 border-y border-brand-purple/5 py-4">
            <span className="flex items-center gap-1">
              <User className="w-4 h-4 text-brand-orange" />
              By {post.author}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4 text-brand-green" />
              Published {post.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4 text-brand-pink" />
              6 mins read
            </span>
          </div>
        </div>

        {/* Large banner photo */}
        <div className="aspect-[16/10] w-full bg-brand-cream rounded-card overflow-hidden border border-brand-purple/5 shadow-md">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Article text body */}
        <div className="prose prose-purple max-w-none text-base md:text-lg text-brand-purple/85 leading-relaxed space-y-6 font-medium">
          <p className="font-bold text-brand-purple text-lg md:text-xl">
            {post.excerpt}
          </p>
          <div className="space-y-4">
            {post.content.split("\n\n").map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
          <p>
            To learn more about incorporating sustainable superfoods into your wellness plans, check out our customized collections in our online marketplace. We ensure 100% traceabilty of every single ingredient.
          </p>
        </div>

        {/* Newsletter box */}
        <div className="bg-white border border-brand-purple/5 p-8 rounded-card shadow-sm space-y-4 mt-12">
          <h4 className="text-lg font-bold font-display text-brand-purple">Enjoying our Superfood Chronicles?</h4>
          <p className="text-xs text-brand-purple/60 leading-relaxed font-semibold">
            Subscribe to our newsletters to get monthly nutritional breakdowns, carbon neutral reports, and customized healthy recipes.
          </p>
          <div className="flex gap-2 max-w-md pt-2">
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-3 py-2 bg-brand-cream border border-brand-purple/10 rounded-input text-xs font-semibold focus:border-brand-purple outline-none"
            />
            <button className="px-5 py-2 bg-brand-purple text-white font-bold text-xs rounded-btn whitespace-nowrap">
              Join Club
            </button>
          </div>
        </div>

        {/* Related Articles column */}
        <div className="pt-16 border-t border-brand-purple/10 space-y-8">
          <h3 className="text-xl font-bold font-display text-brand-purple">Related Reads</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {related.map((b) => (
              <div key={b.id} className="bg-white border border-brand-purple/5 p-4 rounded-card flex gap-4">
                <div className="w-16 h-16 bg-brand-cream rounded-img overflow-hidden flex-shrink-0 relative border border-brand-purple/5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={b.image} alt={b.title} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-0 text-left space-y-1">
                  <span className="text-[9px] font-black text-brand-orange uppercase tracking-wider">{b.category}</span>
                  <Link href={`/blog/${b.id}`}>
                    <h5 className="font-bold text-xs text-brand-purple truncate hover:text-brand-orange transition-colors">{b.title}</h5>
                  </Link>
                  <p className="text-[10px] text-brand-purple/50 font-semibold">{b.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </article>

      <Footer />
    </div>
  );
}

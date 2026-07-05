"use client";

import React, { useState } from "react";
import { useStore } from "@/context/StoreContext";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Clock, Flame, Search, X, Check, Activity } from "lucide-react";

export default function RecipesDirectoryPage() {
  const { recipes } = useStore();
  const [selectedDifficulty, setSelectedDifficulty] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeRecipe, setActiveRecipe] = useState<any>(null);

  const difficulties = ["All", "Easy", "Medium", "Hard"];

  const filteredRecipes = recipes.filter((recipe) => {
    const matchesDiff =
      selectedDifficulty === "All" || recipe.difficulty === selectedDifficulty;
    const matchesSearch =
      recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      recipe.ingredients.some(ing => ing.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesDiff && matchesSearch;
  });

  return (
    <div className="bg-brand-ivory text-brand-charcoal min-h-screen relative overflow-x-hidden font-sans">
      <Navbar />

      {/* Hero Header */}
      <section className="pt-36 pb-12 bg-brand-charcoal text-white text-center relative">
        <div className="absolute inset-0 bg-brand-orange/5 blur-[80px]" />
        <div className="max-w-container mx-auto px-6 md:px-12 relative z-10 space-y-4">
          <h1 className="text-4xl md:text-5xl font-black font-display tracking-tight text-white">
            Recipes &amp; Bowl Inspiration
          </h1>
          <p className="text-white/60 text-sm md:text-base font-semibold max-w-md mx-auto">
            Discover simple, highly functional bowl and beverage routines created to fuel your cellular energy, skin glow, and active recovery.
          </p>
        </div>
      </section>

      {/* Main catalog */}
      <section className="py-12 max-w-container mx-auto px-6 md:px-12 space-y-12 text-left">
        
        {/* Toolbar */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-brand-charcoal/10 pb-6">
          <div className="flex flex-wrap gap-2">
            {difficulties.map((diff) => (
              <button
                key={diff}
                onClick={() => setSelectedDifficulty(diff)}
                className={`px-4 py-2 rounded-btn font-bold text-xs transition-colors ${
                  selectedDifficulty === diff
                    ? "bg-brand-charcoal text-white"
                    : "bg-white border border-brand-charcoal/10 text-brand-charcoal hover:bg-brand-charcoal/5"
                }`}
              >
                {diff === "All" ? "All Skill Levels" : `${diff} Level`}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <input
              type="text"
              placeholder="Search recipes, ingredients..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 bg-white border border-brand-charcoal/10 rounded-input text-xs font-semibold focus:border-brand-charcoal outline-none"
            />
            <Search className="absolute left-3 top-3 w-4 h-4 text-brand-charcoal/40" />
          </div>
        </div>

        {/* Recipes Grid */}
        {filteredRecipes.length === 0 ? (
          <div className="text-center py-20 bg-white border border-brand-charcoal/5 rounded-card space-y-4">
            <p className="text-lg font-bold text-brand-charcoal">No recipes found</p>
            <p className="text-sm text-brand-charcoal/50">Try modifying your search or skill level filters.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRecipes.map((recipe) => (
              <div
                key={recipe.id}
                onClick={() => setActiveRecipe(recipe)}
                className="bg-white border border-brand-charcoal/5 rounded-card overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer group flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="aspect-[4/3] w-full bg-brand-ivory overflow-hidden relative">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={recipe.image}
                      alt={recipe.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="text-[10px] font-bold bg-brand-charcoal/85 text-white px-2.5 py-1 rounded-btn flex items-center gap-1 backdrop-blur-sm">
                        <Clock className="w-3 h-3 text-brand-orange" />
                        {recipe.time}
                      </span>
                      <span className="text-[10px] font-bold bg-white/85 text-brand-charcoal px-2.5 py-1 rounded-btn flex items-center gap-1 backdrop-blur-sm border border-brand-charcoal/5">
                        <Flame className="w-3 h-3 text-brand-orange" />
                        {recipe.calories} kcal
                      </span>
                    </div>
                  </div>
                  <div className="p-6 text-left space-y-2">
                    <div className="flex items-center justify-between text-[10px] font-black text-brand-orange uppercase tracking-wider">
                      <span>Superfood Recipe</span>
                      <span className="text-brand-green">{recipe.difficulty}</span>
                    </div>
                    <h4 className="text-xl font-bold font-display text-brand-charcoal leading-snug group-hover:text-brand-orange transition-colors">
                      {recipe.title}
                    </h4>
                  </div>
                </div>

                <div className="p-6 pt-0 text-left">
                  <p className="text-[10px] font-bold text-brand-charcoal/50 uppercase tracking-widest pt-4 border-t border-brand-charcoal/5">
                    Click to reveal preparation details →
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Recipe details modal */}
      {activeRecipe && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-brand-charcoal/50 backdrop-blur-md flex items-center justify-center p-6 text-left">
          <div className="bg-brand-ivory border border-brand-charcoal/10 rounded-card max-w-2xl w-full max-h-[85vh] overflow-y-auto flex flex-col shadow-2xl">
            <div className="relative h-64 bg-brand-charcoal flex-shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={activeRecipe.image}
                alt={activeRecipe.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setActiveRecipe(null)}
                className="absolute top-4 right-4 p-2 bg-brand-charcoal text-brand-ivory rounded-full hover:bg-brand-charcoal-light transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-8 space-y-6">
              <div className="flex items-center justify-between text-xs font-black text-brand-orange uppercase tracking-wider border-b border-brand-charcoal/5 pb-2">
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {activeRecipe.time} Prep Time
                </span>
                <span className="flex items-center gap-1">
                  <Flame className="w-4 h-4 text-brand-orange" />
                  {activeRecipe.calories} Calories
                </span>
                <span className="flex items-center gap-1">
                  <Activity className="w-4 h-4 text-brand-green" />
                  {activeRecipe.difficulty} Skill
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl font-black font-display text-brand-charcoal">
                {activeRecipe.title}
              </h3>

              <div className="space-y-3">
                <h4 className="text-sm font-black text-brand-charcoal uppercase tracking-widest border-b border-brand-charcoal/10 pb-1 flex items-center gap-2">
                  <Check className="w-4 h-4 text-brand-green" />
                  Ingredients Needed
                </h4>
                <ul className="list-disc pl-5 space-y-1.5 text-brand-charcoal/80 text-sm font-semibold">
                  {activeRecipe.ingredients.map((ing: string, i: number) => (
                    <li key={i}>{ing}</li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="text-sm font-black text-brand-charcoal uppercase tracking-widest border-b border-brand-charcoal/10 pb-1 flex items-center gap-2">
                  <Activity className="w-4 h-4 text-brand-orange" />
                  Method of Preparation
                </h4>
                <ol className="list-decimal pl-5 space-y-2.5 text-brand-charcoal/80 text-sm font-semibold">
                  {activeRecipe.instructions.map((step: string, i: number) => (
                    <li key={i} className="pl-1">{step}</li>
                  ))}
                </ol>
              </div>

              <div className="pt-4 border-t border-brand-charcoal/5 flex justify-end">
                <button
                  onClick={() => setActiveRecipe(null)}
                  className="px-6 py-3 bg-brand-charcoal hover:bg-brand-charcoal-light text-white text-sm font-bold rounded-btn transition-colors"
                >
                  Close Recipe
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

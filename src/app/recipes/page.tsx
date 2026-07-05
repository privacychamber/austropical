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
    <div className="bg-[#FDFBF7] text-[#1A5D2C] min-h-screen relative overflow-x-hidden font-sans">
      <Navbar />

      {/* Hero Header */}
      <section className="pt-40 pb-12 bg-[#FDFBF7] text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[#B2D235]/10" />
        <div className="max-w-container mx-auto px-6 md:px-12 relative z-10 space-y-6">
          <span className="text-sm font-bold tracking-[0.2em] text-[#F7931E] uppercase block">Recipes</span>
          <h1 className="text-5xl md:text-[5rem] font-black font-display tracking-tight text-[#1A5D2C] uppercase leading-[0.9]">
            Bowl <br/> Inspiration
          </h1>
          <p className="text-[#1A5D2C]/80 text-lg font-light max-w-lg mx-auto leading-relaxed">
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
                className={`px-4 py-2 rounded-full font-bold text-xs transition-colors ${
                  selectedDifficulty === diff
                    ? "bg-[#1A5D2C] text-white shadow-md"
                    : "bg-white border border-[#1A5D2C]/10 text-[#1A5D2C] hover:bg-[#1A5D2C]/5"
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
              className="w-full pl-9 pr-3 py-3 bg-white border border-[#1A5D2C]/10 rounded-xl text-xs font-semibold focus:border-[#1A5D2C] outline-none text-[#1A5D2C] placeholder-[#1A5D2C]/40"
            />
            <Search className="absolute left-3 top-3.5 w-4 h-4 text-[#1A5D2C]/40" />
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
                className="bg-white border-2 border-[#1A5D2C]/5 rounded-[30px] overflow-hidden shadow-sm hover:shadow-[0_20px_40px_rgba(26,93,44,0.1)] transition-all duration-300 cursor-pointer group flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="aspect-[4/3] w-full bg-[#FDFBF7] overflow-hidden relative">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={recipe.image}
                      alt={recipe.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="text-[10px] font-bold bg-[#1A5D2C] text-white px-3 py-1.5 rounded-full flex items-center gap-1 shadow-md">
                        <Clock className="w-3 h-3 text-[#B2D235]" />
                        {recipe.time}
                      </span>
                      <span className="text-[10px] font-bold bg-white text-[#1A5D2C] px-3 py-1.5 rounded-full flex items-center gap-1 shadow-md">
                        <Flame className="w-3 h-3 text-[#F7931E]" />
                        {recipe.calories} kcal
                      </span>
                    </div>
                  </div>
                  <div className="p-6 text-left space-y-2">
                    <div className="flex items-center justify-between text-[10px] font-black text-[#F7931E] uppercase tracking-wider">
                      <span>Superfood Recipe</span>
                      <span className="text-[#B2D235]">{recipe.difficulty}</span>
                    </div>
                    <h4 className="text-2xl font-black font-display text-[#1A5D2C] leading-snug group-hover:text-[#F7931E] transition-colors uppercase">
                      {recipe.title}
                    </h4>
                  </div>
                </div>

                <div className="p-6 pt-0 text-left">
                  <p className="text-[10px] font-bold text-[#1A5D2C]/40 uppercase tracking-widest pt-4 border-t border-[#1A5D2C]/5">
                    Click to reveal details →
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Recipe details modal */}
      {activeRecipe && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-[#1A5D2C]/40 backdrop-blur-sm flex items-center justify-center p-4 text-left">
          <div className="bg-[#FDFBF7] rounded-[40px] max-w-2xl w-full max-h-[85vh] overflow-y-auto flex flex-col shadow-2xl relative">
            <div className="relative h-64 bg-white flex-shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={activeRecipe.image}
                alt={activeRecipe.title}
                className="w-full h-full object-cover rounded-t-[40px]"
              />
              <button
                onClick={() => setActiveRecipe(null)}
                className="absolute top-6 right-6 p-2 bg-white text-[#1A5D2C] rounded-full hover:bg-[#1A5D2C] hover:text-white transition-colors shadow-lg"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-8 space-y-6">
              <div className="flex items-center justify-between text-[10px] font-black text-[#F7931E] uppercase tracking-wider border-b border-[#1A5D2C]/5 pb-3">
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {activeRecipe.time} Prep
                </span>
                <span className="flex items-center gap-1">
                  <Flame className="w-4 h-4 text-[#F7931E]" />
                  {activeRecipe.calories} kcal
                </span>
                <span className="flex items-center gap-1">
                  <Activity className="w-4 h-4 text-[#B2D235]" />
                  {activeRecipe.difficulty}
                </span>
              </div>

              <h3 className="text-3xl md:text-5xl font-black font-display text-[#1A5D2C] uppercase leading-[0.9]">
                {activeRecipe.title}
              </h3>

              <div className="space-y-4 pt-4">
                <h4 className="text-sm font-black text-[#1A5D2C] uppercase tracking-widest flex items-center gap-2">
                  <Check className="w-5 h-5 text-[#B2D235]" />
                  Ingredients
                </h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-[#1A5D2C]/80 text-sm font-semibold">
                  {activeRecipe.ingredients.map((ing: string, i: number) => (
                    <li key={i} className="bg-white px-4 py-2 rounded-lg border border-[#1A5D2C]/5">{ing}</li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4 pt-4">
                <h4 className="text-sm font-black text-[#1A5D2C] uppercase tracking-widest flex items-center gap-2">
                  <Activity className="w-5 h-5 text-[#F7931E]" />
                  Method
                </h4>
                <ol className="space-y-3 text-[#1A5D2C]/80 text-sm font-semibold">
                  {activeRecipe.instructions.map((step: string, i: number) => (
                    <li key={i} className="flex gap-4 bg-white p-4 rounded-xl border border-[#1A5D2C]/5">
                      <span className="font-black text-[#B2D235]">{i + 1}.</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="pt-8 flex justify-end">
                <button
                  onClick={() => setActiveRecipe(null)}
                  className="px-8 py-4 bg-[#1A5D2C] hover:bg-[#F7931E] hover:text-[#1A5D2C] text-white text-sm font-bold rounded-full transition-colors shadow-md"
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

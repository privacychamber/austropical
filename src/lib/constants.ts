import { Sun, Dumbbell, Apple, Coffee, IceCream, Heart, Sparkles, Droplet, Snowflake, Truck, ShieldCheck, RefreshCcw, Gift, Leaf } from "lucide-react";

export const ROUTINES = [
  { icon: Sun, label: "Morning Boost" },
  { icon: Dumbbell, label: "Workout Fuel" },
  { icon: Apple, label: "Healthy Snacks" },
  { icon: Coffee, label: "Breakfast" },
  { icon: IceCream, label: "Desserts" },
  { icon: Heart, label: "Wellness" },
];

export const TRUST_ITEMS = [
  { icon: Apple, label: "100% REAL FRUIT" },
  { icon: Droplet, label: "ZERO ADDED SUGAR" },
  { icon: Leaf, label: "100% VEGAN & NATURAL" },
  { icon: Sparkles, label: "ANTIOXIDANT RICH" },
];

export const GOODNESS_CARDS = [
  {
    title: "Açai Superberry",
    description: "Packed with active antioxidants and vitamins.",
    icon: Sparkles,
    color: "bg-brand-purple",
    textColor: "text-brand-purple"
  },
  {
    title: "Pure & Natural",
    description: "No syrups, chemicals, or refined sugars added.",
    icon: Droplet,
    color: "bg-brand-pink",
    textColor: "text-brand-pink"
  },
  {
    title: "Frozen at Peak",
    description: "Locked in nutrients through rapid-freeze tech.",
    icon: Snowflake,
    color: "bg-brand-yellow",
    textColor: "text-brand-yellow"
  },
  {
    title: "Good for You",
    description: "Clean organic nutrition to fuel your day.",
    icon: Heart,
    color: "bg-brand-purple-light",
    textColor: "text-brand-purple-light"
  }
];

export const PROMO_CARDS = [
  {
    title: "MADE FOR SCHOOL DAYS",
    description: "Nutritious, tasty and made for growing minds and busy days.",
    cta: "SHOP NOW",
    type: "lifestyle"
  },
  {
    title: "PARTNERSHIPS FOR A BETTER PLANET",
    description: "Working with local farmers and communities to protect the Amazon and its people.",
    cta: "LEARN MORE",
    type: "environment"
  },
  {
    title: "JOIN THE AUSTROPICAL COMMUNITY",
    description: "Share. Inspire. Empower. Be part of a global community eating better, living better.",
    cta: "FOLLOW US",
    type: "community"
  }
];

export const BENEFITS = [
  { icon: Truck, title: "FREE SHIPPING", subtitle: "On orders over $75" },
  { icon: ShieldCheck, title: "SECURE CHECKOUT", subtitle: "SSL Encrypted payments" },
  { icon: RefreshCcw, title: "30 DAY RETURNS", subtitle: "Easy refund policy" },
  { icon: Gift, title: "LOYALTY GIFTS", subtitle: "Earn points on purchases" },
];

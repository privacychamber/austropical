"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  rating: number;
  reviewsCount: number;
  badges: string[];
  specs: {
    calories: number;
    time?: string;
    difficulty?: string;
    sugar: string;
    organic: boolean;
  };
  details: string;
}

export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  variant?: string;
}

export interface Recipe {
  id: string;
  title: string;
  image: string;
  time: string;
  calories: number;
  difficulty: "Easy" | "Medium" | "Hard";
  ingredients: string[];
  instructions: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  author: string;
  category: string;
}

interface CMSContent {
  heroTitle: string;
  heroSubtitle: string;
  storyTitle: string;
  storyText: string;
  sustainabilityTitle: string;
  sustainabilityNumber: number;
}

interface StoreContextProps {
  products: Product[];
  recipes: Recipe[];
  blogs: BlogPost[];
  cart: CartItem[];
  wishlist: string[];
  cms: CMSContent;
  promoCode: string;
  discount: number;
  addToCart: (product: Product, quantity?: number, variant?: string) => void;
  removeFromCart: (productId: string, variant?: string) => void;
  updateCartQuantity: (productId: string, quantity: number, variant?: string) => void;
  clearCart: () => void;
  toggleWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
  applyPromoCode: (code: string) => boolean;
  updateCMS: (newCms: Partial<CMSContent>) => void;
  updateProductPrice: (id: string, newPrice: number) => void;
}

const DEFAULT_PRODUCTS: Product[] = [
  {
    id: "acai-superberry",
    name: "Açaí Superberry Tub",
    price: 14.99,
    description: "Antioxidant-rich organic wild-harvested açaí superberry tub. Creamy, delicious, and perfect for instant superfood bowls.",
    image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&w=600&q=80",
    category: "Tubs",
    rating: 4.9,
    reviewsCount: 142,
    badges: ["100% Fruit", "No Added Sugar", "Plant Based"],
    specs: { calories: 120, sugar: "0g Added", organic: true },
    details: "Sourced directly from the Amazon rainforest. Handpicked, wild-harvested açaí berries processed within hours to lock in maximum antioxidant nutrients, healthy omegas 3-6-9, and fiber. Ideal for high-performance breakfasts and afternoon energy recharges."
  },
  {
    id: "smoothie-cubes",
    name: "Smoothie Cubes (Blend)",
    price: 18.99,
    description: "Blend. Sip. Glow. Pure freeze-dried smoothie cubes containing premium açaí, wild blueberry, banana, and prebiotics.",
    image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=600&q=80",
    category: "Cubes",
    rating: 4.8,
    reviewsCount: 96,
    badges: ["Gluten Free", "Organic", "Dairy Free"],
    specs: { calories: 85, sugar: "2g Natural", organic: true },
    details: "Pop 4-5 cubes into a blender with your choice of liquid. Blend for 30 seconds for a flawless, velvety thick smoothie. No ice, no chopped fruit, zero waste. Rich in vitamin C, minerals, and gut-healthy plant fibers."
  },
  {
    id: "acai-packs",
    name: "Organic Açaí Pure Packs",
    price: 22.99,
    description: "Frozen pure, unsweetened açaí pulp. Premium concentration of Amazonian superfood for standard mixing recipes.",
    image: "https://images.unsplash.com/photo-1628557044797-f21a177c37ec?auto=format&fit=crop&w=600&q=80",
    category: "Packs",
    rating: 5.0,
    reviewsCount: 88,
    badges: ["100% Pure", "Australian Made", "Vegan"],
    specs: { calories: 70, sugar: "0g", organic: true },
    details: "4 single-serve tear packs. Unsweetened organic açaí berry pulp contains highest concentration of healthy lipids, fiber, and iron. Made for smoothie bowls where you want full control of the sweetness level."
  },
  {
    id: "mango-tropical",
    name: "Mango Superfood Pack",
    price: 15.99,
    description: "Vibrant tropical mango blended with local passionfruit and organic chia seed cubes. Sweet, clean, and energizing.",
    image: "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=600&q=80",
    category: "Cubes",
    rating: 4.7,
    reviewsCount: 65,
    badges: ["100% Fruit", "Gluten Free", "Vibrant"],
    specs: { calories: 95, sugar: "4g Natural", organic: false },
    details: "Frozen sweet mango chunks layered with golden passionfruit nectar and omega-rich white chia seeds. Great for quick blending or topping overnight oats for a citrusy, tropical tang."
  },
  {
    id: "dragon-fruit",
    name: "Dragon Fruit Pitaya Blend",
    price: 16.99,
    description: "Vibrant pink pitaya cubes combined with organic raspberry and prebiotic fibers for inner skin radiance.",
    image: "https://images.unsplash.com/photo-1527324688151-0e627063f2b1?auto=format&fit=crop&w=600&q=80",
    category: "Cubes",
    rating: 4.9,
    reviewsCount: 74,
    badges: ["Glow", "Antioxidants", "Plant Based"],
    specs: { calories: 80, sugar: "1g Natural", organic: true },
    details: "Premium deep-pink Pitaya harvested from certified sustainable organic farms. Rich in magnesium, iron, and active enzymes that support digestive wellness while delivering an absolute visual highlight to your beverage menu."
  },
  {
    id: "green-boost",
    name: "Green Superfood Cubes",
    price: 19.99,
    description: "Organic baby spinach, kale, matcha powder, fresh green apple, and lime cubes. Clean green fuel without the leafy taste.",
    image: "https://images.unsplash.com/photo-1610970881699-44a5587caa9a?auto=format&fit=crop&w=600&q=80",
    category: "Cubes",
    rating: 4.6,
    reviewsCount: 51,
    badges: ["Iron Rich", "No Sugar Added", "Super Green"],
    specs: { calories: 55, sugar: "1g Natural", organic: true },
    details: "Our organic green recipe delivers a full daily serving of dark leafy greens, powered by ceremonial-grade Japanese Matcha. Smooth, clean, slightly citrusy, and absolutely zero bitter aftertaste."
  }
];

const DEFAULT_RECIPES: Recipe[] = [
  {
    id: "acai-energy-bowl",
    title: "Açaí Energy Power Bowl",
    image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&w=600&q=80",
    time: "5 mins",
    calories: 240,
    difficulty: "Easy",
    ingredients: [
      "1 Açaí Superberry Tub (or 1 Pack blended)",
      "1/2 cup almond milk",
      "1 frozen banana",
      "Toppings: Granola, fresh strawberries, hemp seeds, and honey drizzle"
    ],
    instructions: [
      "Add the Açaí Superberry base to your blender along with the almond milk and frozen banana.",
      "Blend on high speed until completely smooth and thick.",
      "Scoop into a chilled bowl.",
      "Decorate creatively with granola, strawberries, hemp seeds, and a drizzle of honey.",
      "Enjoy immediately!"
    ]
  },
  {
    id: "tropical-acai-smoothie",
    title: "Tropical Açaí Glow Smoothie",
    image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=600&q=80",
    time: "7 mins",
    calories: 195,
    difficulty: "Easy",
    ingredients: [
      "4 Smoothie Cubes",
      "1/2 cup coconut water",
      "1/2 cup frozen mango chunks",
      "1 tablespoon chia seeds"
    ],
    instructions: [
      "Drop the Smoothie Cubes, mango chunks, and chia seeds into the blender.",
      "Pour in the chilled coconut water.",
      "Blend for 45 seconds until you reach a silky texture.",
      "Pour into a tall glass and garnish with a thin slice of fresh mango."
    ]
  },
  {
    id: "acai-banana-ice-cream",
    title: "Açaí & Banana Nice Cream",
    image: "https://images.unsplash.com/photo-1628557044797-f21a177c37ec?auto=format&fit=crop&w=600&q=80",
    time: "10 mins",
    calories: 180,
    difficulty: "Medium",
    ingredients: [
      "2 Organic Açaí Pure Packs",
      "3 frozen ripe bananas",
      "1 tablespoon almond butter",
      "Splash of oat milk"
    ],
    instructions: [
      "Let the Açaí Packs sit at room temperature for 2 minutes to slightly soften.",
      "Break the packs into pieces and place in a high-speed food processor with the frozen bananas.",
      "Add almond butter and a splash of oat milk to aid blending.",
      "Process until it forms a creamy, soft-serve ice cream texture, scraping down the sides as needed.",
      "Serve immediately in small bowls topped with dark chocolate shavings."
    ]
  },
  {
    id: "acai-granola-parfait",
    title: "Açaí Superfood Granola Parfait",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=600&q=80",
    time: "6 mins",
    calories: 290,
    difficulty: "Easy",
    ingredients: [
      "1/2 cup Greek yogurt or coconut yogurt",
      "1/2 cup blended Açaí Superberry",
      "1/3 cup toasted almond granola",
      "Fresh blueberries and raspberries"
    ],
    instructions: [
      "In a clear glass, layer Greek yogurt at the bottom.",
      "Add a thick layer of blended Açaí Superberry.",
      "Sprinkle a layer of toasted almond granola and fresh blueberries.",
      "Repeat layers until glass is full. Top with fresh raspberries and serve immediately."
    ]
  },
  {
    id: "acai-green-smoothie",
    title: "Açaí Mint & Green Boost",
    image: "https://images.unsplash.com/photo-1610970881699-44a5587caa9a?auto=format&fit=crop&w=600&q=80",
    time: "5 mins",
    calories: 150,
    difficulty: "Easy",
    ingredients: [
      "3 Green Superfood Cubes",
      "3 Smoothie Cubes",
      "1 cup unsweetened almond milk",
      "Fresh mint leaves"
    ],
    instructions: [
      "Place green cubes and smoothie cubes in your blender.",
      "Pour almond milk over the cubes.",
      "Throw in 4-5 fresh mint leaves.",
      "Blend on high until fully uniform. Drink immediately for a refreshing, nutrient-dense breakfast."
    ]
  }
];

const DEFAULT_BLOGS: BlogPost[] = [
  {
    id: "benefits-of-acai",
    title: "Superfoods Demystified: The Real Health Benefits of Açaí",
    excerpt: "Discover why wild-harvested Amazonian açaí remains the king of antioxidants, omegas, and cellular wellness.",
    content: "Açaí is more than just a passing trend. For centuries, Amazonian native tribes have harvested this small, dark purple berry from the crowns of Euterpe oleracea palm trees as a dietary staple. Scientific testing reveals why: it contains up to 10 times more active antioxidants than blueberries, alongside loaded concentrations of oleic and linoleic acids (healthy monounsaturated and polyunsaturated fats). These compounds work in tandem to battle cellular oxidative stress, promote heart health, and encourage radiant skin elasticity from the inside out.",
    image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&w=600&q=80",
    date: "June 28, 2026",
    author: "Dr. Elena Rostova",
    category: "Nutrition"
  },
  {
    id: "quick-healthy-breakfasts",
    title: "How to Build a 5-Minute Award-Winning Breakfast",
    excerpt: "No time? Discover our quick tips for blending organic smoothie cubes and superfoods under 5 minutes.",
    content: "Mornings are chaotic, but sacrificing nutrition is no longer an option. By preparing pre-portioned superfood cubes, you can cut breakfast preparation down to just 30 seconds of blending. In this detailed guide, we showcase the optimal liquid-to-cube ratios, the best protein boosters to add (like pea protein or organic peanut butter), and how to pack your blender for the absolute smoothest consistency. Transform your mornings into an aesthetic, highly efficient wellness ritual.",
    image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=600&q=80",
    date: "July 01, 2026",
    author: "Marcus Vance",
    category: "Lifestyle"
  },
  {
    id: "sustainability-in-amazon",
    title: "Sourcing Integrity: Protecting the Amazon Rainforest",
    excerpt: "How Austropical superfoods partners directly with local Amazonian communities to protect wild biodiversity.",
    content: "When you choose Austropical, you aren't just nourishing your body—you're supporting a business model built around conservation. Standard modern agriculture clears forests. Wild-harvesting, however, values existing forests. By partnering with local cooperatives in Brazil, we guarantee fair trade wages to families who protect the old Euterpe palms, ensuring the canopy remains fully standing. Learn about our carbon offset metrics and visual tracking maps that ensure absolute traceabilty.",
    image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=600&q=80",
    date: "May 15, 2026",
    author: "Talia Mendes",
    category: "Sustainability"
  }
];

const DEFAULT_CMS: CMSContent = {
  heroTitle: "Australia's Brightest Snack Choice.",
  heroSubtitle: "Real fruit. Real nutrition. Made for a healthier, happier you.",
  storyTitle: "Açaí As It Should Be.",
  storyText: "From the wild Amazon basin straight to your Australian bowl. We partner directly with organic co-ops to source berries at their peak nutritional maturity, freezing them within 4 hours to lock in maximum antioxidants and essential healthy omegas.",
  sustainabilityTitle: "100% Eco-Harvested, 100% Carbon Neutral",
  sustainabilityNumber: 15420
};

const StoreContext = createContext<StoreContextProps | undefined>(undefined);

export const StoreProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>(DEFAULT_PRODUCTS);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [cms, setCms] = useState<CMSContent>(DEFAULT_CMS);
  const [promoCode, setPromoCode] = useState<string>("");
  const [discount, setDiscount] = useState<number>(0);

  // Load from localstorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("austropical_cart");
    const savedWishlist = localStorage.getItem("austropical_wishlist");
    const savedCms = localStorage.getItem("austropical_cms");
    const savedProducts = localStorage.getItem("austropical_products");

    if (savedCart) setCart(JSON.parse(savedCart));
    if (savedWishlist) setWishlist(JSON.parse(savedWishlist));
    if (savedCms) setCms(JSON.parse(savedCms));
    if (savedProducts) setProducts(JSON.parse(savedProducts));
  }, []);

  // Save to localstorage
  const saveCart = (newCart: CartItem[]) => {
    setCart(newCart);
    localStorage.setItem("austropical_cart", JSON.stringify(newCart));
  };

  const saveWishlist = (newWishlist: string[]) => {
    setWishlist(newWishlist);
    localStorage.setItem("austropical_wishlist", JSON.stringify(newWishlist));
  };

  const saveCms = (newCms: CMSContent) => {
    setCms(newCms);
    localStorage.setItem("austropical_cms", JSON.stringify(newCms));
  };

  const saveProducts = (newProducts: Product[]) => {
    setProducts(newProducts);
    localStorage.setItem("austropical_products", JSON.stringify(newProducts));
  };

  const addToCart = (product: Product, quantity = 1, variant?: string) => {
    const existingIndex = cart.findIndex(
      (item) => item.id === product.id && item.variant === variant
    );

    if (existingIndex > -1) {
      const newCart = [...cart];
      newCart[existingIndex].quantity += quantity;
      saveCart(newCart);
    } else {
      const newItem: CartItem = {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity,
        variant,
      };
      saveCart([...cart, newItem]);
    }
  };

  const removeFromCart = (productId: string, variant?: string) => {
    const newCart = cart.filter(
      (item) => !(item.id === productId && item.variant === variant)
    );
    saveCart(newCart);
  };

  const updateCartQuantity = (productId: string, quantity: number, variant?: string) => {
    if (quantity <= 0) {
      removeFromCart(productId, variant);
      return;
    }
    const newCart = cart.map((item) =>
      item.id === productId && item.variant === variant
        ? { ...item, quantity }
        : item
    );
    saveCart(newCart);
  };

  const clearCart = () => {
    saveCart([]);
    setPromoCode("");
    setDiscount(0);
  };

  const toggleWishlist = (productId: string) => {
    const newWishlist = wishlist.includes(productId)
      ? wishlist.filter((id) => id !== productId)
      : [...wishlist, productId];
    saveWishlist(newWishlist);
  };

  const isInWishlist = (productId: string) => {
    return wishlist.includes(productId);
  };

  const applyPromoCode = (code: string): boolean => {
    const cleanCode = code.toUpperCase().trim();
    if (cleanCode === "FRESH20") {
      setPromoCode(cleanCode);
      setDiscount(20); // 20% off
      return true;
    }
    if (cleanCode === "AUSTROPICAL10") {
      setPromoCode(cleanCode);
      setDiscount(10); // 10% off
      return true;
    }
    return false;
  };

  const updateCMS = (newCms: Partial<CMSContent>) => {
    const updated = { ...cms, ...newCms };
    saveCms(updated);
  };

  const updateProductPrice = (id: string, newPrice: number) => {
    const updated = products.map(p => p.id === id ? { ...p, price: newPrice } : p);
    saveProducts(updated);
  };

  return (
    <StoreContext.Provider
      value={{
        products,
        recipes: DEFAULT_RECIPES,
        blogs: DEFAULT_BLOGS,
        cart,
        wishlist,
        cms,
        promoCode,
        discount,
        addToCart,
        removeFromCart,
        updateCartQuantity,
        clearCart,
        toggleWishlist,
        isInWishlist,
        applyPromoCode,
        updateCMS,
        updateProductPrice,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error("useStore must be used within a StoreProvider");
  }
  return context;
};

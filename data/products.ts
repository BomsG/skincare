export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  price: number;
  originalPrice?: number;
  description: string;
  image: string;
  images?: string[];
  rating: number;
  reviews: number;
  skinTypes: string[];
  concerns: string[];
  keyIngredients?: { name: string; benefit: string }[];
  usage?: string;
  bestUsed?: string;
  isNew?: boolean;
  onSale?: boolean;
  createdAt: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Gentle Foaming Cleanser",
    slug: "gentle-foaming-cleanser",
    category: "Cleanser",
    price: 24.99,
    description:
      "A gentle, sulfate-free cleanser that removes impurities without stripping the skin's natural moisture barrier. Perfect for daily use on all skin types.",
    image: "/images/p2.jpg",
    images: [
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
    ],
    rating: 4.8,
    reviews: 324,
    skinTypes: ["Normal", "Dry", "Sensitive"],
    concerns: ["Hydration", "Sensitivity"],
    keyIngredients: [
      { name: "Ceramides", benefit: "Restore and maintain skin barrier" },
      { name: "Hyaluronic Acid", benefit: "Provides deep hydration" },
      { name: "Niacinamide", benefit: "Soothes and calms skin" },
    ],
    usage:
      "Apply to damp skin, massage gently, and rinse with lukewarm water. Use morning and evening.",
    bestUsed: "Morning and evening",
    isNew: false,
    onSale: false,
    createdAt: "2024-01-15",
  },
  {
    id: "2",
    name: "Vitamin C Brightening Serum",
    slug: "vitamin-c-brightening-serum",
    category: "Serum",
    price: 39.99,
    originalPrice: 49.99,
    description:
      "A potent vitamin C serum that brightens skin, reduces dark spots, and provides antioxidant protection. Features stable L-ascorbic acid for maximum efficacy.",
    image: "/images/p4.jpg",
    images: [
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
    ],
    rating: 4.9,
    reviews: 567,
    skinTypes: ["Normal", "Oily", "Combination"],
    concerns: ["Brightening", "Aging", "Pores"],
    keyIngredients: [
      {
        name: "L-Ascorbic Acid (15%)",
        benefit: "Brightens and evens skin tone",
      },
      { name: "Vitamin E", benefit: "Enhances antioxidant protection" },
      { name: "Ferulic Acid", benefit: "Stabilizes vitamin C" },
    ],
    usage:
      "Apply 2-3 drops to clean skin in the morning. Follow with moisturizer and sunscreen.",
    bestUsed: "Morning",
    isNew: false,
    onSale: true,
    createdAt: "2024-02-01",
  },
  {
    id: "3",
    name: "Hydrating Night Moisturizer",
    slug: "hydrating-night-moisturizer",
    category: "Moisturizer",
    price: 32.99,
    description:
      "A rich, nourishing night cream that deeply hydrates and repairs skin while you sleep. Contains peptides and botanical extracts for anti-aging benefits.",
    image: "/images/p1.jpg",
    rating: 4.7,
    reviews: 289,
    skinTypes: ["Dry", "Normal", "Combination"],
    concerns: ["Hydration", "Aging"],
    keyIngredients: [
      { name: "Peptides", benefit: "Stimulate collagen production" },
      { name: "Squalane", benefit: "Deep moisturization without greasiness" },
      { name: "Bakuchiol", benefit: "Natural retinol alternative" },
    ],
    usage: "Apply to clean skin every evening. Massage gently until absorbed.",
    bestUsed: "Evening",
    isNew: true,
    onSale: false,
    createdAt: "2024-03-10",
  },
  {
    id: "4",
    name: "Mineral Sunscreen SPF 50",
    slug: "mineral-sunscreen-spf-50",
    category: "Sunscreen",
    price: 28.99,
    description:
      "A lightweight, mineral sunscreen that provides broad-spectrum protection without leaving a white cast. Perfect for sensitive skin and daily wear.",
    image: "/images/p3.jpg",
    rating: 4.6,
    reviews: 412,
    skinTypes: ["All", "Sensitive"],
    concerns: ["Sensitivity", "Aging"],
    keyIngredients: [
      { name: "Zinc Oxide", benefit: "Broad-spectrum UV protection" },
      { name: "Titanium Dioxide", benefit: "Physical sun protection" },
      { name: "Aloe Vera", benefit: "Soothes and calms skin" },
    ],
    usage:
      "Apply generously 15 minutes before sun exposure. Reapply every 2 hours.",
    bestUsed: "Morning and throughout the day",
    isNew: false,
    onSale: false,
    createdAt: "2024-01-20",
  },
  {
    id: "5",
    name: "Retinol Renewal Treatment",
    slug: "retinol-renewal-treatment",
    category: "Treatment",
    price: 45.99,
    description:
      "A gentle yet effective retinol treatment that reduces fine lines, improves skin texture, and promotes cell turnover. Formulated with soothing botanicals.",
    image: "/images/p5.jpg",
    rating: 4.8,
    reviews: 198,
    skinTypes: ["Normal", "Oily", "Combination"],
    concerns: ["Aging", "Pores", "Acne"],
    keyIngredients: [
      {
        name: "Retinol (0.5%)",
        benefit: "Reduces fine lines and improves texture",
      },
      { name: "Chamomile Extract", benefit: "Soothes potential irritation" },
      { name: "Jojoba Oil", benefit: "Moisturizes and nourishes" },
    ],
    usage:
      "Start with 2-3 times per week in the evening. Gradually increase frequency as tolerated.",
    bestUsed: "Evening",
    isNew: false,
    onSale: false,
    createdAt: "2024-02-15",
  },
  {
    id: "6",
    name: "Purifying Clay Mask",
    slug: "purifying-clay-mask",
    category: "Mask",
    price: 22.99,
    description:
      "A deep-cleansing clay mask that draws out impurities, minimizes pores, and leaves skin feeling refreshed and balanced. Perfect for weekly use.",
    image: "/images/p6.jpg",
    rating: 4.5,
    reviews: 156,
    skinTypes: ["Oily", "Combination"],
    concerns: ["Pores", "Acne"],
    keyIngredients: [
      { name: "Bentonite Clay", benefit: "Absorbs excess oil and impurities" },
      { name: "Salicylic Acid", benefit: "Exfoliates and unclogs pores" },
      { name: "Tea Tree Oil", benefit: "Antibacterial properties" },
    ],
    usage:
      "Apply thin layer to clean skin. Leave on for 10-15 minutes, then rinse with warm water.",
    bestUsed: "1-2 times per week",
    isNew: false,
    onSale: false,
    createdAt: "2024-01-30",
  },
  {
    id: "7",
    name: "Niacinamide Pore Refining Serum",
    slug: "niacinamide-pore-refining-serum",
    category: "Serum",
    price: 26.99,
    description:
      "A lightweight serum with 10% niacinamide that minimizes pores, controls oil production, and improves skin texture for a smoother complexion.",
    image: "/placeholder.svg?height=400&width=400",
    rating: 4.7,
    reviews: 445,
    skinTypes: ["Oily", "Combination", "Normal"],
    concerns: ["Pores", "Acne", "Brightening"],
    keyIngredients: [
      {
        name: "Niacinamide (10%)",
        benefit: "Minimizes pores and controls oil",
      },
      { name: "Zinc PCA", benefit: "Regulates sebum production" },
      { name: "Hyaluronic Acid", benefit: "Maintains hydration balance" },
    ],
    usage:
      "Apply 2-3 drops to clean skin morning and evening before moisturizer.",
    bestUsed: "Morning and evening",
    isNew: true,
    onSale: false,
    createdAt: "2024-03-05",
  },
  {
    id: "8",
    name: "Gentle Exfoliating Toner",
    slug: "gentle-exfoliating-toner",
    category: "Treatment",
    price: 29.99,
    originalPrice: 34.99,
    description:
      "A mild exfoliating toner with AHA and BHA that removes dead skin cells, unclogs pores, and reveals brighter, smoother skin.",
    image: "/placeholder.svg?height=400&width=400",
    rating: 4.6,
    reviews: 278,
    skinTypes: ["Normal", "Oily", "Combination"],
    concerns: ["Pores", "Brightening", "Acne"],
    keyIngredients: [
      {
        name: "Glycolic Acid (5%)",
        benefit: "Exfoliates surface dead skin cells",
      },
      {
        name: "Salicylic Acid (0.5%)",
        benefit: "Penetrates pores to clear congestion",
      },
      { name: "Witch Hazel", benefit: "Tones and tightens pores" },
    ],
    usage:
      "Apply with cotton pad to clean skin 2-3 times per week in the evening.",
    bestUsed: "Evening, 2-3 times per week",
    isNew: false,
    onSale: true,
    createdAt: "2024-02-20",
  },
  {
    id: "9",
    name: "Soothing Sensitive Skin Cream",
    slug: "soothing-sensitive-skin-cream",
    category: "Moisturizer",
    price: 34.99,
    description:
      "A gentle, fragrance-free moisturizer specifically formulated for sensitive skin. Provides long-lasting hydration while calming irritation and redness.",
    image: "/placeholder.svg?height=400&width=400",
    rating: 4.9,
    reviews: 167,
    skinTypes: ["Sensitive", "Dry"],
    concerns: ["Sensitivity", "Hydration"],
    keyIngredients: [
      {
        name: "Colloidal Oatmeal",
        benefit: "Soothes and calms irritated skin",
      },
      { name: "Ceramides", benefit: "Restores skin barrier function" },
      {
        name: "Allantoin",
        benefit: "Promotes healing and reduces inflammation",
      },
    ],
    usage:
      "Apply to clean skin morning and evening. Can be used as needed for extra comfort.",
    bestUsed: "Morning and evening",
    isNew: false,
    onSale: false,
    createdAt: "2024-01-25",
  },
  {
    id: "10",
    name: "Antioxidant Eye Cream",
    slug: "antioxidant-eye-cream",
    category: "Treatment",
    price: 42.99,
    description:
      "A rich eye cream that targets fine lines, dark circles, and puffiness. Contains powerful antioxidants and peptides for visible anti-aging results.",
    image: "/placeholder.svg?height=400&width=400",
    rating: 4.4,
    reviews: 89,
    skinTypes: ["All"],
    concerns: ["Aging", "Hydration"],
    keyIngredients: [
      { name: "Caffeine", benefit: "Reduces puffiness and dark circles" },
      { name: "Peptides", benefit: "Stimulates collagen for firmer skin" },
      { name: "Vitamin E", benefit: "Provides antioxidant protection" },
    ],
    usage: "Gently pat around eye area morning and evening using ring finger.",
    bestUsed: "Morning and evening",
    isNew: true,
    onSale: false,
    createdAt: "2024-03-01",
  },
  {
    id: "11",
    name: "Acne Fighting Spot Treatment",
    slug: "acne-fighting-spot-treatment",
    category: "Treatment",
    price: 18.99,
    description:
      "A targeted spot treatment that quickly reduces the appearance of blemishes. Contains benzoyl peroxide and tea tree oil for fast-acting results.",
    image: "/placeholder.svg?height=400&width=400",
    rating: 4.3,
    reviews: 234,
    skinTypes: ["Oily", "Combination"],
    concerns: ["Acne"],
    keyIngredients: [
      {
        name: "Benzoyl Peroxide (2.5%)",
        benefit: "Kills acne-causing bacteria",
      },
      { name: "Tea Tree Oil", benefit: "Natural antibacterial properties" },
      { name: "Sulfur", benefit: "Dries out blemishes" },
    ],
    usage:
      "Apply directly to blemishes after cleansing. Use once or twice daily.",
    bestUsed: "As needed on blemishes",
    isNew: false,
    onSale: false,
    createdAt: "2024-02-10",
  },
  {
    id: "12",
    name: "Hydrating Facial Mist",
    slug: "hydrating-facial-mist",
    category: "Treatment",
    price: 16.99,
    originalPrice: 21.99,
    description:
      "A refreshing facial mist that instantly hydrates and revitalizes skin throughout the day. Perfect for setting makeup or midday touch-ups.",
    image: "/placeholder.svg?height=400&width=400",
    rating: 4.5,
    reviews: 312,
    skinTypes: ["All"],
    concerns: ["Hydration"],
    keyIngredients: [
      { name: "Rose Water", benefit: "Hydrates and tones skin" },
      { name: "Glycerin", benefit: "Attracts moisture to skin" },
      { name: "Cucumber Extract", benefit: "Soothes and refreshes" },
    ],
    usage:
      "Spray 6-8 inches from face with eyes closed. Use throughout the day as needed.",
    bestUsed: "Throughout the day",
    isNew: false,
    onSale: true,
    createdAt: "2024-01-10",
  },
];

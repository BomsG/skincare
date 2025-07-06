export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  author: string
  date: string // ISO string (yyyy-mm-dd)
  readTime: string
  category: string
  image: string
  featured: boolean
}

/* ----- Demo content ----- */
export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Complete Guide to Building Your First Skincare Routine",
    slug: "complete-guide-first-skincare-routine",
    excerpt:
      "Starting your skincare journey can feel overwhelming. Here's everything you need to know to build an effective routine that works for your skin type.",
    content: `<p>(Full article content …)</p>`,
    author: "Dr. Sarah Johnson",
    date: "2024-03-15",
    readTime: "8 min read",
    category: "Skincare Basics",
    image: "/placeholder.svg?height=400&width=600",
    featured: true,
  },
  {
    id: "2",
    title: "Understanding Your Skin Type: A Dermatologist's Guide",
    slug: "understanding-your-skin-type",
    excerpt: "Learn how to identify your skin type and choose products that will work best for your unique needs.",
    content: `<p>(Full article content …)</p>`,
    author: "Dr. Emily Chen",
    date: "2024-03-12",
    readTime: "6 min read",
    category: "Skin Science",
    image: "/placeholder.svg?height=400&width=600",
    featured: false,
  },
  {
    id: "3",
    title: "The Science Behind Vitamin C in Skincare",
    slug: "science-behind-vitamin-c-skincare",
    excerpt:
      "Discover why vitamin C is considered the gold standard in anti-aging skincare and how to use it effectively.",
    content: `<p>(Full article content …)</p>`,
    author: "Dr. Michael Rodriguez",
    date: "2024-03-10",
    readTime: "10 min read",
    category: "Ingredients",
    image: "/placeholder.svg?height=400&width=600",
    featured: true,
  },
  /* add the remaining posts here … */
]

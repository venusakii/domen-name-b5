export interface Review {
  id: string
  title: string
  slug: string
  category: string
  rating: number
  price: string
  image: string
  excerpt: string
  pros: string[]
  cons: string[]
  amazonLink: string
  featured?: boolean
}

export const reviews: Review[] = [
  {
    id: "1",
    title: "Fluval Flex 34 Aquarium LED Lighting Kit",
    slug: "fluval-flex-34",
    category: "Complete Kits",
    rating: 5.0,
    price: "$299.99",
    image: "/fluval-flex-34-aquarium-with-led-lighting.jpg",
    excerpt:
      "The Fluval Flex 34 combines stunning design with powerful LED lighting technology. Perfect for both beginners and experienced aquarists.",
    pros: [
      "Powerful multi-color LED lighting with remote control",
      "Unique curved glass design creates stunning visual appeal",
      "Integrated 3-stage filtration system included",
      "Easy to set up and maintain",
      "Excellent build quality and durability",
    ],
    cons: [
      "Higher price point than basic starter kits",
      "Limited customization options for filtration",
      "Remote control requires line of sight",
    ],
    amazonLink: "https://amazon.com/fluval-flex-34",
    featured: true,
  },
  {
    id: "2",
    title: "Aqueon QuietFlow LED PRO Aquarium Power Filter",
    slug: "aqueon-quietflow-led-pro",
    category: "Filtration",
    rating: 4.5,
    price: "$49.99",
    image: "/aquarium-filter-system.jpg",
    excerpt:
      "A reliable and quiet hang-on-back filter with LED indicators for maintenance reminders. Great value for medium-sized tanks.",
    pros: [
      "Extremely quiet operation",
      "LED indicators for filter cartridge replacement",
      "Self-priming pump for easy startup",
      "5-stage filtration for crystal clear water",
      "Adjustable flow rate",
    ],
    cons: [
      "Replacement cartridges can be expensive",
      "May be too powerful for small tanks",
      "LED lights cannot be turned off",
    ],
    amazonLink: "https://amazon.com/aqueon-quietflow",
  },
  {
    id: "3",
    title: "Nicrew ClassicLED Plus Planted Aquarium Light",
    slug: "nicrew-classicled-plus",
    category: "Lighting",
    rating: 4.8,
    price: "$39.99",
    image: "/aquarium-led-light.jpg",
    excerpt:
      "Budget-friendly LED light that delivers impressive performance for planted tanks. Excellent color rendering and adjustable brightness.",
    pros: [
      "Outstanding value for money",
      "Full spectrum lighting promotes plant growth",
      "Adjustable brightness with timer function",
      "Sleek aluminum design",
      "Easy to install on various tank sizes",
    ],
    cons: [
      "Not suitable for high-tech planted tanks",
      "Timer must be reset after power outage",
      "Limited color customization",
    ],
    amazonLink: "https://amazon.com/nicrew-classicled",
  },
  {
    id: "4",
    title: "Hygger Titanium Aquarium Heater",
    slug: "hygger-titanium-heater",
    category: "Heating",
    rating: 4.6,
    price: "$34.99",
    image: "/aquarium-heater.jpg",
    excerpt:
      "Durable titanium heater with external temperature controller. Precise temperature control and shatterproof design.",
    pros: [
      "Titanium construction is virtually indestructible",
      "External digital controller for easy adjustment",
      "Accurate temperature control within 0.5°F",
      "Safe for saltwater and freshwater",
      "Intelligent protection against overheating",
    ],
    cons: [
      "Larger footprint than traditional heaters",
      "Controller wire may be too short for some setups",
      "Higher initial cost",
    ],
    amazonLink: "https://amazon.com/hygger-titanium",
  },
  {
    id: "5",
    title: "Seachem Prime Fresh and Saltwater Conditioner",
    slug: "seachem-prime",
    category: "Water Treatment",
    rating: 4.9,
    price: "$14.99",
    image: "/water-conditioner-bottle.jpg",
    excerpt:
      "The gold standard in water conditioners. Removes chlorine, chloramine, and detoxifies ammonia and nitrite.",
    pros: [
      "Highly concentrated formula lasts a long time",
      "Detoxifies ammonia, nitrite, and nitrate",
      "Safe for all aquatic life",
      "Works in both fresh and saltwater",
      "Trusted by professionals worldwide",
    ],
    cons: ["Strong sulfur smell", "Measuring cap can be difficult to read", "More expensive than basic conditioners"],
    amazonLink: "https://amazon.com/seachem-prime",
  },
  {
    id: "6",
    title: "Fluval Plant and Shrimp Stratum",
    slug: "fluval-stratum",
    category: "Substrate",
    rating: 4.7,
    price: "$29.99",
    image: "/aquarium-substrate.jpg",
    excerpt:
      "Premium volcanic soil substrate that promotes plant growth and maintains ideal water parameters for shrimp.",
    pros: [
      "Lowers pH naturally for soft water species",
      "Rich in minerals for plant nutrition",
      "Porous structure supports beneficial bacteria",
      "Ideal for planted tanks and shrimp",
      "Natural appearance",
    ],
    cons: [
      "Can cloud water initially",
      "Breaks down over time (2-3 years)",
      "Not suitable for fish that prefer hard water",
    ],
    amazonLink: "https://amazon.com/fluval-stratum",
  },
  {
    id: "7",
    title: "API Freshwater Master Test Kit",
    slug: "api-master-test-kit",
    category: "Testing",
    rating: 4.8,
    price: "$24.99",
    image: "/water-test-kit.jpg",
    excerpt:
      "Comprehensive liquid test kit for monitoring critical water parameters. Essential for maintaining a healthy aquarium.",
    pros: [
      "Tests pH, ammonia, nitrite, and nitrate",
      "800+ tests included in one kit",
      "More accurate than test strips",
      "Easy to read color charts",
      "Excellent value for the number of tests",
    ],
    cons: ["Requires careful measurement", "Test tubes can be fragile", "Reagents expire after 6 months once opened"],
    amazonLink: "https://amazon.com/api-test-kit",
  },
  {
    id: "8",
    title: "Marineland Portrait Glass LED Aquarium Kit",
    slug: "marineland-portrait",
    category: "Complete Kits",
    rating: 4.4,
    price: "$89.99",
    image: "/portrait-aquarium.jpg",
    excerpt: "Stylish vertical aquarium perfect for small spaces. Includes hidden filtration and bright LED lighting.",
    pros: [
      "Unique portrait orientation saves space",
      "Hidden 3-stage filtration in back",
      "Bright white and blue LED lighting",
      "Curved glass front panel",
      "Perfect for desktop or countertop",
    ],
    cons: ["Small size limits fish options", "Filter can be noisy", "Limited swimming space for active fish"],
    amazonLink: "https://amazon.com/marineland-portrait",
  },
  {
    id: "9",
    title: "Eheim Classic 250 External Canister Filter",
    slug: "eheim-classic-250",
    category: "Filtration",
    rating: 4.9,
    price: "$129.99",
    image: "/canister-filter.jpg",
    excerpt:
      "German-engineered canister filter known for reliability and whisper-quiet operation. A favorite among serious aquarists.",
    pros: [
      "Legendary reliability and build quality",
      "Extremely quiet operation",
      "Large media capacity for biological filtration",
      "Easy to prime and maintain",
      "Lasts for decades with proper care",
    ],
    cons: ["Higher upfront cost", "Basic design lacks modern features", "No flow adjustment"],
    amazonLink: "https://amazon.com/eheim-classic",
  },
]

export function getReviewBySlug(slug: string): Review | undefined {
  return reviews.find((review) => review.slug === slug)
}

export function getReviewsByCategory(category: string): Review[] {
  return reviews.filter((review) => review.category === category)
}

export function getFeaturedReviews(): Review[] {
  return reviews.filter((review) => review.featured)
}

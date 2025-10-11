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
    rating: 4.8,
    price: "$249.99",
    image: "/fluval-flex-34-aquarium-with-led-lighting.jpg",
    excerpt:
      "Premium 34-liter aquarium kit with powerful 3-stage filtration, stunning LED lighting, and modern curved design perfect for desktop or countertop display.",
    pros: [
      "Sleek modern design with curved glass",
      "Powerful 3-stage filtration system",
      "Bright multi-color LED lighting with remote control",
      "Quiet operation ideal for living spaces",
      "Perfect size for small spaces and nano fish",
    ],
    cons: [
      "Limited space for larger fish",
      "Filter media needs regular replacement",
      "Higher price point for the size",
    ],
    amazonLink: "https://www.amazon.com/Fluval-Flex-Aquarium-Kit-Gallon/dp/B01N3KLVVK",
    featured: true,
  },
  {
    id: "2",
    title: "Fluval Plant 3.0 LED Planted Aquarium Lighting",
    slug: "fluval-plant-led",
    category: "Lighting",
    rating: 4.7,
    price: "$139.99",
    image: "https://m.media-amazon.com/images/I/716moMMpoaL._AC_SX679_.jpg",
    excerpt:
      "Advanced Bluetooth-controlled LED light perfect for planted aquariums, offering customizable spectrum and scheduling for optimal plant growth.",
    pros: [
      "Bluetooth app control for custom light schedules",
      "Full spectrum lighting promotes healthy plant growth",
      "Adjustable mounting for various tank sizes",
      "Energy efficient with long lifespan",
      "Waterproof design for reliable performance",
    ],
    cons: ["App can be glitchy on some devices", "Higher initial cost than basic LEDs", "Limited to freshwater use"],
    amazonLink:
      "https://www.amazon.com/Plant-Spectrum-Fluval-Bluetooth-Freshwater/dp/B07BBSMYDD",
    featured: true,
  },
  {
    id: "3",
    title: "Aqueon QuietFlow 20 LED PRO Aquarium Power Filter",
    slug: "aqueon-quietflow-20",
    category: "Filtration",
    rating: 4.4,
    price: "$30.89",
    image: "https://m.media-amazon.com/images/I/81Kj+V8cpkL._AC_SX679_.jpg",
    excerpt:
      "Quiet and efficient hang-on-back filter with four-stage filtration for crystal clear water in up to 30-gallon tanks.",
    pros: [
      "Dense floss removes particles and debris",
      "Activated carbon removes toxins, odors and discoloration",
      "Patented bio-holster removes toxic ammonia and nitrites",
      "Diffuser grid adds oxygen while reducing splash",
      "Auto-start and self-priming for easy maintenance",
    ],
    cons: [
      "Replacement cartridges can add up in cost",
      "May be too strong for very small tanks",
      "LED indicators always on",
    ],
    amazonLink:
      "https://www.amazon.com/Aqueon-QuietFlow-Aquarium-Power-Filter/dp/B000SP340U",
    featured: false,
  },
  {
    id: "4",
    title: "NICREW ClassicLED Plus Planted Aquarium Light",
    slug: "nicrew-classicled-plus",
    category: "Lighting",
    rating: 4.5,
    price: "$29.99",
    image: "https://m.media-amazon.com/images/I/71RQ-Zm-U6L._AC_SX679_.jpg",
    excerpt:
      "Affordable full-spectrum LED light designed for planted aquariums, with adjustable brightness and timer for healthy plant growth.",
    pros: [
      "Full spectrum promotes plant photosynthesis",
      "Built-in timer with multiple settings",
      "Adjustable brightness levels",
      "Extendable brackets for different tank sizes",
      "Energy efficient and long-lasting LEDs",
    ],
    cons: [
      "Timer resets after power loss",
      "Not suitable for high-light demanding plants",
      "Basic construction materials",
    ],
    amazonLink:
      "https://www.amazon.com/NICREW-Aquarium-Spectrum-Brightness-Adjustable/dp/B0BRPZY9LT",
    featured: true,
  },
  {
    id: "5",
    title: "hygger Marine 500W Titanium Aquarium Heater",
    slug: "hygger-titanium-heater",
    category: "Heating",
    rating: 4.6,
    price: "$82.99",
    image: "https://m.media-amazon.com/images/I/71yG0BiY9HL._AC_SX679_.jpg",
    excerpt:
      "Durable titanium heater for salt and fresh water tanks up to 120 gallons, with external digital controller and thermometer.",
    pros: [
      "Rapid heating with titanium tube",
      "Explosion-proof and corrosion-resistant",
      "External digital controller with LED display",
      "Overheating and out-of-water protection",
      "Wide temperature range from 32°F to 104°F",
    ],
    cons: ["Controller may need mounting", "Higher power consumption", "Not for very small tanks"],
    amazonLink:
      "https://www.amazon.com/Hygger-Submersible-Thermostat-Controller-Thermometer/dp/B07QQRYN7Z",
    featured: false,
  },
  {
    id: "6",
    title: "Seachem Prime Fresh and Saltwater Conditioner",
    slug: "seachem-prime",
    category: "Water Treatment",
    rating: 4.9,
    price: "$14.99",
    image: "https://m.media-amazon.com/images/I/71Jd-atspBL._AC_SY879_.jpg",
    excerpt:
      "Powerful water conditioner that removes chlorine and chloramine while detoxifying ammonia, nitrite, and heavy metals.",
    pros: [
      "Highly concentrated formula",
      "Detoxifies ammonia and nitrite",
      "Safe for fish, plants, and invertebrates",
      "Works in fresh and saltwater",
      "Reduces nitrate levels",
    ],
    cons: ["Strong sulfur odor", "Overdosing possible if not measured carefully", "Short shelf life after opening"],
    amazonLink:
      "https://www.amazon.com/Seachem-Prime/dp/B007R5LW5S",
    featured: true,
  },
  {
    id: "7",
    title: "Fluval Plant and Shrimp Stratum",
    slug: "fluval-stratum",
    category: "Substrate",
    rating: 4.7,
    price: "$29.99",
    image: "https://m.media-amazon.com/images/I/51Uxr0U3BFL._AC_.jpg",
    excerpt:
      "Mineral-rich volcanic soil substrate that promotes strong plant growth and provides ideal conditions for shrimp and tropical fish.",
    pros: [
      "Encourages strong plant root development",
      "Maintains slightly acidic pH ideal for plants and shrimp",
      "Porous structure supports beneficial bacteria",
      "Collected from Mt. Aso volcano in Japan",
      "Doesn't discolor water",
    ],
    cons: ["Initial clouding during setup", "Breaks down over time", "Not ideal for high pH setups"],
    amazonLink:
      "https://www.amazon.com/Fluval-Aquarium-Planting-Stratum-Bundle/dp/B08GD4XW1",
    featured: false,
  },
  {
    id: "8",
    title: "API Freshwater Master Test Kit",
    slug: "api-master-test-kit",
    category: "Testing",
    rating: 4.7,
    price: "$35.98",
    image: "https://m.media-amazon.com/images/I/61Kd-mEEjXL._AC_SX679_.jpg",
    excerpt:
      "Comprehensive testing kit for freshwater aquariums, measuring pH, ammonia, nitrite, and nitrate with over 800 tests included.",
    pros: [
      "Accurate liquid drop tests",
      "Tests for multiple parameters",
      "Includes test tubes and color charts",
      "Essential for cycling new tanks",
      "Great value with hundreds of tests",
    ],
    cons: ["Reagents expire relatively quickly", "Requires careful handling", "Color matching can be subjective"],
    amazonLink:
      "https://www.amazon.com/API-FRESHWATER-800-Test-Freshwater-Aquarium/dp/B000255NCI",
    featured: true,
  },
  {
    id: "9",
    title: "hygger Horizon 8 Gallon LED Glass Aquarium Kit",
    slug: "hygger-horizon-kit",
    category: "Complete Kits",
    rating: 4.5,
    price: "$111.99",
    image: "https://m.media-amazon.com/images/I/71S0t0rHiTL._AC_SX679_.jpg",
    excerpt:
      "Complete starter kit with curved glass tank, multi-color LED light, quiet filter, and 3D rock background for a stunning display.",
    pros: [
      "Bright multi-color adjustable LED lighting",
      "Quiet 7W power filter with adjustable flow",
      "Unique curved shape for wide viewing",
      "Includes 3D rockery background",
      "Multi-layer protective packaging",
    ],
    cons: [
      "Small size limits fish selection",
      "Background is undetachable",
      "Filter may need upgrades for heavy stock",
    ],
    amazonLink:
      "https://www.amazon.com/Hygger-Aquarium-Starters-Undetachable-Background/dp/B07R7BD9GW",
    featured: false,
  },
  {
    id: "10",
    title: "EHEIM Classic 250 External Canister Filter",
    slug: "eheim-classic-250",
    category: "Filtration",
    rating: 4.8,
    price: "$129.99",
    image: "https://m.media-amazon.com/images/I/716-CXv4HvL._AC_SY879_.jpg",
    excerpt:
      "Reliable external canister filter with large media capacity, perfect for medium-sized aquariums up to 66 gallons.",
    pros: [
      "Quiet and efficient operation",
      "Large filter volume for biological media",
      "Easy to set up and maintain",
      "Durable German engineering",
      "Includes all necessary hoses and fittings",
    ],
    cons: ["No built-in heater option", "Basic design without extras", "Initial priming can be tricky"],
    amazonLink:
      "https://www.amazon.com/EHEIM-Classic-Canister-Filter-2213/dp/B0002AQXTA",
    featured: true,
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

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
      "https://www.amazon.com/Plant-Spectrum-Fluval-Bluetooth-Freshwater/dp/B07BBSMYDD/ref=sr_1_1?crid=84HNJQVQ2Z2I&dib=eyJ2IjoiMSJ9.8XSM59KVDkeb66gJ7frUtfHKxGFPqb20v-K1razXH0xfhDLVSGXgKUOnOtfxyNq-SV5hUFHWzGPStnhXTODb7Rjk0w1b4YPZM74kMt4Uav0.-BFboHdhYnTiDKS5zs0soBZPNhWK_6oiAiAAY_vOHcA&dib_tag=se&keywords=Fluval+Flex+34+Aquarium+LED+Lighting+Kit&qid=1759832002&sprefix=fluval+flex+34+aquarium+led+lighting+kit%2Caps%2C812&sr=8-1",
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
      "https://www.amazon.com/Aqueon-QuietFlow-Aquarium-Power-Filter/dp/B000SP340U/ref=sr_1_2?crid=3RD7L2C1YUKFQ&dib=eyJ2IjoiMSJ9.n5fjKuruSXXnHU3bEJdpQ6C401IX7KXULzEYYkkSZEZJpYXxAQHJNLSaau7UcgIqBixAP8nlyLR7fxlDGfdj7vydISnmxwFlE1n_P6xeQewm7xnx2me_qX0gFPcHIIHAvUXh5XHo8E9lYz01rJbomoN15120YBXL2-OXJXXVPYxFPv9tNEgmVDKx4l9Ygeh5Hvy9NKDw1i_Et9HHO0I_zDT_ggw9_evFEQDUGPC0V7rF1vxK4VJS5DobcV2yZN_xufkr-VE9YC9JUFjLx75BosnaTPcZjRnBTUI2x-PFGtQ.E_BxCnmSJSq45PRYkcXEuoZVzW-dHFs58wiufDR4WlA&dib_tag=se&keywords=Aqueon%2BQuietFlow%2BLED%2BPRO%2BAquarium%2BPower%2BFilter&qid=1759832029&sprefix=aqueon%2Bquietflow%2Bled%2Bpro%2Baquarium%2Bpower%2Bfilter%2Caps%2C241&sr=8-2&th=1",
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
      "https://www.amazon.com/NICREW-Aquarium-Spectrum-Brightness-Adjustable/dp/B0BRPZY9LT/ref=sr_1_2?crid=276F1O4RV5C3P&dib=eyJ2IjoiMSJ9._kHSFtdGjCHpNviOLymHle0lVphgFULn4rSehJkt6-Q3FCEudpFc3TgTPtMOlOxVVZ6rOvxN4qYLVhJA-ORq4rgiGbPh9TEih17cR9TuuQw.9k63PyA-CR2IfUIXoZ4GxpSDDf1P4Gw3sTg_Y_Nnqbc&dib_tag=se&keywords=Nicrew%2BClassicLED%2BPlus%2BPlanted%2BAquarium%2BLight&qid=1759832074&sprefix=nicrew%2bclassicled%2bplus%2bplanted%2baquarium%2blight%2Caps%2C258&sr=8-2&th=1",
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
      "https://www.amazon.com/Hygger-Submersible-Thermostat-Controller-Thermometer/dp/B07QQRYN7Z/ref=sr_1_4?crid=EH1XNIZ7WZVI&dib=eyJ2IjoiMSJ9.tSBQuV6I_ZXJBwesYtqfg4578ULLxzmUVPaR3Zpex1e6UPZsVVpVgexnYKP9DwBT5Q9KBwpIQysyNFE-ZaU3sRRy2BSMXuJlkyxoHoKgaTFZLtlePW31kQiJ1sXJEY2Dx2yrEgCwoztLTgFT4Yk0iiW7x_y8oz52FYGc2RLlc6_ckP5B6HgMrUR3_CdksovFAgdNA2v4gyG326QZZ6jWlJWdHUUREK-R97ZldbZfxL_Colh7jcMHebjlf23l_qoII-ruYYyyv50r6TTWqM17HgBiuLedL3EWrsgrUvq7Yh8.zPeDw1udcSZSxieb5SsvRmDO22gqMpV1f4LHOEu8wQg&dib_tag=se&keywords=Hygger%2BTitanium%2BAquarium%2BHeater&qid=1759832109&sprefix=hygger%2Btitanium%2Baquarium%2Bheater%2Caps%2C246&sr=8-4&th=1",
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
      "https://www.amazon.com/Seachem-Prime/dp/B007R5LW5S/ref=sr_1_2?crid=OV9L8TQEQD1O&dib=eyJ2IjoiMSJ9.26gjPdOfbuf_HtK-LmwE-ufMU0NHSvA0GI0o83mgzdK7flWbjqLZMKm3Mt-yktGzBrUNmF9DridyRvx8AnsuBsGwHzWT2-gyzA1s3LS0fMT9pFxbr1ftKFBeVR_HeJOc3oHNBoqrIV9amXcaAWfL5Ge23hZYrF_5DZlo9N35TFlrkUXBEzvlXLT9gLyjYSSP9G7D1c7Mm_AyuJAJsIdGUhA3VFLqDDIBg3AXI-kviJMOmxYwASvli2PKQ4RzcqxbQZb_kAYH2zrLtnkVNb0Qcs4k4Flje6kdTQRLp-JzjrE.pdMUG8IbWitXIkE4Ahcmdmz6cNS6mkrKwi17Opvv0ok&dib_tag=se&keywords=Seachem+Prime+Fresh+and+Saltwater+Conditioner&qid=1759832187&sprefix=seachem+prime+fresh+and+saltwater+conditioner%2Caps%2C776&sr=8-2",
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
      "https://www.amazon.com/Fluval-Aquarium-Planting-Stratum-Bundle/dp/B08GD4XW1F/ref=sr_1_3?crid=1Q6V9Q6WUYR5X&dib=eyJ2IjoiMSJ9.wP57vSB0J32JgFVfbwWhrGeP0FVFoXdJmIJax-2UjvFWa_nQX20PoAZDGYiJWi1fuoA2OEz-RyLdglsfxl3yog.EwT3-m-hW4K0-jaV9N6lgQD21MUH4dYnEegX-ATRsUY&dib_tag=se&keywords=Fluval%2BPlant%2Band%2BShrimp%2BStratum&qid=1759832215&sprefix=fluval%2Bplant%2Band%2Bshrimp%2Bstratum%2Caps%2C234&sr=8-3&th=1",
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
      "https://www.amazon.com/API-FRESHWATER-800-Test-Freshwater-Aquarium/dp/B000255NCI/ref=sr_1_1?crid=313R66FGS7Z0C&dib=eyJ2IjoiMSJ9.Of9zpq871eqTtDAZpk6P4i-LtGRXTD2BdFeVE-Vx9jE01co7GTe_y8Uu6hplUtzZEdbwYJTPm4SzF0JvgH0CLBv2sdUkEKz7SZS5erTQXd6jUuMEytSMGvpxUFu7rYCx35e0W0uAMiqHoexc1S-qk02rYiY8uZ8S-fL4_HjwFMz0izIsxUU-uCA1XvKF0FD720bktUnrMTxrt6HVMAniKa3Q6c1_o21i419LFKzTL-JTz__5PM3-xSPGHKfw9d9NPrdCN7vFhQIoztRqZ28Hjk831QckmzsZ6k8eTKbo5lk.Ah9l_nE5DTtU0RzbeeztbKXXMhrdPBWZJrIdVySKRs0&dib_tag=se&keywords=API%2BFreshwater%2BMaster%2BTest%2BKit&qid=1759832255&sprefix=api%2Bfreshwater%2Bmaster%2Btest%2Bkit%2Caps%2C255&sr=8-1&th=1",
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
      "https://www.amazon.com/Hygger-Aquarium-Starters-Undetachable-Background/dp/B07R7BD9GW/ref=sr_1_5?crid=GBCBZ788QXFY&dib=eyJ2IjoiMSJ9.tBiw_wDLaXNjQ8Tbbu6B_QEWuoPaU9TF3Bq1FTgEDyPFFP27UCIW2cze9ArazErxHI2gUwZrgYqUtr1XNdB5aP4VzOIPDBELiSw--TQx-2wwTU2eY8U8sXDWGVzjjSGBi55a1ANX36_BWib0qahx-cX5HxV-LcjAuXccPDGxIyw.cEo7Jvu_zr4xEP4mXlxmvmxGHmCGTRR6Eq8Jsq68ICI&dib_tag=se&keywords=Marineland+Portrait+Glass+LED+Aquarium+Kit&qid=1759832290&sprefix=marineland+portrait+glass+led+aquarium+kit%2Caps%2C249&sr=8-5",
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
      "https://www.amazon.com/EHEIM-Classic-Canister-Filter-2213/dp/B0002AQXTA/ref=sr_1_1?crid=1KS6LTRN7AFEJ&dib=eyJ2IjoiMSJ9.j1A9T8hzxB1zmTNEkoWkHCVErf4aoT7VlyG2DEsAGZf8Y_GFyJjDrDZ8F0e4Itd-MfkfL1okfG3BNW6NFop_yd9KhBUy-SYRu3qIwvxGxsEY9SpRos2sJ0ePDi_8Dq_2Ke6wfy1pcnCczZMR6zqYPR9I9racaBjTGug3WdaDpwyhd8uplFtWgWdRTNUiD3JMny6SOvMjUS_yGBufBIYbYLBCCZpzGAzK5iGamVV8ZD_fGsLTmDZjN3-I4kb4DR4CYGwAm6QdrvbUYgISSfnbmshjyhEL-uinuOxxGL5uq-U.iLcwgVPkmJtWACGY4huDZktuXH_lI4vSgb94uhALS2g&dib_tag=se&keywords=Eheim%2BClassic%2B250%2BExternal%2BCanister%2BFilter&qid=1759832321&sprefix=eheim%2Bclassic%2B250%2Bexternal%2Bcanister%2Bfilter%2Caps%2C238&sr=8-1&th=1",
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

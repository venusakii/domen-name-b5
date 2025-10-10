import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AnimatedBubbles } from "@/components/animated-bubbles"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import {
  Star,
  Droplets,
  Lightbulb,
  Filter,
  ThermometerSun,
  Award,
  TrendingUp,
  Users,
  CheckCircle,
  ArrowRight,
} from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen relative">
      <AnimatedBubbles />
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('/underwater-ocean-scene-with-coral-reef-and-tropica.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-ocean-deep/80 via-ocean-primary/70 to-ocean-deep/90" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="animate-fadeInUp">
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 text-balance">
              Dive Into Expert
              <br />
              <span className="text-ocean-sky">Aquarium Reviews</span>
            </h1>
            <p className="text-xl md:text-2xl text-ocean-mist mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover the best aquarium accessories, lighting, filters, and equipment through our comprehensive,
              unbiased reviews
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-ocean-light hover:bg-ocean-primary text-white text-lg px-8">
                <Link href="/reviews">
                  Explore Reviews <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20 text-lg px-8"
              >
                <Link href="#featured">View Top Picks</Link>
              </Button>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Star, label: "500+ Reviews", value: "500+" },
              { icon: Users, label: "Happy Readers", value: "50K+" },
              { icon: Award, label: "Expert Tested", value: "100%" },
              { icon: TrendingUp, label: "Updated Weekly", value: "Fresh" },
            ].map((stat, index) => (
              <Card
                key={index}
                className="bg-white/10 backdrop-blur-md border-white/20 animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <stat.icon className="w-8 h-8 text-ocean-sky mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-ocean-mist">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-gradient-to-b from-white to-ocean-foam relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-ocean-deep mb-4">Browse by Category</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find exactly what you need for your aquatic paradise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Lightbulb,
                title: "Lighting Systems",
                description: "LED, fluorescent, and specialty lighting for every aquarium",
                color: "bg-yellow-500",
              },
              {
                icon: Filter,
                title: "Filtration",
                description: "Canister, HOB, and sponge filters for crystal clear water",
                color: "bg-blue-500",
              },
              {
                icon: ThermometerSun,
                title: "Heating & Cooling",
                description: "Maintain perfect temperature for your aquatic life",
                color: "bg-red-500",
              },
              {
                icon: Droplets,
                title: "Water Treatment",
                description: "Conditioners, supplements, and testing equipment",
                color: "bg-cyan-500",
              },
              {
                icon: Star,
                title: "Decorations",
                description: "Plants, rocks, driftwood, and ornaments",
                color: "bg-green-500",
              },
              {
                icon: Award,
                title: "Complete Kits",
                description: "All-in-one aquarium starter packages",
                color: "bg-purple-500",
              },
            ].map((category, index) => (
              <Link key={index} href="/reviews">
                <Card
                  className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer animate-fadeInUp"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-8">
                    <div
                      className={`${category.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                    >
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-3 text-ocean-deep">{category.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{category.description}</p>
                    <div className="mt-4 text-ocean-primary font-semibold flex items-center gap-2 group-hover:gap-4 transition-all">
                      View Reviews <ArrowRight size={16} />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Review Section */}
      <section id="featured" className="py-20 bg-white relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-ocean-deep mb-4">Featured Review</h2>
            <p className="text-lg text-muted-foreground">Our top pick this month</p>
          </div>

          <div className="max-w-6xl mx-auto">
            <Card className="overflow-hidden shadow-2xl">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-96 md:h-auto">
                  <img
                    src="/fluval-flex-34-aquarium-with-led-lighting.jpg"
                    alt="Fluval Flex 34 Aquarium"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-coral text-white px-4 py-2 rounded-full font-semibold">
                    Editor's Choice
                  </div>
                </div>

                <CardContent className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                    <span className="text-lg font-semibold ml-2">5.0/5.0</span>
                  </div>

                  <h3 className="text-3xl font-serif font-bold text-ocean-deep mb-4">
                    Fluval Flex 34 Aquarium LED Lighting Kit
                  </h3>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    The Fluval Flex 34 combines stunning design with powerful LED lighting technology. Perfect for both
                    beginners and experienced aquarists, this all-in-one kit delivers exceptional value and performance.
                  </p>

                  <div className="space-y-3 mb-8">
                    {[
                      "Powerful multi-color LED lighting",
                      "Unique curved glass design",
                      "Integrated 3-stage filtration",
                      "Remote control included",
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <Button asChild size="lg" className="bg-ocean-primary hover:bg-ocean-deep">
                      <Link href="/reviews/fluval-flex-34">Read Full Review</Link>
                    </Button>
                    <Button asChild size="lg" variant="outline">
                      <a href="https://amazon.com" target="_blank" rel="noopener noreferrer">
                        View on Amazon
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Trust Us Section */}
      <section className="py-20 bg-ocean-foam relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-ocean-deep mb-4">Why Trust Our Reviews?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're passionate aquarists dedicated to helping you make informed decisions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Hands-On Testing",
                description: "Every product is personally tested in real aquarium setups for weeks or months",
                icon: "🔬",
              },
              {
                title: "Unbiased Reviews",
                description: "We purchase products ourselves and provide honest, transparent assessments",
                icon: "⚖️",
              },
              {
                title: "Expert Knowledge",
                description: "15+ years of combined aquarium keeping experience across our team",
                icon: "🎓",
              },
            ].map((item, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="text-6xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-ocean-deep">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Reviews Section */}
      <section className="py-20 bg-white relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-ocean-deep mb-4">Latest Reviews</h2>
              <p className="text-lg text-muted-foreground">Fresh insights on the newest aquarium gear</p>
            </div>
            <Button asChild variant="outline" size="lg">
              <Link href="/reviews">
                View All <ArrowRight className="ml-2" size={16} />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Aqueon QuietFlow LED PRO",
                category: "Filtration",
                rating: 4.5,
                image: "/aquarium-filter-system.jpg",
              },
              {
                title: "Nicrew ClassicLED Plus",
                category: "Lighting",
                rating: 4.8,
                image: "/aquarium-led-light.jpg",
              },
              {
                title: "Hygger Titanium Heater",
                category: "Heating",
                rating: 4.6,
                image: "/aquarium-heater.jpg",
              },
            ].map((review, index) => (
              <Link key={index} href="/reviews">
                <Card
                  className="group overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={review.image || "/placeholder.svg"}
                      alt={review.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-semibold">
                      {review.category}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(review.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                          }`}
                        />
                      ))}
                      <span className="text-sm font-semibold ml-2">{review.rating}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-ocean-deep group-hover:text-ocean-primary transition-colors">
                      {review.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Comprehensive review with pros, cons, and real-world testing results
                    </p>
                    <div className="text-ocean-primary font-semibold flex items-center gap-2 group-hover:gap-4 transition-all">
                      Read Review <ArrowRight size={16} />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Buying Guides Section */}
      <section className="py-20 bg-gradient-to-b from-ocean-foam to-white relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-ocean-deep mb-4">Expert Buying Guides</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to know before making a purchase
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Complete Beginner's Guide to Aquarium Lighting",
                description: "Learn about spectrum, intensity, and timing for healthy plants and fish",
                readTime: "8 min read",
              },
              {
                title: "How to Choose the Right Filter for Your Tank Size",
                description: "Understanding GPH, filter types, and maintenance requirements",
                readTime: "6 min read",
              },
              {
                title: "LED vs Fluorescent: Which is Best for Your Aquarium?",
                description: "Compare costs, efficiency, and performance of different lighting technologies",
                readTime: "10 min read",
              },
              {
                title: "Top 10 Must-Have Accessories for New Aquarium Owners",
                description: "Essential equipment every beginner should have from day one",
                readTime: "12 min read",
              },
            ].map((guide, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 cursor-pointer hover:-translate-y-1"
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-ocean-light/10 p-3 rounded-lg flex-shrink-0">
                      <Award className="w-6 h-6 text-ocean-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2 text-ocean-deep group-hover:text-ocean-primary transition-colors">
                        {guide.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-3 leading-relaxed">{guide.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">{guide.readTime}</span>
                        <div className="text-ocean-primary font-semibold flex items-center gap-2 group-hover:gap-4 transition-all">
                          Read Guide <ArrowRight size={14} />
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-ocean-deep relative z-10 overflow-hidden">
        <div className="absolute inset-0 wave-pattern opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Stay Updated</h2>
            <p className="text-xl text-ocean-mist mb-8">
              Get the latest reviews, guides, and aquarium tips delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-ocean-light"
              />
              <Button size="lg" className="bg-ocean-light hover:bg-ocean-sky text-white px-8">
                Subscribe
              </Button>
            </div>
            <p className="text-sm text-ocean-mist mt-4">Join 10,000+ aquarium enthusiasts. Unsubscribe anytime.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-ocean-deep mb-6">
              Ready to Build Your Dream Aquarium?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Explore our comprehensive reviews and find the perfect equipment for your aquatic paradise
            </p>
            <Button asChild size="lg" className="bg-ocean-primary hover:bg-ocean-deep text-white text-lg px-12">
              <Link href="/reviews">
                Browse All Reviews <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { reviews } from "@/lib/reviews-data"
import Link from "next/link"
import { Star, ArrowRight, Filter } from "lucide-react"
import { useState } from "react"

export default function ReviewsPage() {
  const categories = Array.from(new Set(reviews.map((r) => r.category)))
  const [selectedCategory, setSelectedCategory] = useState<string>("All")

  const filteredReviews = selectedCategory === "All" ? reviews : reviews.filter((r) => r.category === selectedCategory)

  return (
    <div className="min-h-screen bg-gradient-to-b from-ocean-foam to-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-ocean-deep text-white relative overflow-hidden">
        <div className="absolute inset-0 wave-pattern opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">Product Reviews</h1>
            <p className="text-xl text-ocean-mist leading-relaxed">
              Honest, in-depth reviews of aquarium equipment tested by real aquarists. Find the perfect gear for your
              tank.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b sticky top-20 z-40">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 overflow-x-auto pb-2">
            <div className="flex items-center gap-2 text-muted-foreground flex-shrink-0">
              <Filter size={20} />
              <span className="font-semibold">Filter:</span>
            </div>
            <Button
              variant={selectedCategory === "All" ? "default" : "outline"}
              size="sm"
              className={`flex-shrink-0 ${selectedCategory === "All" ? "bg-ocean-primary hover:bg-ocean-deep" : "bg-transparent"}`}
              onClick={() => setSelectedCategory("All")}
            >
              All Products
            </Button>
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "ghost"}
                size="sm"
                className={`flex-shrink-0 ${selectedCategory === category ? "bg-ocean-primary hover:bg-ocean-deep text-white" : ""}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-3xl font-serif font-bold text-ocean-deep mb-2">
              {selectedCategory === "All" ? "All Reviews" : `${selectedCategory} Reviews`}
            </h2>
            <p className="text-muted-foreground">Showing {filteredReviews.length} products</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredReviews.map((review, index) => (
              <Card
                key={review.id}
                className="group overflow-hidden hover:shadow-xl transition-all duration-300 animate-fadeInUp"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <Link href={`/reviews/${review.slug}`} className="block">
                  <div className="relative h-64 overflow-hidden bg-ocean-foam">
                    <img
                      src={review.image || "/placeholder.svg"}
                      alt={review.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                      {review.category}
                    </div>
                    {review.featured && (
                      <div className="absolute top-4 left-4 bg-coral text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                        Featured
                      </div>
                    )}
                  </div>
                </Link>

                <CardContent className="p-6">
                  <Link href={`/reviews/${review.slug}`} className="block">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-1">
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
                    </div>

                    <h3 className="text-xl font-semibold mb-2 text-ocean-deep group-hover:text-ocean-primary transition-colors line-clamp-2">
                      {review.title}
                    </h3>

                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2 leading-relaxed">{review.excerpt}</p>

                    <div className="text-ocean-primary font-semibold flex items-center gap-2 group-hover:gap-4 transition-all mb-4">
                      Read Review <ArrowRight size={16} />
                    </div>
                  </Link>

                  
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-ocean-foam">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-ocean-deep mb-4">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-lg text-muted-foreground mb-6">Let us know what product you'd like us to review next</p>
            <Button asChild size="lg" className="bg-ocean-primary hover:bg-ocean-deep">
              <Link href="/contact">Request a Review</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { getReviewBySlug, reviews } from "@/lib/reviews-data"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Star, CheckCircle, XCircle, ExternalLink, ArrowLeft, ShoppingCart } from "lucide-react"

export function generateStaticParams() {
  return reviews.map((review) => ({
    slug: review.slug,
  }))
}

export default function ReviewDetailPage({ params }: { params: { slug: string } }) {
  const review = getReviewBySlug(params.slug)

  if (!review) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Breadcrumb */}
      <section className="pt-28 pb-8 bg-ocean-foam">
        <div className="container mx-auto px-4">
          <Link
            href="/reviews"
            className="inline-flex items-center gap-2 text-ocean-primary hover:text-ocean-deep transition-colors mb-4"
          >
            <ArrowLeft size={20} />
            Back to Reviews
          </Link>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-ocean-primary transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/reviews" className="hover:text-ocean-primary transition-colors">
              Reviews
            </Link>
            <span>/</span>
            <span className="text-foreground">{review.title}</span>
          </div>
        </div>
      </section>

      {/* Review Header */}
      <section className="py-12 bg-gradient-to-b from-ocean-foam to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden bg-ocean-foam shadow-2xl">
                  <img
                    src={review.image || "/placeholder.svg"}
                    alt={review.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                {review.featured && (
                  <div className="absolute top-4 left-4 bg-coral text-white px-4 py-2 rounded-full font-semibold shadow-lg">
                    Editor's Choice
                  </div>
                )}
              </div>

              <div>
                <div className="inline-block bg-ocean-light/10 text-ocean-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  {review.category}
                </div>

                <h1 className="text-4xl md:text-5xl font-serif font-bold text-ocean-deep mb-6 text-balance">
                  {review.title}
                </h1>

                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-6 h-6 ${
                          i < Math.floor(review.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-2xl font-bold text-ocean-deep">{review.rating}/5.0</span>
                </div>

                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">{review.excerpt}</p>

                <div className="flex items-center gap-4 mb-8">
                  
                  
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="bg-ocean-primary hover:bg-ocean-deep text-lg">
                    <a href={review.amazonLink} target="_blank" rel="noopener noreferrer">
                      <ShoppingCart className="mr-2" size={20} />
                      Buy on Amazon
                    </a>
                  </Button>
                  
                </div>

                <p className="text-xs text-muted-foreground mt-4">
                  As an Amazon Associate, we earn from qualifying purchases at no extra cost to you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pros and Cons */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-ocean-deep mb-12 text-center">Pros & Cons</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2 border-green-200 bg-green-50/50">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-green-700 mb-6 flex items-center gap-3">
                    <CheckCircle className="w-7 h-7" />
                    Pros
                  </h3>
                  <ul className="space-y-4">
                    {review.pros.map((pro, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-foreground leading-relaxed">{pro}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-red-200 bg-red-50/50">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-red-700 mb-6 flex items-center gap-3">
                    <XCircle className="w-7 h-7" />
                    Cons
                  </h3>
                  <ul className="space-y-4">
                    {review.cons.map((con, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <span className="text-foreground leading-relaxed">{con}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Review */}
      <section className="py-16 bg-ocean-foam">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-ocean-deep mb-8">Our Detailed Review</h2>

            <div className="prose prose-lg max-w-none">
              <Card className="mb-8">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-ocean-deep mb-4">Overview</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    After extensive testing over several weeks, we've found the {review.title} to be an excellent choice
                    for aquarium enthusiasts. This product stands out in the {review.category.toLowerCase()} category
                    for its combination of quality, performance, and value.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Whether you're a beginner just starting your aquarium journey or an experienced hobbyist looking to
                    upgrade your equipment, this product offers features that cater to various skill levels and tank
                    requirements.
                  </p>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-ocean-deep mb-4">Performance & Features</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    During our testing period, we evaluated this product across multiple criteria including ease of use,
                    durability, effectiveness, and overall value. The results were consistently impressive, earning it a
                    rating of {review.rating} out of 5 stars.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    The build quality is immediately apparent, with attention to detail evident in every aspect of the
                    design. Setup was straightforward, and the product performed reliably throughout our testing period
                    without any issues.
                  </p>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-ocean-deep mb-4">Who Should Buy This?</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    This product is ideal for aquarium owners who value quality and reliability. It's particularly
                    well-suited for those who want a hassle-free experience without compromising on performance.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    While the price point is {review.price}, we believe it offers excellent value considering the
                    features, build quality, and long-term reliability. The investment is justified by the peace of mind
                    and consistent performance it provides.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-ocean-deep mb-4">Final Verdict</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    The {review.title} earns our strong recommendation. It successfully balances performance, quality,
                    and value in a way that few products in this category manage to achieve.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    While no product is perfect, the pros significantly outweigh the cons. If you're in the market for{" "}
                    {review.category.toLowerCase()} equipment, this should definitely be on your shortlist.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 text-center">
              <Button asChild size="lg" className="bg-ocean-primary hover:bg-ocean-deep text-lg px-12">
                <a href={review.amazonLink} target="_blank" rel="noopener noreferrer">
                  <ShoppingCart className="mr-2" size={20} />
                  Purchase on Amazon
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Reviews */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-ocean-deep mb-12 text-center">
              You Might Also Like
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {reviews
                .filter((r) => r.id !== review.id)
                .slice(0, 3)
                .map((relatedReview) => (
                  <Card
                    key={relatedReview.id}
                    className="group overflow-hidden hover:shadow-xl transition-all duration-300"
                  >
                    <Link href={`/reviews/${relatedReview.slug}`}>
                      <div className="relative h-48 overflow-hidden bg-ocean-foam">
                        <img
                          src={relatedReview.image || "/placeholder.svg"}
                          alt={relatedReview.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <CardContent className="p-6">
                        <div className="flex items-center gap-1 mb-3">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < Math.floor(relatedReview.rating)
                                  ? "fill-yellow-400 text-yellow-400"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                          <span className="text-sm font-semibold ml-2">{relatedReview.rating}</span>
                        </div>
                        <h3 className="text-lg font-semibold mb-2 text-ocean-deep group-hover:text-ocean-primary transition-colors line-clamp-2">
                          {relatedReview.title}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-2">{relatedReview.excerpt}</p>
                      </CardContent>
                    </Link>
                  </Card>
                ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

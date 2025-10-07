import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Heart, Target, Users } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-ocean-deep text-white relative overflow-hidden">
        <div className="absolute inset-0 wave-pattern opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">About Tank Accessory</h1>
            <p className="text-xl text-ocean-mist leading-relaxed">
              Your trusted source for honest aquarium equipment reviews since 2020
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-b from-white to-ocean-foam">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-ocean-deep mb-6">Our Mission</h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                We're passionate aquarists dedicated to helping you make informed decisions about aquarium equipment
                through honest, comprehensive reviews.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Target,
                  title: "Honest Reviews",
                  description:
                    "We purchase and test every product ourselves to provide unbiased, transparent assessments",
                },
                {
                  icon: Award,
                  title: "Expert Testing",
                  description:
                    "15+ years of combined aquarium experience across freshwater, saltwater, and planted tanks",
                },
                {
                  icon: Heart,
                  title: "Community First",
                  description: "We're here to serve the aquarium community, not manufacturers or advertisers",
                },
              ].map((item, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <div className="bg-ocean-light/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                      <item.icon className="w-8 h-8 text-ocean-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-ocean-deep">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-ocean-deep mb-8 text-center">Our Story</h2>

            <div className="prose prose-lg max-w-none">
              <Card className="mb-8">
                <CardContent className="p-8">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Tank Accessory was born from frustration. As aquarium enthusiasts, we were tired of reading biased
                    reviews that seemed more interested in selling products than helping hobbyists make informed
                    decisions.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    In 2020, we decided to create the resource we wished existed: a website dedicated to honest,
                    comprehensive reviews of aquarium equipment, written by real aquarists who actually use the products
                    in their own tanks.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Today, we've reviewed hundreds of products and helped thousands of aquarium owners make better
                    purchasing decisions. Our commitment to transparency and quality has never wavered.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-ocean-foam">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-ocean-deep mb-12 text-center">Our Values</h2>

            <div className="space-y-6">
              {[
                {
                  title: "Transparency",
                  description:
                    "We disclose our testing methods, potential conflicts of interest, and how we earn revenue through Amazon Associates.",
                },
                {
                  title: "Independence",
                  description:
                    "We purchase all products with our own funds and never accept payment for positive reviews.",
                },
                {
                  title: "Thoroughness",
                  description:
                    "Every product is tested for weeks or months in real aquarium setups before we publish a review.",
                },
                {
                  title: "Accuracy",
                  description:
                    "We regularly update our reviews to reflect long-term performance and any changes in product quality.",
                },
              ].map((value, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-ocean-deep mb-2">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Users className="w-16 h-16 text-ocean-primary mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-ocean-deep mb-6">Our Team</h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              We're a small team of dedicated aquarium enthusiasts with diverse experience across freshwater, saltwater,
              planted tanks, and reef systems. Our combined expertise spans over 15 years of hands-on aquarium keeping.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Every review on this site represents countless hours of research, testing, and real-world experience.
              We're committed to helping you build and maintain the aquarium of your dreams.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

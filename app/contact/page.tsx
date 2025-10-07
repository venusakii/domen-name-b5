import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, MessageSquare, Send } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-ocean-deep text-white relative overflow-hidden">
        <div className="absolute inset-0 wave-pattern opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">Get in Touch</h1>
            <p className="text-xl text-ocean-mist leading-relaxed">
              Have questions, suggestions, or want to request a product review? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gradient-to-b from-white to-ocean-foam">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div>
                <h2 className="text-3xl font-serif font-bold text-ocean-deep mb-6">Let's Connect</h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Whether you have a question about our reviews, want to suggest a product for us to test, or just want
                  to share your aquarium journey, we're here to help.
                </p>

                <div className="space-y-6">
                  <Card>
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className="bg-ocean-light/10 p-3 rounded-lg flex-shrink-0">
                        <Mail className="w-6 h-6 text-ocean-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-ocean-deep mb-1">Email Us</h3>
                        <p className="text-sm text-muted-foreground">contact@tankaccessory.com</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className="bg-ocean-light/10 p-3 rounded-lg flex-shrink-0">
                        <MessageSquare className="w-6 h-6 text-ocean-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-ocean-deep mb-1">Response Time</h3>
                        <p className="text-sm text-muted-foreground">We typically respond within 24-48 hours</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="mt-8 p-6 bg-ocean-light/5 rounded-lg border border-ocean-light/20">
                  <h3 className="font-semibold text-ocean-deep mb-2">Product Review Requests</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    We're always looking for new products to review. If there's something you'd like us to test, let us
                    know! While we can't guarantee we'll review every suggestion, we carefully consider all requests.
                  </p>
                </div>
              </div>

              {/* Contact Form */}
              <Card>
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-ocean-deep mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ocean-primary"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-ocean-deep mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ocean-primary"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-semibold text-ocean-deep mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ocean-primary"
                        placeholder="Product review request"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-ocean-deep mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={6}
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ocean-primary resize-none"
                        placeholder="Tell us what's on your mind..."
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full bg-ocean-primary hover:bg-ocean-deep">
                      <Send className="mr-2" size={20} />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-ocean-deep mb-12 text-center">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              {[
                {
                  question: "Do you accept products for review?",
                  answer:
                    "We purchase all products ourselves to maintain independence and objectivity. We do not accept free products from manufacturers.",
                },
                {
                  question: "How do you make money?",
                  answer:
                    "We participate in the Amazon Associates program and earn a small commission when you purchase products through our links. This doesn't affect the price you pay.",
                },
                {
                  question: "Can I suggest a product for review?",
                  answer:
                    "We love hearing from our readers. Use the contact form above to suggest products you'd like us to review.",
                },
                {
                  question: "How long does testing take?",
                  answer:
                    "We typically test products for 4-8 weeks in real aquarium setups before publishing a review. Some products require longer testing periods.",
                },
              ].map((faq, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-ocean-deep mb-2">{faq.question}</h3>
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </CardContent>
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

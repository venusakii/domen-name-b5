import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-ocean-deep text-white relative overflow-hidden">
        <div className="absolute inset-0 wave-pattern opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">Terms of Service</h1>
            <p className="text-xl text-ocean-mist leading-relaxed">Last updated: {new Date().toLocaleDateString()}</p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-gradient-to-b from-white to-ocean-foam">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold text-ocean-deep mb-4">Agreement to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing or using Tank Accessory ("the Website"), you agree to be bound by these Terms of Service
                  and all applicable laws and regulations. If you do not agree with any of these terms, you are
                  prohibited from using or accessing this site.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold text-ocean-deep mb-4">Use License</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Permission is granted to temporarily access the materials on Tank Accessory for personal,
                  non-commercial viewing only. This is the grant of a license, not a transfer of title, and under this
                  license you may not:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose or public display</li>
                  <li>Attempt to reverse engineer any software on the Website</li>
                  <li>Remove any copyright or proprietary notations from the materials</li>
                  <li>Transfer the materials to another person or mirror the materials on any other server</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold text-ocean-deep mb-4">Disclaimer</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The materials on Tank Accessory are provided on an 'as is' basis. We make no warranties, expressed or
                  implied, and hereby disclaim and negate all other warranties including, without limitation:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Implied warranties or conditions of merchantability and fitness for a particular purpose</li>
                  <li>That the content will be accurate, reliable, or error-free</li>
                  <li>That defects will be corrected</li>
                  <li>That our website or servers are free of viruses or harmful components</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold text-ocean-deep mb-4">Product Reviews and Recommendations</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Our product reviews and recommendations are based on our personal experience and testing. However:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Individual results may vary</li>
                  <li>We are not responsible for product performance or quality</li>
                  <li>Product specifications and availability may change without notice</li>
                  <li>You should conduct your own research before making purchasing decisions</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold text-ocean-deep mb-4">Amazon Associates Disclosure</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Tank Accessory is a participant in the Amazon Associates Program, an affiliate advertising program
                  designed to provide a means for sites to earn advertising fees by advertising and linking to
                  Amazon.com. We earn a commission when you purchase products through our Amazon links, at no additional
                  cost to you. This does not influence our reviews or recommendations.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold text-ocean-deep mb-4">Limitations of Liability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  In no event shall Tank Accessory or its suppliers be liable for any damages (including, without
                  limitation, damages for loss of data or profit, or due to business interruption) arising out of the
                  use or inability to use the materials on our website, even if we or our authorized representative has
                  been notified orally or in writing of the possibility of such damage.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold text-ocean-deep mb-4">Accuracy of Materials</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The materials appearing on Tank Accessory could include technical, typographical, or photographic
                  errors. We do not warrant that any of the materials on our website are accurate, complete, or current.
                  We may make changes to the materials at any time without notice. However, we do not make any
                  commitment to update the materials.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold text-ocean-deep mb-4">Links to Third-Party Websites</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Tank Accessory has not reviewed all of the sites linked to our website and is not responsible for the
                  contents of any such linked site. The inclusion of any link does not imply endorsement by us. Use of
                  any such linked website is at the user's own risk.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold text-ocean-deep mb-4">User Content</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  If you submit content to our website (such as comments or contact form submissions), you grant us a
                  non-exclusive, royalty-free, perpetual, and worldwide license to use, modify, and display that
                  content. You represent that:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>You own or have the necessary rights to the content</li>
                  <li>The content does not violate any third-party rights</li>
                  <li>The content is not defamatory, obscene, or otherwise objectionable</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold text-ocean-deep mb-4">Modifications to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may revise these Terms of Service at any time without notice. By using this website, you agree to
                  be bound by the current version of these Terms of Service.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold text-ocean-deep mb-4">Governing Law</h2>
                <p className="text-muted-foreground leading-relaxed">
                  These terms and conditions are governed by and construed in accordance with the laws of the United
                  States, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold text-ocean-deep mb-4">Contact Information</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about these Terms of Service, please contact us at:
                  <br />
                  <a href="mailto:legal@tankaccessory.com" className="text-ocean-primary hover:underline">
                    legal@tankaccessory.com
                  </a>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

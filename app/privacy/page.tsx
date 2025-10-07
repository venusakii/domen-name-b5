import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-ocean-deep text-white relative overflow-hidden">
        <div className="absolute inset-0 wave-pattern opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">Privacy Policy</h1>
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
                <h2 className="text-2xl font-semibold text-ocean-deep mb-4">Introduction</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Tank Accessory ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy
                  explains how we collect, use, disclose, and safeguard your information when you visit our website
                  tankaccessory.com.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold text-ocean-deep mb-4">Information We Collect</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <div>
                    <h3 className="font-semibold text-ocean-deep mb-2">Personal Information</h3>
                    <p>
                      We may collect personal information that you voluntarily provide to us when you contact us through
                      our contact form, subscribe to our newsletter, or interact with our website. This may include:
                    </p>
                    <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                      <li>Name</li>
                      <li>Email address</li>
                      <li>Any other information you choose to provide</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-ocean-deep mb-2">Automatically Collected Information</h3>
                    <p>
                      When you visit our website, we may automatically collect certain information about your device,
                      including:
                    </p>
                    <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                      <li>IP address</li>
                      <li>Browser type</li>
                      <li>Operating system</li>
                      <li>Pages visited and time spent on pages</li>
                      <li>Referring website</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold text-ocean-deep mb-4">How We Use Your Information</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">We use the information we collect to:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Respond to your inquiries and provide customer support</li>
                  <li>Send you newsletters and marketing communications (with your consent)</li>
                  <li>Analyze website usage and improve our content</li>
                  <li>Detect and prevent fraud or abuse</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold text-ocean-deep mb-4">Cookies and Tracking Technologies</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We use cookies and similar tracking technologies to enhance your experience on our website. Cookies
                  are small data files stored on your device that help us:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Remember your preferences</li>
                  <li>Understand how you use our website</li>
                  <li>Improve website functionality</li>
                  <li>Provide personalized content</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  You can control cookies through your browser settings. However, disabling cookies may affect your
                  ability to use certain features of our website.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold text-ocean-deep mb-4">Third-Party Services</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <div>
                    <h3 className="font-semibold text-ocean-deep mb-2">Amazon Associates</h3>
                    <p>
                      We participate in the Amazon Associates Program. When you click on Amazon links on our website and
                      make a purchase, we may earn a commission. Amazon may use cookies to track these referrals.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-ocean-deep mb-2">Analytics</h3>
                    <p>
                      We may use third-party analytics services to help us understand how visitors use our website.
                      These services may collect information about your use of our website and other websites.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold text-ocean-deep mb-4">Data Security</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We implement appropriate technical and organizational measures to protect your personal information
                  against unauthorized access, alteration, disclosure, or destruction. However, no method of
                  transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute
                  security.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold text-ocean-deep mb-4">Your Rights</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">You have the right to:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Access the personal information we hold about you</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Object to processing of your personal information</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold text-ocean-deep mb-4">Children's Privacy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our website is not intended for children under 13 years of age. We do not knowingly collect personal
                  information from children under 13. If you believe we have collected information from a child under
                  13, please contact us immediately.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold text-ocean-deep mb-4">Changes to This Privacy Policy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the
                  new Privacy Policy on this page and updating the "Last updated" date.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold text-ocean-deep mb-4">Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about this Privacy Policy, please contact us at:
                  <br />
                  <a href="mailto:privacy@tankaccessory.com" className="text-ocean-primary hover:underline">
                    privacy@tankaccessory.com
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

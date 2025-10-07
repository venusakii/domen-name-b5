"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { X, Cookie } from "lucide-react"
import Link from "next/link"

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      setShowBanner(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setShowBanner(false)
  }

  const declineCookies = () => {
    localStorage.setItem("cookie-consent", "declined")
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-slideInUp">
      <Card className="max-w-4xl mx-auto shadow-2xl border-2 border-ocean-primary/20">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="bg-ocean-light/10 p-3 rounded-lg flex-shrink-0">
              <Cookie className="w-6 h-6 text-ocean-primary" />
            </div>

            <div className="flex-1">
              <h3 className="text-lg font-semibold text-ocean-deep mb-2">Cookie Notice</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                This website uses cookies to enhance your experience and analyse site usage. By continuing, you consent
                to our use of cookies. Learn more in our{" "}
                <Link href="/privacy" className="text-ocean-primary hover:underline font-semibold">
                  Privacy Policy
                </Link>
                .
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button onClick={acceptCookies} className="bg-ocean-primary hover:bg-ocean-deep">
                  Accept Cookies
                </Button>
                <Button onClick={declineCookies} variant="outline">
                  Decline
                </Button>
              </div>
            </div>

            <button
              onClick={declineCookies}
              className="text-muted-foreground hover:text-foreground transition-colors flex-shrink-0"
              aria-label="Close cookie banner"
            >
              <X size={20} />
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

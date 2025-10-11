import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import "./globals.css"
import { CookieConsent } from "@/components/cookie-consent"

const playfair = Playfair_Display({
	subsets: ["latin"],
	variable: "--font-playfair",
	display: "swap",
})

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
	display: "swap",
})

export const metadata: any = {
	title: "Tank Accessory - Premium Aquarium Reviews & Guides",
	description:
		"Expert reviews and guides for aquarium accessories, lighting, filters, and more. Find the perfect equipment for your aquatic paradise.",
	generator: 'v0.app',
	referrer: 'unsafe-url'
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en" className={`${playfair.variable} ${inter.variable}`}>
			<body className="font-sans antialiased">
				{children}
				<CookieConsent />
			</body>
		</html>
	)
}

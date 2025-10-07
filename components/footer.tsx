import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-ocean-deep text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4">
              Tank<span className="text-ocean-sky">Accessory</span>
            </h3>
            <p className="text-ocean-mist text-sm leading-relaxed">
              Your trusted source for honest aquarium accessory reviews and expert guidance.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-ocean-mist hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="text-ocean-mist hover:text-white transition-colors">
                  Reviews
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-ocean-mist hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-ocean-mist hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="text-ocean-mist hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-ocean-mist hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="text-ocean-mist hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-ocean-mist hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-ocean-mist hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-ocean-mist hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-ocean-primary pt-8 text-center text-sm text-ocean-mist">
          <p className="mb-2">© {new Date().getFullYear()} TankAccessory.com. All rights reserved.</p>
          <p className="text-xs">
            Amazon Associate Program participant. As an Amazon Associate, we earn from qualifying purchases.
          </p>
        </div>
      </div>
    </footer>
  )
}

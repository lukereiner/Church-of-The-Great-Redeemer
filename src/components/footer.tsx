import Link from "next/link"
import { Cross, Facebook, Instagram, Youtube } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

export function SiteFooter() {
  return (
    <footer className="w-full border-t bg-slate-50">
      <div className="container grid gap-8 px-4 py-10 md:grid-cols-2 md:px-6 lg:grid-cols-4">
        <div className="flex flex-col gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <Cross className="h-6 w-6 text-slate-700" />
            <span className="font-serif text-xl font-bold">Church of the Great Redeemer</span>
          </Link>
          <p className="text-sm text-gray-500">
          Living and growing together in the Word
          </p>
        </div>
        <div className="grid gap-2">
          <h3 className="text-lg font-medium">Quick Links</h3>
          <nav className="grid gap-2">
            <Link href="/about" className="text-sm text-gray-500 hover:underline">
              About Us
            </Link>
            <Link href="/worship" className="text-sm text-gray-500 hover:underline">
              Worship Services
            </Link>
            <Link href="/ministries" className="text-sm text-gray-500 hover:underline">
              Ministries
            </Link>
            <Link href="/events" className="text-sm text-gray-500 hover:underline">
              Events
            </Link>
            <Link href="/sermons" className="text-sm text-gray-500 hover:underline">
              Sermons
            </Link>
          </nav>
        </div>
        <div className="grid gap-2">
          <h3 className="text-lg font-medium">Contact</h3>
          <address className="grid gap-2 not-italic text-sm text-gray-500">
            <p>464 High Street</p>
            <p>Weatherly, PA 18255</p>
            <p>weatherlycgr@protonmail.com</p>
          </address>
          <div className="flex gap-2">
            <Button variant="outline" size="icon" asChild>
              <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <Facebook className="h-4 w-4" />
                <span className="sr-only">Facebook</span>
              </Link>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <Link href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <Youtube className="h-4 w-4" />
                <span className="sr-only">YouTube</span>
              </Link>
            </Button>
          </div>
        </div>
        <div className="grid gap-2">
          <h3 className="text-lg font-medium">Newsletter</h3>
          <p className="text-sm text-gray-500">Subscribe to receive updates and announcements.</p>
          <form className="grid gap-2">
            <Input type="email" placeholder="Email address" />
            <Button type="submit">Subscribe</Button>
          </form>
        </div>
      </div>
      <Separator />
      <div className="container flex flex-col items-center justify-between gap-4 px-4 py-6 md:flex-row md:px-6">
        <p className="text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Church of the Great Redeemer. All rights reserved.
        </p>
      </div>
    </footer>
  )
}


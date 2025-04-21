"use client"

import Link from "next/link"
import { Cross, Menu } from "lucide-react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-[#022438]">
      <div className="container flex h-16 items-center px-4 sm:px-6">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <img className="h-6 w-6" src="../assets/home/avatar.png"/>
          <span className="hidden font-serif text-xl font-bold sm:inline-block text-[#d1cdba]">Church of the Great Redeemer</span>
        </Link>
        <nav className="hidden flex-1 items-center justify-center space-x-6 md:flex">
          <Link href="/about" className="text-sm font-medium text-slate-700 transition-colors hover:text-slate-900">
            About
          </Link>
          <Link href="/worship" className="text-sm font-medium text-slate-700 transition-colors hover:text-slate-900">
            Worship
          </Link>
          <Link
            href="/groups"
            className="text-sm font-medium text-slate-700 transition-colors hover:text-slate-900"
          >
            Groups
          </Link>
          <Link href="/events" className="text-sm font-medium text-slate-700 transition-colors hover:text-slate-900">
            Events
          </Link>
          <Link href="/sermons" className="text-sm font-medium text-slate-700 transition-colors hover:text-slate-900">
            Sermons
          </Link>
          <Link href="/contact" className="text-sm font-medium text-slate-700 transition-colors hover:text-slate-900">
            Contact
          </Link>
        </nav>
        <div className="ml-auto flex items-center space-x-2">
          <Button variant="outline" size="sm" asChild className="hidden md:flex">
            <a href="https://www.zeffy.com/en-US/donation-form/4dfe571f-7ca6-469b-811c-30136dccc3f2" target="_blank">Donate</a>
          </Button>
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="grid gap-6 py-6">
                <Link
                  href="/about"
                  className="text-lg font-medium text-slate-700 transition-colors hover:text-slate-900"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/worship"
                  className="text-lg font-medium text-slate-700 transition-colors hover:text-slate-900"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Worship
                </Link>
                <Link
                  href="/ministries"
                  className="text-lg font-medium text-slate-700 transition-colors hover:text-slate-900"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Ministries
                </Link>
                <Link
                  href="/events"
                  className="text-lg font-medium text-slate-700 transition-colors hover:text-slate-900"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Events
                </Link>
                <Link
                  href="/sermons"
                  className="text-lg font-medium text-slate-700 transition-colors hover:text-slate-900"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sermons
                </Link>
                <Link
                  href="/contact"
                  className="text-lg font-medium text-slate-700 transition-colors hover:text-slate-900"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
                <div className="flex flex-col gap-2">
                  <Button variant="outline" asChild onClick={() => setIsMenuOpen(false)}>
                    <Link href="/donate">Donate</Link>
                  </Button>
                  <Button asChild onClick={() => setIsMenuOpen(false)}>
                    <Link href="/live">Watch Live</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}


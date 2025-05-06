"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-[#022438]">
      <div className="container flex h-16 items-center px-4 sm:px-6">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Image
            src="/avatar.png"
            alt="Church of The Great Redeemer"
            width={36}
            height={36}
          />
          <span className="hidden font-roboto text-xl font-bold sm:inline-block text-[#d1cdba]">
            Church of The Great Redeemer
          </span>
        </Link>
        <nav className="hidden flex-1 items-center justify-center space-x-6 md:flex">
          <Link
            href="/about"
            className="text-md font-medium text-[#d1cdba] transition-colors hover:text-[#ffffff]"
          >
            About
          </Link>
          <Link
            href="/beliefs"
            className="text-md font-medium text-[#d1cdba] transition-colors hover:text-[#ffffff]"
          >
            Beliefs
          </Link>
          <Link
            href="/groups"
            className="text-md font-medium text-[#d1cdba] transition-colors hover:text-[#ffffff]"
          >
            Groups
          </Link>
          <Link
            href="/events"
            className="text-md font-medium text-[#d1cdba] transition-colors hover:text-[#ffffff]"
          >
            Events
          </Link>
          <Link
            href="/contact"
            className="text-md font-medium text-[#d1cdba] transition-colors hover:text-[#ffffff]"
          >
            Contact
          </Link>
        </nav>
        <div className="ml-auto flex items-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            asChild
            className="hidden md:flex sm:ml-6"
          >
            <a
              href="https://www.zeffy.com/en-US/donation-form/4dfe571f-7ca6-469b-811c-30136dccc3f2"
              target="_blank"
            >
              Donate
            </a>
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
                  href="/beliefs"
                  className="text-lg font-medium text-slate-700 transition-colors hover:text-slate-900"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Beliefs
                </Link>
                <Link
                  href="/groups"
                  className="text-lg font-medium text-slate-700 transition-colors hover:text-slate-900"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Groups
                </Link>
                <Link
                  href="/events"
                  className="text-lg font-medium text-slate-700 transition-colors hover:text-slate-900"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Events
                </Link>
                <Link
                  href="/contact"
                  className="text-lg font-medium text-slate-700 transition-colors hover:text-slate-900"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
                <div className="flex flex-col gap-2">
                  <Button
                    variant="outline"
                    asChild
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <a
                      href="https://www.zeffy.com/en-US/donation-form/4dfe571f-7ca6-469b-811c-30136dccc3f2"
                      target="_blank"
                    >
                      Donate
                    </a>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

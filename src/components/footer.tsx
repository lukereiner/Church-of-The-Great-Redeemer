import Link from "next/link";
import Image from "next/image";
import { Facebook, Youtube } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

export function SiteFooter() {
  return (
    <footer className="w-full border-t bg-[#e1e1e1]/15">
      <div className="container grid gap-8 px-4 py-10 md:grid-cols-2 md:px-6 lg:grid-cols-4">
        <div className="flex flex-col gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/assets/footer-avatar.png" // Adjust the path as needed
              alt=""
              width={50} // Provide a specific width
              height={50} // Provide a specific height
            />
            <span className="font-roboto text-xl font-bold">
              Church of The Great Redeemer
            </span>
          </Link>
          <p className="text-sm text-gray-500 pl-2 pr-4">
            Living and growing together in the Word
          </p>
        </div>
        <div className="grid gap-2">
          <h3 className="text-lg font-medium">Quick Links</h3>
          <nav className="grid gap-2">
            <Link
              href="/about"
              className="text-sm text-gray-500 hover:underline"
            >
              About Us
            </Link>
            <Link
              href="/beliefs"
              className="text-sm text-gray-500 hover:underline"
            >
              Our Beliefs
            </Link>
            <Link
              href="/groups"
              className="text-sm text-gray-500 hover:underline"
            >
              Groups
            </Link>
            <Link
              href="/events"
              className="text-sm text-gray-500 hover:underline"
            >
              Events
            </Link>
          </nav>
        </div>
        <div className="grid gap-2">
          <h3 className="text-lg font-medium">Contact</h3>
          <address className="grid gap-2 not-italic text-sm text-gray-500">
            <p>464 High Street</p>
            <p>Weatherly, PA 18255</p>
            <a href="mailto:pastor@greatredeemerchurch.org">
              <p>pastor@greatredeemerchurch.org</p>
            </a>
          </address>
          <div className="flex gap-2">
            <Button variant="outline" size="icon" asChild>
              <Link
                href="https://www.facebook.com/profile.php?id=61562283398016"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="h-4 w-4" />
                <span className="sr-only">Facebook</span>
              </Link>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <Link
                href="https://www.youtube.com/@ChurchoftheGreatRedeemer"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Youtube className="h-4 w-4" />
                <span className="sr-only">YouTube</span>
              </Link>
            </Button>
          </div>
        </div>
        <div className="grid gap-2">
          <h3 className="text-lg font-medium">Newsletter</h3>
          <p className="text-sm text-gray-500">
            Subscribe to receive updates and announcements.
          </p>
          <form className="grid gap-2">
            <Input type="email" placeholder="Email address" />
            <Button type="submit">Subscribe</Button>
          </form>
        </div>
      </div>
      <Separator />
      <div className="container flex flex-col items-center justify-between gap-4 px-4 py-6 md:flex-row md:px-6">
        <p className="text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Church of The Great Redeemer. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}

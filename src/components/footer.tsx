"use client"

import Link from "next/link";
import Image from "next/image";
import { Facebook, Youtube } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";

import { toast } from "sonner";
import {Turnstile} from "@marsidev/react-turnstile";

export function SiteFooter() {
  const [formValid, setFormValid] = useState(true);

  const handleSubscribeSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const target = event.target as HTMLFormElement;
    const formData = new FormData(target);
    const email = formData.get('email');
    const token = formData.get('cf-turnstile-response');

    const response = await fetch('/api/verifySend', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token, formData: { email, formType: 'subscribe' } }),
    });

    if (response.ok) {
      toast.success("Subscribed successfully!");
    } else {
      setFormValid(false);
      toast.error("Subscription failed");
      console.error('Subscription failed');
    }
  };

  return (
    <footer className="w-full border-t bg-[#e1e1e1]/15">
      <div className="container grid gap-8 px-4 py-10 md:grid-cols-2 md:px-6 lg:grid-cols-4">
        <div className="flex flex-col gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/footer-avatar.png" // Adjust the path as needed
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
            <a href="mailto:office@greatredeemerchurch.org">
              <p>office@greatredeemerchurch.org</p>
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
          <h3 className="text-lg font-medium">Stay Informed</h3>
          <p className="text-sm text-gray-500">
            Subscribe to receive updates and announcements.
          </p>
          <form className="grid gap-2" onSubmit={handleSubscribeSubmit}>
            <Input type="email" name="email" placeholder="Email address" required/>
            <input type="hidden" name="formType" value="subscribe" /> {/* Hidden field for resend differentiation */}
            <Turnstile
              siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY as string}
            />
            <Button type="submit" disabled={!formValid}>Subscribe</Button>
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

import Link from "next/link"
import Image from "next/image"

import { Button } from "@/components/ui/button"

export function WelcomeSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
        <div className="space-y-4">
          <h1 className="font-serif text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Church of The Great Redeemer
          </h1>
          <p className="max-w-[600px] text-gray-500 md:text-xl">
          Living and growing together in the Word
          </p>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Button variant="outline" asChild>
              <Link href="/about">About Us</Link>
            </Button>
          </div>
        </div>
        <div className="mx-auto overflow-hidden rounded-xl">
          <Image
            src="/cross2.jpg"
            alt="Church sanctuary with stained glass windows"
            width={700}
            height={550}
            className="aspect-[4/3] object-cover"
          />
        </div>
      </div>
    </section>
  )
}


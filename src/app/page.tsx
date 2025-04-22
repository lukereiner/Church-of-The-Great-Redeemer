import Link from "next/link"
import { Calendar, Clock, MapPin, Phone, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { SiteHeader } from "@/components/header"
import { SiteFooter } from "@/components/footer"
import { WelcomeSection } from "@/components/welcome"
import { EventsSection } from "@/components/events"
import { MinistriesSection } from "@/components/groups"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <SiteHeader />
      <main className="flex-1">
        <WelcomeSection />
        <section className="w-full bg-slate-50 py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Join Us for Worship</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  We welcome you to join our community in prayer and worship.
                </p>
              </div>
              <div className="w-full max-w-sm">
                <Separator className="my-4" />
              </div>
              <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
                <Card className="overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-5 w-5 text-slate-700" />
                      <h3 className="font-medium">Sunday Service</h3>
                    </div>
                    <p className="mt-2 text-sm text-gray-500">10:00 AM - 11:30 AM</p>
                  </CardContent>
                </Card>
                <Card className="overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-5 w-5 text-slate-700" />
                      <h3 className="font-medium">Wednesday Bible Study</h3>
                    </div>
                    <p className="mt-2 text-sm text-gray-500">7:00 PM - 8:30 PM</p>
                  </CardContent>
                </Card>
                <Card className="overflow-hidden sm:col-span-2 md:col-span-1">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-5 w-5 text-slate-700" />
                      <h3 className="font-medium">Youth Group</h3>
                    </div>
                    <p className="mt-2 text-sm text-gray-500">Friday 6:00 PM - 8:00 PM</p>
                  </CardContent>
                </Card>
              </div>
              <div className="mt-6">
                <Button asChild>
                  <Link href="/worship">View All Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        <EventsSection />
        <MinistriesSection />
        <section className="w-full py-12 md:py-16 lg:py-20">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-slate-100 px-3 py-1 text-sm">Our Location</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Visit Us</h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl">
                We invite you to join us for worship and fellowship. Our church is located in a peaceful setting where
                you can connect with God and our community.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-slate-700" />
                  <span>464 High St, Weatherly, PA 18255</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-slate-700" />
                  <span>weatherlycgr@protonmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-slate-700" />
                  <span>Sunday Service: 9:00 AM</span>
                </div>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild>
                  <Link href="/contact">Contact Us</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/directions">Get Directions</Link>
                </Button>
              </div>
            </div>
            <div className="mx-auto overflow-hidden rounded-xl">
              <img
                src="/placeholder.svg?height=550&width=700"
                alt="Church building exterior"
                width={700}
                height={550}
                className="aspect-[4/3] object-cover"
              />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}


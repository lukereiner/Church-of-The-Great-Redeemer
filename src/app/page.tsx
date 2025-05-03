import Link from "next/link";
import { Calendar, Clock, MapPin, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { SiteHeader } from "@/components/header";
import { SiteFooter } from "@/components/footer";
import { WelcomeSection } from "@/components/welcome";
import { EventsSection } from "@/components/events";
import { GroupsSection } from "@/components/groups";
import PhotoCarousel from "@/components/PhotoCarousel";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <SiteHeader />
      <main className="flex-1">
        <WelcomeSection />
        <section className="w-full bg-[#d1cdba]/15 py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Join Us for Worship
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  We welcome you to join our community in prayer and worship.
                </p>
              </div>
              <div className="w-full max-w-sm">
                <Separator className="my-4" />
              </div>
              <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-2">
                <Card className="overflow-hidden border-2 border-black-600 border-[#d1cdba]">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-center space-x-2">
                      <Calendar className="h-6 w-6 text-slate-700" />
                      <p className="font-medium text-lg">Sunday Service</p>
                    </div>
                    <p className="mt-2 text-gray-500">9:00 AM</p>
                  </CardContent>
                </Card>
                <Card className="overflow-hidden border-2 border-black-600 border-[#d1cdba]">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-center space-x-2">
                      <MapPin className="h-6 w-6 text-slate-700" />
                      <p className="font-medium text-lg">Location</p>
                    </div>
                    <p className="mt-2  text-gray-500">
                      464 High St, Weatherly, PA 18255
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
        <EventsSection />
        <GroupsSection />
        <section className="w-full py-12 md:py-16 lg:py-20">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-slate-100 px-3 py-1 text-sm">
                Our Location
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Visit Us
              </h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl">
                We invite you to join us for worship and fellowship. Our church
                is located in a peaceful setting where you can connect with God
                and our community.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-slate-700" />
                  <span>464 High St, Weatherly, PA 18255</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-slate-700" />
                  <a href="mailto:pastor@greatredeemerchurch.org">
                    <span>pastor@greatredeemerchurch.org</span>
                  </a>
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
                  <Link href="https://www.google.com/maps/place/Tweedle+Park/@40.940521,-75.8350451,17z/data=!4m15!1m8!3m7!1s0x89c5aeea33035fdd:0xbe9aee0cf974b7ba!2s464+High+St,+Weatherly,+PA+18255!3b1!8m2!3d40.940521!4d-75.8350451!16s%2Fg%2F11c4tyj8l_!3m5!1s0x89c5aeea31a443a5:0x4615253174d3c5f0!8m2!3d40.9408004!4d-75.8350869!16s%2Fg%2F11bwhb9s8n?entry=ttu&g_ep=EgoyMDI1MDQyMC4wIKXMDSoASAFQAw%3D%3D">
                    Get Directions
                  </Link>
                </Button>
              </div>
            </div>
            <div className="flex align-center">
              <PhotoCarousel />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

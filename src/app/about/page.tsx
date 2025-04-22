import Link from "next/link";
import { BookOpen, Heart, Users } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { SiteHeader } from "@/components/header";
import { SiteFooter } from "@/components/footer";

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <SiteHeader />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-4">
              <h1 className="font-serif text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                About Our Church
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl">
                The Church of the Great Redeemer has been serving our community
                since 2024. We are committed to sharing the Gospel and living
                out our faith through worship, fellowship, and service.
              </p>
            </div>
            <div className="mx-auto overflow-hidden rounded-xl">
              <img
                src="../assets/about/about1.jpg"
                alt="Historic church building"
                width={700}
                height={550}
                className="aspect-[4/3] object-cover"
              />
            </div>
          </div>
        </section>
        <section className="w-full bg-slate-50 py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Our Mission & Values
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  Guided by Scripture and traditional Christian principles.
                </p>
              </div>
              <div className="w-full max-w-sm">
                <Separator className="my-4" />
              </div>
              <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
                <Card>
                  <CardHeader className="flex flex-col items-center">
                    <BookOpen className="h-10 w-10 text-slate-700" />
                    <CardTitle>Scripture</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription>
                      We believe the Bible is the inspired Word of God and the
                      foundation for all we do and believe.
                    </CardDescription>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-col items-center">
                    <Heart className="h-10 w-10 text-slate-700" />
                    <CardTitle>Love</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription>
                      We are called to love God with all our heart, soul, mind,
                      and strength, and to love our neighbors as ourselves.
                    </CardDescription>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-col items-center">
                    <Users className="h-10 w-10 text-slate-700" />
                    <CardTitle>Community</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription>
                      We value fellowship and community, supporting one another
                      in our spiritual journey.
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Our History
                </h2>
                <p className="text-gray-500">
                  The Church of the Great Redeemer (CGR) originated from a group
                  of Christians who, following the 2024 UMC General Conference,
                  made the decision to leave the United Methodist Church due to
                  differences in their faith and mission. CGR seeks to worship
                  God in spirit and truth (John 4:24), abide by His Word, and
                  grow in love and holiness. As a faithful remnant of the
                  Christian community, CGR remains committed to upholding the
                  Word of God as our standard of living, rather than following
                  cultural trends.
                </p>
                <p className="text-gray-500">
                  CGR stands firm in its commitment to cling to biblical
                  scripture and be willing to make the necessary sacrifices to
                  stand true to Jesus Christ. We believe it is our duty to
                  proclaim the Gospel of Jesus Christ by standing on the Word
                  and living out our faith through love, unity, and service.
                </p>
                <p className="text-gray-500">
                  Our worship services are traditional and engaging, blending
                  hymns and liturgies that connect us with the saints of old.
                  Each Sunday, we gather together in reverence for God to hear
                  Pastor Dan lead the preaching of the Word, which is our
                  primary focus during worship. Our goal is to use worship as an
                  opportunity for edification, increasing knowledge and love of
                  God.
                </p>
              </div>
              <div className="grid gap-4">
                <div className="grid gap-4 md:grid-cols-2 md:gap-x-4">
                  <div className="overflow-hidden rounded-xl">
                    <img
                      src="../assets/about/about2.jpg"
                      alt="Church in the 1920s"
                      width={400}
                      height={300}
                      className="w-full aspect-[4/3] object-cover"
                    />
                  </div>
                  <div className="overflow-hidden rounded-xl">
                    <img
                      src="../assets/about/about3.jpg"
                      alt="Church in the 1950s"
                      width={400}
                      height={300}
                      className="w-full aspect-[4/3] object-cover"
                    />
                  </div>
                </div>

                <div className="overflow-hidden rounded-xl">
                  <img
                    src="../assets/about/about4.jpg"
                    alt="Church in the 1980s"
                    width={400}
                    height={300}
                    className="w-full aspect-[4/3] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full bg-slate-50 py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Our Leadership
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  Meet the dedicated individuals who guide our church community.
                </p>
              </div>
              <div className="grid w-full max-w-5xl gap-6 md:grid-cols-3">
                <div className="flex flex-col items-center space-y-2">
                  <div className="overflow-hidden rounded-full">
                    <img
                      src="/placeholder.svg?height=200&width=200"
                      alt="Pastor John Smith"
                      width={200}
                      height={200}
                      className="aspect-square object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold">Pastor John Smith</h3>
                  <p className="text-sm text-gray-500">Senior Pastor</p>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <div className="overflow-hidden rounded-full">
                    <img
                      src="/placeholder.svg?height=200&width=200"
                      alt="Sarah Johnson"
                      width={200}
                      height={200}
                      className="aspect-square object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold">Sarah Johnson</h3>
                  <p className="text-sm text-gray-500">Worship Director</p>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <div className="overflow-hidden rounded-full">
                    <img
                      src="/placeholder.svg?height=200&width=200"
                      alt="Michael Davis"
                      width={200}
                      height={200}
                      className="aspect-square object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold">Michael Davis</h3>
                  <p className="text-sm text-gray-500">Youth Pastor</p>
                </div>
              </div>
              <div className="mt-6">
                <Button asChild>
                  <Link href="/leadership">Meet Our Full Team</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

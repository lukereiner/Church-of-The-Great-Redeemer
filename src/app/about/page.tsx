import Link from "next/link"
import { BookOpen, Heart, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { SiteHeader } from "@/components/header"
import { SiteFooter } from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-4">
              <h1 className="font-serif text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                About Our Church
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl">
                Grace Church has been serving our community since 1925. We are committed to sharing the Gospel and
                living out our faith through worship, fellowship, and service.
              </p>
            </div>
            <div className="mx-auto overflow-hidden rounded-xl">
              <img
                src="/placeholder.svg?height=550&width=700"
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
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Mission & Values</h2>
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
                      We believe the Bible is the inspired Word of God and the foundation for all we do and believe.
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
                      We are called to love God with all our heart, soul, mind, and strength, and to love our neighbors
                      as ourselves.
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
                      We value fellowship and community, supporting one another in our spiritual journey.
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
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our History</h2>
                <p className="text-gray-500">
                  Grace Church was founded in 1925 by a small group of believers committed to establishing a place of
                  worship rooted in traditional Christian values. Over the decades, our congregation has grown, but our
                  commitment to Scripture and community has remained steadfast.
                </p>
                <p className="text-gray-500">
                  Through world wars, economic challenges, and societal changes, Grace Church has been a beacon of hope
                  and stability in our community. We've expanded our facilities, developed various ministries, and
                  continued to adapt while maintaining our core beliefs and traditions.
                </p>
                <p className="text-gray-500">
                  Today, we honor our rich heritage while embracing the future, seeking to share the timeless message of
                  Christ's love in ways that speak to contemporary hearts and minds.
                </p>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="overflow-hidden rounded-xl">
                  <img
                    src="/placeholder.svg?height=300&width=400"
                    alt="Church in the 1920s"
                    width={400}
                    height={300}
                    className="aspect-[4/3] object-cover"
                  />
                </div>
                <div className="overflow-hidden rounded-xl">
                  <img
                    src="/placeholder.svg?height=300&width=400"
                    alt="Church in the 1950s"
                    width={400}
                    height={300}
                    className="aspect-[4/3] object-cover"
                  />
                </div>
                <div className="overflow-hidden rounded-xl">
                  <img
                    src="/placeholder.svg?height=300&width=400"
                    alt="Church in the 1980s"
                    width={400}
                    height={300}
                    className="aspect-[4/3] object-cover"
                  />
                </div>
                <div className="overflow-hidden rounded-xl">
                  <img
                    src="/placeholder.svg?height=300&width=400"
                    alt="Church today"
                    width={400}
                    height={300}
                    className="aspect-[4/3] object-cover"
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
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Leadership</h2>
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
  )
}


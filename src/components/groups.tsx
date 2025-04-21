import Link from "next/link"
import { Heart, Music, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export function MinistriesSection() {
  const ministries = [
    {
      title: "Children's Ministry",
      icon: <Heart className="h-10 w-10 text-slate-700" />,
      description:
        "Nurturing the spiritual growth of our youngest members through age-appropriate Bible lessons and activities.",
      link: "/ministries/children",
    },
    {
      title: "Music Ministry",
      icon: <Music className="h-10 w-10 text-slate-700" />,
      description: "Enhancing our worship experience through traditional hymns and contemporary Christian music.",
      link: "/ministries/music",
    },
    {
      title: "Community Outreach",
      icon: <Users className="h-10 w-10 text-slate-700" />,
      description: "Serving our local community through various programs and volunteer opportunities.",
      link: "/ministries/outreach",
    },
  ]

  return (
    <section className="w-full bg-slate-50 py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Ministries</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
              Serving God and our community through various ministries.
            </p>
          </div>
          <div className="grid w-full max-w-5xl gap-6 md:grid-cols-3">
            {ministries.map((ministry) => (
              <Card key={ministry.title} className="flex flex-col">
                <CardHeader className="flex flex-col items-center">
                  <div className="mb-2">{ministry.icon}</div>
                  <CardTitle>{ministry.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 text-center">
                  <CardDescription className="text-sm">{ministry.description}</CardDescription>
                </CardContent>
                <CardFooter className="flex justify-center pt-4">
                  <Button variant="outline" asChild>
                    <Link href={ministry.link}>Learn More</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="mt-6">
            <Button asChild>
              <Link href="/ministries">View All Ministries</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}


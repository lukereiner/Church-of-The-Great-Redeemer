import Link from "next/link"
import { Users } from "lucide-react"
import { TbBuildingChurch, TbCross, TbBible } from "react-icons/tb"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

import { Separator } from "./ui/separator"

export function BeliefsSection() {
  const beliefs = [
    {
      title: "God & Man",
      icon: <TbCross className="h-10 w-10 text-slate-700" />,
      description:
        "Triune God - Creator - Grace",
      link: "/beliefs/god-and-man",
    },
    {
      title: "The Word",
      icon: <TbBible className="h-10 w-10 text-slate-700" />,
      description: "Inspired inerrant Word of God",
      link: "/beliefs/the-word",
    },
    {
      title: "Mission & Purpose",
      icon: <TbBuildingChurch className="h-10 w-10 text-slate-700" />,
      description: "Worship - Love - Discipleship - Commission",
      link: "/beliefs/mission-and-purpose",
    },
    {
      title: "Social Issues",
      icon: <Users className="h-10 w-10 text-slate-700" />,
      description: "Standard of living per the Word of God",
      link: "/beliefs/social-issues",
    },
  ]

  return (
    <section className="w-full bg-[#d1cdba]/15 py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Beliefs</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
              Articles of Faith and Doctrine.
            </p>
          </div>
          <div className="w-full max-w-sm">
                <Separator className="my-4" />
              </div>
          <div className="grid w-full max-w-5xl gap-6 md:grid-cols-2">
            {beliefs.map((belief) => (
              <Card key={belief.title} className="flex flex-col border-2 border-black-600 border-[#d1cdba]">
                <CardHeader className="flex flex-col items-center">
                  <div className="mb-2">{belief.icon}</div>
                  <CardTitle>{belief.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 text-center">
                  <CardDescription className="text-sm">{belief.description}</CardDescription>
                </CardContent>
{/*                 <CardFooter className="flex justify-center pt-4">
                  <Button variant="outline" asChild>
                    <Link href={ministry.link}>Learn More</Link>
                  </Button>
                </CardFooter> */}
              </Card>
            ))}
          </div>
          <div className="mt-6">
            <Button asChild>
              <Link href="/beliefs">Our Beliefs</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}


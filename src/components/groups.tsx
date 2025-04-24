import Link from "next/link"
import { Users } from "lucide-react"
import { TbBuildingChurch, TbCross, TbBible } from "react-icons/tb"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export function GroupsSection() {
  const ministries = [
    {
      title: "GROUP",
      icon: <TbCross className="h-10 w-10 text-slate-700" />,
      description:
        "A holy God and sinful man, the need for salvation",
      link: "/ministries/children",
    },
    {
      title: "The Word",
      icon: <TbBible className="h-10 w-10 text-slate-700" />,
      description: "The only Book that gives life",
      link: "/ministries/music",
    },
    {
      title: "Mission & Purpose",
      icon: <TbBuildingChurch className="h-10 w-10 text-slate-700" />,
      description: "The role and function of the Church",
      link: "/ministries/outreach",
    },
    {
      title: "Social Issues",
      icon: <Users className="h-10 w-10 text-slate-700" />,
      description: "Where we stand is where the bible stands",
      link: "/ministries/outreach",
    },
  ]

  return (
    <section className="w-full bg-slate-50 py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Groups</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
              Grow your faith in community.
            </p>
          </div>
          <div className="grid w-full max-w-5xl gap-6 md:grid-cols-2">
            {ministries.map((ministry) => (
              <Card key={ministry.title} className="flex flex-col">
                <CardHeader className="flex flex-col items-center">
                  <div className="mb-2">{ministry.icon}</div>
                  <CardTitle>{ministry.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 text-center">
                  <CardDescription className="text-sm">{ministry.description}</CardDescription>
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


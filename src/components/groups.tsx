import Link from "next/link"
import { BookMarked, MessageCircle, BookOpen } from "lucide-react"
import { TbBuildingChurch, TbCross, TbBible } from "react-icons/tb"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export function GroupsSection() {
  const groups = [
    {
      icon: <BookMarked className="h-10 w-10 text-slate-700" />,
      title: "Book Study",
      description: "Gain understanding of scripture through Christian literature.",
      meetingInfo: "Every Wednesday at 10:30 AM",
    },
    {
      icon: <MessageCircle className="h-10 w-10 text-slate-700" />,
      title: "Table Talk",
      description: "Engage with peers in discussion about important and sensitive matters of our time.",
      meetingInfo: "Last Saturday of month at 10 AM",
    },
    {
      icon: <BookOpen className="h-10 w-10 text-slate-700" />,
      title: "Bible Class",
      description: "Deepen your understanding of the scriptures in a supportive community.",
      meetingInfo: "Every Thursday at 5 PM",
    },
  ];

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
          <div className="grid w-full max-w-5xl gap-6 md:grid-cols-3 lg:grid-cols-3">
            {groups.map((group) => (
              <Card key={group.title} className="flex flex-col">
                <CardHeader className="flex flex-col items-center">
                  <div className="mb-2">{group.icon}</div>
                  <CardTitle>{group.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 text-center">
                  <CardDescription className="text-sm">{group.description}</CardDescription>
                  <p className="mt-2 text-gray-500">{group.meetingInfo}</p>
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
              <Link href="/groups">Our Groups</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}


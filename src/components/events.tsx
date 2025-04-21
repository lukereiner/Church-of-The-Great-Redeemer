import Link from "next/link"
import { Calendar } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export function EventsSection() {
  const events = [
    {
      title: "Annual Church Picnic",
      date: "June 15, 2025",
      description: "Join us for food, fellowship, and fun at our annual church picnic at Memorial Park.",
      link: "/events/church-picnic",
    },
    {
      title: "Vacation Bible School",
      date: "July 10-14, 2025",
      description: "A week of Bible stories, crafts, and activities for children ages 5-12.",
      link: "/events/vbs",
    },
    {
      title: "Community Service Day",
      date: "August 5, 2025",
      description: "Volunteer to help with various service projects throughout our community.",
      link: "/events/service-day",
    },
  ]

  return (
    <section className="w-full py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Upcoming Events</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
              Join us for these special events and activities.
            </p>
          </div>
          <div className="grid w-full max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
            {events.map((event) => (
              <Card key={event.title} className="flex flex-col">
                <CardHeader>
                  <div className="flex items-center gap-2 text-slate-700">
                    <Calendar className="h-5 w-5" />
                    <CardDescription>{event.date}</CardDescription>
                  </div>
                  <CardTitle className="line-clamp-1">{event.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-gray-500">{event.description}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" asChild className="w-full">
                    <Link href={event.link}>Learn More</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="mt-6">
            <Button asChild>
              <Link href="/events">View All Events</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}


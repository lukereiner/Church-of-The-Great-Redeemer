"use client"

import Link from "next/link"
import { Calendar } from "lucide-react"
import { useEffect, useState } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export function EventsSection() {
  const [events, setEvents] = useState([]);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    // Function to update screen size
    const updateScreenSize = () => {
      setIsSmallScreen(window.matchMedia('(max-width: 768px)').matches);
    };

    // Initial check
    updateScreenSize();

    // Add event listener
    window.addEventListener('resize', updateScreenSize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', updateScreenSize);
    };
  }, []);

  useEffect(() => {
    async function fetchMyEvents() {
      try {
        const response = await fetch("http://127.0.0.1:1337/api/events");
        const data = await response.json();
        const adjustedData = data.data.map((event) => ({
          id: event.id,
          title: event.title,
          date: new Date(event.date).toLocaleDateString(),
          description: event.description,
          allDay: false, // set to true if your event spans the whole day
        }));
        adjustedData.sort((a, b) => new Date(a.date) - new Date(b.date));
        const currentDate = new Date();
        const upcomingEvents = adjustedData.filter(event => new Date(event.date) > currentDate);
        setEvents(upcomingEvents);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    }
    fetchMyEvents();
  }, []);

  return (
<section className="w-full py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6 grid">
        <div className="flex flex-col items-center justify-center space-y-4 text-center shrink-2">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Upcoming Events</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
              Join us for these special events and activities.
            </p>
          </div>
          <div className="grid w-full max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
            {events.slice(0, isSmallScreen ? 3 : 6).map((event) => (
              <Card key={event.title} className="flex flex-col">
                <CardHeader>
                  <div className="flex items-center gap-2 text-slate-700">
                    <Calendar className="h-5 w-5" />
                    <CardDescription>{event.date}</CardDescription>
                  </div>
                  <CardTitle className="line-clamp-1 h-5">{event.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 line-clamp-3 text-left">
                  <p className="text-gray-500">{event.description}</p>
                </CardContent>
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
  );
};

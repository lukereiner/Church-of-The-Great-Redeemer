"use client";

import { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

import { SiteHeader } from "@/components/header";
import { SiteFooter } from "@/components/footer";

const localizer = momentLocalizer(moment);

export default function EventsPage() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function fetchEvents() {
      try {
        const response = await fetch("http://127.0.0.1:1337/api/events");
        const data = await response.json();
        const adjustedData = data.data.map((event) => ({
          id: event.id,
          title: event.title,
          date: new Date(event.date),
          allDay: false, // set to true if your event spans the whole day
        }));
        setEvents(adjustedData);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    }
    fetchEvents();
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center">
      <SiteHeader />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-8 text-center">
              <h1 className="font-serif text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Church Events
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                Stay up to date with our upcoming events.
              </p>
              <Calendar
                localizer={localizer}
                events={events}
                startAccessor="date"
                endAccessor="date"
                style={{ height: 600, width: "80vw" }}
                className="mb-8"
                eventPropGetter={(event) => ({
                  style: { backgroundColor: "#022438" },
                })}
                components={{
                  event: ({ event }) => (
                    <span style={{ fontSize: "12px" }}>
                      {" "}
                      {/* Adjust the font size here */}
                      <strong>{event.title}</strong>
                      <br />
                      {moment(event.date).format("HH:mm")}
                    </span>
                  ),
                }}
              />
              <div className="w-full mt-8">
                <h2 className="text-2xl font-semibold mb-4">
                  Event List for the Month
                </h2>
                <ul className="space-y-4">
                  {events.map((event) => (
                    <li key={event.id} className="text-left">
                      <strong>{event.title}</strong>
                      <p>
                        {moment(event.date).format("MMMM Do, YYYY [at] HH:mm")}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

"use client";

import { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { DatesSetArg } from "@fullcalendar/core/index.js";
import moment from "moment";
import { Calendar as ReactCal, Clock } from "lucide-react";

import { SiteHeader } from "@/components/header";
import { SiteFooter } from "@/components/footer";
import { Separator } from "@/components/ui/separator";

interface Event {
  start: string | number | Date;
  id: string;
  title: string;
  date: string; // ISO date format
  description: string;
}

function safeDate(dateInput: string | number | Date): string {
  let date: Date;

  if (typeof dateInput === "string" || typeof dateInput === "number") {
    date = new Date(dateInput);
  } else if (dateInput instanceof Date) {
    date = dateInput;
  } else {
    console.error("Invalid date input type:", typeof dateInput);
    return ''; // Return an empty string or another appropriate value
  }
  
  if (isNaN(date.getTime())) {
    // Handle invalid date format
    console.error("Invalid date format:", dateInput);
    return ''; // Return an empty string or another appropriate value
  }

  return date.toISOString(); // Convert the Date object to an ISO formatted string
}

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [monthlyEvents, setMonthlyEvents] = useState<Event[]>([]);
  const [currentMonth, setCurrentMonth] = useState(moment().month());
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768); // Example breakpoint for mobile
    };

    window.addEventListener("resize", checkScreenSize);
    checkScreenSize(); // Initial check

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    async function fetchEvents() {
      try {
        const response = await fetch("http://127.0.0.1:1337/api/events");
        const data = await response.json();
        const adjustedData: Event[] = data.data.map(
          (event: {
            id: string;
            title: string;
            date: string | number | Date;
            description: string;
          }) => ({
            id: event.id,
            title: event.title,
            start: safeDate(event.date),
            description: event.description,
            allDay: false, // set to true if your event spans the whole day
          })
        );
        const currentMonth = 0;
        adjustedData.sort((a, b) => {
          const dateA = a.start;
          const dateB = b.start;

          // Check if both dates are valid
          if (!moment(dateA).isValid() || !moment(dateB).isValid()) {
            return 0; // Treat invalid dates as equal for sorting purposes
          }

          return moment(dateA).valueOf() - moment(dateB).valueOf();
        });
        /*         const upcomingEvents = adjustedData.filter(
          (event) => new Date(event.start) > new Date()
        );  */ // To set calendar to show future events, and remove any past events
        setEvents(adjustedData);

        updateMonthlyEvents(adjustedData, currentMonth);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    }
    fetchEvents();
  }, []);

  const updateMonthlyEvents = (eventData: Event[], month: number) => {
    const filteredEvents = eventData.filter(
      (event) => moment(event.start).month() === month
    );
    setMonthlyEvents(filteredEvents);
  };

  const handleDatesSet = (rangeInfo: DatesSetArg) => {
    const newMonth = moment(rangeInfo.view.currentStart).month();
    setCurrentMonth(newMonth);
    updateMonthlyEvents(events, newMonth);
  };

  const currentMonthName = moment().month(currentMonth).format("MMMM");

  const renderEventContent = ({ event }: {event: Event}) => {
    if (isMobile) {
      return (
        <span
          id="event-span"
          style={{
            fontSize: "10px",
            background: "#d1cdba",
            width: "100%",
            padding: "8px",
            overflow: "hidden",
            whiteSpace: "normal", // Allows text to wrap
            borderRadius: "4px",
          }}
        >
          <strong>{event.title}</strong>
          <br />
          {moment(event.start).format("h:mm A")}
        </span>
      );
    }
    return (
      <span
        id="event-span"
        style={{
          fontSize: "12px",
          background: "#d1cdba",
          width: "100%",
          padding: "8px",
          overflow: "hidden",
          whiteSpace: "normal", // Allows text to wrap
          wordWrap: "break-word", // Breaks long words
          borderRadius: "4px",
        }}
      >
        <strong>{event.title}</strong>
        <br />
        {moment(event.start).format("h:mm A")}
      </span>
    );
  }; // for mobile responsiveness of calendar

  return (
    <div className="flex min-h-screen flex-col items-center">
      <SiteHeader />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-8 text-center">
              <h1 className="font-serif text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-2">
                Church Events
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                Stay up to date with our upcoming events.
              </p>
              <div className="w-full max-w-3xl">
                <Separator className="my-4" />
              </div>
              <FullCalendar
                headerToolbar={{
                  start: "title",
                  end: "today prev next",
                }}
                eventTimeFormat={{
                  hour: "numeric",
                  minute: "2-digit",
                  meridiem: "short",
                }}
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                events={events}
                height="auto"
                datesSet={handleDatesSet}
                eventContent={renderEventContent}
              />
              <div className="w-full mt-0">
                <h2 className="text-2xl font-semibold mb-4 text-decoration-line: underline">
                  What&apoas;s happening in {currentMonthName}
                </h2>
                <ul className="space-y-4">
                  {monthlyEvents.map((event) => (
                    <li key={event.id} className="text-left">
                      <div className="flex gap-1 items-center">
                        <ReactCal className="w-5 h-6"></ReactCal>
                        <strong>{event.title}</strong>
                      </div>
                      <div className="flex gap-1">
                        <Clock className="w-5 h-6"></Clock>
                        <p>
                          {moment(event.start).format(
                            "MMMM Do, YYYY [at] h:mm A"
                          )}
                        </p>
                      </div>
                      <p>{event.description}</p>
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

EventsPage.displayName = "EventsPage";

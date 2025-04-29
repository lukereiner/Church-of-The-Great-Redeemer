"use client";

import { useState, useEffect } from "react";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import moment from "moment";
import {Calendar as ReactCal, Clock} from 'lucide-react'

import { SiteHeader } from "@/components/header";
import { SiteFooter } from "@/components/footer";

export default function EventsPage() {
  const [events, setEvents] = useState([]);
  const [monthlyEvents, setMonthlyEvents] = useState([]);
  const [currentMonth, setCurrentMonth] = useState(moment().month());

  useEffect(() => {
    async function fetchEvents() {
      try {
        const response = await fetch("http://127.0.0.1:1337/api/events");
        const data = await response.json();
        const adjustedData = data.data.map((event) => ({
          id: event.id,
          title: event.title,
          start: new Date(event.date),
          description: event.description,
          allDay: false, // set to true if your event spans the whole day
        }));
        adjustedData.sort((a, b) => new Date(a.start) - new Date(b.start));
/*         const upcomingEvents = adjustedData.filter(
          (event) => new Date(event.start) > new Date()
        );  */// To set calendar to show future events, and remove any past events
        setEvents(adjustedData);

        updateMonthlyEvents(adjustedData, currentMonth);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    }
    fetchEvents();
  }, []);

  const updateMonthlyEvents = (eventData, month) => {
    const filteredEvents = eventData.filter(
      (event) => moment(event.start).month() === month
    );
    setMonthlyEvents(filteredEvents);
  };

  const handleDatesSet = (rangeInfo) => {
    const newMonth = moment(rangeInfo.view.currentStart).month();
    setCurrentMonth(newMonth);
    updateMonthlyEvents(events, newMonth);
  };

  const currentMonthName = moment().month(currentMonth).format("MMMM");

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
              <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                events={events}
                height="auto"
                datesSet={handleDatesSet}
                eventContent={({ event }) => (
                  <span style={{ fontSize: "12px", background:'#d1cdba', width: "100%", padding: "8px", overflow: "hidden", 
                    whiteSpace: "normal", // Allows text to wrap
                    wordWrap: "break-word" // Breaks long words 
                  }}>
                    <strong>{event.title}</strong>
                    <br />
                    {moment(event.start).format("HH:mm")}
                  </span>
                )}
              />
              <div className="w-full mt-8">
                <h2 className="text-2xl font-semibold mb-4">
                  Event List for {currentMonthName}
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
                          {moment(event.start).format("MMMM Do, YYYY [at] HH:mm")}
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
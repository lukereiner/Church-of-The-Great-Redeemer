"use client";

import type React from "react";

import { useState } from "react";
import { Clock, Mail, MapPin } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { SiteHeader } from "@/components/header";
import { SiteFooter } from "@/components/footer";
import { Separator } from "@/components/ui/separator";

import { sendEmail } from "../api/emails/sendEmail";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    sendEmail(formData);

    /* console.log('Form data:', formData.subject);
    
    fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message === 'Email sent successfully') {
          alert('Thank you for your message. We will get back to you soon.');
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        } else {
          alert(data.message);
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('Failed to send your message. Please try again later.');
      }); */
  };
  

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 flex justify-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="font-serif text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Contact Us
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  We'd love to hear from you. Reach out with any questions or
                  prayer requests.
                </p>
              </div>
              <div className="w-full max-w-3xl">
                <Separator className="my-4" />
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
              <div className="space-y-6">
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold">Get in Touch</h2>
                  <p className="text-gray-500">
                    Send us a message and we'll get back to you as soon as
                    possible.
                  </p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      className="border-2 border-black-600 border-[#d1cdba]"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      className="border-2 border-black-600 border-[#d1cdba]"
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your email"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <select
                      className="h-9 border-2 rounded-[7] p-1 pl-3 text-[14px] border-black-600 border-[#d1cdba] w-full"
                      name="subject"
                      id="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    >
                      <option value=""></option>
                      <option className="hover:bg-[#d1cdba]" value="General Inquiry">
                        General Inquiries
                      </option>
                      <option value="Prayer Request">Prayer Request</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message"
                      required
                      className="min-h-[190px] border-2 border-black-600 border-[#d1cdba]"
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </div>
              <div className="space-y-6">
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold">Church Information</h2>
                  <p className="text-gray-500">
                    Visit us during service times or contact us using the
                    information below.
                  </p>
                </div>
                <div className="grid gap-4">
                  <Card className="border-2 border-black-600 border-[#d1cdba]">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <MapPin className="mt-1 h-5 w-5 text-slate-700" />
                        <div>
                          <h3 className="font-medium">Address</h3>
                          <p className="text-sm text-gray-500">464 High St.</p>
                          <p className="text-sm text-gray-500">
                            Weatherly, PA 18255
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="border-2 border-black-600 border-[#d1cdba]">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <Mail className="mt-1 h-5 w-5 text-slate-700" />
                        <div>
                          <h3 className="font-medium">Email</h3>
                          <p className="text-sm text-gray-500">
                            pastor@greatredeemerchurch.org
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="border-2 border-black-600 border-[#d1cdba]">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <Clock className="mt-1 h-5 w-5 text-slate-700" />
                        <div>
                          <h3 className="font-medium">Service</h3>
                          <p className="text-sm text-gray-500">
                            Sunday: 9:00 AM
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

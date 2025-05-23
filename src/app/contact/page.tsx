"use client";

// import type React from "react";

import React, { useState } from "react";
import { Clock, Mail, MapPin } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { SiteHeader } from "@/components/header";
import { SiteFooter } from "@/components/footer";
import { Separator } from "@/components/ui/separator";
import { AlertBanner } from "@/components/alertBanner";

// import { sendEmail } from "../api/emails/sendEmail";
import { Turnstile } from "@marsidev/react-turnstile";

import { toast } from "sonner";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formValid, setFormValid] = useState(true);

  const formRef = React.useRef<HTMLFormElement>(null);

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

/*   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const emailSent = await sendEmail({ ...formData, formType: "contact" });

    if (emailSent) {
      // Reset form fields
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }
  }; */

/*   async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const turnstileData = new FormData(formRef.current!)
    const token = turnstileData.get('cf-turnstile-response')

    const res = await fetch('/api/verify', {
      method: 'POST',
      body: JSON.stringify({ token }),
      headers: {
        'content-type': 'application/json'
      }
    })

    const data = await res.json()
    if (data.success) {
      // the token has been validated
      console.log('token has been validated')

      setFormValid(true);

      const emailSent = await sendEmail({ ...formData, formType: "contact" });

      if (emailSent) {
        // Reset form fields
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        setFormValid(false);
      }
    } else {
      setFormValid(false);
      toast('you are a bot')
    }
  }; */

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const turnstileData = new FormData(formRef.current!);
    const token = turnstileData.get('cf-turnstile-response');
  
    const res = await fetch('/api/verifySend', {
      method: 'POST',
      body: JSON.stringify({ token, formData }),
      headers: {
        'content-type': 'application/json',
      },
    });
  
    const data = await res.json();
    if (res.ok) {
      // Email sent successfully
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      toast.success("Email sent! We will respond as soon as we can!");
    } else {
      setFormValid(false);
      toast.error(data.message || 'Verification failed');
    }
  };
      

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <AlertBanner />
        <section className="w-full py-12 md:py-24 lg:py-32 flex justify-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="font-serif text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Contact Us
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  We&apos;d love to hear from you. Reach out with any questions
                  or prayer requests.
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
                    Send us a message and we&apos;ll get back to you as soon as
                    possible.
                  </p>
                </div>
                <form
                  onSubmit={handleSubmit}
                  className="space-y-4"
                  ref={formRef}
                >
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
                      minLength={5}
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
                  <input type="hidden" name="formType" value="contact" />
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
                      <option
                        className="hover:bg-[#d1cdba]"
                        value="General Inquiry"
                      >
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
                      minLength={10}
                      className="min-h-[190px] border-2 border-black-600 border-[#d1cdba]"
                    />
                  </div>
                  <Turnstile siteKey={(process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY as string)}/>
                  <Button type="submit" disabled={!formValid} className="w-full">
                    Send Message
                  </Button>
                </form>
              </div>
              <div className="space-y-6">
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold">Church Information</h2>
                  <p className="text-gray-500">
                    Visit us during service or contact us using the information
                    below.
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
                          <a href="mailto:office@greatredeemerchurch.org">
                            <p className="text-sm text-gray-500">
                              office@greatredeemerchurch.org
                            </p>
                          </a>
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

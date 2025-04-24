import Link from "next/link";
import { Users, BookOpen, Heart, BookMarked, MessageCircle } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { SiteHeader } from "@/components/header";
import { SiteFooter } from "@/components/footer";

export default function GroupsPage() {
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
      meetingInfo: "Every other Saturday at 10 AM",
    },
    {
      icon: <BookOpen className="h-10 w-10 text-slate-700" />,
      title: "Bible Class",
      description: "Deepen your understanding of the scriptures in a supportive community.",
      meetingInfo: "Every Thursday at 5 PM",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col items-center">
      <SiteHeader />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-8 text-center">
              <div className="space-y-2">
                <h1 className="font-serif text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Church Groups
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  Join one of our church groups to grow in faith and community.
                </p>
              </div>
              <div className="w-full max-w-3xl">
                <Separator className="my-4" />
              </div>
              <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {groups.map((group, index) => (
                  <Card key={index}>
                    <CardHeader className="flex flex-col items-center">
                      {group.icon}
                      <CardTitle>{group.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <CardDescription>{group.description}</CardDescription>
                      <p className="mt-2 text-gray-500">{group.meetingInfo}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
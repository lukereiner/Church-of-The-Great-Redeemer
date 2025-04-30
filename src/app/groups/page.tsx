"use client"

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
import { useState, useEffect } from "react";

interface Group {
  id: number;
  documentId: string;
  Name: string;
  Description: string;
  Schedule: string;
  Location: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  Icon?: {
      id: number;
      documentId: string;
      name: string;
      alternativeText: string;
      caption: string;
      width: number;
      height: number;
      formats: {
          thumbnail: {
              name: string;
              hash: string;
              ext: string;
              mime: string;
              path: any;
              width: number;
              height: number;
              size: number;
              sizeInBytes: number;
              url: string;
          };
      };
      hash: string;
      ext: string;
      mime: string;
      size: number;
      url: string;
      previewUrl: any;
      provider: string;
      provider_metadata: any;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
  };
}

export default function GroupsPage() {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    async function fetchGroups() {
      try {
        const response = await fetch("http://localhost:1337/api/groups?populate=Icon");
        const data = await response.json();
        const adjustedData = data.data.map((group) => ({
          name: group.Name,
          description: group.Description,
          schedule: group.Schedule,
          location: group.Location,
          icon: group.Icon.url
        }));
        setGroups(adjustedData);
      } catch (error) {
        console.error("Error fetching groups:", error);
      }
    }
    fetchGroups();
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center">
      <SiteHeader />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-8 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
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
                  <Card key={index} className="border-2 border-black-600 border-[#d1cdba]">
                    <CardHeader className="flex flex-col items-center">
                      <img className="h-10 w-10 text-slate-700" src={`http://localhost:1337${groups[index].icon}`} alt="" />
                      <CardTitle>{group.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <CardDescription className="font-semibold">{group.description}</CardDescription>
                    </CardContent>
                    <CardContent className="mt-auto text-center">
                      <CardDescription className="">{group.schedule}</CardDescription>
                      <CardDescription className="">{group.location}</CardDescription>
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
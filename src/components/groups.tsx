"use client"
import Link from "next/link"
import Image from "next/image";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
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
              path: string;
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
      previewUrl: string;
      provider: string;
      provider_metadata: string;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
  };
}


export function GroupsSection() {

const [groups, setGroups] = useState<Group[]>([]);

  useEffect(() => {
    async function fetchGroups() {
      try {
        const response = await fetch((process.env.NEXT_PUBLIC_STRAPI_URL as string) + "/api/groups?populate=Icon");
        const data = await response.json();
        const adjustedData = data.data.map((group: Group) => ({
          Name: group.Name,
          Description: group.Description,
          Schedule: group.Schedule,
          Location: group.Location,
          Icon: group.Icon?.url,
        }));
        setGroups(adjustedData);
      } catch (error) {
        console.error("Error fetching groups:", error);
      }
    }
    fetchGroups();
  }, []);

  return (
    
      <main className="flex-1">
        <section className="w-full bg-[#d1cdba]/15 py-12 md:py-16 lg:py-20">
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
              <div className="w-full max-w-sm">
                <Separator className="my-2" />
              </div>
              <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full max-w-5xl">
                {groups.map((group, index) => (
                  <Card key={index} className="border-2 border-black-600 border-[#d1cdba]">
                    <CardHeader className="flex flex-col items-center">
                    <Image
                      src={(process.env.NEXT_PUBLIC_STRAPI_URL as string) + group.Icon}
                      alt={group.Name}
                      width={50} // Provide a specific width
                      height={50} // Provide a specific height
                    />
                      <CardTitle>{group.Name}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center font-semibold">
                      <CardDescription>{group.Description}</CardDescription>
                    </CardContent>
                    <CardContent className="mt-auto text-center">
                      <CardDescription>{group.Schedule}</CardDescription>
                      <CardDescription>Host: {group.Location}</CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Button asChild>
              <Link href="/groups">Our Groups</Link>
            </Button>
          </div>
        </section>
      </main>
    
  );
}

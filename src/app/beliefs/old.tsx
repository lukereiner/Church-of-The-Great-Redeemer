"use client";

import { JSX } from "react";
import { SiteHeader } from "@/components/header";
import { SiteFooter } from "@/components/footer";
import { BeliefsPageExpand } from "@/components/beliefExpand";

interface Belief {
  title: string;
  icon: JSX.Element;
  description: string;
  body: string;
}

export default function BeliefsPage() {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <SiteHeader />
      <div className="max-w-5xl">
        <BeliefsPageExpand />
      </div>
      <SiteFooter />
    </div>
  );
}

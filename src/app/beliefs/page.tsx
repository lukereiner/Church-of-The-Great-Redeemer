"use client";

import { Users } from "lucide-react";
import { JSX, useState } from "react";
import {
  TbBuildingChurch,
  TbCross,
  TbBible,
  TbChevronRight,
  TbChevronDown,
} from "react-icons/tb";
import { SiteHeader } from "@/components/header";
import { SiteFooter } from "@/components/footer";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Belief {
  title: string;
  icon: JSX.Element;
  description: string;
}

const beliefs: Belief[] = [
  {
    title: "God & Man",
    icon: <TbCross className="h-10 w-10 text-slate-700" />,
    description: "A holy God and sinful man, the need for salvation",
  },
  {
    title: "The Word",
    icon: <TbBible className="h-10 w-10 text-slate-700" />,
    description: "We believe the bible is the inspired, God-breathed, infallible and inerrant Word of God, containing all things necessary for life and salvation. While we may in our faith learn and grow by other means, such as reason, tradition, or experience, scripture alone is the primary rule and authority for faith, against which all other authorities must be measured. ",
  },
  {
    title: "Mission & Purpose",
    icon: <TbBuildingChurch className="h-10 w-10 text-slate-700" />,
    description: "The role and function of the Church",
  },
  {
    title: "Social Issues",
    icon: <Users className="h-10 w-10 text-slate-700" />,
    description: `Marriage: We believe that the...We believe that the Head of the Church is Christ alone, and He being our first and primary authority over matters of worship and living. Yet because of the sinfulness of man, government is instituted and ordained by God among man to restrain the effects of evil and sin in the world by administering just punishment. We believe the Church, as citizens of the country, must strive to be a force and influence for good, being unstained by the world and the existing culture. 
We believe that God is the supreme authority over all, and that Christ will come in victory to establish His eternal Kingdom. 
`,
  },
];

export default function BeliefsPage() {
  const [expandedBeliefIndex, setExpandedBeliefIndex] = useState<number | null>(
    null
  );

  const toggleDescription = (index: number) => {
    if (expandedBeliefIndex === index) {
      setExpandedBeliefIndex(null);
    } else {
      setExpandedBeliefIndex(index);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center">
      <SiteHeader />
      <main className="flex-1">
        <section className="w-full py-18 md:py-20 lg:py-28">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-4">
              <h1 className="font-serif text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                What We Believe
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl">
                At the Church of the Great Redeemer, we hold four core beliefs
                that guide our daily lives and decision-making.
              </p>
            </div>
          </div>
        </section>

        <section className="w-full mb-12">
          <div className="container px-4 md:px-6 grid gap-10 lg:grid-cols-1">
            {beliefs.map((belief, index) => (
              <Card
                key={index}
                className="border border-zinc-300 bg-white shadow-md dark:border-zinc-700 dark:bg-zinc-800 dark:text-white"
              >
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    {belief.icon}
                    <CardTitle>{belief.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <button
                    onClick={() => toggleDescription(index)}
                    className="flex items-center justify-between w-full text-left text-sm font-semibold underline"
                  >
                    {expandedBeliefIndex === index ? (
                      <TbChevronDown className="h-5 w-5" />
                    ) : (
                      <TbChevronRight className="h-5 w-5" />
                    )}
                  </button>
                  <p
                    className={
                      expandedBeliefIndex === index
                        ? "mt-2"
                        : "mt-2 line-clamp-4"
                    }
                  >
                    {belief.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

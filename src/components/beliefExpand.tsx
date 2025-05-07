import { useState } from "react";
import { TbBuildingChurch, TbCross, TbBible } from "react-icons/tb";
import { Users } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "./ui/separator";

export function BeliefsPageExpand() {
  const [expanded, setExpanded] = useState(null);

  const beliefs = [
    {
      title: "God & Man",
      icon: <TbCross className="h-10 w-10 text-slate-700" />,
      slogan: "A holy God and sinful man, the need for salvation.",
      explanation:
        "We believe in one God, eternally existent in three persons: Father, Son, and Holy Spirit. Humanity is created in God's image, yet marred by sin, necessitating salvation through Jesus Christ. More words adding to see the differrence",
    },
    {
      title: "The Word",
      icon: <TbBible className="h-10 w-10 text-slate-700" />,
      slogan: "Inspired, infallible, inerrant, containing all that is needed for life and salvation.",
      explanation:
        "The Bible is God's inspired Word, infallible and inerrant, providing all that is necessary for life and salvation. It serves as the ultimate authority in matters of faith and conduct.",
    },
    {
      title: "Mission & Purpose",
      icon: <TbBuildingChurch className="h-10 w-10 text-slate-700" />,
      slogan: "To glorify God through our faithful conduct, service, and witness.",
      explanation:
        "Our mission is to glorify God by living according to His commandments, serving others, and witnessing His love and salvation through our actions and words.",
    },
    {
      title: "Social Issues",
      icon: <Users className="h-10 w-10 text-slate-700" />,
      slogan: "Culture changes, God's Word doesn't.",
      explanation:
        "While social norms and cultures evolve, God's Word remains constant. We adhere to biblical principles in addressing modern social issues, providing guidance and truth in a changing world.",
    },
  ];

  const handleToggle = (index) => {
    setExpanded(index === expanded ? null : index);
  };

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 flex justify-center">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Beliefs</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
              Articles of Faith and Doctrine.
            </p>
          </div>
          <div className="w-full max-w-sm">
            <Separator className="my-4" />
          </div>
          <div className="grid w-full gap-6 md:grid-cols-2 lg:max-w-5xl">
            {beliefs.map((belief, index) => (
              <Card key={belief.title} className="flex flex-col border-2 border-black-600 border-[#d1cdba] w-full">
                <CardHeader className="flex flex-col items-center">
                  <div className="mb-2">{belief.icon}</div>
                  <CardTitle>{belief.title}</CardTitle>
                  <p className="text-sm italic">{belief.slogan}</p>
                </CardHeader>
                <CardContent className="flex-1 text-left">
                  <p className={`mt-2 ${expanded === index ? '' : 'line-clamp-3'}`}>
                    {belief.explanation}
                  </p>
                  <button
                    onClick={() => handleToggle(index)}
                    className="text-blue-500 underline mt-2"
                  >
                    {expanded === index ? "Less" : "More"}
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

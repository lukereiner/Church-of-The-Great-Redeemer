import { BeliefsSection } from "@/components/beliefs";

import Image from "next/image";

import { Separator } from "@/components/ui/separator";
import { SiteHeader } from "@/components/header";
import { SiteFooter } from "@/components/footer";

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <SiteHeader />
      <main className="flex-1 max-w-7xl">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-4">
              <h1 className="font-serif text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                About Our Church
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl">
                The Church of The Great Redeemer has been serving our community
                since 2024. We are committed to sharing the Gospel and living
                out our faith through worship, fellowship, and service.
              </p>
            </div>
            <div className="mx-auto overflow-hidden rounded-xl">
              <Image
                src="/about1.JPG"
                alt="Historic church building"
                width={700}
                height={550}
                className="aspect-[4/3] object-cover"
              />
            </div>
          </div>
        </section>
        <BeliefsSection />
        <section className="w-full py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2">
              <div className="space-y-4 flex flex-col justify-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Our History
                </h2>
                <p className="text-gray-500">
                  The Church of The Great Redeemer (CGR) originated from a group
                  of Christians who, following the 2024 UMC General Conference,
                  left the United Methodist denomination due to differences in
                  their faith and mission. CGR seeks to worship God in spirit
                  and truth (John 4:24), abide by His Word, and grow in love and
                  holiness. As a faithful remnant of the Christian community,
                  CGR remains committed to upholding the Word of God as our
                  standard of living, rather than following cultural trends.
                </p>
                <p className="text-gray-500">
                  CGR stands firm in its commitment to cling to biblical
                  scripture and be willing to make the necessary sacrifices to
                  stand true to Jesus Christ. We believe it is our duty to
                  proclaim the Gospel of Jesus Christ by standing on the Word
                  and living out our faith through love, unity, and service.
                </p>
                <p className="text-gray-500">
                  Our worship services are traditional and engaging, blending
                  hymns and liturgies that connect us with the saints of old.
                  Each Sunday, we gather together in reverence for God to hear
                  Pastor Dan lead the preaching of the Word, which is our
                  primary focus during worship. Our goal is to use worship as an
                  opportunity for edification, increasing knowledge and love of
                  God.
                </p>
              </div>
              <div className="grid gap-4">
                <div className="grid gap-4 md:grid-cols-2 md:gap-x-4">
                  <div className="overflow-hidden rounded-xl">
                    <Image
                      src="/about3.1.JPG"
                      alt="Church in a school gymnasium"
                      width={400}
                      height={300}
                      className="w-full aspect-[4/3] object-cover"
                    />
                  </div>
                  <div className="overflow-hidden rounded-xl">
                    <Image
                      src="/about4.JPG"
                      alt="Church in a local fitness center"
                      width={400}
                      height={300}
                      className="w-full aspect-[4/3] object-cover"
                    />
                  </div>
                </div>

                <div className="overflow-hidden rounded-xl">
                  <Image
                    src="/about2.JPG"
                    alt="CGR celebration on new beginnings"
                    width={400}
                    height={300}
                    className="w-full aspect-[4/3] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full bg-[#d1cdba]/15 py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-8 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Our Leadership
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  Meet our pastor who guides our church community.
                </p>
              </div>
              <div className="w-full max-w-sm">
                <Separator className="my-0" />
              </div>
              <div className="grid w-full max-w-5xl gap-6 md:grid-cols-2 items-center justify-center">
                <div className="flex flex-col space-y-4">
                  <p className="text-left mx-auto max-w-[700px] text-gray-500 md:text-base">
                    Pastor Dan currently serves two congregations, Church of The
                    Great Redeemer of Weatherly and Grace St. Paul&apos;s of Jim
                    Thorpe.
                  </p>

                  <p className="text-left mx-auto max-w-[700px] text-gray-500 md:text-base">
                    Pastor Dan experienced his call to ministry at a young age
                    in 2017. Like many individuals in the Bible, he resisted
                    that calling at first but realized how blessed he is to be
                    able to serve the Lord through his ministry. He believes in the need and power of expository preaching to open minds and soften hearts. He makes this his aim every Sunday as he preaches directly from the Word of God. 

                  </p>

                  <p className="text-left mx-auto max-w-[700px] text-gray-500 md:text-base">
                    Pastor Dan enjoys experiencing nature, fly fishing and
                    spending time with his family. He resides with his
                    supportive wife and three children in Jim Thorpe.
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <div className="overflow-hidden rounded-full">
                    <Image
                      src="/dan-portrait2.png"
                      alt="Pastor Daniel Meader"
                      width={250}
                      height={250}
                      className="aspect-square object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold mt-4">
                    Pastor Daniel Meader
                  </h3>
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

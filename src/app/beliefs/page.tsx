import Image from "next/image";

import { Separator } from "@/components/ui/separator";
import { SiteHeader } from "@/components/header";
import { SiteFooter } from "@/components/footer";

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <SiteHeader />
      <main className="flex-1 max-w-4xl">
        <section className="w-full pt-12 md:pt-24 lg:pt-32">
          <div className="container grid justify-center items-center gap-6 px-4 md:px-6  lg:gap-10 text-center">
            <div className="space-y-4">
              <h1 className="font-serif text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Our Beliefs
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl">
                At the Church of The Great Redeemer, we hold four core beliefs
                that guide our daily lives and decision making.
              </p>
            </div>
            <div className="w-full max-w-3xl">
              <Separator className="my-0" />
            </div>
          </div>
        </section>
        <section className="w-full py-8 items-center">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10">
              <div className="space-y-4 flex flex-col justify-center">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                  God and Man
                </h2>
                <ol className="ml-4 md:text-lg list-disc text-gray-500">
                  <li>
                  We believe in one God in three persons: Father, Son, and Holy Spirit. Each person is distinct yet unified by their shared divinity
                  </li>
                  <li>
                  God is described as just, righteous, holy, wrathful, loving, and gracious. All humans are to fearfully and lovingly worship, love, honor, and serve Him
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-8 items-center bg-[#d1cdba]/15">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10">
              <div className="space-y-4 flex flex-col justify-center">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                  The Word
                </h2>
                <ol className="ml-4 md:text-lg list-disc text-gray-500">
                  <li>
                  We hold the Bible as the inspired, infallible, and inerrant word of God, containing all necessary truths for life and salvation. It is the primary rule and authority for faith
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-8 items-center">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10">
              <div className="space-y-4 flex flex-col justify-center">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                  Mission and Purpose
                </h2>
                <p className="text-gray-500 md:text-lg m-0 font-semibold">The Church exists to:</p>
                <ol className="ml-4 md:text-lg list-disc text-gray-500">
                  <li>
                  <strong>Worship</strong>: Gatherings to glorify God through prayer, singing, and scripture
                  </li>
                  <li>
                  <strong>Discipleship and Growth</strong>: Regular gatherings, bible studies, classes, and various groups for spiritual growth and accountability
                  </li>
                  <li>
                  <strong>Commission</strong>: To make disciples of all nations by sharing the Gospel
                  </li>
                  <li>
                  <strong>Love</strong>: To love God and neighbor with the love Christ demonstrated
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-8 items-center bg-[#d1cdba]/15">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10">
              <div className="space-y-4 flex flex-col justify-center">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                  Social Issues
                </h2>
                <ol className="ml-4 md:text-lg list-disc text-gray-500">
                <p className="text-gray-500 md:text-lg m-0 font-semibold mb-2">Marriage</p>
                  <li>
                  We believe that marriage is a sacred union between one man and one woman, defined by Scripture
                  </li>
                  <li>
                  We acknowledge God's creation of individuals as male or female, which reflects the image and nature of God. Rejection of biological gender is seen as a rejection of this divine image
                  </li>
                  <p className="text-gray-500 md:text-lg m-0 font-semibold mt-4 my-2">Sanctity of Life</p>
                  <li>
                  Human life begins at conception, and unborn children are precious in God's eyes, deserving to be valued and protected
                  </li>
                  <li>
                  We believe that intentionally ending a life is not the responsibility of individuals and must be reserved for God alone
                  </li>
                  <p className="text-gray-500 md:text-lg m-0 font-semibold mt-4 my-2">Government and Duty</p>
                  <li>
                  We acknowledge that while Christ is our ultimate authority, government serves as a means to restrain evil and enforce justice among humans. As citizens of the country, we must uphold moral standards and strive to influence society positively
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>

{/*         <section className="w-full mb-8 bg-[#d1cdba]/15">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2">
              <div className="space-y-4 flex flex-col justify-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  The Word
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
              </div>
              <div className="grid gap-4">
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
        </section> */}

       
      </main>
      <SiteFooter />
    </div>
  );
}

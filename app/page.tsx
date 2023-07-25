import { Metadata } from "next";
import Image from "next/image";

import Link from "next/link";
import spirits from "@/public/7-spirits.png";
import Jumbotron from "@/components/jumbotron";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const metadata: Metadata = {
  title: "shadverse",
  description:
    "A collection of projects built with the awesome shadcn-ui component library",
};
export default function Home() {
  return (
    <section>
      <Jumbotron />
      <div className="flex w-full max-w-2xl mx-auto items-center space-x-2">
        <Input
          className="bg-zinc-950 border-zinc-900 text-zinc-400 focus-visible:ring-zinc-950"
          type="email"
          placeholder="Search for projects..."
        />
        <Button type="submit">Search</Button>
      </div>
      <div className="mx-auto py-20 max-w-screen-[1960px] gap-10 grid grid-cols-1 grid-flow-row-dense sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {Array(13)
          .fill("")
          .map((_, i) => (
            <Link
              key={i}
              href="/p/awesome-shadcn-ui"
              className="after:content border border-zinc-900 hover:border-zinc-800 rounded-lg group relative mb- block w-full after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight"
            >
              <Image
                alt="Project cover"
                className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"
                style={{ transform: "translate3d(0, 0, 0)" }}
                placeholder="blur"
                src={spirits}
                width={720}
                height={480}
                sizes="(max-width: 640px) 100vw,
                  (max-width: 1280px) 50vw,
                  (max-width: 1536px) 33vw,
                  25vw"
              />
            </Link>
          ))}
      </div>
    </section>
  );
}

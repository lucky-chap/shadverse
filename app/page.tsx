import { Metadata } from "next";
import Image from "next/image";

import Link from "next/link";
import spirits from "@/public/7-spirits.png";
import Jumbotron from "@/components/jumbotron";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ProjectCard from "@/components/card";

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
      <div className="mx-auto py-20 max-w-[1440px] gap-10 grid grid-cols-1 grid-flow-row-dense sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {Array(13)
          .fill("")
          .map((_, i) => (
            <ProjectCard key={i} />
          ))}
      </div>
    </section>
  );
}

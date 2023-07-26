import { Metadata } from "next";
import Jumbotron from "@/components/jumbotron";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ProjectCard from "@/components/card";

import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "shadverse",
  description:
    "A collection of projects built with the awesome shadcn-ui component library",
};
export default function Home() {
  return (
    <section>
      <Jumbotron />
      <div className="mx-auto hidden w-full max-w-2xl items-center space-x-2">
        <Input
          className="border-zinc-900 bg-zinc-950 text-zinc-400 focus-visible:ring-zinc-950"
          type="email"
          placeholder="Search for projects..."
        />
        <Button type="submit">Search</Button>
      </div>
      <div className="mx-auto grid max-w-[1440px] grid-flow-row-dense grid-cols-1 gap-10 py-20 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {projects.map((project, i) => (
          <ProjectCard project={project} key={i} />
        ))}
      </div>
    </section>
  );
}

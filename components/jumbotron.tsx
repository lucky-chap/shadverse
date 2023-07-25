import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Jumbotron() {
  return (
    <section className="pt-24">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-12">
        <h1 className="mb-4 text-4xl text-zinc-100 font-extrabold tracking-tight leading-none md:text-5xl lg:text-7xl">
          Share and discover applications built with the awesome shadcn/ui
        </h1>
        <p className="sm:px-16 lg:px-48 text-zinc-500">
          Shadverse is a web app that curates a captivating collection of
          projects all crafted with the cutting-edge{" "}
          <span className="text-zinc-400 inline-block font-medium">
            <a
              href="https://ui.shadcn.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              shadcn/ui
            </a>
          </span>{" "}
          component library
        </p>
        <div className="flex mt-10 flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <Button>Add project</Button>
          <Link href="https://github.com/lucky-chap/awesome-shadcn-ui" passHref>
            <Button className="w-full">Source Code</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

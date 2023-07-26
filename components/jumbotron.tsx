import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Jumbotron() {
  return (
    <section className="pt-24">
      <div className="mx-auto max-w-screen-xl px-4 py-8 text-center lg:py-12">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-zinc-100 md:text-5xl lg:text-7xl">
          Share and discover applications built with the awesome shadcn/ui
        </h1>
        <p className="text-zinc-500 sm:px-16 lg:px-48">
          Shadverse is a web app that curates a captivating collection of
          projects all crafted with the cutting-edge{" "}
          <span className="inline-block font-medium text-zinc-400">
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
        <div className="mx-auto mt-10 flex max-w-xs flex-col space-y-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0">
          <Button className="w-full">Add project</Button>
          <Button className="w-full">
            <a
              href="https://github.com/lucky-chap/shadverse"
              target="_blank"
              rel="noopener noreferrer"
            ></a>
            Visit shadcn/ui
          </Button>
        </div>
      </div>
    </section>
  );
}

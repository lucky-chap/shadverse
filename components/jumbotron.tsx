import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Jumbotron() {
  return (
    <section className="pt-24">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-12">
        <h1 className="mb-4 text-4xl text-zinc-100 font-extrabold tracking-tight leading-none md:text-5xl lg:text-7xl">
          AwesomeAWS: Share and Discover Applications built with AWS
        </h1>
        <p className="sm:px-16 lg:px-48 text-zinc-500">
          AwesomeAWS is the ultimate destination for developers and businesses
          seeking discover an extensive collection of applications built with
          AWS technologies
        </p>
        <div className="flex mt-4 flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <Button>Add project</Button>
          <Link href="https://github.com/lucky-chap/awesome-aws" passHref>
            <Button>Source Code</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

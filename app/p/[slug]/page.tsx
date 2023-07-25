import Link from "next/link";
import { Button } from "@/components/ui/button";
import React from "react";
import { Badge } from "@/components/ui/badge";
import ImageGallery from "@/components/image-gallery";

export default function page() {
  return (
    <section className="pt-16 pb-16">
      <div className="py-8 flex flex-col md:flex-row items-start justify-between md:px-4 mx-auto max-w-screen-xl text-left lg:py-16">
        <div className="">
          <h1 className="mb-2 text-lg text-zinc-100 font-extrabold max-w-lg tracking-tight leading-none md:text-2xl">
            AwesomeAWS: Share and Discover Applications built with AWS
          </h1>
          <p className="text-zinc-500 max-w-lg">
            AwesomeAWS is the ultimate destination for developers and businesses
            seeking discover an extensive collection of applications built with
            AWS technologies
          </p>
          <div className="mt-3 flex flex-wrap max-w-lg">
            <Badge className="mr-1 cursor-pointer">Amplify</Badge>
            <Badge className="mr-1 cursor-pointer">Cognito</Badge>
            <Badge className="mr-1 cursor-pointer">Lambda</Badge>
            <Badge className="mr-1 cursor-pointer">Storage</Badge>
          </div>
        </div>
        <div className="flex md:mt-0 mt-4 flex- justify-center items-start">
          <Button className="mr-2">Live link</Button>
          <Link href="https://github.com/lucky-chap/awesome-shadcn-ui" passHref>
            <Button>Source Code</Button>
          </Link>
        </div>
      </div>
      <div className="mx-auto max-w-screen-xl">
        <ImageGallery />
      </div>
    </section>
  );
}

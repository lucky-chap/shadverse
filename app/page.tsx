import { Metadata } from "next";
import Image from "next/image";

import Link from "next/link";
import spirits from "@/public/7-spirits.png";
import sample from "@/public/sample.png";
import Jumbotron from "@/components/jumbotron";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Awesome AWS",
  description: "Example music app using the components.",
};

export default function MusicPage() {
  return (
    <section>
      <Jumbotron />
      {/* <div className="columns-1 py-28 mx-auto max-w-screen-[1960px] gap-4 sm:columns-2 xl:columns-3 2xl:columns-4"> */}
      <div className="mx-auto pb-20 max-w-screen-[1960px] gap-10 grid grid-cols-1 grid-flow-row-dense sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {/* sdfs */}
        {/* {Array(17)
          .fill("")
          .map((_, i) => (
            <Link
              href={`/?photoId=`}
              shallow
              key={i}
              className="after:content border border-zinc-900 hover:border-zinc-800 rounded-lg group relative mb- block w-full after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight"
            >
              <Image
                alt="The Baidenss marriage photo"
                className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"
                style={{ transform: "translate3d(0, 0, 0)" }}
                placeholder="blur"
                // blurDataURL={spirits}
                src={spirits}
                width={720}
                height={480}
                sizes="(max-width: 640px) 100vw,
                  (max-width: 1280px) 50vw,
                  (max-width: 1536px) 33vw,
                  25vw"
              />
            </Link>
          ))} */}

        <Link
          href="/p/awesome-aws"
          className="after:content border border-zinc-900 hover:border-zinc-800 rounded-lg group relative mb- block w-full after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight"
        >
          <Image
            alt="The Baidenss marriage photo"
            className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"
            style={{ transform: "translate3d(0, 0, 0)" }}
            placeholder="blur"
            // blurDataURL={spirits}
            src={spirits}
            width={720}
            height={480}
            sizes="(max-width: 640px) 100vw,
                  (max-width: 1280px) 50vw,
                  (max-width: 1536px) 33vw,
                  25vw"
          />
        </Link>
      </div>
    </section>
  );
}

"use client";

import { useState, useEffect } from "react";

import Link from "next/link";
import { Button } from "@/components/ui/button";

import Logo from "./logo";

export default function Header() {
  const [top, setTop] = useState<boolean>(true);

  const scrollHandler = () => {
    window.scrollY > 10 ? setTop(false) : setTop(true);
  };

  useEffect(() => {
    scrollHandler();
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <header
      className={`fixed z-30 w-full border-b border-zinc-900 transition duration-300 ease-in-out md:bg-opacity-90 ${
        !top ? "bg-zinc-950 shadow-lg backdrop-blur-sm dark:bg-zinc-900" : ""
      }`}
    >
      <div className="mx-auto max-w-[1440px] px-4 md:px-7">
        <div className="flex h-16 items-center justify-between">
          <div className="mr-4 flex shrink-0 items-center">
            <Link href={"/"}>
              <h1 className="flex items-center font-medium">
                <Logo />
                <span className="ml-2 hidden font-medium text-zinc-100 md:block">
                  shadverse
                </span>
              </h1>
            </Link>
          </div>

          <nav className="">
            <ul className="flex grow flex-wrap items-center justify-end">
              <li className="">
                <Button>Source Code</Button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

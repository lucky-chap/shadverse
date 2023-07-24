"use client";

import { useState, useEffect } from "react";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import Logo from "./logo";
import { Icons } from "./icons";

import spirits from "@/public/7-spirits.png";
import Logo from "./logo";

export default function Header() {
  const [top, setTop] = useState<boolean>(true);

  // detect whether user has scrolled the page down by 10px
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
                <span className="ml-2 hidden font-medium md:block text-zinc-100">
                  AwesomeAWS
                </span>
              </h1>
            </Link>
            <ul className="ml-1 hidden items-center md:ml-3 text-sm">
              <li className="text-zinc-400 mr-2">
                <Link href={"/articles"} passHref>
                  Articles
                </Link>
              </li>
              <li className="text-zinc-400">
                <Link href={"/events"} passHref>
                  Events
                </Link>
              </li>
            </ul>
          </div>

          <nav className="">
            <ul className="flex grow flex-wrap items-center justify-end">
              <li className="">
                <Link href={"/signin"} passHref className="hidden lg:block">
                  <Button>Sign in</Button>
                </Link>
              </li>

              <li className="mx-2 hidden md:flex md:grow">
                <Link href={"/new-article"} passHref>
                  <Button>Add project</Button>
                </Link>
              </li>

              <li>
                <Link href={"/profile"} passHref>
                  <Avatar className="h-8 w-8 ring ring-zinc-100">
                    <AvatarImage src={spirits as unknown as string} />
                    <AvatarFallback>ss</AvatarFallback>
                  </Avatar>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

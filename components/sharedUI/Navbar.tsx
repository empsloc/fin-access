"use client";
import { Menu } from "lucide-react";

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { ThemeToggleButton } from "./ThemeToggleButton";

const Navbar = () => {
  return (
    <div className=" py-5">
      <div className="grid grid-cols-2">
        <div className="col-span-1 flex items-center text-xl font-bold">
          Fin Data Aggregator
        </div>

        <div className="col-span-1  md:hidden items-center gap-5 font-bold ">
          <div className="flex items-center justify-end gap-5">
            <div className="  flex justify-end items-center ">
              <ThemeToggleButton />
            </div>
            <Menu />
          </div>
        </div>
        <div className="col-span-1 hidden md:flex items-center gap-5 font-semibold text-sm justify-end">
          <div className="  flex justify-end items-center mr-3">
            <ThemeToggleButton />
          </div>
          <Link href="/">
            {" "}
            <div className="">Home</div>
          </Link>
          <Link href="/communities">
            {" "}
            <div className="">Finance</div>
          </Link>
          <Link href="/club">
            {" "}
            <div className="">About</div>
          </Link>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

"use client";

import * as React from "react";
import Link from "next/link";

import { BoxIcon, HomeIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  path: string;
}

const MobileNav: React.FC<Props> = ({ path }) => {
  return (
    <section className="h-16 sm:hidden">
      <nav className="fixed bottom-0 left-0 flex w-full bg-primary-gradient">
        <div className="absolute top-0 -z-10 h-1/2 w-full bg-background" />
        <Link
          href="/dashboard/home"
          className={cn(
            "flex h-16 w-[calc(50%+1px)] skew-x-[18deg] items-center justify-center rounded-tr-3xl bg-primary-gradient",
            path === "home" && "-skew-x-[18deg] rounded-br-3xl bg-background",
          )}
        >
          <HomeIcon
            className={cn(
              "size-6 -skew-x-[18deg] text-white transition-none",
              path === "home" && "skew-x-[18deg] text-black",
            )}
          />
        </Link>
        <Link
          href="/dashboard/ar"
          className={cn(
            "flex h-16 w-[calc(50%+1px)] -skew-x-[18deg] items-center justify-center rounded-tl-3xl bg-primary-gradient",
            path == "ar" && "skew-x-[18deg] rounded-bl-3xl bg-background",
          )}
        >
          <BoxIcon
            className={cn(
              "size-6 skew-x-[18deg] text-white transition-none",
              path === "ar" && "-skew-x-[18deg] text-black",
            )}
          />
        </Link>
      </nav>
    </section>
  );
};

export default MobileNav;

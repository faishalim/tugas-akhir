"use client";

import { FC } from "react";
import { useSelectedLayoutSegment } from "next/navigation";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { Button } from "@/components//shadcn/button";
import { sidenavItems } from "@/lib/config";

const DashboardSidenav: FC = () => {
  const segment = useSelectedLayoutSegment() || "";

  return (
    <aside className="sticky top-16 hidden h-[calc(100svh-64px)] w-full min-w-48 max-w-64 py-8 md:block lg:w-64">
      <ul className="flex h-full flex-col gap-1 overflow-auto">
        {sidenavItems.map((item) => (
          <li
            key={item.title}
            className={cn(item.title === "Settings" && "mt-auto")}
          >
            <Button
              asChild
              variant={item.url.endsWith(segment) ? "default" : "ghost"}
              size="lg"
              className={cn(
                "w-full justify-start rounded-md rounded-l-none font-bold text-foreground transition-colors hover:bg-primary hover:text-primary-foreground xl:rounded-l-lg",
                item.url.endsWith(segment) && "text-primary-foreground",
              )}
            >
              <Link href={item.url}>
                <item.icon className="size-4 shrink-0" strokeWidth={2.3} />
                <span className="truncate">{item.title}</span>
              </Link>
            </Button>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default DashboardSidenav;

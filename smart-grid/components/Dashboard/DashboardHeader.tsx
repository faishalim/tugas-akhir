import type { FC } from "react";
import Image from "next/image";
import Link from "next/link";

import { LogOutIcon } from "lucide-react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/shadcn/avatar";
import Header from "@/components/Common/Header";
import DashboardHeaderClock from "@/components/Dashboard/DashboardHeaderClock";

const DashboardHeader: FC = () => {
  return (
    <Header className="sticky top-0 z-50 hidden w-full rounded-b-2xl sm:block">
      <section className="mx-auto flex h-full max-w-screen-xl items-center justify-between">
        <div className="flex items-center gap-8">
          <Image
            alt="Smart Grid Logo"
            src="/logo.svg"
            height={450}
            width={105}
          />
          <DashboardHeaderClock />
        </div>
        <div className="flex items-center gap-4">
          <p>Halo, Fais H</p>
          <Avatar className="size-8">
            <AvatarImage src="/avatar.jpg" />
            <AvatarFallback className="bg-muted"></AvatarFallback>
          </Avatar>
          <Link href="/login">
            <LogOutIcon strokeWidth={3.4} />
          </Link>
        </div>
      </section>
    </Header>
  );
};

export default DashboardHeader;

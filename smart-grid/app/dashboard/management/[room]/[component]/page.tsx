import * as React from "react";
import type { NextPage } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";

import { XIcon } from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/shadcn/card";
import RepairForm from "@/components/Forms/RepairForm";
import LampChangeForm from "@/components/Forms/LampChangeForm";
import SocketChangeForm from "@/components/Forms/SocketChangeForm";
import WireChangeForm from "@/components/Forms/WireChangeForm";

import { formatKebabCase } from "@/lib/utils";

// TODO: searchParams and route type safety
interface Props {
  params: { component: string; room: string };
  searchParams: Record<string, string>;
}

const ComponentChangePage: NextPage<Props> = ({ params, searchParams }) => {
  const { component, room } = params;
  const { action, type } = searchParams;

  if (!(action === "change" || action === "repair")) {
    return notFound();
  }

  return (
    <main className="flex min-h-screen min-w-[580px] flex-1 flex-col gap-8 px-4 py-8">
      <Card className="flex min-h-96 w-full flex-col items-center justify-between rounded-xl">
        <CardHeader className="relative w-full text-center">
          <CardTitle className="capitalize">
            {`${formatKebabCase(component)} ${action}`}
          </CardTitle>
          <Link
            href={`/dashboard/management/${room}`}
            className="absolute right-6 top-6"
          >
            <XIcon className="size-5" strokeWidth="4" />
          </Link>
        </CardHeader>
        <CardContent className="h-full w-full flex-1">
          {action === "repair" ? (
            <RepairForm componentId={component} />
          ) : type === "lamp" ? (
            <LampChangeForm componentId={component} />
          ) : type === "socket" ? (
            <SocketChangeForm componentId={component} />
          ) : type === "wire" ? (
            <WireChangeForm componentId={component} />
          ) : (
            <p>Type Unknown</p>
          )}
        </CardContent>
      </Card>
    </main>
  );
};

export default ComponentChangePage;

"use client";

import * as React from "react";
import { toast } from "sonner";

import useRealtimeObject from "@/hooks/useReatimeObject";
import { Skeleton } from "@/components/shadcn/skeleton";

import { database } from "@/lib/firebase/database";

// TODO: might refactor this
const DashboardSideinfoContent: React.FC = () => {
  const { data: smoke, loading: smokeLoading } = useRealtimeObject<number>(
    database,
    "sensors/smoke",
  );
  const { data: flame, loading: flameLoading } = useRealtimeObject<number>(
    database,
    "sensors/flame",
  );

  React.useEffect(() => {
    const id = "smoke";
    smoke === 0
      ? toast.error("Smoke Detected!", { id, duration: Infinity })
      : toast.dismiss(id);
  }, [smoke]);
  React.useEffect(() => {
    const id = "flame";
    flame === 1
      ? toast.error("Flame Detected!", { id, duration: Infinity })
      : toast.dismiss(id);
  }, [flame]);

  if (smokeLoading || flameLoading) {
    return (
      <ul className="flex flex-col gap-2">
        <li className="flex items-center gap-2">
          <Skeleton className="h-5 w-9 rounded-full"></Skeleton>
          <Skeleton className="h-5 flex-1 rounded-full"></Skeleton>
        </li>
      </ul>
    );
  }

  return (
    <ul className="flex flex-col gap-2">
      {smoke === 1 && flame === 0 ? (
        <li className="flex items-center gap-2">
          <div className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-emerald-400" />
          <span className="leading-none">Secure</span>
        </li>
      ) : (
        <>
          {smoke === 0 && (
            <li className="flex items-center gap-2">
              <div className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-red-600" />
              <span className="leading-none">Smoke Detected!</span>
            </li>
          )}
          {flame === 1 && (
            <li className="flex items-center gap-2">
              <div className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-red-600" />
              <span className="leading-none">Flame Detected!</span>
            </li>
          )}
        </>
      )}
    </ul>
  );
};

export default DashboardSideinfoContent;

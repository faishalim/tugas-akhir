"use client";

import { FC } from "react";

import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/shadcn/skeleton";

import { useControlContext } from "@/providers/ControlProvider";
import ControlCard from "./ControlCard";

const ControlPanel: FC = () => {
  const { rooms, loading, error } = useControlContext();

  if (loading) return <LoadingUI />;
  if (error) return <div>Error: {error}</div>;
  if (!rooms) return <div>No data available</div>;

  return (
    <div className="gap grid w-full grid-cols-2 grid-rows-2 justify-items-end gap-x-6 gap-y-6 xl:gap-x-12">
      {Object.entries(rooms).map(([roomId, room], index) => (
        <ControlCard
          key={roomId}
          roomId={roomId}
          room={room}
          className={cn(index % 2 === 0 && "justify-self-start")}
        />
      ))}
    </div>
  );
};

const LoadingUI: FC = () => {
  return (
    <div className="gap grid w-full grid-cols-2 grid-rows-2 justify-items-end gap-x-6 gap-y-6 xl:gap-x-12">
      {Array(4)
        .fill("")
        .map((_, index) => (
          <Skeleton
            key={index}
            className={cn(
              "h-[162px] w-full max-w-80 rounded-xl border bg-card text-card-foreground shadow",
              index % 2 === 0 && "justify-self-start",
            )}
          />
        ))}
    </div>
  );
};

export default ControlPanel;

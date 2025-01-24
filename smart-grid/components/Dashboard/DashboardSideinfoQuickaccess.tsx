import { type FC } from "react";
import { useSelectedLayoutSegment } from "next/navigation";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/shadcn/card";
import { Switch } from "@/components/shadcn/switch";

import { useControlContext } from "@/providers/ControlProvider";
import { Skeleton } from "@/components/shadcn/skeleton";
import { Touch } from "@/components/Icon";

const DashboardSideinfoQuickaccess: FC = () => {
  const { rooms, loading, error, toggleSwitch } = useControlContext();
  const segment = useSelectedLayoutSegment() || "";
  if (segment === "control") return;

  return (
    <Card className="mt-8 min-h-72">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-base">
          <Touch className="size-4" />
          <span>Quick Access</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="px-8">
        {loading ? (
          <ul className="flex w-full flex-col gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <li key={i} className="flex items-center gap-2">
                <Skeleton className="h-5 w-9 rounded-full"></Skeleton>
                <Skeleton className="h-5 flex-1 rounded-full"></Skeleton>
              </li>
            ))}
          </ul>
        ) : error ? (
          <div className="rounded-md text-destructive">
            <p className="font-semibold">Error Loading Data</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Please check your network connection or try refreshing the page.
            </p>
          </div>
        ) : !rooms ? (
          <div className="w-full text-center text-muted-foreground">
            No data available
          </div>
        ) : (
          <ul className="flex w-full flex-col gap-4">
            {Object.entries(rooms).map(([roomId, room]) => (
              <li className="flex items-center gap-2" key={roomId}>
                <Switch
                  checked={!!room.lamp}
                  onCheckedChange={() => toggleSwitch(roomId, "lamp")}
                />
                <span className="leading-none">{room.name} Lamp</span>
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  );
};

export default DashboardSideinfoQuickaccess;

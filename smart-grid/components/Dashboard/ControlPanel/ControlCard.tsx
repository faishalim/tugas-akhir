import type { FC } from "react";

import { ControlledRoom } from "@/types";

import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/shadcn/card";
import { Switch } from "@/components/shadcn/switch";

import { useControlContext } from "@/providers/ControlProvider";
import { Socket, Lamp } from "@/components/Icon";

interface ControlCardProps {
  roomId: string;
  room: ControlledRoom;
  className?: string;
}

const ControlCard: FC<ControlCardProps> = ({ roomId, room, className }) => {
  const { toggleSwitch } = useControlContext();

  return (
    <Card className={cn("relative w-full max-w-80", className)}>
      <CardHeader className="px-5 py-4">
        <CardTitle className="text-2xl">{room.name}</CardTitle>
      </CardHeader>
      <CardContent className="flex h-24 flex-col gap-2 px-5 text-xl">
        <div className="flex items-center">
          <Lamp className="mr-2 size-7" />
          <p className="text-2xl">Lamp</p>
          <Switch
            className="ml-auto"
            checked={!!room.lamp}
            onCheckedChange={() => toggleSwitch(roomId, "lamp")}
          />
        </div>

        <div className="flex items-center">
          <Socket className="mr-2 size-7" />
          <p className="text-2xl">Socket</p>
          <Switch
            className="ml-auto"
            checked={!!room.socket}
            onCheckedChange={() => toggleSwitch(roomId, "socket")}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default ControlCard;

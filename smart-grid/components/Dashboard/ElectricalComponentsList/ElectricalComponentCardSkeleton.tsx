import * as React from "react";

import { cn } from "@/lib/utils";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/shadcn/card";
import { Skeleton } from "@/components/shadcn/skeleton";

import { formatKebabCase } from "@/lib/utils";

interface Props {
  compId: string;
}

const ElectricalComponentCardSkeleton: React.FC<Props> = ({ compId }) => {
  return (
    <Card className="flex h-[447px] flex-col">
      <CardHeader>
        <CardTitle className={cn(compId.includes("mcb") && "uppercase")}>
          {formatKebabCase(compId)}
        </CardTitle>
        <Skeleton className="mx-auto size-[80px]" />
      </CardHeader>
      <CardContent className="flex w-full flex-col gap-3">
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-6 w-full" />
      </CardContent>
      <CardFooter className="mt-auto flex-col gap-2">
        <Skeleton className="h-9 w-full rounded-full" />
        <Skeleton className="h-9 w-full rounded-full" />
      </CardFooter>
    </Card>
  );
};

export default ElectricalComponentCardSkeleton;

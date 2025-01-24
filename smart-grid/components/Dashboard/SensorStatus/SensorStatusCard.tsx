import * as React from "react";
import Link from "next/link";

import { ChevronRightIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/shadcn/card";

interface Props {
  title: string;
  unit: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  className?: string;
}

const SensorStatusCard: React.FC<React.PropsWithChildren & Props> = ({
  title,
  unit,
  icon: Icon,
  className,
  children,
}) => {
  return (
    <Card
      className={cn(
        "relative w-full justify-self-start border-none bg-neutral-200 max-sm:shadow-none sm:bg-card",
        className,
      )}
    >
      <Link
        href="monitoring"
        key={title}
        className="absolute z-10 h-full w-full max-sm:hidden"
      />
      <CardHeader className="relative px-5 pb-0 sm:pt-5">
        <CardTitle className="hidden sm:block">{title}</CardTitle>
        <ChevronRightIcon
          className="absolute right-4 top-3 size-5 max-sm:hidden"
          strokeWidth={2.5}
        />
      </CardHeader>
      <CardContent className="flex flex-col gap-1 px-5 pb-0 text-xl font-bold sm:h-[72px] sm:flex-row-reverse sm:items-center sm:justify-between">
        <div className="size-11 sm:size-14">
          <Icon />
        </div>
        <h3 className="pt-2 text-base font-semibold leading-none tracking-tight sm:hidden">
          {title}
        </h3>
        <h4 className="text-2xl font-extrabold max-sm:py-1 sm:text-xl sm:font-bold">
          {children || "..."}
        </h4>
      </CardContent>
      <CardFooter className="px-5 sm:pb-5 sm:text-sm sm:font-bold">
        {unit}
      </CardFooter>
    </Card>
  );
};

export default SensorStatusCard;

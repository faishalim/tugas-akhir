import * as React from "react";

import { TimeResolution } from "@/types";
import { Button } from "@/components/shadcn/button";

interface ChartModeProps {
  activeChart: TimeResolution;
  setActiveChart: React.Dispatch<React.SetStateAction<TimeResolution>>;
}

const ChartMode: React.FC<ChartModeProps> = ({
  activeChart,
  setActiveChart,
}) => {
  return (
    <div className="flex w-full justify-around gap-4 pb-6 pt-2">
      <Button
        variant="secondary"
        data-active={activeChart === "realtime"}
        className="max-w-56 flex-1 rounded-full text-2xl font-bold capitalize shadow-none data-[active=false]:bg-transparent data-[active=false]:text-foreground"
        onClick={() => setActiveChart("realtime")}
      >
        Realtime
      </Button>
      <Button
        variant="secondary"
        data-active={activeChart === "hourly"}
        className="max-w-56 flex-1 rounded-full text-2xl font-bold capitalize shadow-none data-[active=false]:bg-transparent data-[active=false]:text-foreground"
        onClick={() => setActiveChart("hourly")}
      >
        Hourly
      </Button>
    </div>
  );
};

export default ChartMode;

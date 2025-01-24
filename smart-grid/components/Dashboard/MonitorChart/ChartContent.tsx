import * as React from "react";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

import { IdentifiedMeasurement, TimeResolution } from "@/types";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/shadcn/chart";

interface ChartContentProps {
  mode: TimeResolution;
  tooltipLabel: string;
  data: { [Resolution in TimeResolution]: IdentifiedMeasurement[] };
}

const ChartContent: React.FC<ChartContentProps> = ({
  mode,
  tooltipLabel,
  data,
}) => {
  const chartConfig = {
    tooltip: {
      label: tooltipLabel,
    },
    chart: {
      label: "Value",
      color: "hsl(var(--chart-5))",
    },
  } satisfies ChartConfig;

  return (
    <ChartContainer
      config={chartConfig}
      className="h-[250px] min-h-[200px] w-full"
    >
      <BarChart
        accessibilityLayer
        data={data[mode].slice(-24)}
        className="relative -left-4"
      >
        <CartesianGrid vertical={false} />
        <YAxis
          dataKey="value"
          domain={[200, 230]}
          tickLine={false}
          axisLine={false}
          tickMargin={6}
          tickCount={6}
        />
        <XAxis
          dataKey="time"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
        />
        <ChartTooltip content={<ChartTooltipContent nameKey="tooltip" />} />
        <Bar
          dataKey="value"
          fill={`var(--color-chart)`}
          radius={4}
          isAnimationActive={false}
        />
      </BarChart>
    </ChartContainer>
  );
};

export default ChartContent;

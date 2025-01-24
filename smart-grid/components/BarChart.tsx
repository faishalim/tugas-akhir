"use client";

import * as React from "react";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

import { Button } from "@/components/shadcn/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/shadcn/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/shadcn/chart";

import { chartData, chartConfig } from "@/lib/config";

interface ChartProps {
  title: string;
}

const Chart: React.FC<ChartProps> = ({ title }) => {
  const [activeChart, setActiveChart] =
    React.useState<keyof typeof chartConfig>("desktop");

  return (
    <Card>
      <CardHeader className="flex flex-col items-stretch pb-0">
        <CardTitle>{title}</CardTitle>
        <div className="flex w-full justify-around gap-4 py-2">
          {["desktop", "mobile"].map((key) => {
            const chart = key as keyof typeof chartConfig;
            return (
              <Button
                key={chart}
                variant="secondary"
                data-active={activeChart === chart}
                className="w-60 rounded-full text-2xl font-bold shadow-none data-[active=false]:bg-transparent data-[active=false]:text-foreground"
                onClick={() => setActiveChart(chart)}
              >
                {chartConfig[chart].label}
              </Button>
            );
          })}
        </div>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={chartConfig}
          className="relative -left-3 aspect-auto h-[250px] w-full"
        >
          <BarChart
            accessibilityLayer
            data={chartData.slice(0, 40)}
            margin={{
              left: 0,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickCount={6}
            />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                });
              }}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey="views"
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    });
                  }}
                />
              }
            />
            <Bar
              dataKey={activeChart}
              fill={`var(--color-${activeChart})`}
              radius={[2, 2, 2, 2]} // Add rounded corners (top-left, top-right, bottom-right, bottom-left)
              // barSize={8} // Consistent slim width
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default Chart;

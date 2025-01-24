import * as React from "react";
import { LoaderCircle } from "lucide-react";

import { IdentifiedMeasurement, TimeResolution } from "@/types";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/shadcn/card";
import ChartModeSelector from "./ChartModeSelector";
import ChartContent from "./ChartContent";

interface ChartProps {
  title: string;
  data: { [Resolution in TimeResolution]: IdentifiedMeasurement[] };
  loading: boolean;
}

const ChartCard: React.FC<ChartProps> = ({ title, data, loading }) => {
  const [activeChart, setActiveChart] =
    React.useState<TimeResolution>("realtime");

  return (
    <Card className="relative overflow-hidden">
      {loading && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-card/90">
          <LoaderCircle
            className="text-priary animate-spin"
            size={60}
            strokeWidth={2.8}
          />
        </div>
      )}

      <CardHeader className="flex flex-col items-stretch pb-0">
        <CardTitle>{title}</CardTitle>
        <ChartModeSelector
          activeChart={activeChart}
          setActiveChart={setActiveChart}
        />
      </CardHeader>
      <CardContent>
        <ChartContent mode={activeChart} tooltipLabel={title} data={data} />
      </CardContent>
    </Card>
  );
};

export default ChartCard;

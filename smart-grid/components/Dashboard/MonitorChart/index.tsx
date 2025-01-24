"use client";

import * as React from "react";

import { Measurement, RawMetricsData, ProcessedMetricsData } from "@/types";
import useRealtimeObject from "@/hooks/useReatimeObject";
import ChartCard from "./ChartCard";

import { database } from "@/lib/firebase/database";

const MonitorChart: React.FC = () => {
  const { data, loading } = useRealtimeObject<RawMetricsData>(
    database,
    "/monitor/",
    300,
  );

  const mapData = (data: Record<string, Measurement> | undefined) =>
    data ? Object.entries(data).map(([id, props]) => ({ id, ...props })) : [];

  const formattedData: ProcessedMetricsData = {
    voltages: {
      realtime: mapData(data?.voltages.realtime),
      hourly: mapData(data?.voltages.hourly),
    },
    currents: {
      realtime: mapData(data?.currents.realtime),
      hourly: mapData(data?.currents.hourly),
    },
    powers: {
      realtime: mapData(data?.powers.realtime),
      hourly: mapData(data?.powers.hourly),
    },
  };

  return (
    <>
      <ChartCard
        title={"Voltages"}
        data={formattedData.voltages}
        loading={loading}
      />
      <ChartCard
        title={"Currents"}
        data={formattedData.currents}
        loading={loading}
      />
      <ChartCard
        title={"Power Consumption"}
        data={formattedData.powers}
        loading={loading}
      />
    </>
  );
};

export default MonitorChart;

"use client";

import * as React from "react";

import useRealtimeList from "@/hooks/useRealtimeList";
import ChartCard from "./ChartCard";

import { database } from "@/lib/firebase/database";
import { IdentifiedMeasurement, Measurement } from "@/types";

const PowerConsumptionChart: React.FC = () => {
  const { data: currentsRealtime, loading } = useRealtimeList<Measurement>(
    database,
    "/monitor/currents/realtime",
  );

  const data = {
    realtime: (currentsRealtime || []) satisfies IdentifiedMeasurement[],
    hourly: [] as IdentifiedMeasurement[],
  };

  return (
    <ChartCard title={"Power Consumption"} data={data} loading={loading} />
  );
};

export default PowerConsumptionChart;

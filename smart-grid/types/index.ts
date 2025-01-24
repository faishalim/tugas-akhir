export type { Room, ControlledRoom } from "./room";
export type {
  MetricCategory,
  Measurement,
  IdentifiedMeasurement,
  TimeResolution,
  RawMetricsData,
  ProcessedMetricsData,
} from "./metric";
export type {
  LampComponent,
  SocketComponent,
  MCBComponent,
  WireComponent,
  Component,
} from "./component";

/* Zod generated types */
import * as z from "zod";
import { repairHistorySchema } from "@/lib/schema";

export type RepairHistory = z.infer<typeof repairHistorySchema>;

// TODO: might also change the implementation of this
export type MetricCategory = "voltage" | "current" | "power";

export type Measurement = {
  time: string;
  value: number;
};

export type IdentifiedMeasurement = Measurement & { id: string };

export type TimeResolution = "realtime" | "hourly";

export type RawMetricsData = {
  [Category in MetricCategory as `${Category}s`]: {
    [Resolution in TimeResolution]: Record<string, Measurement> | undefined;
  };
};

export type ProcessedMetricsData = {
  [Category in MetricCategory as `${Category}s`]: {
    [Resolution in TimeResolution]: IdentifiedMeasurement[];
  };
};

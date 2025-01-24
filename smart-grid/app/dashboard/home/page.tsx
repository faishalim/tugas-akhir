import type { FC } from "react";

import SensorStatus from "@/components/Dashboard/SensorStatus";
import PowerConsumptionChart from "@/components/Dashboard/MonitorChart/PowerConsumptionChart";

const DashboardPage: FC = () => {
  return (
    <main className="flex min-h-screen flex-1 flex-col gap-8 px-4 py-8 sm:min-w-[580px]">
      <section className="flex flex-col justify-center gap-3 pb-0 text-lg font-medium sm:hidden">
        <div className="relative">
          <h1 className="text-6xl font-bold text-black/5">GRID</h1>
          <div className="absolute left-4 top-1.5 inline-block w-fit">
            <p className="line-clamp-1 text-[28px] font-bold leading-none">
              Hi <span className="pl-1">Fais H</span>
            </p>
            <p className="text-sm tracking-tighter text-muted-foreground">
              Welcome Back
            </p>
          </div>
        </div>
        <p>Welcome to Your SmartGrid Dashboard</p>
        <p className="leading-5">
          Control and monitor buildings
          <br />
          <strong>easy, safe</strong> and <strong>smart!</strong>
        </p>
      </section>
      <section>
        <h3 className="pb-4 pt-1 font-semibold sm:hidden">Monitoring</h3>
        <SensorStatus />
      </section>
      <section className="hidden sm:block">
        <PowerConsumptionChart />
      </section>
    </main>
  );
};

export default DashboardPage;

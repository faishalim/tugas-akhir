import { type FC } from "react";

import MonitoringChart from "@/components/Dashboard/MonitorChart";

const MonitoringPage: FC = () => {
  return (
    <main className="flex min-h-screen min-w-[580px] flex-1 flex-col gap-8 px-4 py-8">
      <MonitoringChart />
    </main>
  );
};

export default MonitoringPage;

"use client";

import * as React from "react";

const DashboardHeaderClock: React.FC = () => {
  const [datetime, setDatetime] = React.useState<Date | null>(null);

  React.useEffect(() => {
    // Set the initial datetime after the component has mounted (client side)
    setDatetime(new Date());

    const interval = setInterval(() => {
      setDatetime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!datetime) {
    return null; // Don't render anything during SSR
  }

  return (
    <div className="flex gap-1">
      <div className="w-20">
        {datetime
          .toLocaleTimeString("id-ID", {
            hour12: false,
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
          })
          .replace(/\./g, ":")}
      </div>
      <div>
        {datetime.toLocaleString("id-ID", {
          weekday: "long",
          day: "numeric",
          month: "short",
          year: "numeric",
        })}
      </div>
    </div>
  );
};

export default DashboardHeaderClock;

import type { FC, PropsWithChildren } from "react";

import { ControlProvider } from "@/providers/ControlProvider";
import DashboardLayout from "@/layouts/Dashboard";

const Layout: FC<PropsWithChildren> = ({ children }) => (
  <ControlProvider>
    <DashboardLayout>{children}</DashboardLayout>
  </ControlProvider>
);

export default Layout;

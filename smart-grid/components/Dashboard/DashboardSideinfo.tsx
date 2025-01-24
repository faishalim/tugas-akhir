import * as React from "react";
import { Bell } from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/shadcn/card";
import { ScrollArea } from "@/components/shadcn/scroll-area";

import DashboardSideinfoQuickaccess from "./DashboardSideinfoQuickaccess";
import DashboardSideinfoContent from "./DashboardSideinfoContent";

const DashboardSideinfo: React.FC = () => {
  return (
    <aside className="sticky top-16 hidden h-[calc(100svh-4rem)] w-full min-w-48 max-w-[304px] py-8 pr-2 lg:block">
      <ScrollArea className="mb-1 h-full w-full flex-col rounded-md pr-2">
        <Card className="min-h-72">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <Bell className="h-4 w-4" />
              <span>Notification</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="px-8">
            <DashboardSideinfoContent />
          </CardContent>
        </Card>
        <DashboardSideinfoQuickaccess />
        <div className="pt-1" />
      </ScrollArea>
    </aside>
  );
};

export default DashboardSideinfo;

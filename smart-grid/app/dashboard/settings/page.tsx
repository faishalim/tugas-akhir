import * as React from "react";
import Link from "next/link";

import { PencilLineIcon } from "lucide-react";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/components/shadcn/avatar";
import { Button } from "@/components/shadcn/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/shadcn/card";

// TODO: make this work
const SettingsPage: React.FC = () => {
  return (
    <main className="flex min-h-screen min-w-[580px] flex-1 flex-col gap-8 px-4 py-8">
      <Card className="flex h-96 w-full flex-col items-center justify-between rounded-xl">
        <CardHeader>
          <CardTitle>Profile Settings</CardTitle>
        </CardHeader>
        <CardContent>
          <Avatar className="relative size-40 overflow-visible">
            <AvatarImage src="/avatar.jpg" className="rounded-full" />
            <AvatarFallback className="bg-muted"></AvatarFallback>
            <Link href="settings/change-avatar">
              <PencilLineIcon className="absolute bottom-0 right-4 z-50 size-8 overflow-visible rounded-full bg-muted p-1.5" />
            </Link>
          </Avatar>
          <p className="text-center text-lg font-bold">Fais Halim</p>
        </CardContent>
        <CardFooter className="content-end self-end">
          <Button className="rounded-full text-lg font-semibold" asChild>
            <Link href="settings/change-password">Change Password</Link>
          </Button>
        </CardFooter>
      </Card>
    </main>
  );
};

export default SettingsPage;

import * as React from "react";
import Link from "next/link";

import { XIcon } from "lucide-react";
import { Button } from "@/components/shadcn/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/shadcn/card";
import { Input } from "@/components/shadcn/input";
import { Label } from "@/components/shadcn/label";

const ChangePasswordPage: React.FC = () => {
  return (
    <main className="flex min-h-screen min-w-[580px] flex-1 flex-col gap-8 px-4 py-8">
      <Card className="flex h-96 w-full flex-col items-center justify-between rounded-xl">
        <CardHeader className="relative w-full text-center">
          <CardTitle>Change Password</CardTitle>
          <Link href="/dashboard/settings" className="absolute right-6 top-6">
            <XIcon className="size-5" strokeWidth="4" />
          </Link>
        </CardHeader>
        <CardContent className="h-full w-full flex-1">
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-[120px,1fr] items-center gap-4">
              <Label
                htmlFor="old-password"
                className="text-base font-semibold text-primary"
              >
                Old Password
              </Label>
              <div className="flex items-center gap-3 text-base font-semibold">
                :{" "}
                <Input
                  id="repeat-password"
                  type="password"
                  required
                  className="border-primary"
                />
              </div>
            </div>
            <div className="grid grid-cols-[120px,1fr] items-center gap-4">
              <Label
                htmlFor="new-password"
                className="text-base font-semibold text-primary"
              >
                New Password
              </Label>
              <div className="flex items-center gap-3 text-base font-semibold">
                :{" "}
                <Input
                  id="repeat-password"
                  type="password"
                  required
                  className="border-primary"
                />
              </div>
            </div>
            <div className="grid grid-cols-[120px,1fr] items-center gap-4">
              <Label
                htmlFor="repeat-password"
                className="text-base font-semibold text-primary"
              >
                Repeat New PW
              </Label>
              <div className="flex items-center gap-3 text-base font-semibold">
                :{" "}
                <Input
                  id="repeat-password"
                  type="password"
                  required
                  className="border-primary"
                />
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="w-full">
          <Button className="w-full text-lg font-semibold">Submit</Button>
        </CardFooter>
      </Card>
    </main>
  );
};

export default ChangePasswordPage;

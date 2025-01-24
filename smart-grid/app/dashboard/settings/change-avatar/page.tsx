import * as React from "react";
import Link from "next/link";

import { ImageIcon, XIcon } from "lucide-react";
import { Button } from "@/components/shadcn/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/shadcn/card";

const ChangeAvatarPage: React.FC = () => {
  return (
    <main className="flex min-h-screen min-w-[580px] flex-1 flex-col gap-8 px-4 py-8">
      <Card className="flex h-96 w-full flex-col items-center justify-between rounded-xl">
        <CardHeader className="relative w-full text-center">
          <CardTitle>Profile Picture</CardTitle>
          <Link href="/dashboard/settings" className="absolute right-6 top-6">
            <XIcon className="size-5" strokeWidth="4" />
          </Link>
        </CardHeader>
        <CardContent className="flex w-full flex-1 items-center justify-center">
          <div className="flex h-48 w-80 flex-col items-center justify-center gap-2 rounded-2xl border-2 border-primary text-secondary">
            <ImageIcon className="size-24" strokeWidth="0.8" />
            <p className="text-xl font-bold">upload an image</p>
          </div>
        </CardContent>
        <CardFooter className="w-full">
          <Button className="w-full text-lg font-semibold">Submit</Button>
        </CardFooter>
      </Card>
    </main>
  );
};

export default ChangeAvatarPage;

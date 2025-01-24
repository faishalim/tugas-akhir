import Link from "next/link";

import { ChevronRightIcon } from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/shadcn/card";
import { OfficeBuildings } from "@/components/Icon";

// TODO: use data from firebase instead
import { rooms } from "@/lib/config";

const ControlPage = () => {
  return (
    <main className="flex min-h-screen min-w-[580px] flex-1 flex-col gap-8 px-4 py-8">
      <div className="gap grid w-full grid-cols-2 grid-rows-2 gap-x-12 gap-y-6">
        {rooms.map((room) => (
          <Card key={room.id} className="relative">
            <Link
              href={`management/${room.id}`}
              className="absolute h-full w-full max-sm:hidden"
            />
            <CardHeader className="px-5 py-4">
              <CardTitle>Room</CardTitle>
              <ChevronRightIcon
                className="absolute right-4 top-3 size-5"
                strokeWidth={2.5}
              />
            </CardHeader>
            <CardContent className="flex h-24 justify-around gap-4 px-5 text-xl">
              <p className="text-7xl font-bold">{room.name}</p>
              <OfficeBuildings />
            </CardContent>
          </Card>
        ))}
        <Card className="relative">
          <Link
            href={`management/main-panel`}
            className="absolute h-full w-full max-sm:hidden"
          />
          <CardContent className="flex h-[152px] items-center justify-around gap-4 px-5 py-0 text-xl">
            <ChevronRightIcon
              className="absolute right-4 top-3 size-5"
              strokeWidth={2.5}
            />
            <div>
              <p className="text-4xl font-bold">Main</p>
              <p className="text-4xl font-bold">Panel</p>
            </div>
            <OfficeBuildings />
          </CardContent>
        </Card>
        <Card className="relative">
          <Link
            href={`management/others`}
            className="absolute h-full w-full max-sm:hidden"
          />
          <CardContent className="flex h-[152px] items-center justify-around gap-4 px-5 py-0 text-xl">
            <ChevronRightIcon
              className="absolute right-4 top-3 size-5"
              strokeWidth={2.5}
            />
            <div>
              <p className="text-4xl font-bold">Others</p>
            </div>
            <OfficeBuildings />
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

export default ControlPage;

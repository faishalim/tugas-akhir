import * as React from "react";
import type { NextPage } from "next";

import ElectricalComponentsList from "@/components/Dashboard/ElectricalComponentsList";
import { formatKebabCase } from "@/lib/utils";

// TODO: searchParams and route type safety
interface Props {
  params: { room: string };
  searchParams: Record<string, string>;
}

const ManageRoomPage: NextPage<Props> = async ({ params }) => {
  return (
    <main className="flex min-h-screen min-w-[580px] flex-1 flex-col gap-4 px-4 py-8 @container">
      <h2 className="text-2xl font-bold capitalize">
        {formatKebabCase(params.room)}
      </h2>

      <div className="grid w-full grid-cols-2 gap-4 @xl:gap-8">
        <ElectricalComponentsList roomId={params.room} />
      </div>
    </main>
  );
};

export default ManageRoomPage;

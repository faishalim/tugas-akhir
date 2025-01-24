import * as React from "react";
import { notFound } from "next/navigation";
import { doc, getDoc } from "firebase/firestore";

import type { Room } from "@/types";
import { firestore } from "@/lib/firebase/database";

import ElectricalComponentCard from "./ElectricalComponentCard";
import ElectricalComponentCardSkeleton from "./ElectricalComponentCardSkeleton";

interface Props {
  roomId: string;
}

const ElectricalComponentsList: React.FC<Props> = async ({ roomId }) => {
  // Fetch the room data
  const roomSnap = await getDoc(doc(firestore, "rooms", roomId));
  if (!roomSnap.exists()) return notFound();

  // Fetch all the document from componentRefs
  const roomData = roomSnap.data() as Room;

  return roomData.componentRefs.map((compRef) => (
    <React.Suspense
      key={compRef.id}
      fallback={<ElectricalComponentCardSkeleton compId={compRef.id} />}
    >
      <ElectricalComponentCard
        key={compRef.id}
        roomId={roomId}
        docReference={compRef}
      />
    </React.Suspense>
  ));
};

export default ElectricalComponentsList;

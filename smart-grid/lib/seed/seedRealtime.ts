import { ref, set } from "firebase/database";

import { ControlledRoom } from "@/types";
import { database } from "@/lib/firebase/database";

export default async function seedRealtime() {
  const rooms = ["a", "b", "c", "d"];

  await Promise.all([
    rooms.map((room) => {
      return set(ref(database, "control/room-" + room), {
        name: `Room ${room.toUpperCase()}`,
        lamp: false,
        socket: false,
      } satisfies ControlledRoom);
    }),
    set(ref(database, "sensors"), {
      flame: 0,
      smoke: 1,
    }),
  ]);

  console.log("Realtime seed completed!");
}

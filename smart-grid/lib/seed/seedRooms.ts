import { doc, setDoc, Timestamp } from "firebase/firestore";
import { firestore } from "@/lib/firebase/database";

export default async function seedRooms() {
  const rooms = ["a", "b", "c", "d"];
  const now = Timestamp.now(); // Current timestamp

  await Promise.all([
    ...rooms.map((room) => {
      return setDoc(doc(firestore, "rooms", `room-${room}`), {
        name: room.toUpperCase(),
        componentRefs: [
          doc(firestore, "components", `lamp-${room}`),
          doc(firestore, "components", `socket-${room}`),
        ],
        dateCreated: now,
      });
    }),
    setDoc(doc(firestore, "rooms", "main-panel"), {
      name: "Others",
      componentRefs: [
        doc(firestore, "components", "mcb"),
        doc(firestore, "components", "mcb-a"),
        doc(firestore, "components", "mcb-b"),
        doc(firestore, "components", "mcb-c"),
        doc(firestore, "components", "mcb-d"),
      ],
      dateCreated: now,
    }),
    setDoc(doc(firestore, "rooms", "others"), {
      name: "Others",
      componentRefs: [
        doc(firestore, "components", "corridor-lamp"),
        doc(firestore, "components", "wire"),
      ],
      dateCreated: now,
    }),
  ]);

  console.log("Rooms seed completed!");
}

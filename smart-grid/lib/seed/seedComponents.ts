import { doc, setDoc } from "firebase/firestore";

import { firestore } from "@/lib/firebase/database";

async function seedLampsSocketsAndMcbs() {
  const ids = ["a", "b", "c", "d"];
  const lampProperties = [
    { brand: "Broco" },
    { voltage: "220 volt" },
    { power: "15 watt" },
    { lumens: "1400" },
    { warrantyExp: "12 Apr 2025" },
  ];
  const socketProperties = [
    { brand: "Broco" },
    { voltage: "220 volt" },
    { maxCurrent: "16 ampere" },
    { warrantyExp: "12 Apr 2025" },
  ];
  const mcbProperties = [
    { brand: "Schneider" },
    { type: "3p" },
    { protection: "Overload & Short Circuit" },
  ];

  await Promise.all([
    // Seed Lamp
    ...ids.map((id) => {
      return setDoc(doc(firestore, "components", `lamp-${id}`), {
        name: `Lamp ${id.toUpperCase()}`,
        type: "lamp",
        properties: lampProperties,
      });
    }),
    setDoc(doc(firestore, "components", "corridor-lamp"), {
      name: "Corridor Lamp",
      type: "lamp",
      properties: lampProperties,
    }),

    // Seed Socket
    ...ids.map((id) => {
      return setDoc(doc(firestore, "components", `socket-${id}`), {
        name: `Socket ${id.toUpperCase()}`,
        type: "socket",
        properties: socketProperties,
      });
    }),

    // Seed MCB
    setDoc(doc(firestore, "components", "mcb"), {
      name: "MCB",
      type: "mcb",
      properties: [...mcbProperties, { ratedCurrent: "20 Ampere" }],
    }),
    ...ids.map((id) => {
      return setDoc(doc(firestore, "components", `mcb-${id}`), {
        name: `MCB ${id.toUpperCase()}`,
        type: "mcb",
        properties: [...mcbProperties, { ratedCurrent: "5 Ampere" }],
      });
    }),
  ]);
}

async function seedWire() {
  await setDoc(doc(firestore, "components", "wire"), {
    name: "Wire",
    type: "wire",
    properties: [
      { brand: "Suprem" },
      { type: "NYA" },
      { area: "4 mm2" },
      { ampacity: "61 Ampere" },
    ],
  });
}

export default async function seedComponents() {
  await seedLampsSocketsAndMcbs();
  await seedWire();

  console.log("Components seed completed!");
}

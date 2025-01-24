"use client";

import dynamic from "next/dynamic";

const ARMarkerWrapper = dynamic(
  () => import("@/components/AR/ARMarkerWrapper"),
  {
    ssr: false,
  },
);

export default function Home() {
  return (
    <main>
      <ARMarkerWrapper />
    </main>
  );
}

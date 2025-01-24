import type { FC, PropsWithChildren } from "react";
import type { Metadata } from "next";

import { Toaster } from "sonner";

import "./globals.css";
import { lato } from "./fonts";

import BaseLayout from "@/layouts/Base";
import TailwindIndicator from "@/components/TailwindIndicator";

export const metadata: Metadata = {
  title: "Smart Grid",
  description: "Control and monitor buildings easy, safe and smart!",
};

const RootLayout: FC<PropsWithChildren> = async ({ children }) => (
  <html lang="en" suppressHydrationWarning>
    <body className={`${lato.className} antialiased`} suppressHydrationWarning>
      <BaseLayout>{children}</BaseLayout>
      <Toaster richColors expand />
      <TailwindIndicator />
    </body>
  </html>
);

export default RootLayout;

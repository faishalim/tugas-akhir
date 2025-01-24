import type { FC, PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

const CenteredLayout: FC<PropsWithChildren & { className?: string }> = ({
  className,
  children,
}) => (
  <div
    className={cn(
      "flex h-svh w-full min-w-0 items-center justify-center px-4 py-14 md:px-14 lg:px-28",
      className,
    )}
  >
    {children}
  </div>
);

export default CenteredLayout;
